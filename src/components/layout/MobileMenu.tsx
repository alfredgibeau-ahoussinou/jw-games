"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { PRIMARY_NAV, SECONDARY_NAV, isNavActive } from "@/lib/navigation";
import { usePwaInstall } from "@/hooks/usePwaInstall";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const { canInstall, install } = usePwaInstall();

  useEffect(() => {
    if (prevPathRef.current === pathname) return;
    prevPathRef.current = pathname;
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const allLinks = [
    ...PRIMARY_NAV,
    ...SECONDARY_NAV.filter((s) => !PRIMARY_NAV.some((p) => p.href === s.href)),
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le menu"
            className="mobile-menu-backdrop lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="mobile-menu-panel lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
            aria-label="Menu de navigation"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <p className="text-lg font-bold text-white">Menu</p>
              <button
                type="button"
                onClick={onClose}
                className="touch-target flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
              <p className="mb-2 px-3 text-[0.6875rem] font-semibold uppercase tracking-wider text-white/40">
                Navigation
              </p>
              <ul className="space-y-2">
                {allLinks.map(({ href, label, icon: Icon }) => {
                  const active = isNavActive(pathname, href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          "flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-[0.9375rem] font-medium transition-colors",
                          active
                            ? "bg-[var(--accent-light)] text-[var(--accent)]"
                            : "text-white/90 active:bg-white/10"
                        )}
                      >
                        <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {canInstall && (
                <>
                  <p className="mb-2 mt-6 px-3 text-[0.6875rem] font-semibold uppercase tracking-wider text-white/40">
                    Application
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          void install();
                          onClose();
                        }}
                        className="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[0.9375rem] font-medium text-white/90 active:bg-white/10"
                      >
                        <Download className="h-5 w-5 shrink-0 text-[var(--accent)]" strokeWidth={1.75} aria-hidden />
                        Installer l&apos;app
                      </button>
                    </li>
                  </ul>
                </>
              )}

              <p className="mb-2 mt-6 px-3 text-[0.6875rem] font-semibold uppercase tracking-wider text-white/40">
                Liens officiels
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.jw.org/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-[0.9375rem] font-medium text-white/90 active:bg-white/10"
                  >
                    jw.org ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.jw.org/fr/library/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 items-center gap-3 rounded-xl px-3 py-2.5 text-[0.9375rem] font-medium text-white/90 active:bg-white/10"
                  >
                    JW Library ↗
                  </a>
                </li>
              </ul>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

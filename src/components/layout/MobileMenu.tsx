"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, X } from "lucide-react";
import { PRIMARY_NAV, SECONDARY_NAV, isNavActive } from "@/lib/navigation";
import { usePwaInstall } from "@/hooks/usePwaInstall";
import { Logo } from "@/components/brand/Logo";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const { canInstall, install, isIos } = usePwaInstall();

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

  if (!open) return null;

  return (
    <>
      <button
        type="button"
        className="mobile-menu-backdrop"
        aria-label="Fermer le menu"
        onClick={onClose}
      />
      <aside className="mobile-menu" aria-label="Menu de navigation">
        <div className="mobile-menu__head">
          <Logo size="sm" />
          <button type="button" onClick={onClose} aria-label="Fermer">
            <X aria-hidden />
          </button>
        </div>

        <div className="mobile-menu__body">
          <p>Navigation</p>
          <ul>
            {allLinks.map(({ href, label, icon: Icon }) => {
              const active = isNavActive(pathname, href);
              return (
                <li key={href}>
                  <Link href={href} aria-current={active ? "page" : undefined}>
                    <Icon aria-hidden />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {canInstall && (
            <>
              <p>Application</p>
              <ul>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      void install();
                      onClose();
                    }}
                  >
                    <Download aria-hidden />
                    {isIos ? "Ajouter à l'écran d'accueil" : "Installer l'app"}
                  </button>
                </li>
              </ul>
            </>
          )}

          <p>Liens officiels</p>
          <ul>
            {[
              { href: "https://www.jw.org/fr/", label: "jw.org" },
              { href: "https://www.jw.org/fr/library/", label: "JW Library" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, Download } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/cn";
import { DESKTOP_NAV, isNavActive } from "@/lib/navigation";
import { useUserStore } from "@/stores/user-store";
import { usePwaInstall } from "@/hooks/usePwaInstall";

export function Header() {
  const pathname = usePathname();
  const profile = useUserStore((s) => s.profile);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const { canInstall, install } = usePwaInstall();

  return (
    <>
      <header className="site-header lg:hidden">
        <div className="site-header__bar">
          <Logo size="sm" />
          <div className="ml-auto flex items-center gap-2">
            {canInstall && (
              <button
                type="button"
                onClick={() => void install()}
                className="touch-target flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-light)] text-[var(--accent)]"
                aria-label="Installer l'application"
              >
                <Download className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
              </button>
            )}
            <button
              type="button"
              onClick={openMenu}
              className="touch-target flex h-10 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 text-sm font-semibold text-white"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              <span>Menu</span>
            </button>
            {profile ? (
              <Link
                href="/profil"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-teal-700 text-sm font-bold text-white ring-2 ring-white/10"
                aria-label={`Profil de ${profile.displayName}`}
              >
                {profile.displayName.charAt(0).toUpperCase()}
              </Link>
            ) : (
              <Link
                href="/profil"
                aria-label="Connexion"
                className="touch-target flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
              >
                <User className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </header>

      <header className="site-header hidden lg:block">
        <div className="border-b border-white/[0.04] px-4 py-1.5 text-center text-xs font-medium tracking-wide text-white/45">
          Contenu officiel{" "}
          <a
            href="https://www.jw.org/fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            jw.org
          </a>
        </div>
        <div className="site-header__bar">
          <Logo size="sm" />
          <nav className="flex flex-1 items-center justify-center gap-1" aria-label="Navigation">
            {DESKTOP_NAV.map(({ href, label }) => {
              const active = isNavActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium tracking-tight transition-colors",
                    active ? "text-white" : "text-white/50 hover:text-white/90"
                  )}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[var(--accent)]" />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            {profile ? (
              <Link
                href="/profil"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-teal-700 text-sm font-bold text-white ring-2 ring-white/10"
                aria-label={`Profil de ${profile.displayName}`}
              >
                {profile.displayName.charAt(0).toUpperCase()}
              </Link>
            ) : (
              <Link
                href="/profil"
                className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black hover:bg-white/90"
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}

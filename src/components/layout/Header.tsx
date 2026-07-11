"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, Download } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PRIMARY_NAV, isNavActive } from "@/lib/navigation";
import { useUserStore } from "@/stores/user-store";
import { usePwaInstall } from "@/hooks/usePwaInstall";

export function Header() {
  const pathname = usePathname();
  const profile = useUserStore((s) => s.profile);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const { canInstall, install, isIos } = usePwaInstall();
  const [solid, setSolid] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setSolid(!isHome || window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const profileLink = profile ? (
    <Link href="/profil" aria-label={`Profil de ${profile.displayName}`}>
      {profile.displayName.charAt(0).toUpperCase()}
    </Link>
  ) : (
    <Link href="/profil" aria-label="Créer un profil">
      <User aria-hidden />
    </Link>
  );

  return (
    <>
      <header className={solid || !isHome ? "app-header app-header--solid" : "app-header"}>
        <div className="app-header__inner container">
          <Logo size="sm" />
          <nav className="app-header__nav" aria-label="Navigation principale">
            {PRIMARY_NAV.map(({ href, label, icon: Icon }) => {
              const active = isNavActive(pathname, href);
              return (
                <Link key={href} href={href} aria-current={active ? "page" : undefined}>
                  <Icon aria-hidden />
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="app-header__actions">
            {canInstall && (
              <button
                type="button"
                className="btn btn--sm"
                onClick={() => void install()}
                aria-label={isIos ? "Ajouter à l'écran d'accueil" : "Installer l'application"}
              >
                <Download aria-hidden />
                {isIos ? "Ajouter" : "Installer"}
              </button>
            )}
            <button
              type="button"
              className="app-header__menu-btn btn btn--sm"
              onClick={openMenu}
              aria-label="Ouvrir le menu"
            >
              <Menu aria-hidden />
            </button>
            {profileLink}
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}

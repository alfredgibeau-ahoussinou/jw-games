import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  Flame,
  Film,
  Gamepad2,
  Home,
  Compass,
  User,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  shortLabel?: string;
}

/** Liens principaux — barre du bas mobile */
export const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/jeux", label: "Jeux", icon: Gamepad2 },
  { href: "/etude", label: "Étude", icon: BookMarked },
  { href: "/mediatheque", label: "Vidéos", icon: Film, shortLabel: "Vidéos" },
  { href: "/profil", label: "Profil", icon: User },
];

/** Liens secondaires — menu latéral mobile */
export const SECONDARY_NAV: NavItem[] = [
  { href: "/quotidien", label: "Défi du jour", icon: Flame },
  { href: "/decouvrir", label: "Découvrir", icon: Compass },
];

export const DESKTOP_NAV: NavItem[] = [
  ...PRIMARY_NAV.slice(0, 4),
  { href: "/quotidien", label: "Défi", icon: Flame },
  PRIMARY_NAV[4],
];

export function isNavActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

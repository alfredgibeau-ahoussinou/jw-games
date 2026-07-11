"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, isNavActive } from "@/lib/navigation";

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="app-bottom-nav" aria-label="Navigation principale">
      {PRIMARY_NAV.map(({ href, label, icon: Icon, shortLabel }) => {
        const active = isNavActive(pathname, href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
          >
            <Icon aria-hidden />
            {shortLabel ?? label}
          </Link>
        );
      })}
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";
import { OFFICIAL_SOURCES_NOTICE } from "@/lib/constants";
import { JW_ORG_LINK, JW_LIBRARY_LINK } from "@/lib/jw-images";

const FOOTER_LINKS = [
  { href: "/decouvrir", label: "Découvrir" },
  { href: "/langues", label: "Langues" },
  { href: "/quotidien", label: "Défi du jour" },
  { href: JW_ORG_LINK, label: "jw.org", external: true },
  { href: JW_LIBRARY_LINK, label: "JW Library", external: true },
] as const;

export function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__inner">
        <div className="app-footer__brand">
          <Image src="/images/logo.png" alt="JW Games" width={393} height={322} className="app-footer__logo" />
          <p>{OFFICIAL_SOURCES_NOTICE}</p>
        </div>
        <nav className="app-footer__nav" aria-label="Pied de page">
          {FOOTER_LINKS.map(({ href, label, ...rest }) =>
            "external" in rest && rest.external ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ) : (
              <Link key={href} href={href}>
                {label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}

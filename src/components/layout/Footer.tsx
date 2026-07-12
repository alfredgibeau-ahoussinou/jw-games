import Image from "next/image";
import Link from "next/link";
import { OFFICIAL_SOURCES_NOTICE } from "@/lib/constants";
import { JW_ORG_LINK, JW_LIBRARY_LINK } from "@/lib/jw-images";

const FOOTER_LINKS = [
  { href: "/quotidien", label: "Défi du jour" },
  { href: "/decouvrir", label: "Découvrir" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto hidden border-t border-[var(--border)] bg-black py-8 lg:block">
      <div className="container-app">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Image
            src="/images/logo.png"
            alt="JW Games"
            width={393}
            height={322}
            className="h-7 w-auto object-contain opacity-80"
          />
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" aria-label="Liens secondaires">
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className="text-[var(--text-muted)] hover:text-white">
                {label}
              </Link>
            ))}
            <Link
              href={JW_ORG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-white"
            >
              jw.org
            </Link>
            <Link
              href={JW_LIBRARY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-white"
            >
              JW Library
            </Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-[var(--text-dim)]">
          {OFFICIAL_SOURCES_NOTICE}
        </p>
      </div>
    </footer>
  );
}

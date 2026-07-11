"use client";

import Link from "next/link";
import { PREACH_LANGUAGES } from "@/data/languages";

export function LanguageHomeRow() {
  return (
    <div className="netflix-lang-row">
      <div className="netflix-lang-row__head">
        <Link href="/langues">Langues pour la prédication →</Link>
        <p>8 langues · phrases et mots pour le ministère</p>
      </div>
      <div className="netflix-lang-row__track">
        {PREACH_LANGUAGES.map((lang) => (
          <Link key={lang.id} href={`/langues/${lang.id}`} className="netflix-lang-chip">
            <span aria-hidden>{lang.flag}</span>
            <span>{lang.name}</span>
            <span>{lang.nativeName}</span>
            <span>{lang.phrases.length} expressions</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

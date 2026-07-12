"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import type { PhraseCategory, PreachPhrase } from "@/types/language";
import { PHRASE_CATEGORY_ICONS, PHRASE_CATEGORY_LABELS } from "@/data/languages";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { speakPhrase } from "@/lib/language-speech";

interface PhraseListProps {
  phrases: PreachPhrase[];
  knownIds: string[];
  languageName: string;
  languageId: string;
}

export function PhraseList({ phrases, knownIds, languageName, languageId }: PhraseListProps) {
  const [filter, setFilter] = useState<PhraseCategory | "all">("all");

  const filtered =
    filter === "all" ? phrases : phrases.filter((p) => p.category === filter);

  const categories = [...new Set(phrases.map((p) => p.category))] as PhraseCategory[];

  const speak = (text: string) => speakPhrase(languageId, text);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            filter === "all"
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--surface-subtle)] text-[var(--text-muted)] hover:text-[var(--text)]"
          )}
        >
          Tout ({phrases.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              filter === cat
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--surface-subtle)] text-[var(--text-muted)] hover:text-[var(--text)]"
            )}
          >
            {PHRASE_CATEGORY_ICONS[cat]} {PHRASE_CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <ul className="space-y-3">
        {filtered.map((phrase) => {
          const known = knownIds.includes(phrase.id);
          return (
            <li key={phrase.id}>
              <Card className={known ? "border-[var(--success-border)]/40" : undefined}>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-caption rounded-full bg-[var(--surface-subtle)] px-2 py-0.5">
                    {PHRASE_CATEGORY_ICONS[phrase.category]}{" "}
                    {PHRASE_CATEGORY_LABELS[phrase.category]}
                  </span>
                  {known && (
                    <span className="rounded-full bg-[var(--success-bg)] px-2 py-0.5 text-xs font-medium text-[var(--success-text)]">
                      ✓ Maîtrisée
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-muted)]">{phrase.french}</p>
                <p className="mt-1 text-base font-semibold">{phrase.target}</p>
                {phrase.pronunciation && (
                  <p className="mt-1 text-sm italic text-[var(--text-muted)]">
                    {phrase.pronunciation}
                  </p>
                )}
                {phrase.tip && (
                  <p className="mt-2 text-xs text-[var(--text-dim)]">💡 {phrase.tip}</p>
                )}
                <button
                  type="button"
                  onClick={() => speak(phrase.target)}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  <Volume2 className="h-4 w-4" />
                  Écouter
                </button>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import type { PhraseCategory, PreachPhrase } from "@/types/language";
import { PHRASE_CATEGORY_ICONS, PHRASE_CATEGORY_LABELS } from "@/data/languages";
import { Card } from "@/components/ui/Card";
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
    <div>
      <div>
        <button
          type="button"
          onClick={() => setFilter("all")}
        >
          Tout ({phrases.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
          >
            {PHRASE_CATEGORY_ICONS[cat]} {PHRASE_CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <ul>
        {filtered.map((phrase) => {
          const known = knownIds.includes(phrase.id);
          return (
            <li key={phrase.id}>
              <Card
              >
                <div>
                  <span>
                    {PHRASE_CATEGORY_ICONS[phrase.category]}{" "}
                    {PHRASE_CATEGORY_LABELS[phrase.category]}
                  </span>
                  {known && (
                    <span>
                      ✓ Maîtrisée
                    </span>
                  )}
                </div>
                <p>{phrase.french}</p>
                <p>
                  {phrase.target}
                </p>
                {phrase.pronunciation && (
                  <p>
                    {phrase.pronunciation}
                  </p>
                )}
                {phrase.tip && (
                  <p>💡 {phrase.tip}</p>
                )}
                <button
                  type="button"
                  onClick={() => speak(phrase.target)}
                >
                  <Volume2 />
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

"use client";

import { useState } from "react";

import { ArrowUpRight } from "lucide-react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { QuizGame } from "@/components/game/QuizGame";
import { getQuizByCategory, getQuizCount, shuffleQuiz } from "@/data/sample-quiz";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { THEME_VISUALS } from "@/lib/game-visuals";
import { useUserStore } from "@/stores/user-store";
import type { ContentCategory } from "@/types/content";

const THEMES: { id: ContentCategory; label: string }[] = [
  { id: "personnages", label: "Personnages" },
  { id: "evenements", label: "Événements" },
  { id: "versets", label: "Versets" },
  { id: "enseignements", label: "Enseignements" },
  { id: "paraboles", label: "Paraboles" },
  { id: "prophéties", label: "Prophéties" },
  { id: "livres", label: "Livres" },
  { id: "geographie", label: "Géographie" },
];

type Phase = "menu" | "playing" | "results";

export default function ThematiquePage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [theme, setTheme] = useState<ContentCategory | null>(null);
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const questions = theme ? shuffleQuiz(getQuizByCategory(theme)) : [];

  function handleComplete(score: number, total: number, meta?: { bestStreak: number }) {
    setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
    setPhase("results");
    recordGame("thematique", score, total, calcXp("thematique", score, total));
  }

  return (
    <GameShell
      title="Questionnaires thématiques"
      description={`Explorez ${getQuizCount()} questions classées par thème biblique.`}
    >
      {phase === "menu" && (
        <div>
          {THEMES.map((t, i) => {
            const count = getQuizByCategory(t.id).length;
            const visual = THEME_VISUALS[t.id];
            const Icon = visual.icon;
            const disabled = count === 0;

            return (
              <button
                key={t.id}
                type="button"
                disabled={disabled}
                onClick={() => !disabled && (setTheme(t.id), setPhase("playing"))}
              >
                <div
                />
                <div
                >
                  <Icon strokeWidth={1.75} aria-hidden />
                </div>
                <h3>{t.label}</h3>
                <p>
                  {count > 0 ? `${count} questions` : "Bientôt disponible"}
                </p>
                {count > 0 && (
                  <ArrowUpRight
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      {phase === "playing" && questions.length > 0 && (
        <QuizGame questions={questions} onComplete={handleComplete} />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("thematique", results.score, results.total)}
          accuracyLabel={getAccuracyLabel(results.score, results.total)}
          bestStreak={results.bestStreak}
          newBadges={lastEarnedBadges}
          onReplay={() => {
            clearLastBadges();
            setPhase("menu");
          }}
        />
      )}
    </GameShell>
  );
}

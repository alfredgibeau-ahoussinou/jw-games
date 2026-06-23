"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { QuizGame } from "@/components/game/QuizGame";
import { getQuizByCategory, getQuizCount, shuffleQuiz } from "@/data/sample-quiz";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { THEME_VISUALS } from "@/lib/game-visuals";
import { useUserStore } from "@/stores/user-store";
import { cn } from "@/lib/cn";
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {THEMES.map((t, i) => {
            const count = getQuizByCategory(t.id).length;
            const visual = THEME_VISUALS[t.id];
            const Icon = visual.icon;
            const disabled = count === 0;

            return (
              <motion.button
                key={t.id}
                type="button"
                disabled={disabled}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => !disabled && (setTheme(t.id), setPhase("playing"))}
                className={cn(
                  "group relative flex h-[148px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 text-left transition-all",
                  disabled
                    ? "cursor-not-allowed opacity-40"
                    : "hover:-translate-y-0.5 hover:border-white/12 hover:shadow-xl"
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-opacity group-hover:opacity-35",
                    visual.gradient
                  )}
                />
                <div
                  className={cn(
                    "mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
                    visual.gradient
                  )}
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-semibold tracking-tight text-[var(--text)]">{t.label}</h3>
                <p className="mt-2 text-[0.8125rem] text-[var(--text-muted)]">
                  {count > 0 ? `${count} questions` : "Bientôt disponible"}
                </p>
                {count > 0 && (
                  <ArrowUpRight
                    className="absolute bottom-4 right-4 h-4 w-4 text-[var(--text-dim)] transition-all group-hover:text-[var(--accent)]"
                    aria-hidden
                  />
                )}
              </motion.button>
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

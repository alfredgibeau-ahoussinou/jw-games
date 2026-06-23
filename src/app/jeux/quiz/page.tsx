"use client";

import { useState } from "react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { QuizGame } from "@/components/game/QuizGame";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { SAMPLE_QUIZ, getQuizByDifficulty, getQuizCount } from "@/data/sample-quiz";
import { DIFFICULTY_LABELS } from "@/lib/constants";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";
import type { DifficultyLevel } from "@/types/content";

type Phase = "menu" | "playing" | "results";

export default function QuizPage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [difficulty, setDifficulty] = useState<DifficultyLevel | undefined>();
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const trackDailyProgress = useUserStore((s) => s.trackDailyProgress);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const questions = difficulty ? getQuizByDifficulty(difficulty) : SAMPLE_QUIZ;

  function handleComplete(score: number, total: number, meta?: { bestStreak: number }) {
    setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
    setPhase("results");
    recordGame("quiz", score, total, calcXp("quiz", score, total));
    trackDailyProgress("quiz", score);
  }

  function handleReplay() {
    clearLastBadges();
    setPhase("menu");
  }

  return (
    <GameShell
      title="Quiz biblique"
      description="Testez vos connaissances avec des questions à choix multiples. Chaque réponse inclut une explication et sa source officielle."
      emoji="📖"
    >
      {phase === "menu" && (
        <div className="space-y-6">
          <GameStartMenu
            emoji="📖"
            title="Testez vos connaissances"
            description="Questions à choix multiples avec explications et sources bibliques officielles."
            stats={[{ label: "Questions", value: getQuizCount() }]}
            tips={[
              "Touches 1–4 ou A–D pour répondre rapidement",
              "Chaque réponse affiche une explication détaillée",
              "Enchaînez les bonnes réponses pour un combo",
            ]}
            onStart={() => {}}
            showStartButton={false}
            className="max-w-none"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["facile", "moyen", "difficile", "expert"] as DifficultyLevel[]).map((d) => {
              const count = getQuizByDifficulty(d).length;
              return (
                <Card
                  key={d}
                  hover
                  interactive
                  className={count === 0 ? "opacity-40 pointer-events-none" : ""}
                  onClick={() => count > 0 && (setDifficulty(d), setPhase("playing"))}
                >
                  <Badge variant={count > 0 ? "neon" : "warning"} className="mb-3">
                    {DIFFICULTY_LABELS[d]}
                  </Badge>
                  <p className="text-2xl font-bold text-[var(--text)]">{count}</p>
                  <p className="text-sm text-[var(--text-muted)]">questions</p>
                </Card>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              setDifficulty(undefined);
              setPhase("playing");
            }}
          >
            Mode mixte — {getQuizCount()} questions
          </Button>
        </div>
      )}

      {phase === "playing" && (
        <QuizGame questions={questions} onComplete={handleComplete} />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("quiz", results.score, results.total)}
          accuracyLabel={getAccuracyLabel(results.score, results.total)}
          bestStreak={results.bestStreak}
          newBadges={lastEarnedBadges}
          onReplay={handleReplay}
        />
      )}
    </GameShell>
  );
}

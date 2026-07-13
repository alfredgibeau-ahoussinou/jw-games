"use client";

import { useMemo, useState } from "react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { QuizGame } from "@/components/game/QuizGame";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { SAMPLE_QUIZ, getQuizByDifficulty, getQuizCount } from "@/data/sample-quiz";
import { DIFFICULTY_LABELS } from "@/lib/constants";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import {
  defaultDifficultyForBibleLevel,
  filterQuestionsByDifficulties,
  getRecommendedQuizDifficulties,
} from "@/lib/quiz-personalization";
import { DEFAULT_PREFERENCES } from "@/lib/user-preferences";
import { useUserStore } from "@/stores/user-store";
import type { DifficultyLevel } from "@/types/content";

type Phase = "menu" | "playing" | "results";

const ALL_DIFFICULTIES: DifficultyLevel[] = ["facile", "moyen", "difficile", "expert"];

export default function QuizPage() {
  const preferences = useUserStore((s) => s.profile?.preferences) ?? DEFAULT_PREFERENCES;
  const recommended = useMemo(
    () => getRecommendedQuizDifficulties(preferences.bibleLevel),
    [preferences.bibleLevel]
  );
  const defaultDifficulty = defaultDifficultyForBibleLevel(preferences.bibleLevel);

  const [phase, setPhase] = useState<Phase>("menu");
  const [difficulty, setDifficulty] = useState<DifficultyLevel | undefined>();
  const [mixedMode, setMixedMode] = useState(false);
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const trackDailyProgress = useUserStore((s) => s.trackDailyProgress);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const questions = useMemo(() => {
    if (mixedMode) {
      return filterQuestionsByDifficulties(SAMPLE_QUIZ, recommended);
    }
    if (difficulty) {
      return getQuizByDifficulty(difficulty);
    }
    return SAMPLE_QUIZ;
  }, [mixedMode, difficulty, recommended]);

  const mixedCount = filterQuestionsByDifficulties(SAMPLE_QUIZ, recommended).length;

  function handleComplete(score: number, total: number, meta?: { bestStreak: number }) {
    setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
    setPhase("results");
    recordGame("quiz", score, total, calcXp("quiz", score, total));
    trackDailyProgress("quiz", score);
  }

  function handleReplay() {
    clearLastBadges();
    setMixedMode(false);
    setDifficulty(undefined);
    setPhase("menu");
  }

  return (
    <GameShell
      title="Quiz biblique"
      description="Testez vos connaissances avec des questions à choix multiples. Chaque réponse inclut une explication et sa source officielle."
      emoji="📖"
    >
      {phase === "menu" && (
        <div className="mx-auto max-w-2xl space-y-6">
          <GameStartMenu
            emoji="📖"
            title="Testez vos connaissances"
            description="Questions à choix multiples avec explications et sources bibliques officielles."
            stats={[{ label: "Questions", value: mixedCount }]}
            tips={[
              "Touches 1–4 ou A–D pour répondre rapidement",
              "Chaque réponse affiche une explication détaillée",
              "Enchaînez les bonnes réponses pour un combo",
            ]}
            onStart={() => {}}
            showStartButton={false}
          />
          <p className="text-body text-center">
            Niveau adapté à votre profil — recommandé : {DIFFICULTY_LABELS[defaultDifficulty]}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_DIFFICULTIES.map((d) => {
              const count = getQuizByDifficulty(d).length;
              const isRecommended = recommended.includes(d);
              if (!isRecommended) return null;
              return (
                <Card
                  key={d}
                  hover
                  interactive
                  onClick={() => count > 0 && (setMixedMode(false), setDifficulty(d), setPhase("playing"))}
                >
                  <Badge variant={count > 0 ? "neon" : "warning"}>
                    {DIFFICULTY_LABELS[d]}
                    {d === defaultDifficulty ? " · recommandé" : ""}
                  </Badge>
                  <p className="mt-3 text-2xl font-bold tabular-nums text-[var(--accent)]">{count}</p>
                  <p className="text-caption">questions</p>
                </Card>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => {
              setMixedMode(true);
              setDifficulty(undefined);
              setPhase("playing");
            }}
          >
            Mode mixte — {mixedCount} questions
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

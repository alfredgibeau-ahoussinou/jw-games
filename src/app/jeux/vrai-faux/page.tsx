"use client";

import { useMemo, useState } from "react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { TrueFalseGame } from "@/components/game/TrueFalseGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { shuffleTrueFalse, TRUE_FALSE_QUESTIONS } from "@/data/sample-truefalse";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import {
  filterQuestionsByDifficulties,
  getRecommendedQuizDifficulties,
} from "@/lib/quiz-personalization";
import { DEFAULT_PREFERENCES } from "@/lib/user-preferences";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "playing" | "results";

const ROUND_OPTIONS = [8, 10, 15] as const;

export default function VraiFauxPage() {
  const preferences = useUserStore((s) => s.profile?.preferences) ?? DEFAULT_PREFERENCES;
  const pool = useMemo(
    () =>
      filterQuestionsByDifficulties(
        TRUE_FALSE_QUESTIONS,
        getRecommendedQuizDifficulties(preferences.bibleLevel)
      ),
    [preferences.bibleLevel]
  );

  const [phase, setPhase] = useState<Phase>("menu");
  const [roundSize, setRoundSize] = useState<number>(10);
  const [gameKey, setGameKey] = useState(0);
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const trackDailyProgress = useUserStore((s) => s.trackDailyProgress);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const questions = useMemo(
    () => shuffleTrueFalse(Math.min(roundSize, pool.length), pool),
    [roundSize, gameKey, pool]
  );

  function handleComplete(score: number, total: number, meta?: { bestStreak: number }) {
    setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
    setPhase("results");
    recordGame("vraifaux", score, total, calcXp("vraifaux", score, total));
    trackDailyProgress("vraifaux", 1);
  }

  function startGame() {
    setGameKey((k) => k + 1);
    setPhase("playing");
  }

  return (
    <GameShell
      title="Vrai ou Faux"
      description="Affirmations bibliques — répondez vite et enchaînez les combos !"
      emoji="✅"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="⚖️"
          title="Prêt à juger ?"
          description="Lisez chaque affirmation et décidez si elle est vraie ou fausse. Utilisez les touches ou glissez sur mobile."
          stats={[
            { label: "Affirmations", value: pool.length },
            { label: "Par manche", value: roundSize },
          ]}
          tips={[
            "Flèche gauche ou F = Faux",
            "Flèche droite ou V = Vrai",
            "2 bonnes réponses d'affilée = combo",
          ]}
          onStart={startGame}
        >
          <div>
            <p>Nombre de questions</p>
            <div>
              {ROUND_OPTIONS.map((n) => (
                <Button
                  key={n}
                  size="sm"
                  variant={roundSize === n ? "primary" : "outline"}
                  onClick={() => setRoundSize(n)}
                >
                  {n}
                </Button>
              ))}
            </div>
          </div>
        </GameStartMenu>
      )}

      {phase === "playing" && (
        <TrueFalseGame key={gameKey} questions={questions} onComplete={handleComplete} />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("vraifaux", results.score, results.total)}
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

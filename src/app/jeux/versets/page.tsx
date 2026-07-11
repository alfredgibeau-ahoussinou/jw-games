"use client";

import { useMemo, useState } from "react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { VerseGapGame } from "@/components/game/VerseGapGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { shuffleVerses, VERSE_GAP_QUESTIONS } from "@/data/sample-verses";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "playing" | "results";

const ROUND_OPTIONS = [6, 8, 10] as const;

export default function VersetsPage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [roundSize, setRoundSize] = useState<number>(8);
  const [key, setKey] = useState(0);
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const questions = useMemo(() => shuffleVerses(roundSize), [roundSize, key]);

  function handleComplete(score: number, total: number, meta?: { bestStreak: number }) {
    setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
    setPhase("results");
    recordGame("versets", score, total, calcXp("versets", score, total));
  }

  function startGame() {
    setKey((k) => k + 1);
    setPhase("playing");
  }

  return (
    <GameShell
      title="Versets à trous"
      description="Complétez les versets de la Traduction du monde nouveau."
      emoji="✍️"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="📖"
          title="Complétez les versets"
          description="Choisissez le mot manquant dans des versets bibliques. Le verset complet s'affiche après chaque réponse."
          stats={[
            { label: "Versets", value: VERSE_GAP_QUESTIONS.length },
            { label: "Par manche", value: roundSize },
          ]}
          tips={[
            "Lisez le contexte du verset avant de choisir",
            "Les combos récompensent les bonnes séries",
            "Chaque réponse cite sa référence biblique",
          ]}
          onStart={startGame}
        >
          <div>
            <p>Versets par manche</p>
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
        <VerseGapGame key={key} questions={questions} onComplete={handleComplete} />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("versets", results.score, results.total)}
          label="versets complétés"
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

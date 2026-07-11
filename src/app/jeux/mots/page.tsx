"use client";

import { useMemo, useState } from "react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { WordScrambleGame } from "@/components/game/WordScrambleGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { shuffleWords, WORD_SCRAMBLE_ITEMS } from "@/data/sample-words";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "playing" | "results";

const ROUND_OPTIONS = [6, 8, 10] as const;

export default function MotsPage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [roundSize, setRoundSize] = useState<number>(8);
  const [key, setKey] = useState(0);
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const items = useMemo(() => shuffleWords(roundSize), [roundSize, key]);

  function handleComplete(score: number, total: number, meta?: { bestStreak: number }) {
    setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
    setPhase("results");
    recordGame("mots", score, total, calcXp("mots", score, total));
  }

  function startGame() {
    setKey((k) => k + 1);
    setPhase("playing");
  }

  return (
    <GameShell
      title="Mots mélangés"
      description="Retrouvez les mots bibliques en recomposant les lettres."
      emoji="🔤"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="🔤"
          title="Recomposez les mots"
          description="Utilisez les lettres mélangées pour retrouver un mot biblique. Un indice et un mélange sont disponibles à chaque mot."
          stats={[
            { label: "Mots disponibles", value: WORD_SCRAMBLE_ITEMS.length },
            { label: "Par manche", value: roundSize },
          ]}
          tips={[
            "L'indice révèle la prochaine lettre (1× par mot)",
            "Mélanger réorganise les lettres restantes",
            "Enchaînez les bonnes réponses pour un combo",
          ]}
          onStart={startGame}
        >
          <div>
            <p>Mots par manche</p>
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
        <WordScrambleGame key={key} items={items} onComplete={handleComplete} />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("mots", results.score, results.total)}
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

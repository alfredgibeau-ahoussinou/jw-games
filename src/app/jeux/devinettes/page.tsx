"use client";

import { useState } from "react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { QuizGame } from "@/components/game/QuizGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { getRiddles } from "@/data/sample-riddles";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "playing" | "results";

export default function DevinettesPage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [gameKey, setGameKey] = useState(0);
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);
  const riddles = getRiddles();

  return (
    <GameShell
      title="Devinettes bibliques"
      description="Des énigmes sur les personnages, les événements et les versets de la Bible."
      emoji="💡"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="🤔"
          title="Résolvez les énigmes"
          description="Chaque devinette est une question à choix multiples avec explication et source biblique."
          stats={[{ label: "Devinettes", value: riddles.length }]}
          tips={[
            "Lisez bien l'énoncé — il contient souvent un indice",
            "Les explications enrichissent votre connaissance",
            "Enchaînez les bonnes réponses pour gagner plus d'XP",
          ]}
          onStart={() => {
            setGameKey((k) => k + 1);
            setPhase("playing");
          }}
        />
      )}

      {phase === "playing" && (
        <QuizGame
          key={gameKey}
          questions={riddles}
          onComplete={(score, total, meta) => {
            setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
            setPhase("results");
            recordGame("devinettes", score, total, calcXp("devinettes", score, total));
          }}
        />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("devinettes", results.score, results.total)}
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

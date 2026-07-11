"use client";

import { useMemo, useState } from "react";
import { Zap, Timer } from "lucide-react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { SpeedGame } from "@/components/game/SpeedGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SAMPLE_SPEED, getSpeedSets } from "@/data/sample-games";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { getRecommendedSpeedSetIds } from "@/lib/quiz-personalization";
import { DEFAULT_PREFERENCES } from "@/lib/user-preferences";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "pick" | "playing" | "results";

export default function RapiditePage() {
  const preferences = useUserStore((s) => s.profile?.preferences) ?? DEFAULT_PREFERENCES;
  const [phase, setPhase] = useState<Phase>("menu");
  const [results, setResults] = useState({ score: 0, total: 0, bestStreak: 0 });
  const [challenges, setChallenges] = useState(SAMPLE_SPEED);
  const recordGame = useUserStore((s) => s.recordGame);
  const trackDailyProgress = useUserStore((s) => s.trackDailyProgress);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const sets = useMemo(() => {
    const allowed = new Set(getRecommendedSpeedSetIds(preferences.bibleLevel));
    return getSpeedSets().filter((s) => allowed.has(s.id));
  }, [preferences.bibleLevel]);

  function handleComplete(score: number, total: number, meta?: { bestStreak: number }) {
    setResults({ score, total, bestStreak: meta?.bestStreak ?? 0 });
    setPhase("results");
    recordGame("rapidite", score, total, calcXp("rapidite", score, total));
    if (score >= 1) trackDailyProgress("speed", score);
  }

  return (
    <GameShell
      title="Rapidité"
      description="Répondez avant la fin du chrono ! Chaque seconde compte."
      emoji="⚡"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="⚡"
          title="Contre la montre"
          description="Choisissez un pack de défis puis répondez le plus vite possible. Bonus pour les réponses rapides et combos pour les séries."
          stats={[
            { label: "Packs", value: sets.length },
            { label: "Défis max", value: Math.max(...sets.map((s) => s.challenges.length), 0) },
          ]}
          tips={[
            "Passer une question coûte une pénalité de combo",
            "Plus vous répondez vite, plus le bonus est élevé",
            "Entraînez-vous d'abord sur le pack « Classique »",
          ]}
          onStart={() => setPhase("pick")}
          startLabel="Choisir un pack"
        />
      )}

      {phase === "pick" && (
        <div>
          <p>Sélectionnez votre niveau</p>
          <div>
            {sets.map((set) => (
              <Card
                key={set.id}
                hover
                interactive
                onClick={() => {
                  setChallenges(set.challenges);
                  setPhase("playing");
                }}
              >
                <div>
                  <Zap aria-hidden />
                  <h3>{set.name}</h3>
                </div>
                <p>
                  <Timer aria-hidden />
                  {set.challenges.length} défis · max{" "}
                  {Math.max(...set.challenges.map((c) => c.timeLimitSeconds))}s
                </p>
                <Button size="sm">
                  Lancer
                </Button>
              </Card>
            ))}
          </div>
          <Button variant="outline" onClick={() => setPhase("menu")}>
            Retour
          </Button>
        </div>
      )}

      {phase === "playing" && (
        <SpeedGame challenges={challenges} onComplete={handleComplete} />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("rapidite", results.score, results.total)}
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

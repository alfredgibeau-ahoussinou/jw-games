"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { TimelineGame } from "@/components/game/TimelineGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getTimelineSets } from "@/data/sample-timeline";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "pick" | "playing" | "results";

export default function OrdrePage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [setId, setSetId] = useState(getTimelineSets()[0].id);
  const [results, setResults] = useState({ score: 0, total: 0 });
  const sets = getTimelineSets();
  const current = sets.find((s) => s.id === setId)!;
  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  function handleComplete(score: number, total: number) {
    setResults({ score, total });
    setPhase("results");
    recordGame("ordre", score, total, calcXp("ordre", score, total));
  }

  return (
    <GameShell
      title="Ordre chronologique"
      description="Remettez les événements bibliques dans le bon ordre."
      emoji="📅"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="📅"
          title="Chronologie biblique"
          description="Glissez ou utilisez les flèches pour classer les événements du plus ancien au plus récent."
          stats={[{ label: "Séries", value: sets.length }]}
          tips={[
            "Un indice est disponible une fois par série",
            "L'ordre correct s'affiche après validation",
            "Visez 3 étoiles pour un score parfait",
          ]}
          onStart={() => setPhase("pick")}
          startLabel="Choisir une série"
        />
      )}

      {phase === "pick" && (
        <div className="mx-auto max-w-lg space-y-6">
          <h2 className="text-heading text-center">Quelle chronologie voulez-vous tester ?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {sets.map((s) => (
              <Card
                key={s.id}
                hover
                interactive
                onClick={() => {
                  setSetId(s.id);
                  setPhase("playing");
                }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
                  <p className="font-semibold tracking-tight">{s.title}</p>
                </div>
                <p className="text-caption">{s.events.length} événements</p>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full" onClick={() => setPhase("menu")}>
            Retour
          </Button>
        </div>
      )}

      {phase === "playing" && <TimelineGame set={current} onComplete={handleComplete} />}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("ordre", results.score, results.total)}
          label="événements corrects"
          accuracyLabel={getAccuracyLabel(results.score, results.total)}
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

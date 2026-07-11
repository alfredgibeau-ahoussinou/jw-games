"use client";

import { useState, useRef } from "react";
import { Brain } from "lucide-react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { MemoryGame } from "@/components/game/MemoryGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SAMPLE_MEMORY, getMemorySets } from "@/data/sample-games";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "pick" | "playing" | "results";

export default function MemoirePage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [moves, setMoves] = useState(0);
  const [setId, setSetId] = useState("default");
  const completedRef = useRef(false);
  const recordGame = useUserStore((s) => s.recordGame);
  const trackDailyProgress = useUserStore((s) => s.trackDailyProgress);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  const sets = getMemorySets();
  const pairs = sets.find((s) => s.id === setId)?.pairs ?? SAMPLE_MEMORY;

  function handleComplete(movesCount: number) {
    if (completedRef.current) return;
    completedRef.current = true;
    setMoves(movesCount);
    setPhase("results");
    const xp = calcXp("memoire", pairs.length, pairs.length, { moves: movesCount });
    recordGame("memoire", pairs.length, pairs.length, xp, { moves: movesCount });
    trackDailyProgress("memory", 1);
  }

  function startGame(id: string) {
    completedRef.current = false;
    setSetId(id);
    setPhase("playing");
  }

  return (
    <GameShell
      title="Mémoire biblique"
      description="Retournez les cartes et associez versets, personnages et événements. Moins de coups = plus d'XP !"
      emoji="🧠"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="🧠"
          title="Entraînez votre mémoire"
          description="Observez brièvement toutes les cartes, puis retrouvez les paires. Chaque thème propose un nombre différent de paires."
          stats={[
            { label: "Thèmes", value: sets.length },
            { label: "Paires max", value: Math.max(...sets.map((s) => s.pairs.length)) },
          ]}
          tips={[
            "3 secondes de prévisualisation au début de chaque partie",
            "Moins de coups = meilleure note et plus d'XP",
            "Commencez par le thème « Classique » si vous débutez",
          ]}
          onStart={() => setPhase("pick")}
          startLabel="Choisir un thème"
        />
      )}

      {phase === "pick" && (
        <div>
          <p>Sélectionnez un jeu de paires</p>
          <div>
            {sets.map((set) => (
              <Card key={set.id} hover interactive onClick={() => startGame(set.id)}>
                <div>
                  <Brain aria-hidden />
                  <h3>{set.name}</h3>
                </div>
                <p>{set.pairs.length} paires</p>
                <Button size="sm">
                  Jouer
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
        <MemoryGame key={setId} pairs={pairs} onComplete={handleComplete} />
      )}

      {phase === "results" && (
        <GameResults
          score={pairs.length}
          total={pairs.length}
          xpEarned={calcXp("memoire", pairs.length, pairs.length, { moves })}
          label="paires trouvées"
          sublabel={`En ${moves} coups`}
          accuracyLabel={moves <= pairs.length + 2 ? "Mémoire exceptionnelle !" : getAccuracyLabel(pairs.length, pairs.length)}
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

"use client";

import { useState } from "react";
import { BookMarked } from "lucide-react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { TimelineGame } from "@/components/game/TimelineGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BIBLE_BOOK_SETS } from "@/data/sample-biblio";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "pick" | "playing" | "results";

export default function BiblioPage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [setIndex, setSetIndex] = useState(0);
  const [results, setResults] = useState({ score: 0, total: 0 });
  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);
  const currentSet = BIBLE_BOOK_SETS[setIndex];

  return (
    <GameShell
      title="Livres de la Bible"
      description="Remettez les livres bibliques dans le bon ordre canonique."
      emoji="📚"
    >
      {phase === "menu" && (
        <GameStartMenu
          emoji="📚"
          title="Ordre des livres"
          description="Classez les livres de la Bible dans l'ordre canonique — Ancien Testament, Nouveau Testament ou les deux."
          stats={[{ label: "Sections", value: BIBLE_BOOK_SETS.length }]}
          tips={[
            "Mémorisez les groupes : Pentateuque, Historiques, Poétiques…",
            "Un indice disponible par section",
            "Parfait pour préparer une présentation biblique",
          ]}
          onStart={() => setPhase("pick")}
          startLabel="Choisir une section"
        />
      )}

      {phase === "pick" && (
        <div className="mx-auto max-w-lg space-y-6">
          <h2 className="text-heading text-center">Quelle partie de la Bible ?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {BIBLE_BOOK_SETS.map((set, i) => (
              <Card
                key={set.id}
                hover
                interactive
                onClick={() => {
                  setSetIndex(i);
                  setPhase("playing");
                }}
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-light)]">
                  <BookMarked className="h-5 w-5 text-[var(--accent)]" aria-hidden />
                </div>
                <p className="font-semibold tracking-tight">{set.title}</p>
                <p className="text-caption mt-1">{set.events.length} livres</p>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="w-full" onClick={() => setPhase("menu")}>
            Retour
          </Button>
        </div>
      )}

      {phase === "playing" && currentSet && (
        <TimelineGame
          key={currentSet.id}
          set={currentSet}
          onComplete={(score, total) => {
            setResults({ score, total });
            setPhase("results");
            recordGame("biblio", score, total, calcXp("biblio", score, total));
          }}
        />
      )}

      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("biblio", results.score, results.total)}
          accuracyLabel={getAccuracyLabel(results.score, results.total)}
          label="livres bien placés"
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

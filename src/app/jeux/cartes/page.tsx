"use client";

import { useState } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { FlashcardGame } from "@/components/game/FlashcardGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { getFlashcardDecks } from "@/data/sample-flashcards";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { useUserStore } from "@/stores/user-store";

type Phase = "menu" | "pick" | "playing" | "results";

const DECK_GRADIENTS = [
  "from-violet-500/80 to-purple-700/80",
  "from-amber-500/80 to-orange-600/80",
  "from-teal-500/80 to-cyan-600/80",
];

export default function CartesPage() {
  const [phase, setPhase] = useState<Phase>("menu");
  const [deckId, setDeckId] = useState(getFlashcardDecks()[0].id);
  const [results, setResults] = useState({ score: 0, total: 0 });
  const decks = getFlashcardDecks();
  const deck = decks.find((d) => d.id === deckId)!;
  const recordGame = useUserStore((s) => s.recordGame);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);

  function handleComplete(known: number, total: number) {
    setResults({ score: known, total });
    setPhase("results");
    recordGame("cartes", known, total, calcXp("cartes", known, total));
  }

  return (
    <GameShell title="Cartes mémoire" description="Révisez la Bible en flashcards interactives." emoji="🃏">
      {phase === "menu" && (
        <GameStartMenu
          emoji="🃏"
          title="Révision par flashcards"
          description="Retournez chaque carte, indiquez si vous la connaissiez, et consultez le récapitulatif en fin de session."
          stats={[{ label: "Paquets", value: decks.length }]}
          tips={[
            "Touches ← et → ou Espace pour naviguer",
            "Soyez honnête — seules les cartes « connues » comptent",
            "Révisez un paquet par jour pour ancrer les connaissances",
          ]}
          onStart={() => setPhase("pick")}
          startLabel="Choisir un paquet"
        />
      )}

      {phase === "pick" && (
        <div>
          <p>Sélectionnez un paquet de cartes</p>
          <div>
          {decks.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => {
                setDeckId(d.id);
                setPhase("playing");
              }}
            >
              <div
              />
              <div
              >
                <Layers strokeWidth={1.75} aria-hidden />
              </div>
              <p>{d.name}</p>
              <p>{d.cards.length} cartes</p>
              <ArrowUpRight
                aria-hidden
              />
            </button>
          ))}
          </div>
          <Button variant="outline" onClick={() => setPhase("menu")}>
            Retour
          </Button>
        </div>
      )}
      {phase === "playing" && <FlashcardGame cards={deck.cards} onComplete={handleComplete} />}
      {phase === "results" && (
        <GameResults
          score={results.score}
          total={results.total}
          xpEarned={calcXp("cartes", results.score, results.total)}
          label="cartes maîtrisées"
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

"use client";

import { useState } from "react";
import { ArrowUpRight, Layers } from "lucide-react";
import { GameShell, GameResults } from "@/components/layout/GameShell";
import { FlashcardGame } from "@/components/game/FlashcardGame";
import { GameStartMenu } from "@/components/game/shared/GameStartMenu";
import { Button } from "@/components/ui/Button";
import { getFlashcardDecks } from "@/data/sample-flashcards";
import { calcXp, getAccuracyLabel } from "@/lib/daily-challenges";
import { cn } from "@/lib/cn";
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
        <div className="mx-auto max-w-lg space-y-6">
          <h2 className="text-heading text-center">Sélectionnez un paquet de cartes</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {decks.map((d, i) => (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setDeckId(d.id);
                  setPhase("playing");
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-white/12 hover:shadow-xl"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-25 blur-3xl transition-opacity group-hover:opacity-40",
                    DECK_GRADIENTS[i % DECK_GRADIENTS.length]
                  )}
                />
                <div
                  className={cn(
                    "relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
                    DECK_GRADIENTS[i % DECK_GRADIENTS.length]
                  )}
                >
                  <Layers className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="relative font-semibold tracking-tight">{d.name}</p>
                <p className="text-caption relative mt-1">{d.cards.length} cartes</p>
                <ArrowUpRight
                  className="absolute right-4 top-4 h-4 w-4 text-[var(--text-dim)] transition-colors group-hover:text-[var(--accent)]"
                  aria-hidden
                />
              </button>
            ))}
          </div>
          <Button variant="outline" className="w-full" onClick={() => setPhase("menu")}>
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

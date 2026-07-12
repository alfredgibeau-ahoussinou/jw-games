"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame } from "lucide-react";
import { GameCard } from "@/components/game/GameCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { Button } from "@/components/ui/Button";
import { GAME_MODES } from "@/lib/constants";
import { GAME_POLES } from "@/lib/game-visuals";
import { cn } from "@/lib/cn";
import { getQuizCount } from "@/data/sample-quiz";
import type { GameModeConfig } from "@/types/game";

type Filter = "all" | "solo" | "multi";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "solo", label: "Solo" },
  { id: "multi", label: "Groupe" },
];

function matchesFilter(players: GameModeConfig["players"], filter: Filter) {
  if (filter === "all") return true;
  if (filter === "solo") return players === "solo" || players === "both";
  return players === "multi" || players === "both";
}

export function GamesHub() {
  const [filter, setFilter] = useState<Filter>("all");

  const available = GAME_MODES.filter((g) => g.available);
  const filtered = available.filter((g) => matchesFilter(g.players, filter));
  const featured = GAME_MODES.find((g) => g.id === "quiz")!;

  const poles = GAME_POLES.map((pole) => ({
    ...pole,
    games: pole.modes
      .map((id) => available.find((g) => g.id === id))
      .filter((g): g is GameModeConfig => !!g && matchesFilter(g.players, filter)),
  })).filter((p) => p.games.length > 0);

  return (
    <PageWrapper>
      <div className="container-app pb-12">
        <PageHeader
          title="Jeux bibliques"
          description={`${available.length} modes · ${getQuizCount()} questions vérifiées`}
        >
          <Link href="/quotidien">
            <Button size="sm">
              <Flame className="h-4 w-4" aria-hidden />
              Défi du jour
            </Button>
          </Link>
        </PageHeader>

        {filter === "all" && (
          <section className="mb-12" aria-label="Jeu recommandé">
            <p className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-dim)]">
              Sélection
            </p>
            <GameCard game={featured} featured />
          </section>
        )}

        <div
          className="mb-10 flex w-full overflow-x-auto rounded-xl border border-white/[0.06] bg-[var(--bg-card)] p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Filtrer les jeux"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "min-h-10 shrink-0 rounded-lg px-4 py-2 text-sm font-medium tracking-tight transition-all sm:px-5",
                filter === f.id
                  ? "bg-white text-[var(--bg)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-white"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filter === "all" ? (
          <div className="space-y-12">
            {poles.map((pole) => (
              <section key={pole.id} aria-labelledby={`pole-${pole.id}`}>
                <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 id={`pole-${pole.id}`} className="text-heading text-lg sm:text-xl">
                      {pole.title}
                    </h2>
                    <p className="text-caption mt-0.5">{pole.subtitle}</p>
                  </div>
                  <span className="text-caption tabular-nums">{pole.games.length} jeux</span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pole.games
                    .filter((g) => g.id !== "quiz")
                    .map((game) => (
                      <GameCard key={game.id} game={game} />
                    ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <section aria-label="Liste des jeux">
            <div className="mb-5">
              <h2 className="text-heading text-lg">
                {filter === "solo" ? "Jeux en solo" : "Jeux en groupe"}
              </h2>
              <p className="text-caption mt-0.5">{filtered.length} modes disponibles</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageWrapper>
  );
}

"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { GameModeConfig } from "@/types/game";
import { cn } from "@/lib/cn";
import { GAME_VISUALS, getPlayerMeta } from "@/lib/game-visuals";
import { GameModeIcon } from "@/components/game/GameModeIcon";

interface GameCardProps {
  game: GameModeConfig;
  featured?: boolean;
  /** Carrousel accueil — tuile compacte */
  compact?: boolean;
}

function PlayerChip({ players }: { players: GameModeConfig["players"] }) {
  const meta = getPlayerMeta(players);
  const Icon = meta.icon;

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[0.6875rem] font-medium tracking-wide text-[var(--text-muted)] backdrop-blur-sm">
      <Icon className="h-3 w-3 opacity-70" aria-hidden />
      {meta.label}
    </span>
  );
}

function GameTile({
  game,
  featured,
  compact,
}: {
  game: GameModeConfig;
  featured?: boolean;
  compact?: boolean;
}) {
  const visual = GAME_VISUALS[game.id];

  if (featured) {
    return (
      <div className="game-card-featured group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--bg-card)]">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-40",
            visual.gradient.replace("/90", "/15").replace("/80", "/12")
          )}
        />
        <div className={cn("absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-80", visual.gradient)} />

        <div className="relative flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
          <GameModeIcon mode={game.id} size="lg" />
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              {game.tag && (
                <span className="rounded-full border border-[var(--brand-red)]/30 bg-[var(--brand-red)]/10 px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider text-[var(--brand-red)]">
                  {game.tag}
                </span>
              )}
              <PlayerChip players={game.players} />
            </div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{game.title}</h3>
            <p className="text-body mt-2 line-clamp-2 text-[0.9375rem]">{game.description}</p>
          </div>
          <span className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-transform group-hover:translate-x-0.5 sm:flex">
            Jouer
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div
        className={cn(
          "game-card-compact group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-3.5",
          "transition-all duration-200 hover:border-white/12 hover:shadow-lg sm:p-4",
          visual.glow
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br opacity-30 blur-2xl",
            visual.gradient
          )}
        />
        <GameModeIcon mode={game.id} size="sm" className="mb-2.5 shrink-0 sm:mb-3" />
        <p className="line-clamp-2 min-h-0 flex-1 text-[0.8125rem] font-semibold leading-snug tracking-tight sm:text-sm">
          {game.title}
        </p>
        <div className="mt-2 shrink-0 pt-1">
          <PlayerChip players={game.players} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "game-card group relative flex h-[228px] flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5",
        "transition-all duration-200 hover:-translate-y-0.5 hover:border-white/12 hover:shadow-xl",
        visual.glow
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br opacity-25 blur-3xl transition-opacity group-hover:opacity-40",
          visual.gradient
        )}
      />

      <div className="relative mb-3 flex h-12 shrink-0 items-start justify-between gap-2">
        <GameModeIcon mode={game.id} size="md" />
        <div className="flex h-12 flex-col items-end justify-between">
          {game.tag ? (
            <span className="rounded-full border border-[var(--brand-red)]/25 bg-[var(--brand-red)]/10 px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-[var(--brand-red)]">
              {game.tag}
            </span>
          ) : (
            <span className="h-[22px]" aria-hidden />
          )}
          <PlayerChip players={game.players} />
        </div>
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col">
        <h3 className="line-clamp-2 h-10 text-[0.9375rem] font-semibold leading-snug tracking-tight sm:text-base">
          {game.title}
        </h3>
        <p className="mt-1 line-clamp-2 h-10 text-[0.8125rem] leading-relaxed text-[var(--text-muted)] opacity-80">
          {game.description}
        </p>
      </div>

      <div className="relative mt-3 flex shrink-0 items-center justify-between border-t border-white/[0.05] pt-3">
        <span className="text-[0.6875rem] font-medium uppercase tracking-widest text-[var(--text-dim)]">
          {visual.label}
        </span>
        <ArrowUpRight
          className="h-4 w-4 text-[var(--text-dim)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function GameCard({ game, featured = false, compact = false }: GameCardProps) {
  const content = (
    <article className={cn("h-full", !game.available && "pointer-events-none opacity-45")}>
      <GameTile game={game} featured={featured} compact={compact} />
    </article>
  );

  if (!game.available) return content;

  return (
    <Link
      href={game.href}
      className={cn(
        "block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        compact && "poster-card poster-card--game shrink-0"
      )}
    >
      {content}
    </Link>
  );
}

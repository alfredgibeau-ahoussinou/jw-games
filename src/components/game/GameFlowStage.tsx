"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { LayoutGroup } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Play } from "lucide-react";
import type { GameModeConfig } from "@/types/game";
import { GAME_POLES, GAME_VISUALS, getPlayerMeta } from "@/lib/game-visuals";
import { SegmentTabs } from "@/components/ui/SegmentTabs";
import { GameModeIcon } from "@/components/game/GameModeIcon";
import { SafeImage } from "@/components/ui/SafeImage";
import { jwImageForGame } from "@/lib/jw-images";
import { cn } from "@/lib/cn";

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

interface GameFlowStageProps {
  games: GameModeConfig[];
  compact?: boolean;
  className?: string;
}

export function GameFlowStage({ games, compact = false, className }: GameFlowStageProps) {
  const [index, setIndex] = useState(0);

  const list = games.filter((g) => g.available);
  const safeIndex = list.length ? Math.min(index, list.length - 1) : 0;
  const current = list[safeIndex];

  const go = useCallback(
    (next: number) => {
      if (!list.length) return;
      setIndex((next + list.length) % list.length);
    },
    [list.length]
  );

  useEffect(() => {
    setIndex(0);
  }, [games]);

  if (!current) return null;

  const visual = GAME_VISUALS[current.id];
  const img = jwImageForGame(current.id);
  const player = getPlayerMeta(current.players);

  return (
    <div className={cn("netflix-spotlight", compact && "netflix-spotlight--compact", className)}>
      <div className="netflix-spotlight__bg">
        <SafeImage src={img.url} alt="" fill sizes="100vw" priority={!compact} />
      </div>
      <div className="netflix-spotlight__overlay" aria-hidden />

      <div className="netflix-spotlight__content">
        <span className="netflix-spotlight__tag">{visual.label}</span>
        <div className="cluster">
          <GameModeIcon mode={current.id} size={compact ? "md" : "lg"} />
          <h3 className="netflix-spotlight__title">{current.title}</h3>
        </div>
        {!compact && <p className="netflix-spotlight__desc">{current.description}</p>}
        <p className="netflix-spotlight__meta">{player.label}</p>
        <div className="netflix-spotlight__actions">
          <Link href={current.href} className="netflix-spotlight__play">
            <Play fill="currentColor" aria-hidden />
            Jouer
            <ChevronRight aria-hidden />
          </Link>
          <span className="netflix-spotlight__counter">
            {safeIndex + 1} / {list.length}
          </span>
        </div>
      </div>

      {list.length > 1 && (
        <>
          <button
            type="button"
            className="netflix-spotlight__nav netflix-spotlight__nav--prev"
            onClick={() => go(safeIndex - 1)}
            aria-label="Jeu précédent"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            className="netflix-spotlight__nav netflix-spotlight__nav--next"
            onClick={() => go(safeIndex + 1)}
            aria-label="Jeu suivant"
          >
            <ArrowRight />
          </button>
          <div className="netflix-spotlight__dock" role="tablist" aria-label="Choisir un mode">
            {list.map((game, i) => (
              <button
                key={game.id}
                type="button"
                role="tab"
                aria-selected={i === safeIndex}
                aria-label={game.title}
                onClick={() => go(i)}
              >
                <GameModeIcon mode={game.id} size="sm" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface GamesInteractiveArenaProps {
  games: GameModeConfig[];
  featured: GameModeConfig;
}

export function GamesInteractiveArena({ games, featured }: GamesInteractiveArenaProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [activePole, setActivePole] = useState(GAME_POLES[0]?.id ?? "culture");

  const available = useMemo(() => games.filter((g) => g.available), [games]);

  const poles = useMemo(
    () =>
      GAME_POLES.map((pole) => ({
        ...pole,
        games: pole.modes
          .map((id) => available.find((g) => g.id === id))
          .filter((g): g is GameModeConfig => !!g && matchesFilter(g.players, filter)),
      })).filter((p) => p.games.length > 0),
    [available, filter]
  );

  const activePoleData = poles.find((p) => p.id === activePole) ?? poles[0];

  const flowGames = useMemo(() => {
    if (filter === "all") {
      const poleGames = activePoleData?.games ?? [];
      const withFeatured = poleGames.some((g) => g.id === featured.id)
        ? poleGames
        : [featured, ...poleGames];
      return withFeatured.filter((g, i, arr) => arr.findIndex((x) => x.id === g.id) === i);
    }
    return available.filter((g) => matchesFilter(g.players, filter));
  }, [filter, activePoleData, available, featured]);

  return (
    <div>
      <div className="netflix-filters">
        <SegmentTabs
          items={FILTERS}
          value={filter}
          onChange={(id) => {
            setFilter(id);
            if (id === "all" && poles[0]) setActivePole(poles[0].id);
          }}
          ariaLabel="Filtrer les modes"
        />

        {filter === "all" && poles.length > 1 && (
          <LayoutGroup id="game-flow-poles">
            <div className="netflix-poles" role="tablist" aria-label="Univers">
              {poles.map((pole) => (
                <button
                  key={pole.id}
                  type="button"
                  role="tab"
                  aria-selected={activePole === pole.id}
                  onClick={() => setActivePole(pole.id)}
                >
                  <span>{pole.title}</span>
                  <span>{pole.subtitle}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        )}
      </div>

      <div key={`${filter}-${activePole}`} style={{ paddingInline: "var(--page-gutter)" }}>
        <GameFlowStage games={flowGames} />
      </div>
    </div>
  );
}

export function GameHomeFlow({ games }: { games: GameModeConfig[] }) {
  return (
    <div style={{ paddingInline: "var(--page-gutter)" }}>
      <GameFlowStage games={games} compact />
    </div>
  );
}

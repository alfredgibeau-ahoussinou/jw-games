"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { GameModeConfig } from "@/types/game";
import { GAME_VISUALS, getPlayerMeta } from "@/lib/game-visuals";
import { GameModeIcon } from "@/components/game/GameModeIcon";
import { InteractiveCard } from "@/components/motion/InteractiveCard";
import { SafeImage } from "@/components/ui/SafeImage";
import { jwImageForGame } from "@/lib/jw-images";

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
    <span>
      <Icon aria-hidden />
      {meta.label}
    </span>
  );
}

function CardImageBg({ mode, className }: { mode: GameModeConfig["id"]; className?: string }) {
  const img = jwImageForGame(mode);
  return (
    <>
      <SafeImage
        src={img.url}
        alt=""
        fill
        sizes="(max-width: 640px) 80vw, 320px"
      />
      <div />
    </>
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
      <div>
        <CardImageBg mode={game.id} />
        <div />

        <div>
          <GameModeIcon mode={game.id} size="lg" />
          <div>
            <div>
              {game.tag && (
                <span>
                  {game.tag}
                </span>
              )}
              <PlayerChip players={game.players} />
            </div>
            <h3>{game.title}</h3>
            <p>{game.description}</p>
          </div>
          <span>
            Jouer
            <ArrowUpRight aria-hidden />
          </span>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <div>
        <div>
          <CardImageBg mode={game.id} />
          <div>
            <GameModeIcon mode={game.id} size="sm" />
          </div>
        </div>
        <div>
          <p>{game.title}</p>
          <div>
            <span>
              {getPlayerMeta(game.players).label}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
    >
      <CardImageBg mode={game.id} />

      <div>
        <GameModeIcon mode={game.id} size="md" />
        <div>
          {game.tag ? (
            <span>
              {game.tag}
            </span>
          ) : (
            <span aria-hidden />
          )}
          <PlayerChip players={game.players} />
        </div>
      </div>

      <div>
        <h3>
          {game.title}
        </h3>
        <p>
          {game.description}
        </p>
      </div>

      <div>
        <span>
          {visual.label}
        </span>
        <ArrowUpRight
          aria-hidden
        />
      </div>
    </div>
  );
}

export function GameCard({ game, featured = false, compact = false }: GameCardProps) {
  const content = (
    <article>
      <GameTile game={game} featured={featured} compact={compact} />
    </article>
  );

  if (!game.available) return content;

  const wrapped = (
    <InteractiveCard disabled={compact}>
      {content}
    </InteractiveCard>
  );

  return (
    <Link
      href={game.href}
    >
      {featured || !compact ? wrapped : content}
    </Link>
  );
}

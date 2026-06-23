import { cn } from "@/lib/cn";
import { GameProgressBar } from "@/components/game/shared/GameProgressBar";

interface GameHudProps {
  current: number;
  total: number;
  score?: number;
  scoreLabel?: string;
  streak?: number;
  extra?: React.ReactNode;
  showProgress?: boolean;
  className?: string;
}

export function GameHud({
  current,
  total,
  score,
  scoreLabel = "pts",
  streak,
  extra,
  showProgress = true,
  className,
}: GameHudProps) {
  const progressValue = total > 0 ? ((current - 1) / total) * 100 : 0;

  return (
    <div className={cn("mb-6 space-y-3", className)}>
      <div className="game-hud">
        <span className="game-hud-stat">
          <strong>{current}</strong> / {total}
        </span>
        <div className="flex items-center gap-3">
          {streak !== undefined && streak >= 2 && (
            <span className="text-sm font-bold text-[var(--warning)]">🔥 ×{streak}</span>
          )}
          {score !== undefined && (
            <span className="game-hud-stat">
              <strong>{score}</strong> {scoreLabel}
            </span>
          )}
          {extra}
        </div>
      </div>
      {showProgress && <GameProgressBar value={progressValue} />}
    </div>
  );
}

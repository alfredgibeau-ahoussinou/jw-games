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
    <div>
      <div>
        <span>
          <strong>{current}</strong> / {total}
        </span>
        <div>
          {streak !== undefined && streak >= 2 && (
            <span>🔥 ×{streak}</span>
          )}
          {score !== undefined && (
            <span>
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

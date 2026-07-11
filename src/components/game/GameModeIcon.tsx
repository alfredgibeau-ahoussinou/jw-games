import { cn } from "@/lib/cn";
import { GAME_VISUALS } from "@/lib/game-visuals";
import type { GameMode } from "@/types/game";

interface GameModeIconProps {
  mode: GameMode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: { box: "h-9 w-9", icon: "h-4 w-4" },
  md: { box: "h-12 w-12", icon: "h-5 w-5" },
  lg: { box: "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]", icon: "h-7 w-7 sm:h-8 sm:w-8" },
};

export function GameModeIcon({ mode, size = "md", className }: GameModeIconProps) {
  const visual = GAME_VISUALS[mode];
  const Icon = visual.icon;
  const s = sizes[size];

  return (
    <div
      aria-hidden
    >
      <Icon strokeWidth={1.75} />
    </div>
  );
}

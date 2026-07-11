"use client";

import { Flame } from "lucide-react";
import { shouldShowSessionGamification } from "@/lib/study-focus";
import { useUserStore } from "@/stores/user-store";

interface GameComboBannerProps {
  show: boolean;
  streak: number;
}

export function GameComboBanner({ show, streak }: GameComboBannerProps) {
  const preferences = useUserStore((s) => s.profile?.preferences);
  if (!shouldShowSessionGamification(preferences)) return null;

  return (
    <>
      {show && streak >= 2 && (
        <div>
          <span>
            <Flame aria-hidden />
            Série de bonnes réponses ×{streak}
          </span>
        </div>
      )}
    </>
  );
}

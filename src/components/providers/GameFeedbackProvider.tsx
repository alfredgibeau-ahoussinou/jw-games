"use client";

import { useEffect, useRef } from "react";
import { useUserStore } from "@/stores/user-store";
import { useToast } from "@/components/ui/Toast";

export function GameFeedbackProvider({ children }: { children: React.ReactNode }) {
  const profile = useUserStore((s) => s.profile);
  const lastEarnedBadges = useUserStore((s) => s.lastEarnedBadges);
  const clearLastBadges = useUserStore((s) => s.clearLastBadges);
  const { show } = useToast();
  const prevXp = useRef<number | undefined>(undefined);
  const prevLevel = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!profile) return;

    if (prevXp.current !== undefined && profile.xp > prevXp.current) {
      const gained = profile.xp - prevXp.current;
      if (gained > 0 && gained !== 100) {
        show({ type: "xp", title: `+${gained} XP`, message: "Continuez comme ça !" });
      }
    }

    if (prevLevel.current !== undefined && profile.level > prevLevel.current) {
      show({
        type: "level",
        title: `Niveau ${profile.level} !`,
        message: "Vous progressez dans votre étude biblique",
      });
    }

    prevXp.current = profile.xp;
    prevLevel.current = profile.level;
  }, [profile, show]);

  useEffect(() => {
    if (lastEarnedBadges.length === 0) return;
    lastEarnedBadges.forEach((b) => {
      show({
        type: "badge",
        title: b.name,
        message: b.description,
        icon: b.icon,
      });
    });
    const t = setTimeout(() => clearLastBadges(), 600);
    return () => clearTimeout(t);
  }, [lastEarnedBadges, show, clearLastBadges]);

  return <>{children}</>;
}

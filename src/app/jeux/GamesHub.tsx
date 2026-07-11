"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Flame } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioPageHero, StudioSection } from "@/components/studio/StudioPageHero";
import { StudioPageShell } from "@/components/studio/StudioPageShell";
import { Button } from "@/components/ui/Button";
import { GamesInteractiveArena } from "@/components/game/GameFlowStage";
import { GAME_MODES } from "@/lib/constants";
import { getQuizCount } from "@/data/sample-quiz";
import { jwImageForSlot } from "@/lib/jw-images";
import { shouldHideUndercover } from "@/lib/user-preferences";
import { useUserStore } from "@/stores/user-store";

export function GamesHub() {
  const preferences = useUserStore((s) => s.profile?.preferences);
  const games = useMemo(() => {
    if (!shouldHideUndercover(preferences)) return GAME_MODES;
    return GAME_MODES.filter((g) => g.id !== "undercover");
  }, [preferences]);

  const available = games.filter((g) => g.available);
  const featured = games.find((g) => g.id === "quiz") ?? GAME_MODES.find((g) => g.id === "quiz")!;

  return (
    <PageWrapper>
      <StudioPageShell>
        <StudioPageHero
          eyebrow="Jeux bibliques"
          title="Choisissez votre"
          titleAccent="défi"
          description={`${available.length} modes · ${getQuizCount()} questions · swipez entre les modes`}
          imageSrc={jwImageForSlot("hero.jeux").url}
        >
          <Link href="/quotidien">
            <Button size="sm" variant="glow">
              <Flame aria-hidden />
              Défi du jour
            </Button>
          </Link>
        </StudioPageHero>

        <StudioSection fullBleed>
          <GamesInteractiveArena games={games} featured={featured} />
        </StudioSection>
      </StudioPageShell>
    </PageWrapper>
  );
}

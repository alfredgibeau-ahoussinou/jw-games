"use client";

import Link from "next/link";
import { Flame, Film, Gamepad2, BookMarked } from "lucide-react";
import { GameCard } from "@/components/game/GameCard";
import { StudyThemeCard } from "@/components/study/StudyThemeCard";
import { HeroBanner } from "@/components/media/HeroBanner";
import { MediaRow } from "@/components/media/MediaRow";
import { VideoPoster } from "@/components/media/MediaRow";
import { DailyTextSection } from "@/components/daily/DailyTextSection";
import { DailyChallengeWidget } from "@/components/daily/DailyChallengeWidget";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { JW_VIDEO_COLLECTIONS, JW_VIDEOS } from "@/data/jw-videos";
import { GAME_MODES } from "@/lib/constants";
import { STUDY_THEMES } from "@/data/study-themes";
import { useUserStore } from "@/stores/user-store";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { XP_PER_LEVEL } from "@/lib/constants";

const HERO_VIDEO = JW_VIDEOS.find((v) => v.id.startsWith("bjf-")) ?? JW_VIDEOS[0];
const FEATURED_GAMES = ["quiz", "devinettes", "videoquiz", "memoire", "biblio"]
  .map((id) => GAME_MODES.find((g) => g.id === id)!)
  .filter(Boolean);

export default function HomePage() {
  const profile = useUserStore((s) => s.profile);

  const enfantsRow = JW_VIDEO_COLLECTIONS.find((c) => c.id === "bjf")?.videos.slice(0, 10) ?? [];
  const jeunesRow = [
    ...(JW_VIDEO_COLLECTIONS.find((c) => c.id === "ados-spiritualite")?.videos.slice(0, 6) ?? []),
    ...(JW_VIDEO_COLLECTIONS.find((c) => c.id === "ados-films")?.videos.slice(0, 4) ?? []),
  ];
  const jesusRow = JW_VIDEO_COLLECTIONS.find((c) => c.id === "gnj")?.videos ?? [];

  return (
    <PageWrapper>
      <HeroBanner video={HERO_VIDEO} />

      <div className="relative z-10 space-y-6 pb-8 pt-4">
        {profile && (
          <div className="container-app mb-6">
            <div className="flex items-center gap-4 rounded-md bg-[var(--bg-card)] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[var(--accent)] font-bold text-white">
                {profile.displayName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{profile.displayName}</p>
                <p className="text-caption">
                  Niveau {profile.level} · Série {profile.streak}j
                </p>
                <ProgressBar value={profile.xp % XP_PER_LEVEL} max={XP_PER_LEVEL} className="mt-2" />
              </div>
              <Link href="/quotidien" className="link-primary shrink-0">
                <Flame className="mr-1 inline h-4 w-4" />
                Défi
              </Link>
            </div>
          </div>
        )}

        <DailyChallengeWidget compact className="container-app" />

        <DailyTextSection />

        <MediaRow title="Jeux bibliques" href="/jeux" className="media-row--hub">
          {FEATURED_GAMES.map((game) => (
            <GameCard key={game.id} game={game} compact />
          ))}
        </MediaRow>

        <MediaRow title="Étude personnelle" href="/etude" className="media-row--hub">
          {STUDY_THEMES.slice(0, 8).map((theme) => (
            <StudyThemeCard key={theme.id} theme={theme} compact />
          ))}
        </MediaRow>

        <MediaRow title="Pour les enfants" href="/mediatheque">
          {enfantsRow.map((v) => (
            <VideoPoster key={v.id} video={v} href={`/mediatheque/${v.id}`} />
          ))}
        </MediaRow>

        <MediaRow title="Pour les jeunes" href="/mediatheque">
          {jeunesRow.map((v) => (
            <VideoPoster key={v.id} video={v} href={`/mediatheque/${v.id}`} />
          ))}
        </MediaRow>

        <MediaRow title="La bonne nouvelle selon Jésus" href="/mediatheque">
          {jesusRow.map((v) => (
            <VideoPoster key={v.id} video={v} href={`/mediatheque/${v.id}`} />
          ))}
        </MediaRow>

        <div className="container-app mt-10 flex flex-wrap gap-3">
          <Link
            href="/etude"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-[var(--bg-card)] px-5 py-3.5 text-sm font-medium tracking-tight transition-colors hover:border-white/12 hover:bg-[var(--bg-hover)]"
          >
            <BookMarked className="h-4 w-4 text-[var(--accent)]" />
            Étude personnelle
          </Link>
          <Link
            href="/jeux"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-[var(--bg-card)] px-5 py-3.5 text-sm font-medium tracking-tight transition-colors hover:border-white/12 hover:bg-[var(--bg-hover)]"
          >
            <Gamepad2 className="h-4 w-4 text-[var(--accent)]" />
            Tous les jeux
          </Link>
          <Link
            href="/mediatheque"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-[var(--bg-card)] px-5 py-3.5 text-sm font-medium tracking-tight transition-colors hover:border-white/12 hover:bg-[var(--bg-hover)]"
          >
            <Film className="h-4 w-4 text-[var(--accent)]" />
            Médiathèque
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}

"use client";

import Link from "next/link";
import { Flame, Film, Gamepad2, BookMarked, Sparkles, Globe } from "lucide-react";
import { GameHomeFlow } from "@/components/game/GameFlowStage";
import { WelcomeHero } from "@/components/welcome/WelcomeHero";
import { WelcomeMarquee } from "@/components/welcome/WelcomeMarquee";
import { WelcomeBento } from "@/components/welcome/WelcomeBento";
import { InteractiveStrip } from "@/components/motion/InteractiveStrip";
import { MotionExplorerRail } from "@/components/motion/MotionExplorerRail";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MediaRow, VideoPoster } from "@/components/media/MediaRow";
import { DailyTextSection } from "@/components/daily/DailyTextSection";
import { LanguageHomeRow } from "@/components/language/LanguageHomeRow";
import { ProfileAvatar } from "@/components/profile/ProfileAvatar";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { Button } from "@/components/ui/Button";
import { StudyThemeCard } from "@/components/study/StudyThemeCard";
import { JW_VIDEO_COLLECTIONS } from "@/data/jw-videos";
import { GAME_MODES } from "@/lib/constants";
import { useUserStore } from "@/stores/user-store";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { XP_PER_LEVEL } from "@/lib/constants";
import { getPersonalizedGreeting, getPersonalizedHome } from "@/lib/user-preferences";
import { getPersonalizedStudyThemes } from "@/lib/study-personalization";
import { StudyContinueBanner } from "@/components/study/StudyContinueBanner";

const VIDEO_ROWS = {
  enfants: {
    title: "Pour les enfants",
    videos: JW_VIDEO_COLLECTIONS.find((c) => c.id === "bjf")?.videos.slice(0, 10) ?? [],
  },
  jeunes: {
    title: "Pour les jeunes",
    videos: [
      ...(JW_VIDEO_COLLECTIONS.find((c) => c.id === "ados-spiritualite")?.videos.slice(0, 6) ?? []),
      ...(JW_VIDEO_COLLECTIONS.find((c) => c.id === "ados-films")?.videos.slice(0, 4) ?? []),
    ],
  },
  jesus: {
    title: "La bonne nouvelle selon Jésus",
    videos: JW_VIDEO_COLLECTIONS.find((c) => c.id === "gnj")?.videos ?? [],
  },
};

export default function HomePage() {
  const profile = useUserStore((s) => s.profile);
  const isOnboarded = useUserStore((s) => s.isOnboarded);
  const studyProgress = useUserStore((s) => s.studyProgress);

  const personalized = getPersonalizedHome(profile?.preferences);
  const greeting = profile
    ? getPersonalizedGreeting(profile.displayName, profile.preferences)
    : null;

  const featuredGames = personalized.featuredGameIds
    .map((id) => GAME_MODES.find((g) => g.id === id)!)
    .filter(Boolean);

  const primaryVideos = VIDEO_ROWS[personalized.primaryVideoRow]?.videos ?? VIDEO_ROWS.jesus.videos;
  const primaryVideoTitle = VIDEO_ROWS[personalized.primaryVideoRow]?.title ?? VIDEO_ROWS.jesus.title;
  const studyThemes = getPersonalizedStudyThemes(profile?.preferences, 8);

  return (
    <PageWrapper className="netflix-home">
      <WelcomeHero isOnboarded={isOnboarded} displayName={profile?.displayName} />
      <WelcomeMarquee />

      <div id="decouvrir" className="netflix-feed">
        <WelcomeBento />

        {!isOnboarded && (
          <ScrollReveal>
            <div className="promo-bar netflix-continue">
              <div>
                <Sparkles aria-hidden />
                <div>
                  <p>Personnalisez votre expérience</p>
                  <p>Pseudo, tranche d&apos;âge, objectifs — sans données confidentielles.</p>
                </div>
              </div>
              <Link href="/profil">
                <Button variant="play">Créer mon profil</Button>
              </Link>
            </div>
          </ScrollReveal>
        )}

        {profile && greeting && (
          <ScrollReveal>
            <div className="promo-bar netflix-continue">
              <ProfileAvatar profile={profile} size="sm" />
              <div>
                <p>{greeting.title}</p>
                <p>{greeting.subtitle}</p>
                <p>
                  Niveau {profile.level} · Série {profile.streak}j
                </p>
                <ProgressBar value={profile.xp % XP_PER_LEVEL} max={XP_PER_LEVEL} />
              </div>
              <Link href="/quotidien">
                <Button variant="primary">
                  <Flame aria-hidden />
                  Défi
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        )}

        {(isOnboarded || studyProgress.lastArticleId) && (
          <ScrollReveal>
            <StudyContinueBanner
              preferences={profile?.preferences}
              studyProgress={studyProgress}
              compact
            />
          </ScrollReveal>
        )}

        <section aria-label={personalized.gamesRowTitle}>
          <h2 className="netflix-row-title">{personalized.gamesRowTitle}</h2>
          <p className="netflix-row-sub">Swipez entre les modes · recommandé pour vous</p>
          <GameHomeFlow games={featuredGames} />
          <p className="netflix-row-sub" style={{ paddingInline: "var(--page-gutter)", marginTop: "0.75rem" }}>
            <Link href="/jeux">Voir tous les jeux →</Link>
          </p>
        </section>

        <InteractiveStrip
          title={profile ? "Étude pour vous" : "Étude personnelle"}
          subtitle="Thèmes recommandés selon votre profil"
          href="/etude"
        >
          {studyThemes.map((theme) => (
            <StudyThemeCard key={theme.id} theme={theme} compact showProgress />
          ))}
        </InteractiveStrip>

        <section className="page-section" aria-label="Texte du jour" style={{ paddingInline: "var(--page-gutter)" }}>
          <h2 className="netflix-row-title">Texte du jour</h2>
          <DailyTextSection variant="compact" />
        </section>

        <MediaRow title={primaryVideoTitle} href="/mediatheque">
          {primaryVideos.map((v) => (
            <VideoPoster key={v.id} video={v} href={`/mediatheque?video=${v.id}`} />
          ))}
        </MediaRow>

        <LanguageHomeRow />

        {personalized.primaryVideoRow !== "enfants" && VIDEO_ROWS.enfants.videos.length > 0 && (
          <MediaRow title={VIDEO_ROWS.enfants.title} href="/mediatheque">
            {VIDEO_ROWS.enfants.videos.map((v) => (
              <VideoPoster key={v.id} video={v} href={`/mediatheque?video=${v.id}`} />
            ))}
          </MediaRow>
        )}

        {personalized.primaryVideoRow !== "jeunes" && VIDEO_ROWS.jeunes.videos.length > 0 && (
          <MediaRow title={VIDEO_ROWS.jeunes.title} href="/mediatheque">
            {VIDEO_ROWS.jeunes.videos.map((v) => (
              <VideoPoster key={v.id} video={v} href={`/mediatheque?video=${v.id}`} />
            ))}
          </MediaRow>
        )}

        {personalized.primaryVideoRow !== "jesus" && (
          <MediaRow title={VIDEO_ROWS.jesus.title} href="/mediatheque">
            {VIDEO_ROWS.jesus.videos.map((v) => (
              <VideoPoster key={v.id} video={v} href={`/mediatheque?video=${v.id}`} />
            ))}
          </MediaRow>
        )}

        <section className="page-section">
          <h2 className="netflix-row-title">Explorer tout JW Games</h2>
          <MotionExplorerRail
            items={[
              { href: "/jeux", label: "Jeux bibliques", icon: Gamepad2, index: 0 },
              { href: "/etude", label: "Étude personnelle", icon: BookMarked, index: 1 },
              { href: "/mediatheque", label: "Médiathèque vidéo", icon: Film, index: 2 },
              { href: "/langues", label: "Langues prédication", icon: Globe, index: 3 },
            ]}
          />
        </section>
      </div>
    </PageWrapper>
  );
}

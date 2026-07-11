"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Sparkles, UserCircle } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioPageHero } from "@/components/studio/StudioPageHero";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import { StudyThemeCard } from "@/components/study/StudyThemeCard";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { StudyPathSection } from "@/components/study/StudyPathSection";
import { WeeklyMeetingSection } from "@/components/study/WeeklyMeetingSection";
import { StudyContinueBanner } from "@/components/study/StudyContinueBanner";
import { StudyHubStats } from "@/components/study/StudyHubStats";
import { STUDY_ARTICLES } from "@/data/study/articles";
import { STUDY_THEMES, getThemeArticles } from "@/data/study-themes";
import { Button } from "@/components/ui/Button";
import { getPersonalizedStudy } from "@/lib/study-personalization";
import { getStudyPathWeeks } from "@/lib/study-paths";
import {
  getStudyOverviewStats,
  getThemeStudyStats,
  isArticleRead,
  isStudyGameDone,
} from "@/lib/study-progress";
import { useUserStore } from "@/stores/user-store";
import type { StudyTheme } from "@/types/study";
import { jwImageForSlot } from "@/lib/jw-images";
import { SegmentTabs } from "@/components/ui/SegmentTabs";

type ThemeFilter = "all" | "progress" | "done";

const THEME_FILTERS: { id: ThemeFilter; label: string }[] = [
  { id: "all", label: "Toutes" },
  { id: "progress", label: "En cours" },
  { id: "done", label: "Terminées" },
];

function filterThemes(
  themes: StudyTheme[],
  query: string,
  filter: ThemeFilter,
  studyProgress: ReturnType<typeof useUserStore.getState>["studyProgress"]
): StudyTheme[] {
  const q = query.trim().toLowerCase();
  return themes.filter((theme) => {
    const articles = getThemeArticles(theme.id);
    const articlesRead = articles.filter((a) => isArticleRead(studyProgress, a.id)).length;
    const gamesDone = theme.miniGames.filter((g) =>
      isStudyGameDone(studyProgress, theme.id, g.id)
    ).length;
    const stats = getThemeStudyStats(
      studyProgress,
      articles.length,
      articlesRead,
      theme.miniGames.length,
      gamesDone
    );

    if (filter === "progress" && (!stats.hasStarted || stats.isComplete)) return false;
    if (filter === "done" && !stats.isComplete) return false;

    if (!q) return true;
    const haystack = [
      theme.title,
      theme.subtitle,
      theme.description,
      theme.scriptureRef,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export function StudyHubContent() {
  const profile = useUserStore((s) => s.profile);
  const isOnboarded = useUserStore((s) => s.isOnboarded);
  const studyProgress = useUserStore((s) => s.studyProgress);
  const advanceStudyPathWeek = useUserStore((s) => s.advanceStudyPathWeek);
  const setStudyPathWeek = useUserStore((s) => s.setStudyPathWeek);

  const [themeQuery, setThemeQuery] = useState("");
  const [themeFilter, setThemeFilter] = useState<ThemeFilter>("all");

  const personalized = isOnboarded && profile?.preferences
    ? getPersonalizedStudy(profile.preferences)
    : null;

  const pathWeeks = getStudyPathWeeks(profile?.preferences);
  const pathArticleIds = pathWeeks.flatMap((w) => w.steps.map((s) => s.articleId));
  const stats = getStudyOverviewStats(studyProgress, pathArticleIds);

  const featured = personalized?.featuredArticles ?? STUDY_ARTICLES.slice(0, 6);
  const unreadFeatured = useMemo(
    () => featured.filter((a) => !isArticleRead(studyProgress, a.id)).slice(0, 3),
    [featured, studyProgress]
  );

  const recommendedThemes = personalized?.recommendedThemes ?? STUDY_THEMES;
  const otherThemes = personalized?.otherThemes ?? [];

  const filteredRecommended = useMemo(
    () => filterThemes(recommendedThemes, themeQuery, themeFilter, studyProgress),
    [recommendedThemes, themeQuery, themeFilter, studyProgress]
  );
  const filteredOther = useMemo(
    () => filterThemes(otherThemes, themeQuery, themeFilter, studyProgress),
    [otherThemes, themeQuery, themeFilter, studyProgress]
  );
  const filteredAll = useMemo(
    () => filterThemes(STUDY_THEMES, themeQuery, themeFilter, studyProgress),
    [themeQuery, themeFilter, studyProgress]
  );

  const showSplit = Boolean(personalized && otherThemes.length > 0);

  return (
    <PageWrapper>
      <StudioPageShell>
        <StudioPageHero
          eyebrow="Étude personnelle" title="Lire, méditer," titleAccent="jouer" description={`${stats.readArticles} articles lus · ${stats.completedGames} mini-jeux · parcours ${stats.pathRead}/${stats.pathTotal}`}
          imageSrc={jwImageForSlot("hero.etude").url}
        >
          <Link href="/etude/articles">
            <Button size="sm">Bibliothèque d&apos;étude</Button>
          </Link>
        </StudioPageHero>

        <StudioPageBody>
        <StudyHubStats stats={stats} />

        {(isOnboarded || studyProgress.lastArticleId) && (
          <div>
            <StudyContinueBanner
              preferences={profile?.preferences}
              studyProgress={studyProgress}
            />
          </div>
        )}

        <StudyPathSection
          preferences={profile?.preferences}
          studyProgress={studyProgress}
          onAdvanceWeek={advanceStudyPathWeek}
          onSelectWeek={setStudyPathWeek}
        />

        <WeeklyMeetingSection />

        {personalized ? (
          <section className="page-section card stack">
            <div className="section-header">
              <div>
                <p>
                  <UserCircle aria-hidden />
                  {personalized.introTitle}
                </p>
                <p>
                  {personalized.introSubtitle}
                </p>
                <p>
                  {personalized.readingTip}
                </p>
              </div>
              <Link href="/profil">
                <Button variant="outline" size="sm">
                  Modifier mon profil
                </Button>
              </Link>
            </div>
          </section>
        ) : (
          <section className="page-section card stack">
            <div className="section-header">
              <div>
                <p>
                  <Sparkles aria-hidden />
                  Lire, méditer, ancrer
                </p>
                <p>
                  Suivez le parcours en 4 semaines, lisez des études structurées, puis
                  consolidez avec les mini-jeux de chaque thématique.
                </p>
                <p>
                  <Link href="/profil">
                    Créez un profil
                  </Link>{" "}
                  pour adapter le parcours à votre situation.
                </p>
              </div>
              <div>
                <p>+15 XP par bonne réponse (mini-jeux)</p>
                <p>Marquez un article lu en bas de page</p>
              </div>
            </div>
          </section>
        )}

        {unreadFeatured.length > 0 && (
          <section className="page-section" aria-label="À lire maintenant">
            <div className="section-header">
              <div>
                <h2>À lire maintenant</h2>
                <p>
                  Articles recommandés que vous n&apos;avez pas encore lus
                </p>
              </div>
              <Link href="/etude/articles?filter=unread">
                Tout voir
              </Link>
            </div>
            <div className="card-grid">
              {unreadFeatured.map((article) => (
                <StudyArticleCard key={article.id} article={article} compact />
              ))}
            </div>
          </section>
        )}

        <section className="page-section stack">
          <div className="section-header">
            <div>
              <h2>Thématiques</h2>
            </div>
            <div>
              <Search aria-hidden />
              <input
                type="search"
                value={themeQuery}
                onChange={(e) => setThemeQuery(e.target.value)}
                placeholder="Rechercher une thématique…"
                aria-label="Rechercher une thématique"
              />
            </div>
          </div>

          <SegmentTabs
            items={THEME_FILTERS}
            value={themeFilter}
            onChange={setThemeFilter} scrollable ariaLabel="Filtrer les thématiques" />
        </section>

        {showSplit ? (
          <>
            {filteredRecommended.length > 0 && (
              <section aria-label="Thématiques recommandées">
                <h3>
                  Recommandé pour vous ({filteredRecommended.length})
                </h3>
                <ScrollRevealGroup>
                  {filteredRecommended.map((theme) => (
                    <ScrollRevealItem key={theme.id}>
                      <StudyThemeCard theme={theme} showProgress />
                    </ScrollRevealItem>
                  ))}
                </ScrollRevealGroup>
              </section>
            )}

            {filteredOther.length > 0 && (
              <section aria-label="Autres thématiques">
                <h3>
                  Autres thématiques ({filteredOther.length})
                </h3>
                <div className="card-grid">
                  {filteredOther.map((theme) => (
                    <StudyThemeCard key={theme.id} theme={theme} showProgress />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <section aria-label="Thématiques d'étude">
            {filteredAll.length === 0 ? (
              <p>
                Aucune thématique ne correspond à votre recherche.
              </p>
            ) : (
              <div className="card-grid">
                {filteredAll.map((theme) => (
                  <StudyThemeCard key={theme.id} theme={theme} showProgress />
                ))}
              </div>
            )}
          </section>
        )}

        {showSplit &&
          filteredRecommended.length === 0 &&
          filteredOther.length === 0 && (
            <p>
              Aucune thématique ne correspond à votre recherche.
            </p>
          )}
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}

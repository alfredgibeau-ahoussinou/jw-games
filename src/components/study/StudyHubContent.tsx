"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Search, Sparkles, UserCircle } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioPageHero } from "@/components/studio/StudioPageHero";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { ScrollRevealGroup, ScrollRevealItem } from "@/components/motion/ScrollReveal";
import { StudyThemeCard } from "@/components/study/StudyThemeCard";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { StudyPathSection } from "@/components/study/StudyPathSection";
import { WeeklyMeetingSection } from "@/components/study/WeeklyMeetingSection";
import { StudyContinueBanner } from "@/components/study/StudyContinueBanner";
import {
  StudyHubPathTiles,
  type StudyHubPath,
} from "@/components/study/StudyHubPathTiles";
import { STUDY_ARTICLES } from "@/data/study/articles";
import { STUDY_THEMES, getThemeArticles } from "@/data/study-themes";
import { Button } from "@/components/ui/Button";
import { SegmentTabs } from "@/components/ui/SegmentTabs";
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

type ThemeFilter = "all" | "progress" | "done";

const THEME_FILTERS: { id: ThemeFilter; label: string }[] = [
  { id: "all", label: "Toutes" },
  { id: "progress", label: "En cours" },
  { id: "done", label: "Terminées" },
];

const panelMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.22, ease: "easeOut" as const },
};

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
    const haystack = [theme.title, theme.subtitle, theme.description, theme.scriptureRef]
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

  const [activePath, setActivePath] = useState<StudyHubPath | null>(null);
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
    () => featured.filter((a) => !isArticleRead(studyProgress, a.id)).slice(0, 6),
    [featured, studyProgress]
  );

  const recommendedThemes = personalized?.recommendedThemes ?? STUDY_THEMES;
  const otherThemes = personalized?.otherThemes ?? [];
  const showSplit = Boolean(personalized && otherThemes.length > 0);

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

  const pathLabels: Record<StudyHubPath, string> = {
    parcours: "Mon parcours",
    thematiques: "Les pôles",
    articles: "Bibliothèque",
  };

  return (
    <PageWrapper>
      <StudioPageShell>
        <StudioPageHero
          eyebrow="Étude personnelle"
          title="Lire, méditer,"
          titleAccent="jouer"
          description={
            activePath
              ? pathLabels[activePath]
              : "Choisissez un chemin — le contenu s'affiche au fur et à mesure."
          }
          imageSrc={jwImageForSlot("hero.etude").url}
        >
          <Link href="/etude/articles">
            <Button variant="outline" size="sm">
              Tous les articles
            </Button>
          </Link>
        </StudioPageHero>

        <StudioPageBody>
          {(isOnboarded || studyProgress.lastArticleId) && !activePath && (
            <StudyContinueBanner
              preferences={profile?.preferences}
              studyProgress={studyProgress}
              compact
            />
          )}

          <StudyHubPathTiles
            activePath={activePath}
            onSelect={(path) => setActivePath(path === activePath ? null : path)}
            themeCount={STUDY_THEMES.length}
          />

          <AnimatePresence mode="wait">
            {activePath && (
              <motion.div
                key={activePath}
                {...panelMotion}
                className="space-y-6"
              >
                <button
                  type="button"
                  onClick={() => setActivePath(null)}
                  aria-label="Retour aux chemins d'étude"
                  className="flex min-h-[2.75rem] items-center gap-2 rounded-lg px-1 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Retour aux chemins
                </button>

                {activePath === "parcours" && (
                  <div className="space-y-6">
                    {!personalized && (
                      <section className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent-light)] p-5 sm:p-6">
                        <p className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                          <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
                          Parcours en 4 semaines
                        </p>
                        <p className="text-body mt-2 text-sm">
                          Chaque semaine propose des articles à lire dans l&apos;ordre. Marquez-les
                          comme lus en bas de page, puis passez à la semaine suivante.
                        </p>
                        {!isOnboarded && (
                          <p className="text-caption mt-2">
                            <Link href="/profil" className="link-primary">
                              Créez un profil
                            </Link>{" "}
                            pour adapter le parcours à votre situation.
                          </p>
                        )}
                      </section>
                    )}

                    {personalized && (
                      <section className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="space-y-2">
                            <p className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                              <UserCircle className="h-4 w-4 shrink-0" aria-hidden />
                              {personalized.introTitle}
                            </p>
                            <p className="text-body text-sm">{personalized.introSubtitle}</p>
                            <p className="text-caption">{personalized.readingTip}</p>
                          </div>
                          <Link href="/profil" className="shrink-0">
                            <Button variant="outline" size="sm">
                              Modifier mon profil
                            </Button>
                          </Link>
                        </div>
                      </section>
                    )}

                    <StudyPathSection
                      preferences={profile?.preferences}
                      studyProgress={studyProgress}
                      onAdvanceWeek={advanceStudyPathWeek}
                      onSelectWeek={setStudyPathWeek}
                    />

                    <WeeklyMeetingSection />

                    <p className="text-caption text-center">
                      {stats.readArticles} articles lus · {stats.completedGames} mini-jeux · parcours{" "}
                      {stats.pathRead}/{stats.pathTotal}
                    </p>
                  </div>
                )}

                {activePath === "thematiques" && (
                  <div className="space-y-6">
                    <section className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
                      <h2 className="text-heading">Choisissez un pôle</h2>
                      <p className="text-body mt-2 text-sm">
                        Chaque thématique propose une introduction détaillée, des méditations, des
                        articles et des mini-jeux. Cliquez sur un pôle pour découvrir comment
                        avancer étape par étape.
                      </p>
                    </section>

                    <div className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <SegmentTabs
                          items={THEME_FILTERS}
                          value={themeFilter}
                          onChange={setThemeFilter}
                          scrollable
                          ariaLabel="Filtrer les thématiques"
                        />
                        <div className="relative w-full sm:w-auto sm:min-w-[14rem]">
                          <Search
                            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-dim)]"
                            aria-hidden
                          />
                          <input
                            type="search"
                            value={themeQuery}
                            onChange={(e) => setThemeQuery(e.target.value)}
                            placeholder="Rechercher…"
                            aria-label="Rechercher une thématique"
                            className="input-field w-full pl-9"
                          />
                        </div>
                      </div>

                      {showSplit ? (
                        <>
                          {filteredRecommended.length > 0 && (
                            <section aria-label="Thématiques recommandées">
                              <h3 className="text-heading mb-4">
                                Recommandé pour vous ({filteredRecommended.length})
                              </h3>
                              <ScrollRevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredRecommended.map((theme) => (
                                  <ScrollRevealItem key={theme.id}>
                                    <StudyThemeCard theme={theme} compact />
                                  </ScrollRevealItem>
                                ))}
                              </ScrollRevealGroup>
                            </section>
                          )}
                          {filteredOther.length > 0 && (
                            <section aria-label="Autres thématiques">
                              <h3 className="text-heading mb-4">
                                Autres thématiques ({filteredOther.length})
                              </h3>
                              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredOther.map((theme) => (
                                  <StudyThemeCard key={theme.id} theme={theme} compact />
                                ))}
                              </div>
                            </section>
                          )}
                        </>
                      ) : filteredAll.length === 0 ? (
                        <p className="text-caption">Aucune thématique ne correspond à votre recherche.</p>
                      ) : (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {filteredAll.map((theme) => (
                            <StudyThemeCard key={theme.id} theme={theme} compact />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activePath === "articles" && (
                  <div className="space-y-6">
                    <section className="flex flex-wrap items-start justify-between gap-4 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
                      <div>
                        <h2 className="text-heading">Bibliothèque d&apos;étude</h2>
                        <p className="text-body mt-2 text-sm">
                          {STUDY_ARTICLES.length} articles des Tours de garde, de Réveillez-vous ! et
                          des livres — lus directement sur le site.
                        </p>
                      </div>
                      <Link href="/etude/articles" className="shrink-0">
                        <Button size="sm">Voir toute la bibliothèque</Button>
                      </Link>
                    </section>

                    {unreadFeatured.length > 0 ? (
                      <section aria-label="À lire maintenant">
                        <h3 className="text-heading mb-4">À lire maintenant</h3>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {unreadFeatured.map((article) => (
                            <StudyArticleCard key={article.id} article={article} compact />
                          ))}
                        </div>
                      </section>
                    ) : (
                      <p className="text-caption">
                        Vous avez lu tous les articles recommandés.{" "}
                        <Link href="/etude/articles" className="link-primary">
                          Parcourir la bibliothèque
                        </Link>
                      </p>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Link href="/etude/articles?filter=unread">
                        <Button variant="outline" size="sm">
                          Non lus
                        </Button>
                      </Link>
                      <Link href="/etude/articles?filter=read">
                        <Button variant="outline" size="sm">
                          Déjà lus
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!activePath && (
            <p className="text-caption text-center">
              Sélectionnez un chemin ci-dessus pour commencer
            </p>
          )}
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}

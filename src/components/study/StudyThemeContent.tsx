"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Circle,
  Compass,
  Gamepad2,
  Lightbulb,
  ListChecks,
  Sparkles,
  Target,
} from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { StudyMiniGameCard } from "@/components/study/StudyMiniGameCard";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { StudyReadingBlock } from "@/components/study/StudyReadingBlock";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { SegmentTabs } from "@/components/ui/SegmentTabs";
import { getThemeGuide } from "@/data/study/theme-guides";
import { getThemeArticles } from "@/data/study-themes";
import { STUDY_THEME_VISUALS } from "@/lib/study-visuals";
import { isArticleRead, isStudyGameDone } from "@/lib/study-progress";
import { useUserStore } from "@/stores/user-store";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { StudyTheme } from "@/types/study";

type ThemeTab = "decouvrir" | "parcours" | "ressources";

const TAB_ITEMS: { id: ThemeTab; label: string }[] = [
  { id: "decouvrir", label: "Découvrir" },
  { id: "parcours", label: "Comment avancer" },
  { id: "ressources", label: "Ressources" },
];

const panelMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.2, ease: "easeOut" as const },
};

interface StudyThemeContentProps {
  theme: StudyTheme;
}

export function StudyThemeContent({ theme }: StudyThemeContentProps) {
  const studyProgress = useUserStore((s) => s.studyProgress);
  const [activeTab, setActiveTab] = useState<ThemeTab>("decouvrir");

  const visual = STUDY_THEME_VISUALS[theme.id];
  const Icon = visual?.icon;
  const guide = getThemeGuide(theme);
  const readings = theme.readings ?? [];
  const articles = getThemeArticles(theme.id);

  const articlesRead = articles.filter((a) => isArticleRead(studyProgress, a.id)).length;
  const gamesDone = theme.miniGames.filter((g) =>
    isStudyGameDone(studyProgress, theme.id, g.id)
  ).length;

  const nextUnreadArticle = articles.find((a) => !isArticleRead(studyProgress, a.id));
  const nextUndoneGame = theme.miniGames.find(
    (g) => !isStudyGameDone(studyProgress, theme.id, g.id)
  );

  const stepStatus = useMemo(() => {
    const hasReadScripture = articlesRead > 0 || gamesDone > 0;
    const hasReadMeditations = readings.length === 0 || articlesRead > 0;
    const hasReadArticles = articles.length === 0 || articlesRead === articles.length;
    const hasPlayedGames = theme.miniGames.length === 0 || gamesDone === theme.miniGames.length;

    return guide.howToAdvance.map((step, i) => {
      if (i === 0) return hasReadScripture || activeTab !== "decouvrir";
      if (step.title.toLowerCase().includes("méditation") || step.title.toLowerCase().includes("lectures"))
        return hasReadMeditations && articlesRead > 0;
      if (step.title.toLowerCase().includes("article"))
        return hasReadArticles;
      if (step.title.toLowerCase().includes("jeu") || step.title.toLowerCase().includes("mini"))
        return hasPlayedGames;
      return false;
    });
  }, [guide.howToAdvance, readings.length, articlesRead, articles.length, gamesDone, theme.miniGames.length, activeTab]);

  const completedSteps = stepStatus.filter(Boolean).length;
  const totalSteps = guide.howToAdvance.length;

  return (
    <PageWrapper>
      <StudioPageShell>
        <PageHeader
          title={theme.title}
          description={theme.subtitle}
          backHref="/etude"
          backLabel="Étude personnelle"
          icon={Icon}
        />

        <StudioPageBody className="space-y-6">
          {(articles.length > 0 || theme.miniGames.length > 0) && (
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/[0.06] bg-[var(--bg-card)] p-4">
                <p className="text-caption text-[0.6875rem]">Progression du pôle</p>
                <p className="mt-1 text-lg font-bold tabular-nums text-[var(--accent)]">
                  {completedSteps}/{totalSteps}{" "}
                  <span className="text-sm font-normal text-[var(--text-muted)]">étapes</span>
                </p>
                <ProgressBar value={completedSteps} max={totalSteps} className="mt-2" />
              </div>
              {articles.length > 0 && (
                <div className="rounded-xl border border-white/[0.06] bg-[var(--bg-card)] p-4">
                  <p className="text-caption text-[0.6875rem]">Articles lus</p>
                  <p className="mt-1 text-lg font-bold tabular-nums text-[var(--accent)]">
                    {articlesRead}{" "}
                    <span className="text-sm font-normal text-[var(--text-muted)]">/ {articles.length}</span>
                  </p>
                  <ProgressBar value={articlesRead} max={articles.length} className="mt-2" />
                </div>
              )}
              {theme.miniGames.length > 0 && (
                <div className="rounded-xl border border-white/[0.06] bg-[var(--bg-card)] p-4">
                  <p className="text-caption text-[0.6875rem]">Mini-jeux</p>
                  <p className="mt-1 text-lg font-bold tabular-nums text-[var(--accent)]">
                    {gamesDone}{" "}
                    <span className="text-sm font-normal text-[var(--text-muted)]">/ {theme.miniGames.length}</span>
                  </p>
                  <ProgressBar value={gamesDone} max={theme.miniGames.length} className="mt-2" />
                </div>
              )}
            </div>
          )}

          {(nextUnreadArticle || nextUndoneGame) && (
            <div className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-light)] p-4 sm:p-5">
              {nextUnreadArticle ? (
                <Link
                  href={`/etude/article/${nextUnreadArticle.id}`}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--accent)]">
                    <BookOpen className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                      Prochaine étape
                    </span>
                    <span className="block truncate font-semibold">{nextUnreadArticle.title}</span>
                  </span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-0.5" />
                </Link>
              ) : (
                nextUndoneGame && (
                  <Link
                    href={`/etude/${theme.id}/${nextUndoneGame.id}`}
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--accent)]">
                      <Gamepad2 className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                        Prochain mini-jeu
                      </span>
                      <span className="block truncate font-semibold">{nextUndoneGame.title}</span>
                    </span>
                    <Button size="sm" variant="outline">
                      Jouer
                    </Button>
                  </Link>
                )
              )}
            </div>
          )}

          <SegmentTabs
            items={TAB_ITEMS}
            value={activeTab}
            onChange={setActiveTab}
            scrollable
            ariaLabel="Sections du pôle"
          />

          <AnimatePresence mode="wait">
            {activeTab === "decouvrir" && (
              <motion.div key="decouvrir" {...panelMotion} className="space-y-5">
                <section className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8">
                  {visual && (
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-3xl",
                        visual.gradient
                      )}
                    />
                  )}
                  <div className="relative space-y-5">
                    <div>
                      <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                        <Sparkles className="h-4 w-4" aria-hidden />
                        Introduction
                      </p>
                      <p className="text-[0.9375rem] leading-relaxed text-[var(--text-muted)]">
                        {guide.intro}
                      </p>
                    </div>

                    <blockquote className="scripture-block">
                      {theme.scriptureHighlight}
                      <footer className="scripture-ref mt-2 not-italic">
                        {theme.scriptureRef}
                      </footer>
                    </blockquote>
                  </div>
                </section>

                <section className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                    <Lightbulb className="h-4 w-4" aria-hidden />
                    Pourquoi ce thème ?
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-[var(--text-muted)]">
                    {guide.whyTheme}
                  </p>
                </section>

                <section className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
                  <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                    <Target className="h-4 w-4" aria-hidden />
                    Ce que vous allez apprendre
                  </p>
                  <ul className="space-y-2">
                    {guide.learningGoals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="flex justify-end">
                  <Button size="sm" onClick={() => setActiveTab("parcours")}>
                    Voir comment avancer
                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === "parcours" && (
              <motion.div key="parcours" {...panelMotion} className="space-y-5">
                <section className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
                  <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                    <Compass className="h-4 w-4" aria-hidden />
                    Votre parcours dans ce pôle
                  </p>
                  <p className="text-caption mb-5">
                    Suivez ces étapes dans l&apos;ordre — chaque section se débloque naturellement.
                  </p>

                  <ol className="space-y-3">
                    {guide.howToAdvance.map((step, i) => {
                      const done = stepStatus[i];
                      return (
                        <li
                          key={i}
                          className={cn(
                            "flex gap-4 rounded-xl border p-4 transition-colors",
                            done
                              ? "border-[var(--success-border)] bg-[var(--success-bg)]"
                              : "border-white/[0.06] bg-[var(--bg-elevated)]"
                          )}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-sm font-bold tabular-nums">
                            {i + 1}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-semibold">{step.title}</p>
                              {done ? (
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--success)]" aria-hidden />
                              ) : (
                                <Circle className="h-5 w-5 shrink-0 text-[var(--text-dim)]" aria-hidden />
                              )}
                            </div>
                            <p className="text-caption mt-1">{step.detail}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </section>

                {readings.length > 0 && (
                  <section aria-label="Lectures à méditer" className="space-y-3">
                    <p className="flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                      <ListChecks className="h-4 w-4" aria-hidden />
                      À méditer ({readings.length})
                    </p>
                    {readings.map((reading, i) => (
                      <StudyReadingBlock
                        key={reading.id}
                        reading={reading}
                        index={i + 1}
                        defaultOpen={i === 0}
                      />
                    ))}
                  </section>
                )}

                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="outline" onClick={() => setActiveTab("decouvrir")}>
                    Retour à l&apos;intro
                  </Button>
                  <Button size="sm" onClick={() => setActiveTab("ressources")}>
                    Voir articles & jeux
                  </Button>
                </div>
              </motion.div>
            )}

            {activeTab === "ressources" && (
              <motion.div key="ressources" {...panelMotion} className="space-y-8">
                {articles.length > 0 && (
                  <section aria-label="Articles" className="space-y-4">
                    <div>
                      <h2 className="text-heading">Tours de garde & Réveillez-vous !</h2>
                      <p className="text-caption mt-1">
                        Études structurées — sections, Écritures citées et questions de méditation.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {articles.map((article) => (
                        <StudyArticleCard key={article.id} article={article} />
                      ))}
                    </div>
                  </section>
                )}

                {theme.miniGames.length > 0 && (
                  <section aria-label="Mini-jeux" className="space-y-4">
                    <div>
                      <h2 className="text-heading">Mini-jeux de ce pôle</h2>
                      <p className="text-caption mt-1">+15 XP par bonne réponse</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {theme.miniGames.map((game) => (
                        <StudyMiniGameCard key={game.id} themeId={theme.id} game={game} />
                      ))}
                    </div>
                  </section>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}

"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { StudyMiniGameCard } from "@/components/study/StudyMiniGameCard";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { StudyReadingBlock } from "@/components/study/StudyReadingBlock";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { getThemeArticles } from "@/data/study-themes";
import { STUDY_THEME_VISUALS } from "@/lib/study-visuals";
import { isArticleRead, isStudyGameDone } from "@/lib/study-progress";
import { useUserStore } from "@/stores/user-store";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { StudyTheme } from "@/types/study";

interface StudyThemeContentProps {
  theme: StudyTheme;
}

export function StudyThemeContent({ theme }: StudyThemeContentProps) {
  const studyProgress = useUserStore((s) => s.studyProgress);
  const visual = STUDY_THEME_VISUALS[theme.id];
  const Icon = visual?.icon;
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

        <StudioPageBody className="space-y-10">
          {(articles.length > 0 || theme.miniGames.length > 0) && (
            <section className="grid gap-4 sm:grid-cols-2">
              {articles.length > 0 && (
                <div className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5">
                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <p className="text-sm text-[var(--text-muted)]">Articles lus</p>
                    <p className="text-lg font-bold tabular-nums text-[var(--accent)]">
                      {articlesRead} <span className="text-sm font-normal text-[var(--text-muted)]">/ {articles.length}</span>
                    </p>
                  </div>
                  <ProgressBar value={articlesRead} max={articles.length} />
                </div>
              )}
              {theme.miniGames.length > 0 && (
                <div className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5">
                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <p className="text-sm text-[var(--text-muted)]">Mini-jeux terminés</p>
                    <p className="text-lg font-bold tabular-nums text-[var(--accent)]">
                      {gamesDone}{" "}
                      <span className="text-sm font-normal text-[var(--text-muted)]">/ {theme.miniGames.length}</span>
                    </p>
                  </div>
                  <ProgressBar value={gamesDone} max={theme.miniGames.length} />
                </div>
              )}
            </section>
          )}

          {(nextUnreadArticle || nextUndoneGame) && (
            <div className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-light)] p-4 sm:p-5">
              {nextUnreadArticle && (
                <Link
                  href={`/etude/article/${nextUnreadArticle.id}`}
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--accent)]">
                    <BookOpen className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                      Prochain article
                    </span>
                    <span className="block truncate font-semibold">{nextUnreadArticle.title}</span>
                  </span>
                  <ChevronRight className="h-5 w-5 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
              {nextUndoneGame && !nextUnreadArticle && (
                <Link
                  href={`/etude/${theme.id}/${nextUndoneGame.id}`}
                  className="flex flex-wrap items-center justify-between gap-3"
                >
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                      Prochain mini-jeu
                    </span>
                    <span className="block font-semibold">{nextUndoneGame.title}</span>
                  </span>
                  <Button size="sm" variant="outline">
                    Jouer
                  </Button>
                </Link>
              )}
            </div>
          )}

          <section className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-6 sm:p-8">
            {visual && (
              <div
                className={cn(
                  "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br opacity-20 blur-3xl",
                  visual.gradient
                )}
              />
            )}
            <div className="relative">
              <p className="text-[0.9375rem] leading-relaxed text-[var(--text-muted)]">
                {theme.description}
              </p>
              <blockquote className="mt-6 border-l-2 border-[var(--accent)] pl-4 italic text-[var(--text-secondary)]">
                {theme.scriptureHighlight}
                <footer className="mt-2 text-sm not-italic text-[var(--text-dim)]">
                  {theme.scriptureRef}
                </footer>
              </blockquote>
            </div>
          </section>

          {readings.length > 0 && (
            <section aria-label="Lectures" className="space-y-4">
              <h2 className="text-heading">À méditer</h2>
              <div className="space-y-3">
                {readings.map((reading) => (
                  <StudyReadingBlock key={reading.id} reading={reading} />
                ))}
              </div>
            </section>
          )}

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

          <section aria-label="Mini-jeux" className="space-y-4">
            <h2 className="text-heading">Mini-jeux de cette thématique</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {theme.miniGames.map((game) => (
                <StudyMiniGameCard key={game.id} themeId={theme.id} game={game} />
              ))}
            </div>
          </section>
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}

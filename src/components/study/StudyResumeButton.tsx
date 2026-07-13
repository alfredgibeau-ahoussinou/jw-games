"use client";

import Link from "next/link";
import { BookOpen, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getStudyArticle } from "@/data/study/articles";
import { getStudyTheme } from "@/data/study-themes";
import { getNextPathStep } from "@/lib/study-paths";
import { isArticleRead, isStudyGameDone, type StudyProgress } from "@/lib/study-progress";
import type { UserPreferences } from "@/types/user";
import { cn } from "@/lib/cn";

interface StudyResumeButtonProps {
  preferences?: UserPreferences | null;
  studyProgress: StudyProgress;
  className?: string;
}

export function StudyResumeButton({
  preferences,
  studyProgress,
  className,
}: StudyResumeButtonProps) {
  const lastArticle = studyProgress.lastArticleId
    ? getStudyArticle(studyProgress.lastArticleId)
    : null;
  const lastRead = lastArticle && isArticleRead(studyProgress, lastArticle.id);

  const nextStep = getNextPathStep(
    preferences,
    studyProgress.currentPathWeek,
    studyProgress.readArticleIds
  );

  let href: string | null = null;
  let title = "";
  let subtitle = "";

  if (lastArticle && !lastRead) {
    href = `/etude/article/${lastArticle.id}`;
    title = lastArticle.title;
    subtitle = "Reprendre votre lecture";
  } else if (nextStep) {
    href = nextStep.href ?? `/etude/article/${nextStep.articleId}`;
    title = nextStep.label;
    subtitle = "Prochaine étape du parcours";
  } else if (studyProgress.lastThemeId) {
    const theme = getStudyTheme(studyProgress.lastThemeId);
    if (theme) {
      const pendingGame = theme.miniGames.find(
        (g) => !isStudyGameDone(studyProgress, theme.id, g.id)
      );
      if (pendingGame) {
        href = `/etude/${theme.id}/${pendingGame.id}`;
        title = pendingGame.title;
        subtitle = `Mini-jeu · ${theme.title}`;
      } else {
        href = `/etude/${theme.id}`;
        title = theme.title;
        subtitle = "Continuer ce pôle";
      }
    }
  }

  if (!href || !title) return null;

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-[var(--accent)]/35 bg-gradient-to-r from-[var(--accent-light)] to-[var(--bg-card)] p-4 sm:flex-row sm:items-center sm:p-5",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/20 text-[var(--accent)]">
          <BookOpen className="h-5 w-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            {subtitle}
          </p>
          <p className="mt-0.5 truncate text-base font-semibold">{title}</p>
        </div>
      </div>
      <Link href={href} className="shrink-0">
        <Button size="lg" className="w-full min-h-12 sm:w-auto">
          <Play className="h-4 w-4" aria-hidden />
          Reprendre
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Button>
      </Link>
    </div>
  );
}

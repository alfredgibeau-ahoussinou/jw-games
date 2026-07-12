"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getStudyArticle } from "@/data/study/articles";
import { getStudyTheme } from "@/data/study-themes";
import { getNextPathStep, getStudyPathWeek } from "@/lib/study-paths";
import { isArticleRead, type StudyProgress } from "@/lib/study-progress";
import type { UserPreferences } from "@/types/user";
import { cn } from "@/lib/cn";

interface StudyContinueBannerProps {
  preferences?: UserPreferences | null;
  studyProgress: StudyProgress;
  compact?: boolean;
}

export function StudyContinueBanner({
  preferences,
  studyProgress,
  compact,
}: StudyContinueBannerProps) {
  const lastArticle = studyProgress.lastArticleId
    ? getStudyArticle(studyProgress.lastArticleId)
    : null;
  const lastRead = lastArticle && isArticleRead(studyProgress, lastArticle.id);

  const pathWeek = getStudyPathWeek(preferences, studyProgress.currentPathWeek);
  const nextStep = getNextPathStep(
    preferences,
    studyProgress.currentPathWeek,
    studyProgress.readArticleIds
  );

  const continueArticle =
    lastArticle && !lastRead
      ? lastArticle
      : nextStep && !nextStep.href
        ? getStudyArticle(nextStep.articleId)
        : null;

  const continueHref =
    lastArticle && !lastRead
      ? `/etude/article/${lastArticle.id}`
      : nextStep?.href ?? (nextStep ? `/etude/article/${nextStep.articleId}` : null);

  const continueTitle =
    lastArticle && !lastRead ? lastArticle.title : nextStep?.label ?? continueArticle?.title;

  if (!continueHref || !continueTitle) return null;

  const theme = continueArticle?.themeId
    ? getStudyTheme(continueArticle.themeId)
    : undefined;
  const href = continueHref;
  const label = lastArticle && !lastRead ? "Reprendre votre lecture" : "Prochaine étape du parcours";

  const bannerClass = cn(
    "flex items-center gap-4 rounded-xl border border-[var(--accent)]/25 bg-gradient-to-r from-[var(--accent-light)]/60 to-[var(--bg-card)] px-4 py-3.5 transition-colors",
    compact && "hover:border-[var(--accent)]/40 hover:bg-[var(--accent-light)]/80"
  );

  if (compact) {
    return (
      <Link href={href} className={cn(bannerClass, "group")}>
        <BookOpen className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-[var(--text-muted)]">{label}</p>
          <p className="truncate text-sm font-semibold">{continueTitle}</p>
        </div>
        <ChevronRight
          className="h-5 w-5 shrink-0 text-[var(--text-dim)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
          aria-hidden
        />
      </Link>
    );
  }

  return (
    <div className={bannerClass}>
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 text-xs font-medium text-[var(--accent)]">
          <BookOpen className="h-4 w-4 shrink-0" aria-hidden />
          {label}
        </p>
        <p className="mt-1 text-base font-semibold tracking-tight">{continueTitle}</p>
        <p className="mt-0.5 text-caption">
          {pathWeek?.title}
          {theme ? ` · ${theme.title}` : ""}
        </p>
      </div>
      <Link href={href} className="shrink-0">
        <Button variant="primary">Continuer</Button>
      </Link>
    </div>
  );
}

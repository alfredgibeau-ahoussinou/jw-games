"use client";

import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getStudyArticle } from "@/data/study/articles";
import { getStudyTheme } from "@/data/study-themes";
import { getNextPathStep, getStudyPathWeek } from "@/lib/study-paths";
import { isArticleRead, type StudyProgress } from "@/lib/study-progress";
import type { UserPreferences } from "@/types/user";

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

  if (compact) {
    return (
      <Link href={href} className="promo-bar netflix-continue">
        <BookOpen aria-hidden />
        <div>
          <p>{label}</p>
          <p>{continueTitle}</p>
        </div>
        <ChevronRight aria-hidden />
      </Link>
    );
  }

  return (
    <div className="promo-bar netflix-continue">
      <div>
        <p>
          <BookOpen aria-hidden />
          {label}
        </p>
        <p>{continueTitle}</p>
        <p>
          {pathWeek?.title}
          {theme ? ` · ${theme.title}` : ""}
        </p>
      </div>
      <Link href={href}>
        <Button variant="primary">Continuer</Button>
      </Link>
    </div>
  );
}

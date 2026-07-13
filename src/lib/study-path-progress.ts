import type { UserPreferences } from "@/types/user";
import { getStudyPathWeeks, getNextPathStep } from "@/lib/study-paths";
import type { StudyProgress } from "@/lib/study-progress";
import { isArticleRead } from "@/lib/study-progress";

export interface PathProgressInfo {
  week: number;
  weekTitle: string;
  stepsDone: number;
  totalSteps: number;
  totalWeeks: number;
  completedWeeks: number;
  label: string;
}

/** Progression dans le parcours guidé (semaine courante + étapes). */
export function getPathProgressInfo(
  preferences: UserPreferences | null | undefined,
  studyProgress: StudyProgress
): PathProgressInfo {
  const weeks = getStudyPathWeeks(preferences);
  const currentWeek = studyProgress.currentPathWeek;
  const weekData = weeks.find((w) => w.week === currentWeek) ?? weeks[0];
  const totalSteps = weekData?.steps.length ?? 3;
  const stepsDone =
    weekData?.steps.filter((s) => isArticleRead(studyProgress, s.articleId)).length ?? 0;

  const completedWeeks = weeks.filter((w) =>
    w.steps.every((s) => isArticleRead(studyProgress, s.articleId))
  ).length;

  const nextStep = getNextPathStep(
    preferences,
    currentWeek,
    studyProgress.readArticleIds
  );

  const label = nextStep
    ? `Étape ${stepsDone + 1}/${totalSteps} — ${weekData?.title ?? ""}`
    : `Semaine ${currentWeek} terminée`;

  return {
    week: currentWeek,
    weekTitle: weekData?.title ?? `Semaine ${currentWeek}`,
    stepsDone,
    totalSteps,
    totalWeeks: weeks.length,
    completedWeeks,
    label,
  };
}

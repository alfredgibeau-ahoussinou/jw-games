import { STUDY_ARTICLES } from "@/data/study/articles";
import { STUDY_THEMES } from "@/data/study-themes";

export interface StudyProgress {
  readArticleIds: string[];
  completedStudyGames: string[];
  lastArticleId: string | null;
  lastThemeId: string | null;
  currentPathWeek: number;
  pathStartedAt: string | null;
}

export function emptyStudyProgress(): StudyProgress {
  return {
    readArticleIds: [],
    completedStudyGames: [],
    lastArticleId: null,
    lastThemeId: null,
    currentPathWeek: 1,
    pathStartedAt: null,
  };
}

export function studyGameKey(themeId: string, gameId: string): string {
  return `${themeId}/${gameId}`;
}

export function parseStudyGameKey(key: string): { themeId: string; gameId: string } | null {
  const i = key.indexOf("/");
  if (i <= 0) return null;
  return { themeId: key.slice(0, i), gameId: key.slice(i + 1) };
}

export function isArticleRead(progress: StudyProgress, articleId: string): boolean {
  return progress.readArticleIds.includes(articleId);
}

export function isStudyGameDone(progress: StudyProgress, themeId: string, gameId: string): boolean {
  return progress.completedStudyGames.includes(studyGameKey(themeId, gameId));
}

export interface StudyOverviewStats {
  readArticles: number;
  totalArticles: number;
  completedGames: number;
  totalGames: number;
  pathRead: number;
  pathTotal: number;
}

export function getStudyOverviewStats(
  studyProgress: StudyProgress,
  pathArticleIds: string[]
): StudyOverviewStats {
  const totalGames = STUDY_THEMES.reduce((n, t) => n + t.miniGames.length, 0);
  return {
    readArticles: studyProgress.readArticleIds.length,
    totalArticles: STUDY_ARTICLES.length,
    completedGames: studyProgress.completedStudyGames.length,
    totalGames,
    pathRead: pathArticleIds.filter((id) => isArticleRead(studyProgress, id)).length,
    pathTotal: pathArticleIds.length,
  };
}

export interface ThemeStudyStats {
  articlesRead: number;
  articlesTotal: number;
  gamesDone: number;
  gamesTotal: number;
  percent: number;
  hasStarted: boolean;
  isComplete: boolean;
}

export function getThemeStudyStats(
  progress: StudyProgress,
  articlesTotal: number,
  articlesRead: number,
  gamesTotal: number,
  gamesDone: number
): ThemeStudyStats {
  const total = articlesTotal + gamesTotal;
  const done = articlesRead + gamesDone;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;
  return {
    articlesRead,
    articlesTotal,
    gamesDone,
    gamesTotal,
    percent,
    hasStarted: done > 0,
    isComplete: total > 0 && done === total,
  };
}

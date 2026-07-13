import { getThemeArticles } from "@/data/study-themes";
import { estimateReadMinutes } from "@/data/study/article-builder";
import type { StudyTheme } from "@/types/study";

/** Temps estimé pour un pôle (lecture + mini-jeux). */
export function estimateThemeMinutes(theme: StudyTheme): number {
  const articles = getThemeArticles(theme.id);
  const readMinutes = articles.reduce(
    (sum, a) => sum + estimateReadMinutes(a.body),
    0
  );
  const gameMinutes = theme.miniGames.reduce(
    (sum, g) => sum + (g.estimatedMinutes ?? 3),
    0
  );
  return Math.max(5, readMinutes + gameMinutes);
}

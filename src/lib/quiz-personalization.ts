import type { DifficultyLevel } from "@/types/content";
import type { BibleLevel } from "@/types/user";

/** Difficultés recommandées selon le niveau biblique déclaré. */
export function getRecommendedQuizDifficulties(bibleLevel: BibleLevel): DifficultyLevel[] {
  switch (bibleLevel) {
    case "debutant":
      return ["facile", "moyen"];
    case "intermediaire":
      return ["facile", "moyen", "difficile"];
    case "avance":
      return ["moyen", "difficile", "expert"];
  }
}

export function defaultDifficultyForBibleLevel(bibleLevel: BibleLevel): DifficultyLevel {
  switch (bibleLevel) {
    case "debutant":
      return "facile";
    case "intermediaire":
      return "moyen";
    case "avance":
      return "difficile";
  }
}

export function filterQuestionsByDifficulties<T extends { difficulty: DifficultyLevel }>(
  items: T[],
  difficulties: DifficultyLevel[]
): T[] {
  const allowed = new Set(difficulties);
  return items.filter((q) => allowed.has(q.difficulty));
}

/** Packs rapidité recommandés par niveau biblique. */
export function getRecommendedSpeedSetIds(bibleLevel: BibleLevel): string[] {
  switch (bibleLevel) {
    case "debutant":
      return ["classic"];
    case "intermediaire":
      return ["classic", "rapide"];
    case "avance":
      return ["rapide", "expert"];
  }
}

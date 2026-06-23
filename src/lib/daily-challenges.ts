import type { GameMode } from "@/types/game";

export const DAILY_THRESHOLDS = {
  quiz: 3,
  speed: 1,
  memory: 1,
  video: 1,
} as const;

export const DAILY_TASKS = [
  {
    id: "quiz" as const,
    label: "3 bonnes réponses au quiz",
    href: "/jeux/quiz",
    threshold: DAILY_THRESHOLDS.quiz,
    unit: "bonnes réponses",
    icon: "📖",
  },
  {
    id: "speed" as const,
    label: "1 défi de rapidité réussi",
    href: "/jeux/rapidite",
    threshold: DAILY_THRESHOLDS.speed,
    unit: "réussite",
    icon: "⚡",
  },
  {
    id: "memory" as const,
    label: "1 partie de mémoire terminée",
    href: "/jeux/memoire",
    threshold: DAILY_THRESHOLDS.memory,
    unit: "partie",
    icon: "🧠",
  },
  {
    id: "video" as const,
    label: "Regarder 1 vidéo JW.org",
    href: "/mediatheque",
    threshold: DAILY_THRESHOLDS.video,
    unit: "vidéo",
    icon: "🎬",
  },
] as const;

export type DailyTaskId = (typeof DAILY_TASKS)[number]["id"];

export function calcXp(mode: GameMode, score: number, total: number, extra?: { moves?: number }) {
  switch (mode) {
    case "quiz":
    case "thematique":
    case "videoquiz":
      return score * 20;
    case "rapidite":
      return score * 25;
    case "memoire": {
      const moves = extra?.moves ?? 20;
      return Math.max(50, 220 - moves * 6);
    }
    case "undercover":
      return 30;
    case "quotidien":
      return 100;
    case "vraifaux":
    case "versets":
      return score * 18;
    case "ordre":
      return score * 22;
    case "mots":
      return score * 20;
    case "cartes":
      return Math.min(80, score * 8);
    case "devinettes":
    case "biblio":
    case "etude":
      return score * 20;
    default:
      return score * 15;
  }
}

export function getAccuracyLabel(score: number, total: number) {
  if (total === 0) return "—";
  const pct = Math.round((score / total) * 100);
  if (pct === 100) return "Parfait !";
  if (pct >= 80) return "Excellent";
  if (pct >= 60) return "Bien";
  if (pct >= 40) return "Pas mal";
  return "Continuez !";
}

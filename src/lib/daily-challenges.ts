import type { GameMode } from "@/types/game";
import type { UserPreferences } from "@/types/user";

export const DAILY_THRESHOLDS = {
  quiz: 3,
  speed: 1,
  memory: 1,
  video: 1,
  vraifaux: 1,
  dailytext: 1,
  languages: 5,
} as const;

export type DailyTaskId = keyof typeof DAILY_THRESHOLDS;

export const DAILY_TASKS = [
  {
    id: "dailytext" as const,
    label: "Texte du jour — lire et répondre au quiz",
    href: "/quotidien#texte-du-jour",
    threshold: DAILY_THRESHOLDS.dailytext,
    unit: "quiz",
    icon: "📜",
  },
  {
    id: "quiz" as const,
    label: "3 bonnes réponses au quiz biblique",
    href: "/jeux/quiz",
    threshold: DAILY_THRESHOLDS.quiz,
    unit: "bonnes réponses",
    icon: "📖",
  },
  {
    id: "vraifaux" as const,
    label: "1 partie vrai/faux",
    href: "/jeux/vrai-faux",
    threshold: DAILY_THRESHOLDS.vraifaux,
    unit: "partie",
    icon: "✅",
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
    label: "Visionner 1 vidéo officielle (quiz recommandé)",
    href: "/mediatheque",
    threshold: DAILY_THRESHOLDS.video,
    unit: "vidéo",
    icon: "🎬",
  },
  {
    id: "languages" as const,
    label: "5 phrases de prédication révisées",
    href: "/langues",
    threshold: DAILY_THRESHOLDS.languages,
    unit: "phrases",
    icon: "🗣️",
  },
] as const;

const MINISTRY_ROLES = new Set([
  "publieur",
  "pionnier-auxiliaire",
  "pionnier-permanent",
]);

const OCCASIONAL_IDS: DailyTaskId[] = ["dailytext", "quiz", "vraifaux"];
const WEEKLY_IDS: DailyTaskId[] = ["dailytext", "quiz", "vraifaux", "video"];

function isMinistryPublisher(preferences?: UserPreferences | null): boolean {
  return MINISTRY_ROLES.has(preferences?.ministryRole ?? "");
}

/** Missions adaptées à la fréquence déclarée — pas de surcharge pour un usage occasionnel. */
export function getDailyTasksForUser(preferences?: UserPreferences | null) {
  const freq = preferences?.playFrequency ?? "hebdomadaire";
  let tasks = [...DAILY_TASKS];

  if (freq === "occasionnel") {
    tasks = tasks.filter((t) => OCCASIONAL_IDS.includes(t.id));
  } else if (freq === "hebdomadaire") {
    tasks = tasks.filter((t) => WEEKLY_IDS.includes(t.id));
  }

  if (!isMinistryPublisher(preferences)) {
    tasks = tasks.filter((t) => t.id !== "languages");
  }

  return tasks;
}

export function getDailyThresholdsForUser(preferences?: UserPreferences | null) {
  const tasks = getDailyTasksForUser(preferences);
  const thresholds: Partial<Record<DailyTaskId, number>> = {};
  for (const t of tasks) {
    thresholds[t.id] = DAILY_THRESHOLDS[t.id];
  }
  return thresholds as Record<DailyTaskId, number>;
}

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

const FEATURED_GAMES: GameMode[] = ["quiz", "vraifaux", "rapidite", "memoire", "versets", "ordre"];
const FEATURED_THEMES = [
  { id: "priere", label: "La prière" },
  { id: "confiance", label: "Confiance en Jéhovah" },
  { id: "jesus", label: "Jésus Christ" },
  { id: "royaume", label: "Le Royaume" },
  { id: "bible", label: "Étude biblique" },
  { id: "service", label: "Le service" },
] as const;

export interface FeaturedDailyChallenge {
  gameId: GameMode;
  gameHref: string;
  gameLabel: string;
  themeId: string;
  themeLabel: string;
  themeHref: string;
  dateIso: string;
}

/** Défi du jour unifié — même sélection sur l'accueil et le hub jeux. */
export function getFeaturedDailyChallenge(dateIso: string): FeaturedDailyChallenge {
  const seed = dateIso.split("-").reduce((a, p) => a + parseInt(p, 10), 0);
  const gameId = FEATURED_GAMES[seed % FEATURED_GAMES.length];
  const theme = FEATURED_THEMES[(seed + 3) % FEATURED_THEMES.length];
  const gameLabels: Partial<Record<GameMode, string>> = {
    quiz: "Quiz biblique",
    vraifaux: "Vrai ou faux",
    rapidite: "Défi de rapidité",
    memoire: "Mémoire biblique",
    versets: "Compléter le verset",
    ordre: "Ordre des événements",
  };

  return {
    gameId,
    gameHref: `/jeux/${gameId === "vraifaux" ? "vrai-faux" : gameId === "rapidite" ? "rapidite" : gameId}`,
    gameLabel: gameLabels[gameId] ?? gameId,
    themeId: theme.id,
    themeLabel: theme.label,
    themeHref: `/etude/${theme.id}`,
    dateIso,
  };
}

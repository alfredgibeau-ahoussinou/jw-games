import type { GameMode } from "./game";
import type { PreachLanguageId } from "./language";
import { normalizePreferences } from "@/lib/user-preferences";

export type AgeRange = "7-12" | "13-17" | "18-29" | "30-49" | "50+" | "famille";

export type UserGoal = "jeux" | "etude" | "videos" | "versets" | "famille";

export type BibleLevel = "debutant" | "intermediaire" | "avance";

/** Rôle au ministère — pas d'identité personnelle */
export type MinistryRole =
  | "publieur"
  | "pionnier-auxiliaire"
  | "pionnier-permanent"
  | "etudiant-bible"
  | "jeune"
  | "parent"
  | "visiteur";

/** Comment la personne utilise l'application */
export type UsageMode = "solo" | "famille" | "groupe" | "assemblee";

export type PlayFrequency = "quotidien" | "hebdomadaire" | "occasionnel";

/** balanced = progression visible · calm = étude sans combos ni XP affichés en jeu */
export type StudyFocus = "balanced" | "calm";

export interface UserPreferences {
  ageRange: AgeRange;
  goal: UserGoal;
  bibleLevel: BibleLevel;
  avatarColor: string;
  ministryRole: MinistryRole;
  usageMode: UsageMode;
  playFrequency: PlayFrequency;
  studyFocus: StudyFocus;
  /** Langue cible préférée pour la prédication (proclamateurs) */
  preferredLanguageId?: PreachLanguageId;
}

export interface UserProfile {
  id: string;
  displayName: string;
  avatarUrl?: string;
  preferences?: UserPreferences;
  createdAt: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  totalGamesPlayed: number;
  streak: number;
  /** Date ISO (YYYY-MM-DD) de la dernière réclamation du défi quotidien */
  lastStreakClaimDate?: string;
  badges: Badge[];
  stats: UserStats;
  watchedVideos?: string[];
  favoriteVideoIds?: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: string;
}

export interface UserStats {
  totalCorrectAnswers: number;
  totalQuestions: number;
  accuracy: number;
  favoriteMode: GameMode | null;
  modeStats: Record<
    GameMode,
    { played: number; wins: number; bestScore: number }
  >;
  categoryMastery: Record<string, number>;
  videosWatched: number;
}

const emptyMode = { played: 0, wins: 0, bestScore: 0 };

export const DEFAULT_USER_STATS: UserStats = {
  totalCorrectAnswers: 0,
  totalQuestions: 0,
  accuracy: 0,
  favoriteMode: null,
  modeStats: {
    undercover: { ...emptyMode },
    quiz: { ...emptyMode },
    rapidite: { ...emptyMode },
    memoire: { ...emptyMode },
    thematique: { ...emptyMode },
    equipe: { ...emptyMode },
    quotidien: { ...emptyMode },
    vraifaux: { ...emptyMode },
    ordre: { ...emptyMode },
    mots: { ...emptyMode },
    versets: { ...emptyMode },
    cartes: { ...emptyMode },
    videoquiz: { ...emptyMode },
    devinettes: { ...emptyMode },
    biblio: { ...emptyMode },
    etude: { ...emptyMode },
  },
  categoryMastery: {},
  videosWatched: 0,
};

export function normalizeUserStats(stats?: Partial<UserStats> | null): UserStats {
  const base = { ...DEFAULT_USER_STATS, ...stats };
  const modeStats = { ...DEFAULT_USER_STATS.modeStats };

  for (const mode of Object.keys(modeStats) as GameMode[]) {
    const saved = stats?.modeStats?.[mode];
    modeStats[mode] = {
      played: saved?.played ?? 0,
      wins: saved?.wins ?? 0,
      bestScore: saved?.bestScore ?? 0,
    };
  }

  return {
    ...base,
    modeStats,
    categoryMastery: stats?.categoryMastery ?? {},
    videosWatched: stats?.videosWatched ?? 0,
  };
}

export function normalizeProfile(profile: UserProfile): UserProfile {
  const stats = normalizeUserStats(profile.stats);
  const fromStats = (stats as UserStats & { userPreferences?: UserPreferences }).userPreferences;

  return {
    ...profile,
    stats,
    preferences: normalizePreferences(profile.preferences ?? fromStats),
    watchedVideos: profile.watchedVideos ?? [],
    favoriteVideoIds: profile.favoriteVideoIds ?? [],
  };
}

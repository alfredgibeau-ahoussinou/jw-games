import type { GameMode } from "./game";

export interface UserProfile {
  id: string;
  displayName: string;
  avatarUrl?: string;
  createdAt: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  totalGamesPlayed: number;
  streak: number;
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
  return {
    ...profile,
    stats: normalizeUserStats(profile.stats),
    watchedVideos: profile.watchedVideos ?? [],
    favoriteVideoIds: profile.favoriteVideoIds ?? [],
  };
}

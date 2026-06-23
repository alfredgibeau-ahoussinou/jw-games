import type { UserStats, Badge } from "@/types/user";
import type { GameMode } from "@/types/game";

export interface DbProfile {
  id: string;
  device_id: string;
  display_name: string;
  xp: number;
  level: number;
  streak: number;
  total_games_played: number;
  stats: UserStats;
  badges: Badge[];
  daily_progress: DailyProgress;
  created_at: string;
  updated_at: string;
}

export interface DailyProgress {
  date: string;
  tasks: Record<string, boolean>;
  counts: Record<string, number>;
  claimed: boolean;
}

export interface DbGameSession {
  id: string;
  profile_id: string;
  mode: GameMode;
  score: number;
  total: number;
  xp_earned: number;
  created_at: string;
}

export interface ProfileUpsertInput {
  deviceId: string;
  displayName: string;
  xp: number;
  level: number;
  streak: number;
  totalGamesPlayed: number;
  stats: UserStats;
  badges: Badge[];
  dailyProgress: DailyProgress;
}

export interface GameSessionInput {
  deviceId: string;
  mode: GameMode;
  score: number;
  total: number;
  xpEarned: number;
}

export function emptyDailyProgress(): DailyProgress {
  return {
    date: new Date().toISOString().slice(0, 10),
    tasks: {},
    counts: {},
    claimed: false,
  };
}

export function todayDateString() {
  return new Date().toISOString().slice(0, 10);
}

export function resetDailyIfNeeded(progress: DailyProgress): DailyProgress {
  const today = todayDateString();
  const fresh =
    progress.date === today
      ? progress
      : { date: today, tasks: {}, counts: {}, claimed: false };
  return {
    date: fresh.date,
    tasks: fresh.tasks ?? {},
    counts: fresh.counts ?? {},
    claimed: fresh.claimed ?? false,
  };
}

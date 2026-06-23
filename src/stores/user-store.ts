"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserProfile, UserStats, Badge } from "@/types/user";
import { DEFAULT_USER_STATS, normalizeProfile, normalizeUserStats } from "@/types/user";
import type { GameMode } from "@/types/game";
import type { DailyProgress } from "@/lib/db/types";
import { emptyDailyProgress, resetDailyIfNeeded } from "@/lib/db/types";
import { XP_PER_LEVEL, VIDEO_WATCH_XP } from "@/lib/constants";
import { getDeviceId } from "@/lib/device-id";
import { syncProfile, recordSession } from "@/lib/api";
import { getNewBadges } from "@/lib/badges";
import { DAILY_THRESHOLDS } from "@/lib/daily-challenges";

interface RecordGameOptions {
  moves?: number;
}

interface UserStore {
  profile: UserProfile | null;
  isOnboarded: boolean;
  deviceId: string;
  dailyProgress: DailyProgress;
  isSyncing: boolean;
  lastEarnedBadges: Badge[];

  initProfile: (displayName: string) => void;
  addXp: (amount: number, options?: { skipSession?: boolean }) => void;
  recordGame: (
    mode: GameMode,
    score: number,
    total: number,
    xpEarned: number,
    options?: RecordGameOptions
  ) => void;
  updateStats: (partial: Partial<UserStats>) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  trackDailyProgress: (taskId: keyof typeof DAILY_THRESHOLDS, amount?: number) => void;
  claimDailyReward: () => boolean;
  clearLastBadges: () => void;
  watchVideo: (videoId: string) => void;
  syncToServer: () => Promise<void>;
  hydrateFromServer: () => Promise<void>;
}

function createDefaultProfile(displayName: string, deviceId: string): UserProfile {
  return {
    id: deviceId,
    displayName,
    createdAt: new Date().toISOString(),
    level: 1,
    xp: 0,
    xpToNextLevel: XP_PER_LEVEL,
    totalGamesPlayed: 0,
    streak: 0,
    badges: [],
    stats: normalizeUserStats({ ...DEFAULT_USER_STATS }),
  };
}

function levelFromXp(xp: number) {
  return Math.floor(xp / XP_PER_LEVEL) + 1;
}

function profileToSyncPayload(
  profile: UserProfile,
  deviceId: string,
  dailyProgress: DailyProgress
) {
  return {
    deviceId,
    displayName: profile.displayName,
    xp: profile.xp,
    level: profile.level,
    streak: profile.streak,
    totalGamesPlayed: profile.totalGamesPlayed,
    stats: profile.stats,
    badges: profile.badges,
    dailyProgress,
  };
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      profile: null,
      isOnboarded: false,
      deviceId: "",
      dailyProgress: emptyDailyProgress(),
      isSyncing: false,
      lastEarnedBadges: [],

      initProfile: (displayName) => {
        const deviceId = getDeviceId();
        const profile = createDefaultProfile(displayName, deviceId);
        set({ profile, isOnboarded: true, deviceId });
        get().syncToServer();
      },

      addXp: (amount, options) => {
        set((state) => {
          if (!state.profile) return state;
          const newXp = state.profile.xp + amount;
          const level = levelFromXp(newXp);
          const xpInLevel = newXp % XP_PER_LEVEL;
          return {
            profile: {
              ...state.profile,
              xp: newXp,
              level,
              xpToNextLevel: XP_PER_LEVEL - xpInLevel,
            },
          };
        });
        if (!options?.skipSession) get().syncToServer();
      },

      recordGame: (mode, score, total, xpEarned, options) => {
        const { profile, deviceId } = get();
        if (!profile || !deviceId) return;

        let updatedProfile: UserProfile | null = null;

        set((state) => {
          if (!state.profile) return state;
          const newXp = state.profile.xp + xpEarned;
          const level = levelFromXp(newXp);
          const xpInLevel = newXp % XP_PER_LEVEL;
          const modeStats = normalizeUserStats(state.profile.stats).modeStats;
          const current = modeStats[mode];
          modeStats[mode] = {
            played: current.played + 1,
            wins: current.wins + (score === total && total > 0 ? 1 : 0),
            bestScore: Math.max(current.bestScore, score),
          };
          const totalCorrect = state.profile.stats.totalCorrectAnswers + score;
          const totalQuestions = state.profile.stats.totalQuestions + total;

          const profile: UserProfile = {
            ...state.profile,
            xp: newXp,
            level,
            xpToNextLevel: XP_PER_LEVEL - xpInLevel,
            totalGamesPlayed: state.profile.totalGamesPlayed + 1,
            stats: {
              ...state.profile.stats,
              totalCorrectAnswers: totalCorrect,
              totalQuestions,
              accuracy: totalQuestions
                ? Math.round((totalCorrect / totalQuestions) * 100)
                : 0,
              modeStats,
              favoriteMode: mode,
            },
          };

          const newBadges = getNewBadges(profile, {
            lastMode: mode,
            lastScore: score,
            lastTotal: total,
            lastMoves: options?.moves,
          });

          if (newBadges.length > 0) {
            profile.badges = [...profile.badges, ...newBadges];
          }

          updatedProfile = profile;
          return { profile, lastEarnedBadges: newBadges };
        });

        if (updatedProfile) {
          recordSession({ deviceId, mode, score, total, xpEarned }).catch(() => {});
          get().syncToServer();
        }
      },

      updateStats: (partial) =>
        set((state) => {
          if (!state.profile) return state;
          return {
            profile: {
              ...state.profile,
              stats: { ...state.profile.stats, ...partial },
            },
          };
        }),

      incrementStreak: () => {
        set((state) => {
          if (!state.profile) return state;
          const profile = { ...state.profile, streak: state.profile.streak + 1 };
          const newBadges = getNewBadges(profile);
          return {
            profile: {
              ...profile,
              badges: [...profile.badges, ...newBadges],
            },
            lastEarnedBadges: newBadges,
          };
        });
        get().syncToServer();
      },

      resetStreak: () => {
        set((state) => {
          if (!state.profile) return state;
          return { profile: { ...state.profile, streak: 0 } };
        });
        get().syncToServer();
      },

      trackDailyProgress: (taskId, amount = 1) => {
        set((state) => {
          const progress = resetDailyIfNeeded(state.dailyProgress);
          const counts = { ...(progress.counts ?? {}) };
          counts[taskId] = (counts[taskId] ?? 0) + amount;
          const threshold = DAILY_THRESHOLDS[taskId];
          const tasks = { ...progress.tasks };
          if (counts[taskId] >= threshold) tasks[taskId] = true;
          return {
            dailyProgress: { ...progress, counts, tasks },
          };
        });
        get().syncToServer();
      },

      claimDailyReward: () => {
        const { dailyProgress } = get();
        const progress = resetDailyIfNeeded(dailyProgress);
        const allDone = (Object.keys(DAILY_THRESHOLDS) as (keyof typeof DAILY_THRESHOLDS)[]).every(
          (t) => progress.tasks[t]
        );

        if (!allDone || progress.claimed) return false;

        set({ dailyProgress: { ...progress, claimed: true } });
        get().addXp(100, { skipSession: true });
        get().incrementStreak();
        get().syncToServer();
        return true;
      },

      clearLastBadges: () => set({ lastEarnedBadges: [] }),

      watchVideo: (videoId) => {
        const { profile } = get();
        if (!profile) return;
        if ((profile.watchedVideos ?? []).includes(videoId)) return;

        set((state) => {
          if (!state.profile) return state;
          const newXp = state.profile.xp + VIDEO_WATCH_XP;
          return {
            profile: {
              ...state.profile,
              watchedVideos: [...(state.profile.watchedVideos ?? []), videoId],
              xp: newXp,
              level: levelFromXp(newXp),
              xpToNextLevel: XP_PER_LEVEL - (newXp % XP_PER_LEVEL),
              stats: {
                ...state.profile.stats,
                videosWatched: (state.profile.stats.videosWatched ?? 0) + 1,
              },
            },
          };
        });
        get().trackDailyProgress("video", 1);
        get().syncToServer();
      },

      syncToServer: async () => {
        const { profile, deviceId, dailyProgress, isSyncing } = get();
        if (!profile || !deviceId || isSyncing) return;

        set({ isSyncing: true });
        try {
          await syncProfile(profileToSyncPayload(profile, deviceId, dailyProgress));
        } catch {
          // hors-ligne
        } finally {
          set({ isSyncing: false });
        }
      },

      hydrateFromServer: async () => {
        const deviceId = getDeviceId();
        set({ deviceId });

        try {
          const res = await fetch(
            `/api/profile?deviceId=${encodeURIComponent(deviceId)}`
          );
          if (!res.ok) return;

          const data = await res.json();
          const dp = resetDailyIfNeeded(data.daily_progress ?? emptyDailyProgress());
          set({
            isOnboarded: true,
            dailyProgress: {
              ...dp,
              counts: dp.counts ?? {},
              tasks: dp.tasks ?? {},
            },
            profile: normalizeProfile({
              id: data.id,
              displayName: data.display_name,
              createdAt: data.created_at,
              level: data.level,
              xp: data.xp,
              xpToNextLevel: XP_PER_LEVEL - (data.xp % XP_PER_LEVEL),
              totalGamesPlayed: data.total_games_played,
              streak: data.streak,
              badges: data.badges ?? [],
              stats: normalizeUserStats(data.stats),
            }),
          });
        } catch {
          // local only
        }
      },
    }),
    {
      name: "jw-games-user",
      skipHydration: true,
      partialize: (state) => ({
        profile: state.profile,
        isOnboarded: state.isOnboarded,
        deviceId: state.deviceId,
        dailyProgress: state.dailyProgress,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.dailyProgress) {
          state.dailyProgress = resetDailyIfNeeded(state.dailyProgress);
        }
        if (state?.profile) {
          state.profile = normalizeProfile(state.profile);
        }
        state?.hydrateFromServer();
      },
    }
  )
);

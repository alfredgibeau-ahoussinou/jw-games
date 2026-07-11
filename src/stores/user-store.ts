"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UserProfile, UserStats, Badge, UserPreferences } from "@/types/user";
import { DEFAULT_USER_STATS, normalizeProfile, normalizeUserStats } from "@/types/user";
import { normalizePreferences } from "@/lib/user-preferences";
import type { GameMode } from "@/types/game";
import type { DailyProgress } from "@/lib/db/types";
import { emptyDailyProgress, resetDailyIfNeeded } from "@/lib/db/types";
import { XP_PER_LEVEL } from "@/lib/constants";
import { getDeviceId } from "@/lib/device-id";
import { getNewBadges } from "@/lib/badges";
import { DAILY_THRESHOLDS, getDailyTasksForUser } from "@/lib/daily-challenges";
import {
  normalizeStreakForToday,
  streakAfterDailyClaim,
} from "@/lib/streak";
import {
  emptyStudyProgress,
  studyGameKey,
  type StudyProgress,
} from "@/lib/study-progress";
import { getStudyPathKey } from "@/lib/study-paths";

interface RecordGameOptions {
  moves?: number;
}

interface UserStore {
  profile: UserProfile | null;
  isOnboarded: boolean;
  deviceId: string;
  dailyProgress: DailyProgress;
  studyProgress: StudyProgress;
  lastEarnedBadges: Badge[];

  initProfile: (displayName: string, preferences: UserPreferences) => void;
  updatePreferences: (preferences: UserPreferences) => void;
  openStudyArticle: (articleId: string, themeId?: string) => void;
  markStudyArticleRead: (articleId: string) => void;
  markStudyGameComplete: (themeId: string, gameId: string) => void;
  advanceStudyPathWeek: () => void;
  setStudyPathWeek: (week: number) => void;
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
  tryClaimDailyTextQuizXp: () => boolean;
  tryClaimVideoQuizXp: (videoId: string) => boolean;
  clearLastBadges: () => void;
  watchVideo: (videoId: string) => void;
  exportLocalData: () => string;
  clearAllLocalData: () => void;
}

function createDefaultProfile(
  displayName: string,
  deviceId: string,
  preferences: UserPreferences
): UserProfile {
  return {
    id: deviceId,
    displayName,
    preferences: normalizePreferences(preferences),
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

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      profile: null,
      isOnboarded: false,
      deviceId: "",
      dailyProgress: emptyDailyProgress(),
      studyProgress: emptyStudyProgress(),
      lastEarnedBadges: [],

      initProfile: (displayName, preferences) => {
        const deviceId = getDeviceId();
        const profile = createDefaultProfile(displayName, deviceId, preferences);
        set({
          profile,
          isOnboarded: true,
          deviceId,
          studyProgress: {
            ...emptyStudyProgress(),
            pathStartedAt: new Date().toISOString(),
          },
        });
      },

      openStudyArticle: (articleId, themeId) => {
        set((state) => ({
          studyProgress: {
            ...state.studyProgress,
            lastArticleId: articleId,
            lastThemeId: themeId ?? state.studyProgress.lastThemeId,
            pathStartedAt: state.studyProgress.pathStartedAt ?? new Date().toISOString(),
          },
        }));
      },

      markStudyArticleRead: (articleId) => {
        set((state) => {
          const read = state.studyProgress.readArticleIds;
          if (read.includes(articleId)) return state;
          return {
            studyProgress: {
              ...state.studyProgress,
              readArticleIds: [...read, articleId],
            },
          };
        });
      },

      markStudyGameComplete: (themeId, gameId) => {
        const key = studyGameKey(themeId, gameId);
        set((state) => {
          if (state.studyProgress.completedStudyGames.includes(key)) return state;
          return {
            studyProgress: {
              ...state.studyProgress,
              completedStudyGames: [...state.studyProgress.completedStudyGames, key],
            },
          };
        });
      },

      advanceStudyPathWeek: () => {
        set((state) => ({
          studyProgress: {
            ...state.studyProgress,
            currentPathWeek: Math.min(4, state.studyProgress.currentPathWeek + 1),
          },
        }));
      },

      setStudyPathWeek: (week) => {
        set((state) => ({
          studyProgress: {
            ...state.studyProgress,
            currentPathWeek: Math.min(4, Math.max(1, week)),
          },
        }));
      },

      updatePreferences: (preferences) => {
        set((state) => {
          if (!state.profile) return state;
          const normalized = normalizePreferences(preferences);
          const prevKey = getStudyPathKey(state.profile.preferences);
          const nextKey = getStudyPathKey(normalized);
          const pathChanged = prevKey !== nextKey;
          return {
            profile: {
              ...state.profile,
              preferences: normalized,
            },
            ...(pathChanged
              ? {
                  studyProgress: {
                    ...state.studyProgress,
                    currentPathWeek: 1,
                    pathStartedAt: new Date().toISOString(),
                  },
                }
              : {}),
          };
        });
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
      },

      recordGame: (mode, score, total, xpEarned, options) => {
        const { profile } = get();
        if (!profile) return;

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

          return { profile, lastEarnedBadges: newBadges };
        });
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
      },

      resetStreak: () => {
        set((state) => {
          if (!state.profile) return state;
          return { profile: { ...state.profile, streak: 0 } };
        });
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
      },

      claimDailyReward: () => {
        const { dailyProgress, profile } = get();
        const progress = resetDailyIfNeeded(dailyProgress);
        const tasks = getDailyTasksForUser(profile?.preferences);
        const allDone = tasks.every((t) => progress.tasks[t.id]);

        if (!allDone || progress.claimed) return false;

        set({ dailyProgress: { ...progress, claimed: true } });
        get().addXp(100, { skipSession: true });

        if (profile) {
          const { streak, lastStreakClaimDate } = streakAfterDailyClaim(
            profile.streak,
            profile.lastStreakClaimDate
          );
          set((state) => {
            if (!state.profile) return state;
            const updated = { ...state.profile, streak, lastStreakClaimDate };
            const newBadges = getNewBadges(updated);
            return {
              profile: {
                ...updated,
                badges: [...updated.badges, ...newBadges],
              },
              lastEarnedBadges: newBadges,
            };
          });
        }
        return true;
      },

      tryClaimDailyTextQuizXp: () => {
        const progress = resetDailyIfNeeded(get().dailyProgress);
        if (progress.dailyTextQuizXp) return false;
        set({ dailyProgress: { ...progress, dailyTextQuizXp: true } });
        return true;
      },

      tryClaimVideoQuizXp: (videoId: string) => {
        const progress = resetDailyIfNeeded(get().dailyProgress);
        const ids = progress.videoQuizXpIds ?? [];
        if (ids.includes(videoId)) return false;
        set({ dailyProgress: { ...progress, videoQuizXpIds: [...ids, videoId] } });
        return true;
      },

      clearLastBadges: () => set({ lastEarnedBadges: [] }),

      watchVideo: (videoId) => {
        const { profile } = get();
        if (!profile) return;
        if ((profile.watchedVideos ?? []).includes(videoId)) return;

        set((state) => {
          if (!state.profile) return state;
          return {
            profile: {
              ...state.profile,
              watchedVideos: [...(state.profile.watchedVideos ?? []), videoId],
              stats: {
                ...state.profile.stats,
                videosWatched: (state.profile.stats.videosWatched ?? 0) + 1,
              },
            },
          };
        });
        get().trackDailyProgress("video", 1);
      },

      exportLocalData: () => {
        const state = get();
        let languageProgress: unknown = {};
        if (typeof window !== "undefined") {
          try {
            languageProgress = JSON.parse(
              localStorage.getItem("jw-games-language-progress") ?? "{}"
            );
          } catch {
            languageProgress = {};
          }
        }
        return JSON.stringify(
          {
            exportedAt: new Date().toISOString(),
            notice:
              "Export local JW Games — données stockées sur cet appareil uniquement.",
            profile: state.profile,
            dailyProgress: state.dailyProgress,
            studyProgress: state.studyProgress,
            languageProgress,
          },
          null,
          2
        );
      },

      clearAllLocalData: () => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("jw-games-user");
          localStorage.removeItem("jw-games-language-progress");
          localStorage.removeItem("jw-games-device-id");
        }
        set({
          profile: null,
          isOnboarded: false,
          deviceId: getDeviceId(),
          dailyProgress: emptyDailyProgress(),
          studyProgress: emptyStudyProgress(),
          lastEarnedBadges: [],
        });
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
        studyProgress: state.studyProgress,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.dailyProgress) {
          state.dailyProgress = resetDailyIfNeeded(state.dailyProgress);
        }
        if (state?.studyProgress) {
          state.studyProgress = { ...emptyStudyProgress(), ...state.studyProgress };
        } else if (state) {
          state.studyProgress = emptyStudyProgress();
        }
        if (state?.profile) {
          const normalized = normalizeProfile({
            ...state.profile,
            preferences: normalizePreferences(state.profile.preferences),
          });
          const { streak, lastStreakClaimDate } = normalizeStreakForToday(
            normalized.streak,
            normalized.lastStreakClaimDate
          );
          state.profile = { ...normalized, streak, lastStreakClaimDate };
        }
        if (state && !state.deviceId) {
          state.deviceId = getDeviceId();
        }
      },
    }
  )
);

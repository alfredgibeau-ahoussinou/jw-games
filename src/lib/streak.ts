import { todayDateString } from "@/lib/db/types";

export function daysBetweenLocalDates(from: string, to: string): number {
  const a = new Date(`${from}T12:00:00`);
  const b = new Date(`${to}T12:00:00`);
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

/** Réinitialise la série si plus d'un jour sans réclamation. */
export function normalizeStreakForToday(
  streak: number,
  lastStreakClaimDate?: string | null
): { streak: number; lastStreakClaimDate?: string } {
  if (!lastStreakClaimDate) return { streak, lastStreakClaimDate: undefined };
  const today = todayDateString();
  const gap = daysBetweenLocalDates(lastStreakClaimDate, today);
  if (gap > 1) return { streak: 0, lastStreakClaimDate };
  return { streak, lastStreakClaimDate };
}

/** Calcule la série après réclamation du défi du jour. */
export function streakAfterDailyClaim(
  currentStreak: number,
  lastStreakClaimDate?: string | null
): { streak: number; lastStreakClaimDate: string } {
  const today = todayDateString();
  if (!lastStreakClaimDate) {
    return { streak: 1, lastStreakClaimDate: today };
  }
  const gap = daysBetweenLocalDates(lastStreakClaimDate, today);
  if (gap === 0) {
    return { streak: currentStreak, lastStreakClaimDate: today };
  }
  if (gap === 1) {
    return { streak: currentStreak + 1, lastStreakClaimDate: today };
  }
  return { streak: 1, lastStreakClaimDate: today };
}

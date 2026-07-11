import type { UserPreferences } from "@/types/user";

/** Mode « étude calme » : pas de combos ni affichage XP en session. */
export function isCalmStudyMode(preferences?: UserPreferences | null): boolean {
  return preferences?.studyFocus === "calm";
}

export function shouldShowSessionGamification(preferences?: UserPreferences | null): boolean {
  return !isCalmStudyMode(preferences);
}

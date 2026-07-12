import type { StudyTheme } from "@/types/study";
import { BASE_THEME_GUIDES } from "./base";
import { EXTENDED_THEME_GUIDES_A } from "./extended-a";
import { EXTENDED_THEME_GUIDES_B } from "./extended-b";
import { ROLE_THEME_GUIDES } from "./role";
import { defaultGuide } from "./helpers";
import type { StudyThemeGuide } from "./types";

export type { StudyThemeGuide, StudyThemeScriptureVerse } from "./types";

const THEME_GUIDES: Record<string, StudyThemeGuide> = {
  ...BASE_THEME_GUIDES,
  ...EXTENDED_THEME_GUIDES_A,
  ...EXTENDED_THEME_GUIDES_B,
  ...ROLE_THEME_GUIDES,
};

export function getThemeGuide(theme: StudyTheme): StudyThemeGuide {
  return THEME_GUIDES[theme.id] ?? defaultGuide(theme);
}

export function getRelatedThemes(themeId: string): string[] {
  return THEME_GUIDES[themeId]?.relatedThemes ?? [];
}

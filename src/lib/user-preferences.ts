import type { GameMode } from "@/types/game";
import type { PreachLanguageId } from "@/types/language";
import { getLanguage } from "@/data/languages";
import type {
  AgeRange,
  BibleLevel,
  MinistryRole,
  PlayFrequency,
  UsageMode,
  UserGoal,
  UserPreferences,
} from "@/types/user";

export const AGE_RANGE_OPTIONS: {
  id: AgeRange;
  label: string;
  description: string;
  icon: string;
}[] = [
  { id: "7-12", label: "7 – 12 ans", description: "Pré-ado / enfant", icon: "🧒" },
  { id: "13-17", label: "13 – 17 ans", description: "Adolescent", icon: "🧑" },
  { id: "18-29", label: "18 – 29 ans", description: "Jeune adulte", icon: "✨" },
  { id: "30-49", label: "30 – 49 ans", description: "Adulte", icon: "📖" },
  { id: "50+", label: "50 ans et +", description: "Senior", icon: "🌿" },
  { id: "famille", label: "En famille", description: "Je joue avec mes proches", icon: "👨‍👩‍👧‍👦" },
];

export const GOAL_OPTIONS: {
  id: UserGoal;
  label: string;
  description: string;
  icon: string;
}[] = [
  { id: "jeux", label: "Jouer et réviser", description: "Quiz, mémoire, défis", icon: "🎮" },
  { id: "etude", label: "Étude approfondie", description: "Parcours thématiques", icon: "📚" },
  { id: "videos", label: "Regarder des vidéos", description: "Médiathèque JW.org", icon: "🎬" },
  { id: "versets", label: "Mémoriser des versets", description: "Textes bibliques", icon: "📖" },
  { id: "famille", label: "Temps en famille", description: "Jeux d'équipe", icon: "💛" },
];

export const BIBLE_LEVEL_OPTIONS: {
  id: BibleLevel;
  label: string;
  description: string;
}[] = [
  { id: "debutant", label: "Je découvre", description: "Bases de la Bible" },
  { id: "intermediaire", label: "Je révise", description: "Je connais les récits principaux" },
  { id: "avance", label: "Je maîtrise", description: "Détails, références, chronologie" },
];

export const MINISTRY_ROLE_OPTIONS: {
  id: MinistryRole;
  label: string;
  description: string;
  icon: string;
}[] = [
  { id: "publieur", label: "Proclamateur", description: "Je prêche régulièrement", icon: "📖" },
  { id: "pionnier-auxiliaire", label: "Pionnier auxiliaire", description: "Heures de pionnier", icon: "⏱️" },
  { id: "pionnier-permanent", label: "Pionnier permanent", description: "Service à plein temps", icon: "🌍" },
  { id: "etudiant-bible", label: "Étudiant de la Bible", description: "Cours biblique en cours", icon: "📝" },
  { id: "jeune", label: "Jeune", description: "École biblique, activités jeunesse", icon: "🧑" },
  { id: "parent", label: "Parent", description: "J'utilise l'app avec mes enfants", icon: "👨‍👩‍👧" },
  { id: "visiteur", label: "Visiteur curieux", description: "Je découvre la Bible", icon: "👋" },
];

export const USAGE_MODE_OPTIONS: {
  id: UsageMode;
  label: string;
  description: string;
  icon: string;
}[] = [
  { id: "solo", label: "Seul(e)", description: "Étude et jeux en solo", icon: "🙋" },
  { id: "famille", label: "En famille", description: "Avec conjoint ou enfants", icon: "🏠" },
  { id: "groupe", label: "En groupe", description: "Soirées jeunes, réunions", icon: "👥" },
  { id: "assemblee", label: "Après l'assemblée", description: "Révision post-réunion", icon: "🏛️" },
];

export const PLAY_FREQUENCY_OPTIONS: {
  id: PlayFrequency;
  label: string;
  description: string;
}[] = [
  { id: "quotidien", label: "Tous les jours", description: "Texte du jour et missions complètes" },
  { id: "hebdomadaire", label: "Quelques fois par semaine", description: "Missions allégées (réunions)" },
  { id: "occasionnel", label: "De temps en temps", description: "3 missions essentielles seulement" },
];

export const STUDY_FOCUS_OPTIONS: {
  id: import("@/types/user").StudyFocus;
  label: string;
  description: string;
}[] = [
  {
    id: "balanced",
    label: "Progression habituelle",
    description: "XP, combos et jalons visibles",
  },
  {
    id: "calm",
    label: "Étude calme",
    description: "Sans combos ni affichage XP en jeu — focus sur la Parole",
  },
];

export const AVATAR_COLORS = [
  { id: "teal", value: "#00B8B8", label: "Sarcelle" },
  { id: "coral", value: "#E50914", label: "Corail" },
  { id: "green", value: "#3DD68C", label: "Vert" },
  { id: "amber", value: "#F5A524", label: "Ambre" },
  { id: "violet", value: "#8B5CF6", label: "Violet" },
  { id: "rose", value: "#EC4899", label: "Rose" },
] as const;

export const DEFAULT_PREFERENCES: UserPreferences = {
  ageRange: "18-29",
  goal: "jeux",
  bibleLevel: "intermediaire",
  avatarColor: AVATAR_COLORS[3].value,
  ministryRole: "publieur",
  usageMode: "solo",
  playFrequency: "hebdomadaire",
  studyFocus: "balanced",
  preferredLanguageId: "en",
};

export function getAgeRangeLabel(ageRange: AgeRange): string {
  return AGE_RANGE_OPTIONS.find((o) => o.id === ageRange)?.label ?? ageRange;
}

export function getGoalLabel(goal: UserGoal): string {
  return GOAL_OPTIONS.find((o) => o.id === goal)?.label ?? goal;
}

export function getBibleLevelLabel(level: BibleLevel): string {
  return BIBLE_LEVEL_OPTIONS.find((o) => o.id === level)?.label ?? level;
}

export function getMinistryRoleLabel(role: MinistryRole): string {
  return MINISTRY_ROLE_OPTIONS.find((o) => o.id === role)?.label ?? role;
}

export function getUsageModeLabel(mode: UsageMode): string {
  return USAGE_MODE_OPTIONS.find((o) => o.id === mode)?.label ?? mode;
}

export function getPlayFrequencyLabel(freq: PlayFrequency): string {
  return PLAY_FREQUENCY_OPTIONS.find((o) => o.id === freq)?.label ?? freq;
}

export function getPreferredLanguageLabel(langId?: PreachLanguageId | null): string {
  if (!langId) return "Non définie";
  const lang = getLanguage(langId);
  return lang ? `${lang.flag} ${lang.name}` : langId;
}

export function getPersonalizedGreeting(
  displayName: string,
  preferences?: UserPreferences | null
): { title: string; subtitle: string } {
  const goal = preferences?.goal;

  const subtitles: Record<UserGoal, string> = {
    jeux: "Prêt pour un nouveau défi biblique ?",
    etude: "Continue ton parcours d'étude aujourd'hui.",
    videos: "Une vidéo ou un quiz t'attend.",
    versets: "Renforce ta mémoire des versets.",
    famille: "Un bon moment à partager en famille.",
  };

  return {
    title: `Salut, ${displayName} !`,
    subtitle: goal ? subtitles[goal] : "Bienvenue sur JW Games.",
  };
}

const GAMES_BY_AGE: Record<AgeRange, GameMode[]> = {
  "7-12": ["memoire", "devinettes", "quiz", "cartes"],
  "13-17": ["videoquiz", "rapidite", "quiz", "undercover"],
  "18-29": ["quiz", "thematique", "videoquiz", "rapidite"],
  "30-49": ["quiz", "biblio", "etude", "versets"],
  "50+": ["versets", "vraifaux", "quiz", "cartes"],
  famille: ["equipe", "undercover", "memoire", "devinettes"],
};

const GAMES_BY_GOAL: Record<UserGoal, GameMode[]> = {
  jeux: ["quiz", "rapidite", "memoire", "devinettes"],
  etude: ["thematique", "biblio", "quiz", "ordre"],
  videos: ["videoquiz", "quiz", "devinettes", "memoire"],
  versets: ["versets", "mots", "cartes", "vraifaux"],
  famille: ["equipe", "undercover", "memoire", "devinettes"],
};

export type VideoRowKey = "enfants" | "jeunes" | "jesus";

export interface PersonalizedHome {
  featuredGameIds: GameMode[];
  primaryVideoRow: VideoRowKey;
  showStudyFirst: boolean;
  gamesRowTitle: string;
}

export function getPersonalizedHome(preferences?: UserPreferences | null): PersonalizedHome {
  const age = preferences?.ageRange ?? "18-29";
  const goal = preferences?.goal ?? "jeux";
  const usage = preferences?.usageMode ?? "solo";

  const fromAge = GAMES_BY_AGE[age];
  const fromGoal = GAMES_BY_GOAL[goal];
  const merged: GameMode[] = [];
  const priority =
    usage === "famille" || usage === "groupe"
      ? (["equipe", "memoire", "devinettes", "undercover"] as GameMode[])
      : [];
  const hideUndercover = shouldHideUndercover(preferences);
  for (const id of [...priority, ...fromGoal, ...fromAge]) {
    if (hideUndercover && id === "undercover") continue;
    if (!merged.includes(id)) merged.push(id);
    if (merged.length >= 5) break;
  }

  let primaryVideoRow: VideoRowKey = "jesus";
  if (age === "7-12") primaryVideoRow = "enfants";
  else if (age === "13-17") primaryVideoRow = "jeunes";
  else if (goal === "videos" && age === "famille") primaryVideoRow = "enfants";

  const showStudyFirst = goal === "etude" || age === "30-49" || age === "50+";

  const gamesRowTitle =
    goal === "versets"
      ? "Pour mémoriser"
      : goal === "famille"
        ? "Jeux en famille"
        : age === "7-12"
          ? "Jeux pour toi"
          : "Recommandé pour vous";

  return {
    featuredGameIds: merged,
    primaryVideoRow,
    showStudyFirst,
    gamesRowTitle,
  };
}

export function normalizePreferences(
  prefs?: Partial<UserPreferences> | null
): UserPreferences {
  if (!prefs) return { ...DEFAULT_PREFERENCES };
  return {
    ageRange: prefs.ageRange ?? DEFAULT_PREFERENCES.ageRange,
    goal: prefs.goal ?? DEFAULT_PREFERENCES.goal,
    bibleLevel: prefs.bibleLevel ?? DEFAULT_PREFERENCES.bibleLevel,
    avatarColor: prefs.avatarColor ?? DEFAULT_PREFERENCES.avatarColor,
    ministryRole: prefs.ministryRole ?? DEFAULT_PREFERENCES.ministryRole,
    usageMode: prefs.usageMode ?? DEFAULT_PREFERENCES.usageMode,
    playFrequency: prefs.playFrequency ?? DEFAULT_PREFERENCES.playFrequency,
    studyFocus: prefs.studyFocus ?? DEFAULT_PREFERENCES.studyFocus,
    preferredLanguageId: prefs.preferredLanguageId ?? DEFAULT_PREFERENCES.preferredLanguageId,
  };
}

/** Masquer Undercover — contexte assemblee, parent ou étude calme. */
export function shouldHideUndercover(preferences?: UserPreferences | null): boolean {
  if (!preferences) return false;
  if (preferences.studyFocus === "calm") return true;
  if (preferences.usageMode === "assemblee") return true;
  if (preferences.ministryRole === "parent") return true;
  return false;
}

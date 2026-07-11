import { STUDY_THEME_AUDIENCE } from "@/data/study/audience";
import { STUDY_ARTICLES } from "@/data/study/articles";
import { STUDY_THEMES } from "@/data/study-themes";
import {
  getAgeRangeLabel,
  getBibleLevelLabel,
  getMinistryRoleLabel,
} from "@/lib/user-preferences";
import type { StudyArticle } from "@/types/study";
import type { StudyTheme } from "@/types/study";
import type { UserPreferences } from "@/types/user";
import { DEFAULT_PREFERENCES } from "@/lib/user-preferences";
import { getStudyPathWeek } from "@/lib/study-paths";

export interface PersonalizedStudy {
  introTitle: string;
  introSubtitle: string;
  recommendedThemes: StudyTheme[];
  otherThemes: StudyTheme[];
  featuredArticles: StudyArticle[];
  readingTip: string;
}

function scoreTheme(themeId: string, prefs: UserPreferences): number {
  const aud = STUDY_THEME_AUDIENCE[themeId];
  if (!aud) return 1;

  let score = aud.base ?? 1;

  if (aud.ageRanges?.includes(prefs.ageRange)) score += 4;
  if (aud.ministryRoles?.includes(prefs.ministryRole)) score += 5;
  if (aud.bibleLevels?.includes(prefs.bibleLevel)) score += 3;
  if (aud.goals?.includes(prefs.goal)) score += 2;

  if (prefs.goal === "etude" && (aud.goals?.includes("etude") || aud.base && aud.base >= 3)) {
    score += 1;
  }

  return score;
}

function sortThemesByProfile(prefs: UserPreferences): StudyTheme[] {
  return [...STUDY_THEMES].sort((a, b) => {
    const diff = scoreTheme(b.id, prefs) - scoreTheme(a.id, prefs);
    if (diff !== 0) return diff;
    return a.title.localeCompare(b.title, "fr");
  });
}

function scoreArticle(article: StudyArticle, prefs: UserPreferences): number {
  let score = 0;
  if (article.themeId) {
    score += scoreTheme(article.themeId, prefs);
  }
  if (prefs.bibleLevel === "debutant" && article.kind === "brochure") score += 2;
  if (prefs.bibleLevel === "avance" && article.kind === "livre") score += 2;
  if (prefs.ministryRole === "visiteur" && article.kind === "brochure") score += 3;
  return score;
}

const READING_TIPS: Partial<Record<UserPreferences["ministryRole"], string>> = {
  visiteur:
    "Commencez par les thèmes « Découvrir la Bible » et « Jésus » — lectures courtes, puis mini-jeux pour ancrer.",
  "etudiant-bible":
    "Alternez articles des Tours de garde et mini-jeux pour préparer vos questions au prochain cours.",
  jeune:
    "Un article court le matin + un mini-jeux le soir : une routine simple pour l'école biblique.",
  parent:
    "Lisez d'abord un article famille, puis proposez le mini-jeux à vos enfants — idéal pour le culte familial.",
  publieur:
    "Reliez chaque lecture à votre prochaine sortie de service : notez une idée à partager.",
  "pionnier-auxiliaire":
    "15 minutes par jour suffisent : un article, une méditation, un mini-jeux — régularité avant quantité.",
  "pionnier-permanent":
    "Approfondissez prophéties et Royaume : ces thèmes nourrissent vos discours et visites.",
};

const AGE_TIPS: Partial<Record<UserPreferences["ageRange"], string>> = {
  "7-12": "Les thèmes « École biblique » et « Création » sont pensés pour votre âge.",
  "13-17": "« Jeunesse », « Intégrité » et « Paix » répondent aux défis de l'adolescence.",
  famille: "Privilégiez « Famille » et « Amour » — parfaits pour étudier ensemble.",
  "50+": "« Confiance », « Résurrection » et « Prophéties » offrent méditations profondes.",
};

export function getPersonalizedStudy(
  preferences?: UserPreferences | null
): PersonalizedStudy {
  const prefs = preferences ?? DEFAULT_PREFERENCES;
  const sorted = sortThemesByProfile(prefs);
  const recommendedCount = Math.min(9, Math.max(6, Math.ceil(sorted.length * 0.45)));
  const recommendedThemes = sorted.slice(0, recommendedCount);
  const recommendedIds = new Set(recommendedThemes.map((t) => t.id));
  const otherThemes = sorted.filter((t) => !recommendedIds.has(t.id));

  const featuredArticles = [...STUDY_ARTICLES]
    .sort((a, b) => scoreArticle(b, prefs) - scoreArticle(a, prefs))
    .slice(0, 8);

  const roleLabel = getMinistryRoleLabel(prefs.ministryRole);
  const ageLabel = getAgeRangeLabel(prefs.ageRange);
  const levelLabel = getBibleLevelLabel(prefs.bibleLevel);

  const introTitle = `Parcours pour ${roleLabel.toLowerCase()}`;
  const introSubtitle = `${ageLabel} · niveau ${levelLabel.toLowerCase()} — thèmes et articles triés pour vous.`;

  const pathWeek = getStudyPathWeek(prefs, 1);
  const pathHint = pathWeek
    ? `Votre parcours commence par : ${pathWeek.steps.map((s) => s.label).join(" · ")}.`
    : "";

  const readingTip = [
    READING_TIPS[prefs.ministryRole] ??
      AGE_TIPS[prefs.ageRange] ??
      "Choisissez une thématique, lisez un article, puis testez-vous avec les mini-jeux.",
    pathHint,
  ]
    .filter(Boolean)
    .join(" ");

  return {
    introTitle,
    introSubtitle,
    recommendedThemes,
    otherThemes,
    featuredArticles,
    readingTip,
  };
}

export function getPersonalizedStudyThemes(
  preferences?: UserPreferences | null,
  limit = 8
): StudyTheme[] {
  const prefs = preferences ?? DEFAULT_PREFERENCES;
  return sortThemesByProfile(prefs).slice(0, limit);
}

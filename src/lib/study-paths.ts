import type { UserPreferences } from "@/types/user";
import { DEFAULT_PREFERENCES } from "@/lib/user-preferences";

export interface StudyPathStep {
  themeId: string;
  articleId: string;
  label: string;
  /** Lien personnalisé (ex. hub langues) — sinon /etude/article/{articleId} */
  href?: string;
}

export interface StudyPathWeek {
  week: number;
  title: string;
  description: string;
  steps: StudyPathStep[];
}

const BASE_PATH: StudyPathWeek[] = [
  {
    week: 1,
    title: "Semaine 1 — Fondations",
    description: "Prière et Royaume : parler à Jéhovah et comprendre sa promesse.",
    steps: [
      { themeId: "priere", articleId: "priere-wt-ecoute", label: "La prière — Jéhovah nous écoute" },
      { themeId: "royaume", articleId: "royaume-wt-quoi", label: "Le Royaume de Dieu — qu'est-ce que c'est ?" },
      { themeId: "priere", articleId: "priere-awake-efficace", label: "Apprendre à prier efficacement" },
    ],
  },
  {
    week: 2,
    title: "Semaine 2 — Bonne nouvelle",
    description: "Jésus et le service : notre modèle et notre mission.",
    steps: [
      { themeId: "jesus", articleId: "jesus-wt-qui", label: "Qui est réellement Jésus Christ ?" },
      { themeId: "service", articleId: "service-wt-pourquoi", label: "Pourquoi prêcher la bonne nouvelle ?" },
      { themeId: "royaume", articleId: "royaume-awake-changer", label: "Le Royaume peut-il changer le monde ?" },
    ],
  },
  {
    week: 3,
    title: "Semaine 3 — Vie quotidienne",
    description: "Confiance, famille et intégrité au quotidien.",
    steps: [
      { themeId: "confiance", articleId: "confiance-wt-renforcer", label: "Renforcez votre confiance en Jéhovah" },
      { themeId: "famille", articleId: "famille-wt-renforcer", label: "Renforcez votre famille spirituellement" },
      { themeId: "integrite", articleId: "integrite-wt-developper", label: "Développer l'intégrité" },
    ],
  },
  {
    week: 4,
    title: "Semaine 4 — Approfondir",
    description: "Espérance, adoration et application personnelle.",
    steps: [
      { themeId: "resurrection", articleId: "resurrection-wt-promesse", label: "La résurrection — une promesse fiable" },
      { themeId: "adoration", articleId: "adoration-wt-coeur", label: "Adorez Jéhovah de tout votre cœur" },
      { themeId: "bible", articleId: "bible-wt-profit", label: "Tirez le meilleur parti de votre étude" },
    ],
  },
];

const YOUNG_PATH: StudyPathWeek[] = [
  {
    week: 1,
    title: "Semaine 1 — Pour toi",
    description: "Jeunesse, prière et intégrité : des bases solides.",
    steps: [
      { themeId: "jeunesse", articleId: "jeunesse-wt-force", label: "Les jeunes — une force pour le Royaume" },
      { themeId: "priere", articleId: "priere-wt-ecoute", label: "La prière — Jéhovah nous écoute" },
      { themeId: "integrite", articleId: "integrite-awake-honnetete", label: "Être honnête à l'école" },
    ],
  },
  {
    week: 2,
    title: "Semaine 2 — Choix et amis",
    description: "Défis d'aujourd'hui et amitiés saines.",
    steps: [
      { themeId: "jeunesse", articleId: "jeunesse-awake-defis", label: "Les jeunes face aux défis" },
      { themeId: "vie-chretienne", articleId: "vie-awake-adolescents", label: "Tenir bon sous pression" },
      { themeId: "paix", articleId: "paix-awake-anxiete", label: "Anxiété — des solutions" },
    ],
  },
  {
    week: 3,
    title: "Semaine 3 — Connaître Jéhovah",
    description: "Jésus, Royaume et service.",
    steps: [
      { themeId: "jesus", articleId: "jesus-awake-chef", label: "Jésus — un chef digne de confiance" },
      { themeId: "royaume", articleId: "royaume-wt-quoi", label: "Le Royaume de Dieu" },
      { themeId: "service", articleId: "service-awake-mondiale", label: "La prédication mondiale" },
    ],
  },
  {
    week: 4,
    title: "Semaine 4 — Espérance",
    description: "Confiance et résurrection.",
    steps: [
      { themeId: "confiance", articleId: "confiance-awake-forces", label: "Quand la vie dépasse nos forces" },
      { themeId: "resurrection", articleId: "resurrection-awake-morts", label: "Où sont les morts ?" },
      { themeId: "amour", articleId: "amour-awake-quotidien", label: "Montrer de l'amour au quotidien" },
    ],
  },
];

const FAMILY_PATH: StudyPathWeek[] = [
  {
    week: 1,
    title: "Semaine 1 — En famille",
    description: "Culte familial et éducation des enfants.",
    steps: [
      { themeId: "famille", articleId: "famille-wt-renforcer", label: "Famille spirituelle" },
      { themeId: "famille", articleId: "famille-awake-enfants", label: "Élever des enfants responsables" },
      { themeId: "ecole-biblique", articleId: "ecole-awake-famille", label: "Culte familial avec enfants" },
    ],
  },
  {
    week: 2,
    title: "Semaine 2 — Fondements",
    description: "Prière et Royaume ensemble.",
    steps: [
      { themeId: "priere", articleId: "priere-wt-ecoute", label: "La prière en famille" },
      { themeId: "royaume", articleId: "royaume-wt-quoi", label: "Le Royaume de Dieu" },
      { themeId: "amour", articleId: "amour-wt-imiter", label: "Imiter l'amour de Jéhovah" },
    ],
  },
  {
    week: 3,
    title: "Semaine 3 — Qualités",
    description: "Patience, pardon et paix.",
    steps: [
      { themeId: "qualites", articleId: "qualites-wt-imiter", label: "Imiter les qualités de Jéhovah" },
      { themeId: "paix", articleId: "paix-wt-interieure", label: "Trouver la paix intérieure" },
      { themeId: "creation", articleId: "creation-awake-miracle", label: "La vie — un miracle" },
    ],
  },
  {
    week: 4,
    title: "Semaine 4 — Service",
    description: "Partager la bonne nouvelle en famille.",
    steps: [
      { themeId: "service", articleId: "service-wt-pourquoi", label: "Pourquoi prêcher ?" },
      { themeId: "jesus", articleId: "jesus-wt-qui", label: "Qui est Jésus ?" },
      { themeId: "confiance", articleId: "confiance-wt-renforcer", label: "Confiance en Jéhovah" },
    ],
  },
];

const PUBLISHER_PATH: StudyPathWeek[] = [
  {
    week: 1,
    title: "Semaine 1 — Service",
    description: "Prédication et courage.",
    steps: [
      { themeId: "service", articleId: "service-wt-pourquoi", label: "Pourquoi prêcher ?" },
      { themeId: "predication", articleId: "predication-wt-courage", label: "Trouver le courage de parler" },
      { themeId: "royaume", articleId: "royaume-wt-quoi", label: "Le Royaume de Dieu" },
    ],
  },
  {
    week: 2,
    title: "Semaine 2 — Conversations",
    description: "Tact et efficacité en prédication.",
    steps: [
      { themeId: "predication", articleId: "predication-awake-conversations", label: "Conversations naturelles" },
      { themeId: "langues", articleId: "langues-hub", label: "Phrases pour la prédication", href: "/langues" },
      { themeId: "service", articleId: "service-awake-mondiale", label: "Œuvre mondiale" },
    ],
  },
  {
    week: 3,
    title: "Semaine 3 — Endurance",
    description: "Tenir bon et garder la joie.",
    steps: [
      { themeId: "endurance", articleId: "endurance-wt-garder", label: "Garder l'endurance" },
      { themeId: "confiance", articleId: "confiance-wt-renforcer", label: "Confiance en Jéhovah" },
      { themeId: "priere", articleId: "priere-wt-ecoute", label: "La prière" },
    ],
  },
  {
    week: 4,
    title: "Semaine 4 — Approfondir",
    description: "Prophéties et espérance.",
    steps: [
      { themeId: "propheties", articleId: "propheties-wt-fil", label: "Les prophéties bibliques" },
      { themeId: "resurrection", articleId: "resurrection-wt-promesse", label: "La résurrection" },
      { themeId: "adoration", articleId: "adoration-wt-coeur", label: "Adoration sincère" },
    ],
  },
];

const VISITOR_PATH: StudyPathWeek[] = [
  {
    week: 1,
    title: "Semaine 1 — Découverte",
    description: "La Bible et Jésus : par où commencer.",
    steps: [
      { themeId: "decouvrir-bible", articleId: "decouverte-wt-premiers-pas", label: "Premiers pas dans la Bible" },
      { themeId: "jesus", articleId: "jesus-wt-qui", label: "Qui est Jésus Christ ?" },
      { themeId: "decouvrir-bible", articleId: "decouverte-brochure-bible", label: "La Bible — livre de vie" },
    ],
  },
  {
    week: 2,
    title: "Semaine 2 — Espérance",
    description: "Royaume et résurrection.",
    steps: [
      { themeId: "royaume", articleId: "royaume-wt-quoi", label: "Le Royaume de Dieu" },
      { themeId: "resurrection", articleId: "resurrection-awake-morts", label: "Où sont les morts ?" },
      { themeId: "creation", articleId: "creation-awake-miracle", label: "La vie — un miracle" },
    ],
  },
  {
    week: 3,
    title: "Semaine 3 — Connaître Jéhovah",
    description: "Prière et adoration.",
    steps: [
      { themeId: "priere", articleId: "priere-wt-ecoute", label: "Jéhovah nous écoute" },
      { themeId: "adoration", articleId: "adoration-awake-verite", label: "La vérité dans le culte" },
      { themeId: "confiance", articleId: "confiance-wt-renforcer", label: "Confiance en Jéhovah" },
    ],
  },
  {
    week: 4,
    title: "Semaine 4 — Prochaines étapes",
    description: "Étude et application.",
    steps: [
      { themeId: "bible", articleId: "bible-awake-etudier", label: "Comment étudier votre Bible" },
      { themeId: "famille", articleId: "famille-awake-enfants", label: "Valeurs familiales" },
      { themeId: "amour", articleId: "amour-awake-quotidien", label: "Amour au quotidien" },
    ],
  },
];

export function getStudyPathKey(prefs?: UserPreferences | null): string {
  const p = prefs ?? DEFAULT_PREFERENCES;
  if (p.ageRange === "7-12" || p.ageRange === "13-17" || p.ministryRole === "jeune") {
    return "young";
  }
  if (p.ageRange === "famille" || p.ministryRole === "parent" || p.goal === "famille") {
    return "family";
  }
  if (
    p.ministryRole === "publieur" ||
    p.ministryRole === "pionnier-auxiliaire" ||
    p.ministryRole === "pionnier-permanent"
  ) {
    return "publisher";
  }
  if (p.ministryRole === "visiteur" || p.ministryRole === "etudiant-bible") {
    return "visitor";
  }
  return "base";
}

function pathForPreferences(prefs: UserPreferences): StudyPathWeek[] {
  const key = getStudyPathKey(prefs);
  if (key === "young") return YOUNG_PATH;
  if (key === "family") return FAMILY_PATH;
  if (key === "publisher") return PUBLISHER_PATH;
  if (key === "visitor") return VISITOR_PATH;
  return BASE_PATH;
}

export function getStudyPathWeeks(preferences?: UserPreferences | null): StudyPathWeek[] {
  return pathForPreferences(preferences ?? DEFAULT_PREFERENCES);
}

export function getStudyPathWeek(
  preferences: UserPreferences | null | undefined,
  week: number
): StudyPathWeek | undefined {
  const weeks = getStudyPathWeeks(preferences);
  return weeks.find((w) => w.week === week) ?? weeks[0];
}

export function getNextPathStep(
  preferences: UserPreferences | null | undefined,
  week: number,
  readArticleIds: string[]
): StudyPathStep | null {
  const pathWeek = getStudyPathWeek(preferences, week);
  if (!pathWeek) return null;
  return pathWeek.steps.find((s) => !readArticleIds.includes(s.articleId)) ?? null;
}

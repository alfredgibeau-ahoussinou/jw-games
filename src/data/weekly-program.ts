import { SCRIPTURE_SNIPPETS } from "@/data/study/scripture-snippets";
import { jwBibleLookupUrl } from "@/lib/jw-bible-url";

export interface WeeklyArticleLink {
  articleId: string;
  label: string;
}

export interface WeeklyProgramWeek {
  slotIndex: 0 | 1 | 2 | 3;
  title: string;
  christianLifeTheme: string;
  tgStudyFocus: string;
  scriptureRef: string;
  scriptureText: string;
  reviewQuestions: string[];
  articleLinks: WeeklyArticleLink[];
}

const WEEKS: WeeklyProgramWeek[] = [
  {
    slotIndex: 0,
    title: "Semaine A — Prière et communication",
    christianLifeTheme: "Renforcer notre lien avec Jéhovah par la prière régulière",
    tgStudyFocus: "Pourquoi et comment prier avec confiance — méditer sur l'écoute de Jéhovah",
    scriptureRef: "Philippiens 4:6",
    scriptureText:
      SCRIPTURE_SNIPPETS["Philippiens 4:6"] ??
      "Ne vous inquiétez de rien, mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications.",
    reviewQuestions: [
      "Quand est-il plus facile pour moi de prier, et comment puis-je protéger ce moment ?",
      "Quelle prière puis-je faire pour un compagnon de service cette semaine ?",
      "Comment la prière m'aide-t-elle à garder la paix au quotidien ?",
    ],
    articleLinks: [
      { articleId: "priere-wt-ecoute", label: "La prière — Jéhovah nous écoute" },
      { articleId: "priere-awake-efficace", label: "Apprendre à prier efficacement" },
    ],
  },
  {
    slotIndex: 1,
    title: "Semaine B — Service et prédication",
    christianLifeTheme: "Trouver joie et courage dans la prédication de la bonne nouvelle",
    tgStudyFocus: "Notre motivation pour prêcher — imiter Jésus et les premiers chrétiens",
    scriptureRef: "Matthieu 28:19, 20",
    scriptureText:
      SCRIPTURE_SNIPPETS["Matthieu 28:19, 20"] ??
      "Allez donc, faites des disciples de gens de toutes les nations, baptisez-les, et enseignez-leur à obéir à tout ce que je vous ai commandé.",
    reviewQuestions: [
      "Quelle partie du message puis-je présenter plus clairement lors de ma prochaine visite ?",
      "Comment puis-je préparer mon cœur avant le service ?",
      "Quelle expérience récente m'a encouragé à continuer à prêcher ?",
    ],
    articleLinks: [
      { articleId: "service-wt-pourquoi", label: "Pourquoi prêcher la bonne nouvelle ?" },
      { articleId: "predication-awake-conversations", label: "Conversations naturelles en prédication" },
    ],
  },
  {
    slotIndex: 2,
    title: "Semaine C — Vie chrétienne au quotidien",
    christianLifeTheme: "Aligner école, travail et loisirs sur les normes bibliques",
    tgStudyFocus: "Montrer une conduite qui honore Jéhovah quand personne ne regarde",
    scriptureRef: "Colossiens 3:23",
    scriptureText:
      SCRIPTURE_SNIPPETS["Colossiens 3:23"] ??
      "Tout ce que vous faites, faites-le de bon cœur, comme pour Jéhovah et non pour des hommes.",
    reviewQuestions: [
      "Dans quelle situation quotidienne puis-je mieux refléter les qualités chrétiennes ?",
      "Quel choix concret puis-je faire cette semaine pour honorer Jéhovah au travail ou à l'école ?",
      "Comment mon attitude peut-elle ouvrir une conversation sur la foi ?",
    ],
    articleLinks: [
      { articleId: "vie-wt-quotidien", label: "Vivre sa foi au quotidien" },
      { articleId: "integrite-wt-developper", label: "Développer l'intégrité" },
    ],
  },
  {
    slotIndex: 3,
    title: "Semaine D — Endurance et confiance",
    christianLifeTheme: "Tenir bon avec confiance malgré les épreuves",
    tgStudyFocus: "L'endurance comme course de fond — fixer les yeux sur Jéhovah",
    scriptureRef: "Galates 6:9",
    scriptureText:
      SCRIPTURE_SNIPPETS["Galates 6:9"] ??
      "Ne nous lassons pas de faire le bien, car nous récolterons au moment opportun si nous ne nous donnons pas lâchement.",
    reviewQuestions: [
      "Quelle promesse de Jéhovah puis-je méditer pour renforcer ma confiance ?",
      "Quelle épreuve actuelle puis-je confier à Jéhovah dans la prière ?",
      "Comment l'exemple d'un serviteur fidèle m'aide-t-il à garder l'endurance ?",
    ],
    articleLinks: [
      { articleId: "endurance-wt-garder", label: "Comment garder l'endurance" },
      { articleId: "confiance-wt-renforcer", label: "Renforcez votre confiance en Jéhovah" },
    ],
  },
];

/** Numéro de semaine ISO (1–53). */
export function getISOWeekNumber(date: Date = new Date()): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

/** Index de rotation 0–3 basé sur la semaine ISO mod 4. */
export function getCurrentWeeklySlotIndex(date: Date = new Date()): 0 | 1 | 2 | 3 {
  return ((getISOWeekNumber(date) - 1) % 4) as 0 | 1 | 2 | 3;
}

export function getWeeklyProgramWeek(date?: Date): WeeklyProgramWeek {
  const slot = getCurrentWeeklySlotIndex(date);
  return WEEKS.find((w) => w.slotIndex === slot) ?? WEEKS[0];
}

export function getWeeklyProgramWeeks(): WeeklyProgramWeek[] {
  return WEEKS;
}

export function weeklyScriptureUrl(ref: string): string {
  return jwBibleLookupUrl(ref);
}

import { STUDY_THEMES } from "@/data/study-themes";
import type { JwDailyText } from "@/types/daily-text";
import { GAME_MODES } from "@/lib/constants";

/** Mots-clés → thème d'étude pour lier le texte du jour aux pôles. */
const THEME_KEYWORDS: Record<string, string[]> = {
  priere: ["prière", "prier", "prie", "oraison", "parler à jéhovah", "parler à dieu"],
  confiance: ["confiance", "crainte", "anxiété", "anxieux", "inquiétude", "peur", "courage"],
  jesus: ["jésus", "christ", "fils de dieu", "rédempteur"],
  royaume: ["royaume", "paradis", "gouvernement", "messianique"],
  resurrection: ["résurrection", "mort", "morts", "vie éternelle", "souvenir"],
  amour: ["amour", "aime", "aimer", "charité", "bienveillance"],
  famille: ["famille", "mariage", "enfants", "parents", "conjoint"],
  service: ["prédication", "prêcher", "témoignage", "bonne nouvelle", "évangile"],
  integrite: ["intégrité", "honnête", "honnêteté", "pureté", "vertu"],
  endurance: ["endurance", "persévérance", "patience", "tenir bon"],
  adoration: ["adoration", "culte", "louange", "vénération"],
  bible: ["bible", "écriture", "verset", "parole de dieu", "saintes"],
  paix: ["paix", "tranquillité", "sérénité", "calme"],
  propheties: ["prophétie", "prophéties", "prophète", "révélation"],
  creation: ["création", "créateur", "univers", "nature"],
};

export function matchDailyTextTheme(entry: JwDailyText): string | null {
  const haystack = [
    entry.heading,
    entry.scripture,
    entry.scriptureReference,
    entry.commentary,
  ]
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

  let bestId: string | null = null;
  let bestScore = 0;

  for (const [themeId, keywords] of Object.entries(THEME_KEYWORDS)) {
    if (!STUDY_THEMES.some((t) => t.id === themeId)) continue;
    const score = keywords.filter((kw) => haystack.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      bestId = themeId;
    }
  }

  return bestScore > 0 ? bestId : "bible";
}

const DAILY_MINI_GAMES = [
  { id: "quiz", label: "Quiz biblique", href: "/jeux/quiz" },
  { id: "vraifaux", label: "Vrai ou faux", href: "/jeux/vrai-faux" },
  { id: "versets", label: "Compléter le verset", href: "/jeux/versets" },
  { id: "ordre", label: "Ordre des événements", href: "/jeux/ordre" },
  { id: "memoire", label: "Mémoire biblique", href: "/jeux/memoire" },
] as const;

/** Mini-jeu suggéré du jour (déterministe selon la date). */
export function getDailyMiniGameSuggestion(dateIso: string) {
  const seed = dateIso.split("-").reduce((a, p) => a + parseInt(p, 10), 0);
  const pick = DAILY_MINI_GAMES[seed % DAILY_MINI_GAMES.length];
  const game = GAME_MODES.find((g) => g.id === pick.id);
  return { ...pick, description: game?.description ?? pick.label };
}

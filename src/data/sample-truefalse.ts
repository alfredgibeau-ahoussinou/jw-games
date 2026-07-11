import type { TrueFalseQuestion } from "@/types/content";
import { fisherYatesShuffle } from "@/lib/quiz-options";
import { EXTRA_TRUE_FALSE } from "./extra/extra-truefalse";

export const TRUE_FALSE_QUESTIONS: TrueFalseQuestion[] = [
  {
    id: "tf-001", type: "truefalse", category: "personnages", difficulty: "facile",
    title: "Adam", description: "", statement: "Adam fut le premier homme créé par Dieu.",
    isTrue: true, explanation: "Dieu forma l'homme de la poussière du sol et lui donna le nom d'Adam.",
    sources: [{ type: "bible", reference: "Genèse 2:7, 20", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["adam"],
  },
  {
    id: "tf-002", type: "truefalse", category: "evenements", difficulty: "facile",
    title: "Déluge", description: "", statement: "Le déluge a duré 40 jours de pluie.",
    isTrue: true, explanation: "La pluie tomba quarante jours et quarante nuits.",
    sources: [{ type: "bible", reference: "Genèse 7:12", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["déluge"],
  },
  {
    id: "tf-003", type: "truefalse", category: "personnages", difficulty: "moyen",
    title: "David", description: "", statement: "David a tué Goliath avec une épée.",
    isTrue: false, explanation: "David a utilisé une fronde et une pierre, pas une épée.",
    sources: [{ type: "bible", reference: "1 Samuel 17:49, 50", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["david"],
  },
  {
    id: "tf-004", type: "truefalse", category: "versets", difficulty: "facile",
    title: "Jean 3:16", description: "", statement: "Jean 3:16 parle de l'amour de Dieu pour le monde.",
    isTrue: true, explanation: "« Car Dieu a tant aimé le monde… »",
    sources: [{ type: "bible", reference: "Jean 3:16", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["jean"],
  },
  {
    id: "tf-005", type: "truefalse", category: "evenements", difficulty: "moyen",
    title: "Pâque", description: "", statement: "La première Pâque fut célébrée en Égypte.",
    isTrue: true, explanation: "Les Israélites marquèrent leurs portes avec du sang d'agneau en Égypte.",
    sources: [{ type: "bible", reference: "Exode 12:1-14", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["pâque"],
  },
  {
    id: "tf-006", type: "truefalse", category: "personnages", difficulty: "facile",
    title: "Moïse", description: "", statement: "Moïse a reçu les Dix Commandements sur le mont Sinaï.",
    isTrue: true, explanation: "Jéhovah donna à Moïse les tables de la loi sur le mont Sinaï.",
    sources: [{ type: "bible", reference: "Exode 20:1-17", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["moïse"],
  },
  {
    id: "tf-007", type: "truefalse", category: "livres", difficulty: "moyen",
    title: "Bible", description: "", statement: "La Bible contient 73 livres.",
    isTrue: false, explanation: "La Bible protestante et la Traduction du monde nouveau comptent 66 livres.",
    sources: [{ type: "jw-library", reference: "Appendice A3 — Livres de la Bible" }],
    verifiedAt: "2026-01-01", tags: ["bible"],
  },
  {
    id: "tf-008", type: "truefalse", category: "evenements", difficulty: "difficile",
    title: "Pentecôte", description: "", statement: "L'esprit saint fut déversé le jour de la Pentecôte.",
    isTrue: true, explanation: "Le jour de la Pentecôte, les disciples reçurent l'esprit saint.",
    sources: [{ type: "bible", reference: "Actes 2:1-4", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["pentecôte"],
  },
  {
    id: "tf-009", type: "truefalse", category: "personnages", difficulty: "facile",
    title: "Jésus", description: "", statement: "Jésus est né à Bethléem.",
    isTrue: true, explanation: "Jésus naquit à Bethléem de Judée.",
    sources: [{ type: "bible", reference: "Matthieu 2:1", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["jesus"],
  },
  {
    id: "tf-010", type: "truefalse", category: "prophéties", difficulty: "expert",
    title: "Résurrection", description: "", statement: "La Bible enseigne que les morts sont conscients dans la tombe.",
    isTrue: false, explanation: "Les morts sont inconscients en attendant la résurrection.",
    sources: [{ type: "bible", reference: "Ecclésiaste 9:5", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["résurrection"],
  },
  {
    id: "tf-011", type: "truefalse", category: "enseignements", difficulty: "moyen",
    title: "Fruits de l'esprit", description: "", statement: "La jalousie fait partie des fruits de l'esprit.",
    isTrue: false, explanation: "Les fruits de l'esprit incluent l'amour, la joie, la paix… pas la jalousie.",
    sources: [{ type: "bible", reference: "Galates 5:22, 23", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["esprit"],
  },
  {
    id: "tf-012", type: "truefalse", category: "geographie", difficulty: "facile",
    title: "Jérusalem", description: "", statement: "Le temple de Salomon fut construit à Jérusalem.",
    isTrue: true, explanation: "Salomon construisit le temple sur le mont Morija à Jérusalem.",
    sources: [{ type: "bible", reference: "2 Chroniques 3:1", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["temple"],
  },
  {
    id: "tf-013", type: "truefalse", category: "personnages", difficulty: "moyen",
    title: "Moïse", description: "", statement: "Moïse a reçu les Dix Commandements sur le mont Sinaï.",
    isTrue: true, explanation: "Jéhovah donna à Moïse les Dix Commandements gravés sur des pierres.",
    sources: [{ type: "bible", reference: "Exode 20:1-17", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["moïse"],
  },
  {
    id: "tf-014", type: "truefalse", category: "enseignements", difficulty: "facile",
    title: "Prière", description: "", statement: "Jésus a enseigné le modèle de prière connu sous le nom de « Notre Père ».",
    isTrue: true, explanation: "Jésus a enseigné à ses disciples comment prier, en commençant par « Notre Père ».",
    sources: [{ type: "bible", reference: "Matthieu 6:9", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["prière"],
  },
  {
    id: "tf-015", type: "truefalse", category: "personnages", difficulty: "moyen",
    title: "David", description: "", statement: "David a tué Goliath avec une fronde et une pierre.",
    isTrue: true, explanation: "David a vaincu Goliath grâce à sa confiance en Jéhovah et une pierre lancée avec sa fronde.",
    sources: [{ type: "bible", reference: "1 Samuel 17:49, 50", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["david"],
  },
  {
    id: "tf-016", type: "truefalse", category: "enseignements", difficulty: "moyen",
    title: "Royaume", description: "", statement: "Jésus a enseigné que son royaume est d'origine terrestre.",
    isTrue: false, explanation: "Jésus a dit que son royaume n'est pas de ce monde — il est céleste.",
    sources: [{ type: "bible", reference: "Jean 18:36", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["royaume"],
  },
  ...EXTRA_TRUE_FALSE,
];

export function shuffleTrueFalse(
  limit?: number,
  pool: typeof TRUE_FALSE_QUESTIONS = TRUE_FALSE_QUESTIONS
) {
  const arr = fisherYatesShuffle(pool);
  return limit ? arr.slice(0, limit) : arr;
}

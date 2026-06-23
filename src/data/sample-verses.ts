import type { VerseGapQuestion } from "@/types/content";
import { EXTRA_VERSE_GAPS } from "./extra/extra-verses";

export const VERSE_GAP_QUESTIONS: VerseGapQuestion[] = [
  {
    id: "vg-01", type: "versegap", category: "versets", difficulty: "facile", title: "Jean 3:16",
    description: "", verse: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que ___ ne périsse pas.",
    gapWord: "quiconque", options: ["quiconque", "Israël", "les apôtres", "les anges"],
    reference: "Jean 3:16",
    sources: [{ type: "bible", reference: "Jean 3:16", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-02", type: "versegap", category: "versets", difficulty: "facile", title: "Psaume 23:1",
    description: "", verse: "Jéhovah est mon ___. Je ne manquerai de rien.",
    gapWord: "berger", options: ["berger", "roi", "juge", "père"],
    reference: "Psaume 23:1",
    sources: [{ type: "bible", reference: "Psaume 23:1", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-03", type: "versegap", category: "versets", difficulty: "moyen", title: "Matthieu 6:9",
    description: "", verse: "Notre Père qui es aux cieux, que ton nom soit ___.",
    gapWord: "sanctifié", options: ["sanctifié", "loué", "béni", "honoré"],
    reference: "Matthieu 6:9",
    sources: [{ type: "bible", reference: "Matthieu 6:9", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-04", type: "versegap", category: "versets", difficulty: "moyen", title: "Galates 5:22",
    description: "", verse: "Le fruit de l'esprit est, entre autres, l'amour, la joie et la ___.",
    gapWord: "paix", options: ["paix", "richesse", "gloire", "force"],
    reference: "Galates 5:22",
    sources: [{ type: "bible", reference: "Galates 5:22", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-05", type: "versegap", category: "versets", difficulty: "facile", title: "Proverbes 3:5",
    description: "", verse: "Confie-toi en Jéhovah de tout ton cœur, et ne t'appuie pas sur ta propre ___.",
    gapWord: "intelligence", options: ["intelligence", "richesse", "force", "volonté"],
    reference: "Proverbes 3:5",
    sources: [{ type: "bible", reference: "Proverbes 3:5", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-06", type: "versegap", category: "versets", difficulty: "difficile", title: "Ésaïe 9:6",
    description: "", verse: "Car un enfant nous est né, un fils nous a été donné… Il sera appelé Prince de la ___.",
    gapWord: "paix", options: ["paix", "guerre", "gloire", "justice"],
    reference: "Ésaïe 9:6",
    sources: [{ type: "bible", reference: "Ésaïe 9:6", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-07", type: "versegap", category: "versets", difficulty: "moyen", title: "Matthieu 28:19",
    description: "", verse: "Allez donc, faites des disciples de toutes les nations, les baptisant au nom du Père et du Fils et du saint ___.",
    gapWord: "esprit", options: ["esprit", "ange", "prophète", "temple"],
    reference: "Matthieu 28:19",
    sources: [{ type: "bible", reference: "Matthieu 28:19", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-08", type: "versegap", category: "versets", difficulty: "expert", title: "Révélation 21:4",
    description: "", verse: "Il essuiera toute larme de leurs yeux, et la ___ ne sera plus.",
    gapWord: "mort", options: ["mort", "douleur", "peur", "faim"],
    reference: "Révélation 21:4",
    sources: [{ type: "bible", reference: "Révélation 21:4", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-09", type: "versegap", category: "versets", difficulty: "facile", title: "Psaume 23:1",
    description: "", verse: "Jéhovah est mon berger. Je ne ___ de rien.",
    gapWord: "manquerai", options: ["manquerai", "craindrai", "douterai", "tremblerai"],
    reference: "Psaume 23:1",
    sources: [{ type: "bible", reference: "Psaume 23:1", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  {
    id: "vg-10", type: "versegap", category: "versets", difficulty: "moyen", title: "Matthieu 6:33",
    description: "", verse: "Continuez plutôt à chercher en priorité le royaume et sa ___, et toutes ces autres choses vous seront ajoutées.",
    gapWord: "justice", options: ["justice", "richesse", "gloire", "sagesse"],
    reference: "Matthieu 6:33",
    sources: [{ type: "bible", reference: "Matthieu 6:33", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: [],
  },
  ...EXTRA_VERSE_GAPS,
];

export function shuffleVerses(limit = 8) {
  return [...VERSE_GAP_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, limit);
}

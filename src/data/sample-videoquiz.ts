import type { VideoQuizItem } from "@/types/content";
import { EXTRA_VIDEO_QUIZ } from "./extra/extra-videoquiz";

export const VIDEO_QUIZ_ITEMS: VideoQuizItem[] = [
  {
    id: "vq-01", type: "videoquiz", category: "personnages", difficulty: "facile",
    title: "Jésus — lumière du monde", description: "",
    videoId: "gnj-pisode-1-la-vraie-lumi-re-du-monde",
    question: "Selon l'épisode 1, pourquoi Jésus est-il venu sur terre ?",
    options: ["Apporter la lumière et la vérité", "Devenir roi terrestre", "Détruire les Romains", "Établir un empire"],
    correctIndex: 0,
    explanation: "Jésus est venu comme la vraie lumière du monde.",
    sources: [{ type: "jw-org", reference: "La bonne nouvelle selon Jésus — Ép. 1", url: "https://www.jw.org/fr/bibliothèque/videos/bonne-nouvelle-selon-jesus/" }],
    verifiedAt: "2026-01-01", tags: ["jesus"],
  },
  {
    id: "vq-02", type: "videoquiz", category: "personnages", difficulty: "moyen",
    title: "Baptême de Jésus", description: "",
    videoId: "gnj-pisode-2-voici-mon-fils",
    question: "Que dit la voix des cieux au baptême de Jésus ?",
    options: ["« Voici mon Fils bien-aimé »", "« Sois fort et courageux »", "« Va en paix »", "« Tu es le Messie »"],
    correctIndex: 0,
    explanation: "Dieu déclara : « Celui-ci est mon Fils bien-aimé ».",
    sources: [{ type: "bible", reference: "Matthieu 3:17", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["baptême"],
  },
  {
    id: "vq-03", type: "videoquiz", category: "enseignements", difficulty: "moyen",
    title: "Enseignement de Jésus", description: "",
    videoId: "gnj-pisode-5-bahis-par-sa-mani-re-d-enseigner",
    question: "Comment les gens réagissaient-ils à l'enseignement de Jésus ?",
    options: ["Ils étaient ébahis", "Ils l'ignoraient", "Ils le rejetèrent tous", "Ils le craignaient"],
    correctIndex: 0,
    explanation: "Les gens étaient ébahis par sa manière d'enseigner.",
    sources: [{ type: "bible", reference: "Matthieu 7:28", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["enseignement"],
  },
  {
    id: "vq-04", type: "videoquiz", category: "personnages", difficulty: "facile",
    title: "David et Goliath", description: "",
    videoId: "enfants-films-david-il-mettait-sa-confiance-en-j-hovah",
    question: "En qui David plaçait-il sa confiance ?",
    options: ["Jéhovah", "Son armure", "Sa famille", "Les Philistins"],
    correctIndex: 0,
    explanation: "David faisait confiance à Jéhovah face à Goliath.",
    sources: [{ type: "bible", reference: "1 Samuel 17", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["david"],
  },
  {
    id: "vq-05", type: "videoquiz", category: "personnages", difficulty: "facile",
    title: "Leçon pour enfants", description: "",
    videoId: "bjf-j-hovah-est-une-personne-r-elle",
    question: "Que nous apprend Caleb sur Jéhovah ?",
    options: ["Jéhovah est une personne réelle proche de nous", "Jéhovah est lointain", "Jéhovah n'existe pas", "Jéhovah est un symbole"],
    correctIndex: 0,
    explanation: "Caleb partage son expérience personnelle avec Jéhovah.",
    sources: [{ type: "jw-org", reference: "Deviens l'ami de Jéhovah", url: "https://www.jw.org/fr/la-bible-et-vous/enfants/" }],
    verifiedAt: "2026-01-01", tags: ["enfants"],
  },
  ...EXTRA_VIDEO_QUIZ,
];

export function getVideoQuizItems() {
  return VIDEO_QUIZ_ITEMS;
}

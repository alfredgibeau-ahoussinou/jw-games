import type { Flashcard } from "@/types/content";
import { EXTRA_FLASHCARD_CARDS, EXTRA_FLASHCARD_DECK } from "./extra/extra-flashcards";

export const FLASHCARD_DECKS = [
  {
    id: "personnages",
    name: "Personnages bibliques",
    icon: "👤",
    cards: [
      { id: "fc-01", type: "flashcard" as const, category: "personnages" as const, difficulty: "facile" as const, title: "Adam", description: "", front: "Adam", back: "Premier homme, créé par Dieu du sol", sources: [{ type: "bible" as const, reference: "Genèse 2:7", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-02", type: "flashcard" as const, category: "personnages" as const, difficulty: "facile" as const, title: "Noé", description: "", front: "Noé", back: "Construisit l'arche pour survivre au déluge", sources: [{ type: "bible" as const, reference: "Genèse 6:14", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-03", type: "flashcard" as const, category: "personnages" as const, difficulty: "moyen" as const, title: "Abraham", description: "", front: "Abraham", back: "Père de toutes les nations croyantes", sources: [{ type: "bible" as const, reference: "Romains 4:11", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-04", type: "flashcard" as const, category: "personnages" as const, difficulty: "moyen" as const, title: "Moïse", description: "", front: "Moïse", back: "Libéra Israël d'Égypte et reçut la Loi", sources: [{ type: "bible" as const, reference: "Exode 3:10", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-05", type: "flashcard" as const, category: "personnages" as const, difficulty: "facile" as const, title: "David", description: "", front: "David", back: "Berger devenu roi, auteur de nombreux psaumes", sources: [{ type: "bible" as const, reference: "1 Samuel 16:13", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-06", type: "flashcard" as const, category: "personnages" as const, difficulty: "facile" as const, title: "Jésus", description: "", front: "Jésus Christ", back: "Fils de Dieu, sauveur de l'humanité", sources: [{ type: "bible" as const, reference: "Matthieu 1:21", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-07", type: "flashcard" as const, category: "personnages" as const, difficulty: "moyen" as const, title: "Marie", description: "", front: "Marie", back: "Mère de Jésus, femme de foi", sources: [{ type: "bible" as const, reference: "Luc 1:30-35", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-08", type: "flashcard" as const, category: "personnages" as const, difficulty: "moyen" as const, title: "Pierre", description: "", front: "Pierre", back: "Apôtre de Jésus, pêcheur de Galilée", sources: [{ type: "bible" as const, reference: "Matthieu 4:18", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      ...EXTRA_FLASHCARD_CARDS.filter((c) => c.category === "personnages"),
    ] satisfies Flashcard[],
  },
  {
    id: "versets",
    name: "Versets clés",
    icon: "📜",
    cards: [
      { id: "fc-v1", type: "flashcard" as const, category: "versets" as const, difficulty: "facile" as const, title: "Jean 3:16", description: "", front: "Jean 3:16", back: "Car Dieu a tant aimé le monde…", sources: [{ type: "bible" as const, reference: "Jean 3:16", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-v2", type: "flashcard" as const, category: "versets" as const, difficulty: "facile" as const, title: "Psaume 23:1", description: "", front: "Psaume 23:1", back: "Jéhovah est mon berger", sources: [{ type: "bible" as const, reference: "Psaume 23:1", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-v3", type: "flashcard" as const, category: "versets" as const, difficulty: "moyen" as const, title: "Matthieu 6:9", description: "", front: "Matthieu 6:9", back: "Que ton nom soit sanctifié", sources: [{ type: "bible" as const, reference: "Matthieu 6:9", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-v4", type: "flashcard" as const, category: "versets" as const, difficulty: "moyen" as const, title: "Galates 5:22", description: "", front: "Galates 5:22", back: "Le fruit de l'esprit", sources: [{ type: "bible" as const, reference: "Galates 5:22", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-v5", type: "flashcard" as const, category: "versets" as const, difficulty: "difficile" as const, title: "Révélation 21:4", description: "", front: "Révélation 21:4", back: "La mort ne sera plus", sources: [{ type: "bible" as const, reference: "Révélation 21:4", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      ...EXTRA_FLASHCARD_CARDS.filter((c) => c.category === "versets"),
    ] satisfies Flashcard[],
  },
  {
    id: "evenements",
    name: "Événements",
    icon: "⚡",
    cards: [
      { id: "fc-e1", type: "flashcard" as const, category: "evenements" as const, difficulty: "facile" as const, title: "Création", description: "", front: "Création", back: "Dieu créa les cieux et la terre en six jours", sources: [{ type: "bible" as const, reference: "Genèse 1:1", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-e2", type: "flashcard" as const, category: "evenements" as const, difficulty: "moyen" as const, title: "Déluge", description: "", front: "Déluge universel", back: "Noé et sa famille sauvés dans l'arche", sources: [{ type: "bible" as const, reference: "Genèse 7:17", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-e3", type: "flashcard" as const, category: "evenements" as const, difficulty: "moyen" as const, title: "Exode", description: "", front: "Exode", back: "Libération d'Israël de l'esclavage égyptien", sources: [{ type: "bible" as const, reference: "Exode 12:41", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      { id: "fc-e4", type: "flashcard" as const, category: "evenements" as const, difficulty: "facile" as const, title: "Résurrection", description: "", front: "Résurrection de Jésus", back: "Jésus ressuscité le troisième jour", sources: [{ type: "bible" as const, reference: "1 Corinthiens 15:4", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
      ...EXTRA_FLASHCARD_CARDS.filter((c) => c.category === "evenements"),
    ] satisfies Flashcard[],
  },
  EXTRA_FLASHCARD_DECK,
];

export function getFlashcardDecks() {
  return FLASHCARD_DECKS;
}

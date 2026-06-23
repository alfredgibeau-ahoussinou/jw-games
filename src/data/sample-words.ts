import type { WordScrambleItem } from "@/types/content";
import { EXTRA_WORD_SCRAMBLE } from "./extra/extra-words";

export const WORD_SCRAMBLE_ITEMS: WordScrambleItem[] = [
  { id: "ws-01", type: "wordscramble", category: "personnages", difficulty: "facile", title: "Premier homme", description: "", word: "ADAM", hint: "Créé le sixième jour", sources: [{ type: "bible", reference: "Genèse 2:20", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-02", type: "wordscramble", category: "personnages", difficulty: "facile", title: "Patriarche", description: "", word: "ABRAHAM", hint: "Père de toutes les nations croyantes", sources: [{ type: "bible", reference: "Genèse 17:5", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-03", type: "wordscramble", category: "personnages", difficulty: "moyen", title: "Prophète", description: "", word: "MOISE", hint: "A conduit Israël hors d'Égypte", sources: [{ type: "bible", reference: "Exode 3:10", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-04", type: "wordscramble", category: "personnages", difficulty: "facile", title: "Roi", description: "", word: "DAVID", hint: "Vainqueur de Goliath", sources: [{ type: "bible", reference: "1 Samuel 17:49", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-05", type: "wordscramble", category: "personnages", difficulty: "moyen", title: "Apôtre", description: "", word: "PIERRE", hint: "Pêcheur devenu apôtre", sources: [{ type: "bible", reference: "Matthieu 4:18", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-06", type: "wordscramble", category: "evenements", difficulty: "moyen", title: "Événement", description: "", word: "DELUGE", hint: "Noé et l'arche", sources: [{ type: "bible", reference: "Genèse 7:17", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-07", type: "wordscramble", category: "livres", difficulty: "facile", title: "Livre", description: "", word: "GENESE", hint: "Premier livre de la Bible", sources: [{ type: "bible", reference: "Genèse 1:1", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-08", type: "wordscramble", category: "livres", difficulty: "moyen", title: "Livre", description: "", word: "PSAUMES", hint: "150 chants de louange", sources: [{ type: "bible", reference: "Psaume 1:1", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-09", type: "wordscramble", category: "enseignements", difficulty: "difficile", title: "Vertu", description: "", word: "SAGESSE", hint: "Demandée par Salomon", sources: [{ type: "bible", reference: "1 Rois 3:9", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  { id: "ws-10", type: "wordscramble", category: "geographie", difficulty: "facile", title: "Ville", description: "", word: "JERICHO", hint: "Ses murailles tombèrent", sources: [{ type: "bible", reference: "Josué 6:20", bibleEdition: "Traduction du monde nouveau" }], verifiedAt: "2026-01-01", tags: [] },
  ...EXTRA_WORD_SCRAMBLE,
];

export function scrambleWord(word: string) {
  const letters = word.split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  if (letters.join("") === word) return scrambleWord(word);
  return letters.join("");
}

export function shuffleWords(limit = 8) {
  return [...WORD_SCRAMBLE_ITEMS].sort(() => Math.random() - 0.5).slice(0, limit);
}

import type { MemoryPair, SpeedChallenge } from "@/types/content";
import { bible, jwLib, VERIFIED } from "./helpers";

export const EXTRA_MEMORY_SET_4: MemoryPair[] = [
  { id: "mem-015", type: "memory", category: "personnages", difficulty: "facile", title: "Jonas", description: "", term: "Jonas", match: "Prêcha à Ninive", sources: bible("Jonas 3:5"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-016", type: "memory", category: "personnages", difficulty: "moyen", title: "Daniel", description: "", term: "Daniel", match: "Fosse aux lions", sources: bible("Daniel 6:22"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-017", type: "memory", category: "personnages", difficulty: "facile", title: "Esther", description: "", term: "Esther", match: "Sauva son peuple", sources: bible("Esther 4:16"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-018", type: "memory", category: "personnages", difficulty: "moyen", title: "Paul", description: "", term: "Paul", match: "Apôtre des nations", sources: bible("Actes 9:15"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-019", type: "memory", category: "evenements", difficulty: "facile", title: "Babel", description: "", term: "Babel", match: "Confusion des langues", sources: bible("Genèse 11:9"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-020", type: "memory", category: "evenements", difficulty: "moyen", title: "Pentecôte", description: "", term: "Pentecôte", match: "3 000 baptisés", sources: bible("Actes 2:41"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-021", type: "memory", category: "versets", difficulty: "moyen", title: "Matthieu 5:14", description: "", term: "Matthieu 5:14", match: "Lumière du monde", sources: bible("Matthieu 5:14"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-022", type: "memory", category: "versets", difficulty: "facile", title: "Jean 14:6", description: "", term: "Jean 14:6", match: "Chemin, vérité, vie", sources: bible("Jean 14:6"), verifiedAt: VERIFIED, tags: [] },
];

export const EXTRA_MEMORY_SET_5: MemoryPair[] = [
  { id: "mem-023", type: "memory", category: "geographie", difficulty: "facile", title: "Bethléem", description: "", term: "Bethléem", match: "Naissance de Jésus", sources: bible("Luc 2:4-7"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-024", type: "memory", category: "geographie", difficulty: "moyen", title: "Mont Sinaï", description: "", term: "Mont Sinaï", match: "Loi donnée à Moïse", sources: bible("Exode 19:20"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-025", type: "memory", category: "geographie", difficulty: "facile", title: "Nazareth", description: "", term: "Nazareth", match: "Enfance de Jésus", sources: bible("Luc 2:39"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-026", type: "memory", category: "geographie", difficulty: "moyen", title: "Jéricho", description: "", term: "Jéricho", match: "Murailles tombées", sources: bible("Josué 6:20"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-027", type: "memory", category: "livres", difficulty: "moyen", title: "Ésaïe", description: "", term: "Ésaïe", match: "Prophéties du Messie", sources: bible("Ésaïe 53:5"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-028", type: "memory", category: "livres", difficulty: "facile", title: "Matthieu", description: "", term: "Matthieu", match: "Évangile pour les Juifs", sources: bible("Matthieu 1:1"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-029", type: "memory", category: "enseignements", difficulty: "facile", title: "Amour", description: "", term: "Amour", match: "Premier fruit de l'esprit", sources: bible("Galates 5:22"), verifiedAt: VERIFIED, tags: [] },
  { id: "mem-030", type: "memory", category: "enseignements", difficulty: "moyen", title: "Royaume", description: "", term: "Royaume de Dieu", match: "Priorité à rechercher", sources: bible("Matthieu 6:33"), verifiedAt: VERIFIED, tags: [] },
];

export const EXTRA_SPEED: SpeedChallenge[] = [
  { id: "spd-010", type: "speed", category: "personnages", difficulty: "facile", title: "Abraham", description: "", prompt: "Quel patriarche quitta Ur pour Canaan ?", answer: "Abraham", timeLimitSeconds: 10, sources: bible("Genèse 12:4"), verifiedAt: VERIFIED, tags: [] },
  { id: "spd-011", type: "speed", category: "personnages", difficulty: "moyen", title: "Esther", description: "", prompt: "Quelle reine sauva les Juifs du massacre ?", answer: "Esther", timeLimitSeconds: 10, sources: bible("Esther 4:16"), verifiedAt: VERIFIED, tags: [] },
  { id: "spd-012", type: "speed", category: "evenements", difficulty: "facile", title: "Création", description: "", prompt: "En combien de jours Dieu acheva la création visible ?", answer: "6|six|6 jours|six jours", timeLimitSeconds: 8, sources: bible("Genèse 1:31"), verifiedAt: VERIFIED, tags: [] },
  { id: "spd-013", type: "speed", category: "evenements", difficulty: "moyen", title: "Babel", description: "", prompt: "Comment s'appelait la ville où la tour fut construite et les langues confondues ?", answer: "Babel|Tour de Babel|babel", timeLimitSeconds: 10, sources: bible("Genèse 11:9"), verifiedAt: VERIFIED, tags: [] },
  { id: "spd-014", type: "speed", category: "versets", difficulty: "facile", title: "Psaume 23", description: "", prompt: "Jéhovah est mon ___ (Psaume 23:1)", answer: "berger", timeLimitSeconds: 8, sources: bible("Psaume 23:1"), verifiedAt: VERIFIED, tags: [] },
  { id: "spd-015", type: "speed", category: "versets", difficulty: "moyen", title: "Matthieu 6:33", description: "« Continuez d'abord à chercher le royaume et sa justice. »", prompt: "Matthieu 6:33 : que faut-il chercher en premier ? (royaume ou justice)", answer: "royaume|le royaume|royaume de dieu|justice|sa justice|la justice", timeLimitSeconds: 12, sources: bible("Matthieu 6:33"), verifiedAt: VERIFIED, tags: [] },
  { id: "spd-016", type: "speed", category: "livres", difficulty: "facile", title: "Dernier livre", description: "", prompt: "Quel est le dernier livre de la Bible (Traduction du monde nouveau) ?", answer: "Révélation|Revelation|revelation", timeLimitSeconds: 10, sources: jwLib("Appendice A3 — Livres de la Bible"), verifiedAt: VERIFIED, tags: [] },
  { id: "spd-017", type: "speed", category: "geographie", difficulty: "moyen", title: "Baptême", description: "", prompt: "Dans quelle rivière Jésus fut-il baptisé ?", answer: "Jourdain|le Jourdain|fleuve Jourdain|jordan", timeLimitSeconds: 10, sources: bible("Matthieu 3:13"), verifiedAt: VERIFIED, tags: [] },
  { id: "spd-018", type: "speed", category: "personnages", difficulty: "difficile", title: "Apôtres", description: "", prompt: "Quel apôtre douta de la résurrection jusqu'à voir Jésus ?", answer: "Thomas", timeLimitSeconds: 12, sources: bible("Jean 20:25"), verifiedAt: VERIFIED, tags: [] },
];

import type { Flashcard } from "@/types/content";
import { bible, VERIFIED } from "./helpers";

const fc = (
  id: string,
  category: Flashcard["category"],
  difficulty: Flashcard["difficulty"],
  front: string,
  back: string,
  ref: string
): Flashcard => ({
  id,
  type: "flashcard",
  category,
  difficulty,
  title: front,
  description: "",
  front,
  back,
  sources: bible(ref),
  verifiedAt: VERIFIED,
  tags: [],
});

export const EXTRA_FLASHCARD_CARDS: Flashcard[] = [
  fc("fc-09", "personnages", "moyen", "Jonas", "Prêcha à Ninive après le poisson", "Jonas 3:5"),
  fc("fc-10", "personnages", "moyen", "Daniel", "Fidèle dans la fosse aux lions", "Daniel 6:22"),
  fc("fc-11", "personnages", "facile", "Esther", "Reine qui sauva les Juifs", "Esther 4:16"),
  fc("fc-12", "personnages", "moyen", "Paul", "Apôtre des nations", "Actes 9:15"),
  fc("fc-13", "personnages", "facile", "Samson", "Force liée à sa naziréat", "Juges 16:17"),
  fc("fc-14", "personnages", "moyen", "Ruth", "Moabite fidèle à Naomi", "Ruth 1:16"),
  fc("fc-v6", "versets", "facile", "Matthieu 5:14", "Vous êtes la lumière du monde", "Matthieu 5:14"),
  fc("fc-v7", "versets", "moyen", "Jean 14:6", "Je suis le chemin, la vérité et la vie", "Jean 14:6"),
  fc("fc-v8", "versets", "facile", "1 Jean 4:8", "Dieu est amour", "1 Jean 4:8"),
  fc("fc-v9", "versets", "moyen", "Romains 12:21", "Vaincre le mal par le bien", "Romains 12:21"),
  fc("fc-v10", "versets", "difficile", "Matthieu 6:33", "Chercher le royaume en priorité", "Matthieu 6:33"),
  fc("fc-e5", "evenements", "moyen", "Pentecôte", "Esprit saint déversé — 3 000 baptisés", "Actes 2:41"),
  fc("fc-e6", "evenements", "facile", "Babel", "Confusion des langues", "Genèse 11:9"),
  fc("fc-e7", "evenements", "moyen", "Traversée mer Rouge", "Israël libéré d'Égypte", "Exode 14:21"),
  fc("fc-e8", "evenements", "facile", "Baptême de Jésus", "Jean baptise au Jourdain", "Matthieu 3:16"),
];

export const EXTRA_FLASHCARD_DECK = {
  id: "geographie",
  name: "Lieux bibliques",
  icon: "🗺️",
  cards: [
    fc("fc-g1", "geographie", "facile", "Bethléem", "Ville de naissance de Jésus", "Luc 2:4-7"),
    fc("fc-g2", "geographie", "facile", "Nazareth", "Ville d'enfance de Jésus", "Luc 2:39"),
    fc("fc-g3", "geographie", "moyen", "Mont Sinaï", "Loi donnée à Moïse", "Exode 19:20"),
    fc("fc-g4", "geographie", "moyen", "Jéricho", "Murailles tombées au 7e jour", "Josué 6:20"),
    fc("fc-g5", "geographie", "facile", "Jourdain", "Rivière du baptême de Jésus", "Matthieu 3:13"),
    fc("fc-g6", "geographie", "moyen", "Mont Carmel", "Défi d'Élie contre Baal", "1 Rois 18:19"),
    fc("fc-g7", "geographie", "difficile", "Patmos", "Île de la vision de Jean", "Révélation 1:9"),
    fc("fc-g8", "geographie", "moyen", "Ninive", "Ville où Jonas prêcha", "Jonas 3:5"),
  ] satisfies Flashcard[],
};

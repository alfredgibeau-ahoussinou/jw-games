import type { TimelineSet } from "@/types/content";
import { bible, VERIFIED } from "./helpers";

export const EXTRA_TIMELINE_SETS: TimelineSet[] = [
  {
    id: "tl-creation-full", type: "timeline-set", category: "evenements", difficulty: "moyen",
    title: "Les six journées", description: "Ordre complet de la création",
    events: [
      { id: "c1", event: "Lumière créée", yearOrder: 1 },
      { id: "c2", event: "Atmosphère (expansion)", yearOrder: 2 },
      { id: "c3", event: "Terre sèche et végétation", yearOrder: 3 },
      { id: "c4", event: "Soleil, lune et étoiles", yearOrder: 4 },
      { id: "c5", event: "Poissons et oiseaux", yearOrder: 5 },
      { id: "c6", event: "Animaux terrestres et homme", yearOrder: 6 },
    ],
    sources: bible("Genèse 1:3-31"), verifiedAt: VERIFIED, tags: ["création"],
  },
  {
    id: "tl-patriarches", type: "timeline-set", category: "personnages", difficulty: "moyen",
    title: "Patriarches", description: "Ordre des patriarches du début",
    events: [
      { id: "p1", event: "Adam et Ève", yearOrder: 1 },
      { id: "p2", event: "Noé et le déluge", yearOrder: 2 },
      { id: "p3", event: "Abraham quitte Ur", yearOrder: 3 },
      { id: "p4", event: "Isaac naît", yearOrder: 4 },
      { id: "p5", event: "Jacob (Israël) et ses fils", yearOrder: 5 },
    ],
    sources: bible("Genèse 5-35"), verifiedAt: VERIFIED, tags: ["patriarches"],
  },
  {
    id: "tl-apotres", type: "timeline-set", category: "personnages", difficulty: "difficile",
    title: "Ministère des apôtres", description: "Événements clés après la résurrection",
    events: [
      { id: "a1", event: "Résurrection de Jésus", yearOrder: 1 },
      { id: "a2", event: "Pentecôte — esprit saint", yearOrder: 2 },
      { id: "a3", event: "Conversion de Paul", yearOrder: 3 },
      { id: "a4", event: "Premier voyage missionnaire de Paul", yearOrder: 4 },
      { id: "a5", event: "Paul emprisonné à Rome", yearOrder: 5 },
    ],
    sources: bible("Actes 1-28"), verifiedAt: VERIFIED, tags: ["apôtres"],
  },
  {
    id: "tl-prophètes", type: "timeline-set", category: "personnages", difficulty: "expert",
    title: "Prophètes majeurs", description: "Ordre approximatif de leur activité",
    events: [
      { id: "pr1", event: "Élie et Élisée", yearOrder: 1 },
      { id: "pr2", event: "Ésaïe", yearOrder: 2 },
      { id: "pr3", event: "Jérémie", yearOrder: 3 },
      { id: "pr4", event: "Ézéchiel", yearOrder: 4 },
      { id: "pr5", event: "Daniel à Babylone", yearOrder: 5 },
    ],
    sources: bible("1 Rois 17; Ésaïe 1:1; Jérémie 1:1"), verifiedAt: VERIFIED, tags: ["prophètes"],
  },
  {
    id: "tl-paraboles", type: "timeline-set", category: "paraboles", difficulty: "facile",
    title: "Paraboles du royaume", description: "Ordre d'enseignement dans Matthieu 13",
    events: [
      { id: "pb1", event: "Parabole du semeur", yearOrder: 1 },
      { id: "pb2", event: "Parabole de l'ivraie", yearOrder: 2 },
      { id: "pb3", event: "Parabole du grain de moutarde", yearOrder: 3 },
      { id: "pb4", event: "Parabole du levain", yearOrder: 4 },
      { id: "pb5", event: "Parabole du trésor caché", yearOrder: 5 },
    ],
    sources: bible("Matthieu 13:1-44"), verifiedAt: VERIFIED, tags: ["paraboles"],
  },
];

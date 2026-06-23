import type { TimelineSet } from "@/types/content";
import { EXTRA_TIMELINE_SETS } from "./extra/extra-timeline";

export const TIMELINE_SETS: TimelineSet[] = [
  {
    id: "tl-creation", type: "timeline-set", category: "evenements", difficulty: "facile",
    title: "La création", description: "Ordre des six journées créatives",
    events: [
      { id: "e1", event: "Lumière et obscurité séparées", yearOrder: 1 },
      { id: "e2", event: "Ciel (atmosphère) formé", yearOrder: 2 },
      { id: "e3", event: "Terre sèche et végétation", yearOrder: 3 },
      { id: "e4", event: "Soleil, lune et étoiles visibles", yearOrder: 4 },
    ],
    sources: [{ type: "bible", reference: "Genèse 1:3-19", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["création"],
  },
  {
    id: "tl-jesus", type: "timeline-set", category: "personnages", difficulty: "moyen",
    title: "Vie de Jésus", description: "Événements clés du ministère de Jésus",
    events: [
      { id: "j1", event: "Naissance à Bethléem", yearOrder: 1 },
      { id: "j2", event: "Baptême par Jean", yearOrder: 2 },
      { id: "j3", event: "Début du ministère en Galilée", yearOrder: 3 },
      { id: "j4", event: "Dernière Cène et arrestation", yearOrder: 4 },
      { id: "j5", event: "Résurrection", yearOrder: 5 },
    ],
    sources: [{ type: "bible", reference: "Matthieu 1-28", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["jesus"],
  },
  {
    id: "tl-exode", type: "timeline-set", category: "evenements", difficulty: "moyen",
    title: "L'Exode", description: "Libération d'Israël d'Égypte",
    events: [
      { id: "x1", event: "Les dix plaies d'Égypte", yearOrder: 1 },
      { id: "x2", event: "La première Pâque", yearOrder: 2 },
      { id: "x3", event: "Traversée de la mer Rouge", yearOrder: 3 },
      { id: "x4", event: "Réception de la Loi au Sinaï", yearOrder: 4 },
    ],
    sources: [{ type: "bible", reference: "Exode 7-20", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["exode"],
  },
  {
    id: "tl-rois", type: "timeline-set", category: "personnages", difficulty: "difficile",
    title: "Rois d'Israël", description: "Premiers rois d'Israël",
    events: [
      { id: "r1", event: "Saül devient roi", yearOrder: 1 },
      { id: "r2", event: "David devient roi", yearOrder: 2 },
      { id: "r3", event: "Salomon construit le temple", yearOrder: 3 },
      { id: "r4", event: "Division du royaume", yearOrder: 4 },
    ],
    sources: [{ type: "bible", reference: "1 Samuel 10; 1 Rois 6", bibleEdition: "Traduction du monde nouveau" }],
    verifiedAt: "2026-01-01", tags: ["rois"],
  },
  ...EXTRA_TIMELINE_SETS,
];

export function getTimelineSets() {
  return TIMELINE_SETS;
}

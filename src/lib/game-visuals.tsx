import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  BookOpen,
  Brain,
  Clapperboard,
  Flame,
  HelpCircle,
  Layers,
  Library,
  Lightbulb,
  MapPin,
  ScrollText,
  Shuffle,
  Sparkles,
  Swords,
  Target,
  ToggleLeft,
  User,
  Users,
  Zap,
} from "lucide-react";
import type { GameMode } from "@/types/game";
import type { ContentCategory } from "@/types/content";

export interface GameVisual {
  icon: LucideIcon;
  gradient: string;
  glow: string;
  label: string;
}

export const GAME_VISUALS: Record<GameMode, GameVisual> = {
  videoquiz: {
    icon: Clapperboard,
    gradient: "from-sky-400/90 to-cyan-600/90",
    glow: "group-hover:shadow-sky-500/20",
    label: "Vidéo",
  },
  vraifaux: {
    icon: ToggleLeft,
    gradient: "from-emerald-400/90 to-teal-600/90",
    glow: "group-hover:shadow-emerald-500/20",
    label: "V/F",
  },
  ordre: {
    icon: Layers,
    gradient: "from-orange-400/90 to-amber-600/90",
    glow: "group-hover:shadow-orange-500/20",
    label: "Ordre",
  },
  mots: {
    icon: Shuffle,
    gradient: "from-violet-400/90 to-purple-600/90",
    glow: "group-hover:shadow-violet-500/20",
    label: "Mots",
  },
  versets: {
    icon: BookOpen,
    gradient: "from-blue-400/90 to-indigo-600/90",
    glow: "group-hover:shadow-blue-500/20",
    label: "Versets",
  },
  cartes: {
    icon: Layers,
    gradient: "from-amber-400/90 to-orange-600/90",
    glow: "group-hover:shadow-amber-500/20",
    label: "Cartes",
  },
  undercover: {
    icon: HelpCircle,
    gradient: "from-fuchsia-400/90 to-purple-700/90",
    glow: "group-hover:shadow-fuchsia-500/20",
    label: "Bluff",
  },
  quiz: {
    icon: BookMarked,
    gradient: "from-teal-400/90 to-cyan-600/90",
    glow: "group-hover:shadow-teal-500/20",
    label: "Quiz",
  },
  rapidite: {
    icon: Zap,
    gradient: "from-yellow-400/90 to-amber-500/90",
    glow: "group-hover:shadow-yellow-500/20",
    label: "Speed",
  },
  memoire: {
    icon: Brain,
    gradient: "from-green-400/90 to-emerald-600/90",
    glow: "group-hover:shadow-green-500/20",
    label: "Mémoire",
  },
  thematique: {
    icon: Target,
    gradient: "from-rose-400/90 to-pink-600/90",
    glow: "group-hover:shadow-rose-500/20",
    label: "Thèmes",
  },
  equipe: {
    icon: Swords,
    gradient: "from-cyan-400/90 to-sky-600/90",
    glow: "group-hover:shadow-cyan-500/20",
    label: "Équipe",
  },
  devinettes: {
    icon: Lightbulb,
    gradient: "from-amber-300/90 to-orange-500/90",
    glow: "group-hover:shadow-amber-500/20",
    label: "Énigmes",
  },
  biblio: {
    icon: Library,
    gradient: "from-indigo-400/90 to-blue-600/90",
    glow: "group-hover:shadow-indigo-500/20",
    label: "Bible",
  },
  quotidien: {
    icon: Flame,
    gradient: "from-orange-400/90 to-red-600/90",
    glow: "group-hover:shadow-orange-500/20",
    label: "Défi",
  },
  etude: {
    icon: BookMarked,
    gradient: "from-violet-400/90 to-indigo-600/90",
    glow: "group-hover:shadow-violet-500/20",
    label: "Étude",
  },
};

export const GAME_POLES: {
  id: string;
  title: string;
  subtitle: string;
  modes: GameMode[];
}[] = [
  {
    id: "culture",
    title: "Quiz & culture",
    subtitle: "Questions, vidéos et connaissances bibliques",
    modes: ["quiz", "videoquiz", "vraifaux", "thematique", "devinettes", "biblio"],
  },
  {
    id: "memory",
    title: "Mots & mémoire",
    subtitle: "Versets, cartes et associations",
    modes: ["mots", "versets", "memoire", "cartes", "ordre"],
  },
  {
    id: "group",
    title: "En groupe",
    subtitle: "Parties conviviales à plusieurs",
    modes: ["undercover", "equipe"],
  },
  {
    id: "challenge",
    title: "Défis",
    subtitle: "Rapidité et défi quotidien",
    modes: ["rapidite", "quotidien"],
  },
];

export const THEME_VISUALS: Record<
  ContentCategory,
  { icon: LucideIcon; gradient: string }
> = {
  personnages: { icon: User, gradient: "from-violet-500/80 to-purple-700/80" },
  evenements: { icon: ScrollText, gradient: "from-orange-500/80 to-amber-600/80" },
  versets: { icon: BookOpen, gradient: "from-blue-500/80 to-indigo-600/80" },
  enseignements: { icon: Lightbulb, gradient: "from-amber-500/80 to-yellow-600/80" },
  paraboles: { icon: Sparkles, gradient: "from-emerald-500/80 to-teal-600/80" },
  prophéties: { icon: Target, gradient: "from-fuchsia-500/80 to-pink-600/80" },
  livres: { icon: Library, gradient: "from-indigo-500/80 to-blue-600/80" },
  geographie: { icon: MapPin, gradient: "from-cyan-500/80 to-sky-600/80" },
};

export function getPlayerMeta(players: "solo" | "multi" | "both") {
  if (players === "solo") return { icon: User, label: "Solo" };
  if (players === "multi") return { icon: Users, label: "Groupe" };
  return { icon: Users, label: "Solo & groupe" };
}

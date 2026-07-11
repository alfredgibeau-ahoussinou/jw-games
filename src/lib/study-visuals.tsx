import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Crown,
  Flame,
  GraduationCap,
  HandHeart,
  Heart,
  Home,
  Leaf,
  Megaphone,
  Compass,
  School,
  Scale,
  Shield,
  Sparkles,
  Sprout,
  Sun,
  Users,
  BookMarked,
  Timer,
} from "lucide-react";

export const STUDY_THEME_VISUALS: Record<
  string,
  { icon: LucideIcon; gradient: string }
> = {
  priere: { icon: HandHeart, gradient: "from-violet-500/90 to-indigo-700/90" },
  confiance: { icon: Sparkles, gradient: "from-cyan-500/90 to-teal-700/90" },
  qualites: { icon: Heart, gradient: "from-rose-500/90 to-pink-700/90" },
  jesus: { icon: BookOpen, gradient: "from-amber-500/90 to-orange-600/90" },
  famille: { icon: Home, gradient: "from-emerald-500/90 to-green-700/90" },
  service: { icon: Megaphone, gradient: "from-sky-500/90 to-blue-700/90" },
  royaume: { icon: Crown, gradient: "from-yellow-500/90 to-amber-700/90" },
  resurrection: { icon: Sun, gradient: "from-orange-400/90 to-rose-600/90" },
  adoration: { icon: Flame, gradient: "from-red-500/90 to-orange-700/90" },
  bible: { icon: BookMarked, gradient: "from-indigo-500/90 to-violet-700/90" },
  sagesse: { icon: Scale, gradient: "from-slate-400/90 to-slate-700/90" },
  endurance: { icon: Shield, gradient: "from-stone-500/90 to-zinc-700/90" },
  amour: { icon: Heart, gradient: "from-pink-500/90 to-red-600/90" },
  creation: { icon: Leaf, gradient: "from-lime-500/90 to-green-700/90" },
  jeunesse: { icon: Users, gradient: "from-fuchsia-500/90 to-purple-700/90" },
  paix: { icon: Sprout, gradient: "from-teal-400/90 to-cyan-700/90" },
  integrite: { icon: Shield, gradient: "from-blue-600/90 to-indigo-800/90" },
  propheties: { icon: Sparkles, gradient: "from-purple-500/90 to-indigo-700/90" },
  "decouvrir-bible": { icon: Compass, gradient: "from-cyan-500/90 to-blue-700/90" },
  predication: { icon: Megaphone, gradient: "from-sky-500/90 to-indigo-700/90" },
  pionnier: { icon: Timer, gradient: "from-amber-500/90 to-orange-700/90" },
  "ecole-biblique": { icon: School, gradient: "from-lime-500/90 to-emerald-700/90" },
  "vie-chretienne": { icon: GraduationCap, gradient: "from-violet-500/90 to-purple-700/90" },
};

export const STUDY_MINI_GAME_XP = 15;

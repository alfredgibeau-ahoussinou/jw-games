import type { UserProfile, Badge } from "@/types/user";

export interface BadgeDefinition {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const BADGE_DEFINITIONS: BadgeDefinition[] = [
  { id: "first-game", name: "Premier pas", description: "Jouer votre première partie", icon: "🎮" },
  { id: "quiz-rookie", name: "Apprenti", description: "10 bonnes réponses au quiz", icon: "📖" },
  { id: "perfect-quiz", name: "Réponses justes", description: "Un quiz complété sans erreur", icon: "⭐" },
  { id: "streak-3", name: "Assidu", description: "Série de 3 jours", icon: "🔥" },
  { id: "streak-7", name: "Fidèle", description: "Série de 7 jours", icon: "💎" },
  { id: "memory-ace", name: "Mémoire d'éléphant", description: "Mémoire terminée en ≤ 8 coups", icon: "🧠" },
  { id: "speed-lightning", name: "Bon rythme", description: "3 défis rapidité réussis", icon: "⚡" },
  { id: "level-5", name: "Progression constante", description: "Atteindre le niveau 5", icon: "🏆" },
  { id: "bible-scholar", name: "Lettré", description: "50 bonnes réponses au total", icon: "📖" },
  { id: "undercover-detective", name: "Détective", description: "Jouer 3 parties Undercover", icon: "🕵️" },
];

export function getNewBadges(
  profile: UserProfile,
  context?: {
    lastMode?: string;
    lastScore?: number;
    lastTotal?: number;
    lastMoves?: number;
  }
): Badge[] {
  const earned = new Set(profile.badges.map((b) => b.id));
  const newBadges: Badge[] = [];
  const now = new Date().toISOString();

  function grant(id: string) {
    if (earned.has(id)) return;
    const def = BADGE_DEFINITIONS.find((b) => b.id === id);
    if (!def) return;
    earned.add(id);
    newBadges.push({ ...def, earnedAt: now });
  }

  if (profile.totalGamesPlayed >= 1) grant("first-game");
  if (profile.stats.totalCorrectAnswers >= 10) grant("quiz-rookie");
  if (profile.stats.totalCorrectAnswers >= 50) grant("bible-scholar");
  if (profile.streak >= 3) grant("streak-3");
  if (profile.streak >= 7) grant("streak-7");
  if (profile.level >= 5) grant("level-5");
  if (profile.stats.modeStats.undercover.played >= 3) grant("undercover-detective");

  if (context?.lastMode === "quiz" && context.lastScore === context.lastTotal && (context.lastTotal ?? 0) > 0) {
    grant("perfect-quiz");
  }
  if (context?.lastMode === "memoire" && context.lastMoves !== undefined && context.lastMoves <= 8) {
    grant("memory-ace");
  }
  if (context?.lastMode === "rapidite" && context.lastScore === context.lastTotal && (context.lastTotal ?? 0) >= 3) {
    grant("speed-lightning");
  }

  return newBadges;
}

export function getBadgeDef(id: string) {
  return BADGE_DEFINITIONS.find((b) => b.id === id);
}

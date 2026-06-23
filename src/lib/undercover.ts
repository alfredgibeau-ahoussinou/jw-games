import type { UndercoverPair } from "@/data/sample-undercover";

export type UndercoverCategory = UndercoverPair["category"];
export type UndercoverDifficulty = UndercoverPair["difficulty"];

export const UNDERCOVER_CATEGORY_LABELS: Record<UndercoverCategory, string> = {
  personnages: "Personnages",
  lieux: "Lieux",
  evenements: "Événements",
  objets: "Objets & symboles",
  qualites: "Qualités & enseignements",
};

export const UNDERCOVER_DIFFICULTY_LABELS: Record<UndercoverDifficulty, string> = {
  facile: "Facile",
  moyen: "Moyen",
  difficile: "Difficile",
};

export const DISCUSSION_PRESETS = [60, 90, 120, 180] as const;

export interface UndercoverPlayer {
  id: number;
  name: string;
  isImpostor: boolean;
  word: string;
  eliminated: boolean;
}

export function defaultPlayerNames(count: number): string[] {
  return Array.from({ length: count }, (_, i) => `Joueur ${i + 1}`);
}

export function suggestedImpostorCount(playerCount: number): number {
  if (playerCount <= 5) return 1;
  if (playerCount <= 8) return 2;
  return 2;
}

export function maxImpostors(playerCount: number): number {
  return Math.max(1, Math.min(2, Math.floor((playerCount - 1) / 2)));
}

export function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function createPlayers(
  count: number,
  names: string[],
  impostorCount: number,
  pair: UndercoverPair
): UndercoverPlayer[] {
  const impostorIndices = new Set(
    shuffle(Array.from({ length: count }, (_, i) => i)).slice(0, impostorCount)
  );

  return Array.from({ length: count }, (_, id) => {
    const isImpostor = impostorIndices.has(id);
    return {
      id,
      name: names[id]?.trim() || `Joueur ${id + 1}`,
      isImpostor,
      word: isImpostor ? pair.impostor.word : pair.civilian.word,
      eliminated: false,
    };
  });
}

export function pickDiscussionStarter(players: UndercoverPlayer[]): UndercoverPlayer {
  const active = players.filter((p) => !p.eliminated);
  return active[Math.floor(Math.random() * active.length)] ?? players[0];
}

export function tallyVotes(votes: Record<number, number>): {
  eliminatedId: number | null;
  counts: Record<number, number>;
  tied: boolean;
} {
  const counts: Record<number, number> = {};
  for (const target of Object.values(votes)) {
    counts[target] = (counts[target] ?? 0) + 1;
  }

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (sorted.length === 0) {
    return { eliminatedId: null, counts, tied: false };
  }

  const topCount = sorted[0][1];
  const tiedTop = sorted.filter(([, c]) => c === topCount);
  const tied = tiedTop.length > 1;

  if (tied) {
    const pick = tiedTop[Math.floor(Math.random() * tiedTop.length)][0];
    return { eliminatedId: Number(pick), counts, tied: true };
  }

  return { eliminatedId: Number(sorted[0][0]), counts, tied: false };
}

export function civiliansWin(eliminated: UndercoverPlayer | undefined): boolean {
  return Boolean(eliminated?.isImpostor);
}

export function formatTimer(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

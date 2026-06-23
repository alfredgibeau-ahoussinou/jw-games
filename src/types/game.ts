import type { DifficultyLevel } from "./content";

export type GameMode =
  | "undercover"
  | "quiz"
  | "rapidite"
  | "memoire"
  | "thematique"
  | "equipe"
  | "quotidien"
  | "vraifaux"
  | "ordre"
  | "mots"
  | "versets"
  | "cartes"
  | "videoquiz"
  | "devinettes"
  | "biblio"
  | "etude";

export interface GameModeConfig {
  id: GameMode;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  players: "solo" | "multi" | "both";
  available: boolean;
  tag?: string;
}

export interface GameSession {
  mode: GameMode;
  difficulty: DifficultyLevel;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  startedAt: string;
  completedAt?: string;
  durationSeconds?: number;
}

export interface DailyChallenge {
  id: string;
  date: string;
  title: string;
  description: string;
  modes: GameMode[];
  bonusXp: number;
  completed: boolean;
}

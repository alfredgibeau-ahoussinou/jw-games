/** Sources officielles autorisées pour tout le contenu de l'application */
export type OfficialSourceType = "bible" | "jw-org" | "jw-library" | "publication";

export interface OfficialSource {
  type: OfficialSourceType;
  reference: string;
  url?: string;
  bibleEdition?: string;
}

export type DifficultyLevel = "facile" | "moyen" | "difficile" | "expert";

export type ContentCategory =
  | "personnages"
  | "evenements"
  | "versets"
  | "enseignements"
  | "prophéties"
  | "paraboles"
  | "livres"
  | "geographie";

export interface BibleContent {
  id: string;
  category: ContentCategory;
  difficulty: DifficultyLevel;
  title: string;
  description: string;
  sources: OfficialSource[];
  verifiedAt: string;
  tags: string[];
}

export interface QuizQuestion extends BibleContent {
  type: "quiz";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UndercoverCard extends BibleContent {
  type: "undercover";
  word: string;
  hints: string[];
}

export interface MemoryPair extends BibleContent {
  type: "memory";
  term: string;
  match: string;
}

export interface SpeedChallenge extends BibleContent {
  type: "speed";
  prompt: string;
  answer: string;
  timeLimitSeconds: number;
}

export interface TrueFalseQuestion extends BibleContent {
  type: "truefalse";
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface TimelineEvent extends BibleContent {
  type: "timeline";
  event: string;
  yearOrder: number;
}

export interface TimelineSet extends BibleContent {
  type: "timeline-set";
  events: { id: string; event: string; yearOrder: number }[];
}

export interface WordScrambleItem extends BibleContent {
  type: "wordscramble";
  word: string;
  hint: string;
}

export interface VerseGapQuestion extends BibleContent {
  type: "versegap";
  verse: string;
  gapWord: string;
  options: string[];
  reference: string;
}

export interface Flashcard extends BibleContent {
  type: "flashcard";
  front: string;
  back: string;
}

export interface VideoQuizItem extends BibleContent {
  type: "videoquiz";
  videoId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  watchBeforeSeconds?: number;
}

export type GameContent =
  | QuizQuestion
  | UndercoverCard
  | MemoryPair
  | SpeedChallenge
  | TrueFalseQuestion
  | TimelineEvent
  | WordScrambleItem
  | VerseGapQuestion
  | Flashcard
  | VideoQuizItem;

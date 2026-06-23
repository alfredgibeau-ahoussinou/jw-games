import type { QuizQuestion, TrueFalseQuestion, VerseGapQuestion } from "./content";

export type StudyMiniGameType = "quiz" | "vraifaux" | "verset";

export type StudyPublicationKind =
  | "tours-de-garde"
  | "reveillez-vous"
  | "livre"
  | "brochure";

export interface StudyArticle {
  id: string;
  kind: StudyPublicationKind;
  title: string;
  subtitle?: string;
  /** Résumé affiché sur la carte */
  excerpt: string;
  /** Contenu complet lu sur le site */
  body: string[];
  year?: string;
  issue?: string;
  scriptureRefs?: string[];
  themeId?: string;
}

export interface StudyReading {
  id: string;
  title: string;
  paragraphs: string[];
  scriptureRefs?: string[];
}

export interface StudyMiniGame {
  id: string;
  title: string;
  description: string;
  type: StudyMiniGameType;
  estimatedMinutes: number;
  quizQuestions?: QuizQuestion[];
  trueFalseQuestions?: TrueFalseQuestion[];
  verseQuestions?: VerseGapQuestion[];
}

export interface StudyTheme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  scriptureHighlight: string;
  scriptureRef: string;
  readings?: StudyReading[];
  /** IDs des articles lus sur le site */
  articleIds?: string[];
  miniGames: StudyMiniGame[];
}

export const STUDY_PUBLICATION_LABELS: Record<StudyPublicationKind, string> = {
  "tours-de-garde": "Tours de garde",
  "reveillez-vous": "Réveillez-vous !",
  livre: "Livre",
  brochure: "Brochure",
};

/** @deprecated utilisez StudyArticle */
export type StudyPublicationRef = StudyArticle;

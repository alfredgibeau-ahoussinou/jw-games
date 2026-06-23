import type { QuizQuestion, TrueFalseQuestion, VerseGapQuestion } from "@/types/content";
import type { StudyReading } from "@/types/study";

const SRC = "Traduction du monde nouveau" as const;
const VER = "2026-01-01" as const;

export function quiz(
  id: string,
  question: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  reference: string
): QuizQuestion {
  return {
    id,
    type: "quiz",
    category: "enseignements",
    difficulty: "facile",
    title: "",
    description: "",
    question,
    options,
    correctIndex,
    explanation,
    sources: [{ type: "bible", reference, bibleEdition: SRC }],
    verifiedAt: VER,
    tags: ["etude"],
  };
}

export function tf(
  id: string,
  statement: string,
  isTrue: boolean,
  explanation: string,
  reference: string
): TrueFalseQuestion {
  return {
    id,
    type: "truefalse",
    category: "enseignements",
    difficulty: "facile",
    title: "",
    description: "",
    statement,
    isTrue,
    explanation,
    sources: [{ type: "bible", reference, bibleEdition: SRC }],
    verifiedAt: VER,
    tags: ["etude"],
  };
}

export function verset(
  id: string,
  verse: string,
  gapWord: string,
  options: string[],
  reference: string
): VerseGapQuestion {
  return {
    id,
    type: "versegap",
    category: "versets",
    difficulty: "facile",
    title: reference,
    description: "",
    verse,
    gapWord,
    options,
    reference,
    sources: [{ type: "bible", reference, bibleEdition: SRC }],
    verifiedAt: VER,
    tags: ["etude"],
  };
}

export function reading(
  id: string,
  title: string,
  paragraphs: string[],
  scriptureRefs?: string[]
): StudyReading {
  return { id, title, paragraphs, scriptureRefs };
}

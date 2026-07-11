import type { VerseGapQuestion } from "@/types/content";

function hashId(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) {
    h = (h * 31 + id.charCodeAt(i)) >>> 0;
  }
  return h;
}

/** Répartit la bonne réponse sur A/B/C/D selon l'id (évite le biais « toujours en A » dans les données). */
export function diversifyQuizQuestion<T extends { id: string; options: string[]; correctIndex: number }>(
  question: T
): T {
  const n = question.options.length;
  if (n <= 1) return question;
  const shift = hashId(question.id) % n;
  if (shift === 0) return question;
  const options = [...question.options.slice(shift), ...question.options.slice(0, shift)];
  const correctIndex = (question.correctIndex - shift + n) % n;
  return { ...question, options, correctIndex };
}

/** Mélange les options (Fisher-Yates) — aléatoire à chaque partie */
export function shuffleQuestionOptions<T extends { options: string[]; correctIndex: number }>(
  question: T
): T {
  const indexed = question.options.map((opt, i) => ({ opt, i }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  return {
    ...question,
    options: indexed.map((x) => x.opt),
    correctIndex: indexed.findIndex((x) => x.i === question.correctIndex),
  };
}

export function prepareQuizQuestions<T extends { id: string; options: string[]; correctIndex: number }>(
  questions: T[]
): T[] {
  return questions.map(diversifyQuizQuestion);
}

/** Prépare les questions pour une partie : diversifie puis mélange */
export function prepareQuizForPlay<T extends { id: string; options: string[]; correctIndex: number }>(
  questions: T[]
): T[] {
  return questions.map((q) => shuffleQuestionOptions(diversifyQuizQuestion(q)));
}

export function prepareVerseGapQuestions(questions: VerseGapQuestion[]): VerseGapQuestion[] {
  return questions.map((q) => {
    const correctIndex = q.options.findIndex(
      (opt) => opt.toLowerCase() === q.gapWord.toLowerCase()
    );
    const shuffled = shuffleQuestionOptions({
      options: q.options,
      correctIndex: correctIndex >= 0 ? correctIndex : 0,
    });
    return { ...q, options: shuffled.options };
  });
}

export function fisherYatesShuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

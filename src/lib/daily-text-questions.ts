import type { DailyTextQuestion, JwDailyText } from "@/types/daily-text";

type DailyTextBase = Omit<JwDailyText, "questions">;

interface TextInsights {
  sentences: string[];
  mainIdea: string;
  personalSentence: string | null;
  jehovahSentence: string | null;
  namedPerson: string | null;
  personLesson: string | null;
  contrast: string | null;
  spiritualProvision: string | null;
}

const BIBLICAL_NAMES =
  /\b(David|Moïse|Jésus|Abraham|Paul|Pierre|Daniel|Job|Noé|Samuel|Élie|Élisée|Timothée|Ruth|Esther|Goliath|Marie|Jean|Jacques|Jean-Baptiste|Josué|Hénoc)\b/;

const GENERIC_DISTRACTORS = [
  "Se fier uniquement à ses propres forces, sans prier.",
  "Fixer son attention sur les problèmes plutôt que sur Jéhovah.",
  "Ignorer l'étude biblique et les réunions chrétiennes.",
  "Chercher la vengeance ou la gloire personnelle.",
  "Douter que Jéhovah s'intéresse à notre situation.",
  "Comparer constamment son service à celui des autres.",
  "Attendre passivement sans agir selon ses principes.",
];

function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 25);
}

function shorten(text: string, max = 110): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const out = [...arr];
  let s = seed;
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function buildOptions(correct: string, wrong: string[], seed: number) {
  const uniqueWrong = wrong.filter((w) => w !== correct && w.length > 10);
  const options = shuffleWithSeed(
    [correct, ...uniqueWrong.slice(0, 3)],
    seed
  ).slice(0, 4);
  while (options.length < 4) {
    const extra = GENERIC_DISTRACTORS.find((d) => !options.includes(d));
    if (!extra) break;
    options.push(extra);
  }
  return { options, correctIndex: options.indexOf(correct) };
}

function dateSeed(iso: string): number {
  const [y, m, d] = iso.split("-").map(Number);
  return (y ?? 0) * 10000 + (m ?? 0) * 100 + (d ?? 0);
}

const LESSON_WORDS =
  /\b(Jéhovah|foi|confiance|convaincu|pensait|savait|prière|servir|courage|fidèle|revigor|profiter|méditer|appliquer)\b/i;

function findPersonLesson(sentences: string[], person: string): string | null {
  const idx = sentences.findIndex((s) => s.includes(person));
  if (idx < 0) return null;
  const window = sentences.slice(idx);
  return (
    window.find((s) => /\b(affronté|vaincu|a montré|a agi|a fait confiance)\b/i.test(s)) ??
    window.find((s) => LESSON_WORDS.test(s)) ??
    window.find((s) => s.length > 45 && !/^\s*Alors qu/i.test(s)) ??
    window[window.length - 1] ??
    null
  );
}

function findMainIdea(sentences: string[], commentary: string): string {
  return (
    sentences.find((s) => /\bnous pouvons\b/i.test(s)) ??
    sentences.find((s) => /\b(il est évident|ainsi|donc|en conclusion|rappelons)\b/i.test(s)) ??
    sentences.find((s) => LESSON_WORDS.test(s) && s.length > 40) ??
    sentences[sentences.length - 1] ??
    sentences[0] ??
    commentary
  );
}

function sameAnswer(a: string, b: string): boolean {
  return shorten(a, 85).toLowerCase() === shorten(b, 85).toLowerCase();
}

function findContrast(sentences: string[]): string | null {
  for (const s of sentences) {
    if (/par contre|cependant|toutefois|en revanche|à l'inverse/i.test(s)) {
      return s;
    }
  }
  if (/contraste|tandis que|mais vous/i.test(sentences.join(" "))) {
    return sentences.find((s) => /mais|tandis|par contre/i.test(s)) ?? null;
  }
  return null;
}

function analyzeCommentary(commentary: string): TextInsights {
  const sentences = splitSentences(commentary);
  const mainIdea = findMainIdea(sentences, commentary);

  const personalSentence =
    sentences.find((s) =>
      /\b(nous pouvons|nous devons|comment pouvons-nous|à nous de|pour nous)\b/i.test(s)
    ) ??
    sentences.find((s) => /\bnous\b/i.test(s)) ??
    null;

  const jehovahSentence =
    sentences.find((s) =>
      /\b(Jéhovah|Dieu|notre Père céleste)\b/i.test(s) &&
      /\b(aide|comble|accorde|soutient|fortifie|guide|donne|promet|invite)\b/i.test(s)
    ) ?? sentences.find((s) => /\bJéhovah\b/i.test(s)) ?? null;

  const nameMatch = commentary.match(BIBLICAL_NAMES);
  const namedPerson = nameMatch?.[1] ?? null;
  const personLesson = namedPerson
    ? findPersonLesson(sentences, namedPerson)
    : null;

  const spiritualProvision =
    sentences.find((s) =>
      /\b(Bible|publications|réunions|assemblées|prière|étude|nourriture spirituelle|esprit saint)\b/i.test(s)
    ) ?? null;

  return {
    sentences,
    mainIdea,
    personalSentence,
    jehovahSentence,
    namedPerson,
    personLesson,
    contrast: findContrast(sentences),
    spiritualProvision,
  };
}

function pickDistractors(
  correct: string,
  insights: TextInsights,
  seed: number
): string[] {
  const fromText = insights.sentences
    .filter((s) => s !== correct)
    .map((s) => shorten(s, 95));
  const pool = [...fromText, ...GENERIC_DISTRACTORS];
  return shuffleWithSeed(pool, seed).filter((w) => w !== correct).slice(0, 3);
}

type QuestionDraft = Omit<DailyTextQuestion, "id"> | null;

const APPLICATION_PATTERNS =
  /\b(nous pouvons|nous devons|comment pouvons-nous|à nous de|pour nous)\b/i;

function isApplicationSentence(sentence: string): boolean {
  return APPLICATION_PATTERNS.test(sentence);
}

function personalApplicationQ(insights: TextInsights, seed: number): QuestionDraft {
  if (!insights.personalSentence) return null;
  const correct = shorten(insights.personalSentence, 100);
  const isApplication = isApplicationSentence(insights.personalSentence);
  const wrong = isApplication
    ? [
        "Attendre que les autres prennent l'initiative spirituelle à notre place.",
        "Réduire notre service à un geste occasionnel sans régularité.",
        ...pickDistractors(correct, insights, seed + 1),
      ]
    : pickDistractors(correct, insights, seed + 1);
  return {
    question: isApplication
      ? "Selon ce commentaire, comment pouvez-vous appliquer cette leçon dans votre vie aujourd'hui ?"
      : "Selon ce commentaire, quel point vous aide à méditer sur ce verset aujourd'hui ?",
    ...buildOptions(correct, wrong, seed),
    explanation: insights.personalSentence,
  };
}

function characterExampleQ(insights: TextInsights, seed: number): QuestionDraft {
  if (!insights.namedPerson || !insights.personLesson) return null;
  const correct = shorten(insights.personLesson, 100);
  const wrong = [
    `${insights.namedPerson} a agi par orgueil et sans prier Jéhovah.`,
    `L'exemple de ${insights.namedPerson} ne concerne que les enfants, pas les adultes.`,
    ...pickDistractors(correct, insights, seed),
  ];
  return {
    question: `D'après ce texte, que pouvez-vous retenir de l'exemple de ${insights.namedPerson} pour votre propre foi ?`,
    ...buildOptions(correct, wrong, seed),
    explanation: insights.personLesson,
  };
}

function jehovahRoleQ(insights: TextInsights, seed: number): QuestionDraft {
  if (!insights.jehovahSentence) return null;
  const correct = shorten(insights.jehovahSentence, 100);
  const wrong = [
    "Jéhovah laisse chacun se débrouiller seul face aux épreuves.",
    "Jéhovah ne s'intéresse qu'aux situations des premiers chrétiens.",
    ...pickDistractors(correct, insights, seed),
  ];
  return {
    question:
      "Selon le commentaire d'aujourd'hui, comment Jéhovah agit-il en faveur de ses serviteurs ?",
    ...buildOptions(correct, wrong, seed),
    explanation: insights.jehovahSentence,
  };
}

function contrastQ(insights: TextInsights, seed: number): QuestionDraft {
  if (!insights.contrast) return null;
  const correct = shorten(insights.contrast, 100);
  const wrong = [
    "Le commentaire dit que tout le monde reçoit la même nourriture spirituelle.",
    "Il n'y a aucune différence entre servir Jéhovah ou non.",
    ...pickDistractors(correct, insights, seed),
  ];
  return {
    question:
      "Quel contraste ce texte met-il en lumière pour vous aider à méditer ?",
    ...buildOptions(correct, wrong, seed),
    explanation: insights.contrast,
  };
}

function spiritualFoodQ(insights: TextInsights, seed: number): QuestionDraft {
  if (!insights.spiritualProvision) return null;
  const correct = shorten(insights.spiritualProvision, 100);
  const wrong = [
    "En consultant uniquement des sources non bibliques.",
    "En évitant les réunions pour gagner du temps personnel.",
    ...pickDistractors(correct, insights, seed),
  ];
  return {
    question:
      "Comment pouvez-vous être « revigoré » spirituellement selon ce commentaire ?",
    ...buildOptions(correct, wrong, seed),
    explanation: insights.spiritualProvision,
  };
}

function perspectiveQ(insights: TextInsights, seed: number): QuestionDraft {
  const fearSentence = insights.sentences.find((s) =>
    /\b(peur|terrifi|inquiét|fixaient leur attention|provoqu)\b/i.test(s)
  );
  const faithSentence = insights.sentences.find((s) =>
    /\b(Jéhovah|autre angle|confiance|convaincu|pensait avant tout)\b/i.test(s)
  );
  if (!fearSentence || !faithSentence || sameAnswer(fearSentence, faithSentence)) {
    return null;
  }
  const correct = shorten(faithSentence, 100);
  const wrong = [
    shorten(fearSentence, 100),
    "Se fier à sa propre sagesse sans consulter la Bible.",
    "Éviter toute situation qui pourrait nous mettre à l'épreuve.",
    ...pickDistractors(correct, insights, seed),
  ];
  return {
    question:
      "Lorsque vous faites face à des épreuves, sur quoi ce texte vous invite-t-il à fixer votre attention ?",
    ...buildOptions(correct, wrong, seed),
    explanation: faithSentence,
  };
}

function scriptureApplicationQ(
  data: DailyTextBase,
  insights: TextInsights,
  seed: number
): QuestionDraft {
  const link =
    insights.personalSentence ??
    insights.jehovahSentence ??
    insights.personLesson ??
    insights.mainIdea;
  const correct = shorten(link, 100);
  const shortVerse = shorten(data.scripture, 55);
  const wrong = [
    "Ce verset concerne uniquement la vie future, pas notre quotidien.",
    "Le verset invite à se concentrer sur les inquiétudes matérielles.",
    ...pickDistractors(correct, insights, seed),
  ];
  return {
    question: `Le verset « ${shortVerse} » (${data.scriptureReference}) vous invite aujourd'hui à…`,
    ...buildOptions(correct, wrong, seed),
    explanation: `« ${data.scripture} » — ${data.scriptureReference}. ${shorten(link, 140)}`,
  };
}

function mainIdeaQ(insights: TextInsights, seed: number): QuestionDraft {
  const correct = shorten(insights.mainIdea, 100);
  const wrong = pickDistractors(correct, insights, seed);
  return {
    question: "Quelle leçon principale ce texte du jour développe-t-il ?",
    ...buildOptions(correct, wrong, seed),
    explanation: insights.mainIdea,
  };
}

export function buildDailyTextQuestions(
  data: DailyTextBase,
  seed = dateSeed(data.date)
): DailyTextQuestion[] {
  const insights = analyzeCommentary(data.commentary);

  const builders: ((s: number) => QuestionDraft)[] = [
    (s) => scriptureApplicationQ(data, insights, s),
    (s) => perspectiveQ(insights, s),
    (s) => contrastQ(insights, s),
    (s) => jehovahRoleQ(insights, s),
    (s) => spiritualFoodQ(insights, s),
    (s) => characterExampleQ(insights, s),
    (s) => mainIdeaQ(insights, s),
    (s) => personalApplicationQ(insights, s),
  ];

  const questions: DailyTextQuestion[] = [];
  const usedAnswers = new Set<string>();
  let offset = 0;

  function accept(draft: QuestionDraft): boolean {
    if (!draft) return false;
    const answerKey = shorten(draft.options[draft.correctIndex], 85).toLowerCase();
    if (usedAnswers.has(answerKey)) return false;
    const duplicate = questions.some(
      (q) =>
        q.question === draft.question ||
        sameAnswer(q.options[q.correctIndex], draft.options[draft.correctIndex])
    );
    if (duplicate) return false;
    usedAnswers.add(answerKey);
    questions.push({
      id: `jw-dt-q${questions.length + 1}`,
      ...draft,
    });
    return true;
  }

  for (const build of builders) {
    if (questions.length >= 4) break;
    accept(build(seed + offset));
    offset += 1;
  }

  let fillAttempts = 0;
  while (questions.length < 4 && fillAttempts < 12) {
    fillAttempts += 1;
    const fallbacks: QuestionDraft[] = [
      mainIdeaQ(insights, seed + offset),
      characterExampleQ(insights, seed + offset + 1),
      jehovahRoleQ(insights, seed + offset + 2),
      contrastQ(insights, seed + offset + 3),
    ];
    offset += 4;
    for (const draft of fallbacks) {
      if (questions.length >= 4) break;
      accept(draft);
    }
  }

  return questions.slice(0, 4);
}

/** Régénère les questions à partir du contenu (cache sans questions obsolètes). */
export function attachDailyTextQuestions(entry: JwDailyText): JwDailyText {
  const { questions: _removed, ...base } = entry;
  return {
    ...entry,
    questions: buildDailyTextQuestions(base),
  };
}

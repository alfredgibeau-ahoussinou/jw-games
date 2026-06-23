import type { DailyTextQuestion, JwDailyText } from "@/types/daily-text";

const WOL_RS = "r30";
const WOL_LIB = "lp-f";
const JW_LOCALE = "F";

interface WolDailyTextItem {
  content?: string;
  reference?: string;
  publicationTitle?: string;
  url?: string;
  articleClasses?: string;
}

interface WolDailyTextResponse {
  items?: WolDailyTextItem[];
}

function decodeHtml(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(html: string): string {
  return decodeHtml(html.replace(/<[^>]+>/g, " "));
}

function formatDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const parts = formatter.formatToParts(date);
  const year = Number(parts.find((p) => p.type === "year")?.value);
  const month = Number(parts.find((p) => p.type === "month")?.value);
  const day = Number(parts.find((p) => p.type === "day")?.value);
  const iso = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const jw = `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`;
  return { year, month, day, iso, jw };
}

async function fetchWithTimeout(url: string, init: RequestInit, ms: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

export function parseWolDailyTextContent(content: string): {
  heading: string;
  scripture: string;
  scriptureReference: string;
  commentary: string;
  commentarySource: string;
} {
  const headingMatch = content.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const heading = headingMatch ? stripTags(headingMatch[1]) : "";

  const themeMatch = content.match(/class="themeScrp"[^>]*>([\s\S]*?)<\/p>/i);
  const themeHtml = themeMatch?.[1] ?? "";

  const scriptureParts = [...themeHtml.matchAll(/<em>([\s\S]*?)<\/em>/gi)]
    .map((m) => decodeHtml(m[1]))
    .filter((t) => t.length > 2 && !/^[A-Za-zÀ-ÿ0-9.]+\s*\d/.test(t));

  const refMatch = themeHtml.match(/class="b"[^>]*>\s*<em>([\s\S]*?)<\/em>/i);
  const scriptureReference = refMatch ? decodeHtml(refMatch[1]) : "";
  const scripture = scriptureParts[0] ?? stripTags(themeHtml).replace(/\([^)]*\)/g, "").trim();

  const commentaryMatch = content.match(/class="sb"[^>]*>([\s\S]*?)<\/p>/i);
  const commentaryHtml = commentaryMatch?.[1] ?? "";

  const pcLinks = [...commentaryHtml.matchAll(/<a[^>]*href="(\/wol\/pc\/[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)];
  const sourceLink = pcLinks[pcLinks.length - 1];

  let commentarySource = "";
  let commentaryBody = commentaryHtml;

  if (sourceLink?.index !== undefined) {
    commentarySource = stripTags(sourceLink[2]);
    commentaryBody = commentaryHtml.slice(0, sourceLink.index).trim();
  }

  const commentary = stripTags(commentaryBody)
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\s{2,}/g, " ");

  return {
    heading,
    scripture,
    scriptureReference,
    commentary,
    commentarySource,
  };
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
  const options = shuffleWithSeed([correct, ...wrong.filter((w) => w !== correct).slice(0, 3)], seed);
  return { options, correctIndex: options.indexOf(correct) };
}

function firstSentence(text: string): string {
  const m = text.match(/^[^.!?]+[.!?]?/);
  return (m ? m[0] : text).trim();
}

function buildQuizQuestions(
  data: Omit<JwDailyText, "questions">,
  dateSeed: number
): DailyTextQuestion[] {
  const { scripture, scriptureReference, commentary, commentarySource } = data;
  const intro = firstSentence(commentary);

  const refBook = scriptureReference.split(/[\s.:]/)[0] ?? scriptureReference;

  const q1 = buildOptions(
    scriptureReference,
    ["Psaume 23:1", "Jean 3:16", "Matthieu 6:33", "Romains 8:28"],
    dateSeed
  );

  const q2 = buildOptions(
    scripture,
    [
      "Jéhovah est mon berger. Je ne manquerai de rien.",
      "Aimez-vous les uns les autres.",
      "Confie-toi en Jéhovah de tout ton cœur.",
      "Celui qui endure jusqu'à la fin sera sauvé.",
    ],
    dateSeed + 1
  );

  const q3 = buildOptions(
    intro,
    [
      "Ce commentaire ne s'applique qu'aux premiers chrétiens.",
      "Il encourage à ignorer la Parole de Jéhovah.",
      "Il met l'accent sur la vengeance personnelle.",
      "Il parle uniquement de richesse matérielle.",
    ],
    dateSeed + 2
  );

  const q4Correct = commentarySource || scriptureReference.replace(/\s+\d.*$/, "").trim() || scriptureReference;
  const q4Wrong = commentarySource
    ? ["w23.01 15 § 10", "g22.2 4 § 3", "it-1 512", "bh 15 § 2"]
    : ["Psaumes", "Proverbes", "Apocalypse", "Actes"];
  const q4 = buildOptions(q4Correct, q4Wrong, dateSeed + 3);

  return [
    {
      id: "jw-dt-q1",
      question: "Quelle référence biblique accompagne le texte du jour ?",
      ...q1,
      explanation: `Le verset cité provient de ${scriptureReference}.`,
    },
    {
      id: "jw-dt-q2",
      question: "Quel verset est cité en introduction du texte du jour ?",
      ...q2,
      explanation: `Texte du jour : « ${scripture} » (${scriptureReference}).`,
    },
    {
      id: "jw-dt-q3",
      question: "Comment commence le commentaire officiel du texte du jour ?",
      ...q3,
      explanation: intro,
    },
    {
      id: "jw-dt-q4",
      question: commentarySource
        ? "Quelle est la source du commentaire du texte du jour ?"
        : `De quel livre biblique provient la référence ${scriptureReference} ?`,
      ...q4,
      explanation: commentarySource
        ? `Source : ${commentarySource}.`
        : `La référence ${scriptureReference} provient du livre ${refBook}.`,
    },
  ];
}

export function getParisDate(offsetDays = 0): Date {
  const { year, month, day, iso } = formatDateParts(new Date());
  const base = new Date(`${iso}T12:00:00`);
  if (offsetDays === 0) return base;
  base.setDate(base.getDate() + offsetDays);
  return base;
}

export async function fetchJwDailyText(date: Date = new Date()): Promise<JwDailyText> {
  const { year, month, day, iso, jw } = formatDateParts(date);
  const wolUrl = `https://wol.jw.org/wol/dt/${WOL_RS}/${WOL_LIB}/${year}/${month}/${day}`;

  const res = await fetchWithTimeout(
    wolUrl,
    {
      headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (compatible; JWGames/1.0)",
      },
      cache: "no-store",
    },
    12_000
  );

  if (!res.ok) {
    throw new Error(`WOL indisponible (${res.status})`);
  }

  const data = (await res.json()) as WolDailyTextResponse;
  const item =
    data.items?.find((i) => i.articleClasses?.includes("today")) ?? data.items?.[0];

  if (!item?.content) {
    throw new Error("Texte du jour introuvable pour cette date");
  }

  const parsed = parseWolDailyTextContent(item.content);
  const articleUrl = item.url ? `https://wol.jw.org${item.url}` : wolUrl;
  const jwOrgUrl = `https://www.jw.org/finder?alias=daily-text&date=${jw}&wtlocale=${JW_LOCALE}&srcid=jwlshare`;

  const base: Omit<JwDailyText, "questions"> = {
    date: iso,
    heading: parsed.heading,
    scripture: parsed.scripture,
    scriptureReference: parsed.scriptureReference,
    commentary: parsed.commentary,
    commentarySource: parsed.commentarySource,
    publicationTitle: item.publicationTitle ?? item.reference ?? "Examinons les Écritures chaque jour",
    wolUrl: articleUrl,
    jwOrgUrl,
  };

  const seed = year * 10000 + month * 100 + day;
  return { ...base, questions: buildQuizQuestions(base, seed) };
}

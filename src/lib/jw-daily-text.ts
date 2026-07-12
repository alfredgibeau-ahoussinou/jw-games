import type { JwDailyText } from "@/types/daily-text";
import { buildDailyTextQuestions } from "@/lib/daily-text-questions";

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

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** Date du jour au format ISO (fuseau Europe/Paris). */
export function toParisIso(date: Date = new Date()): string {
  return formatDateParts(date).iso;
}

/** Valide et parse une date ISO (YYYY-MM-DD). */
export function parseParisIso(iso: string): Date | null {
  if (!ISO_DATE_RE.test(iso)) return null;
  const parsed = new Date(`${iso}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/** Décale une date ISO de N jours (calendrier local). */
export function shiftParisIso(iso: string, days: number): string {
  const date = parseParisIso(iso);
  if (!date) return iso;
  date.setDate(date.getDate() + days);
  return toParisIso(date);
}

/** Bornes du mois calendaire courant (fuseau Paris). */
export function getParisMonthRange(reference: Date = new Date()): { from: string; to: string } {
  const { year, month } = formatDateParts(reference);
  const from = `${year}-${String(month).padStart(2, "0")}-01`;
  const lastDay = new Date(year, month, 0).getDate();
  const to = `${year}-${String(month).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;
  return { from, to };
}

/** Liste toutes les dates ISO entre from et to (inclus). */
export function listParisIsoRange(from: string, to: string): string[] {
  const dates: string[] = [];
  let cursor = from;
  while (cursor <= to) {
    dates.push(cursor);
    cursor = shiftParisIso(cursor, 1);
  }
  return dates;
}

async function fetchWithTimeout(url: string, init: RequestInit, ms: number) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } catch (err) {
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("La bibliothèque en ligne met trop de temps à répondre");
    }
    throw err;
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
  return { ...base, questions: buildDailyTextQuestions(base, seed) };
}

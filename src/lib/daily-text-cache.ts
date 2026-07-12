import { mkdir, readdir, readFile, unlink, writeFile } from "fs/promises";
import path from "path";
import type { JwDailyText } from "@/types/daily-text";
import { shiftParisIso } from "@/lib/jw-daily-text";

export const DAILY_TEXT_CACHE_DIR = path.join(process.cwd(), "public", "cache", "daily-text");

export function dailyTextCachePath(iso: string) {
  return path.join(DAILY_TEXT_CACHE_DIR, `${iso}.json`);
}

export async function readDailyTextCache(iso: string): Promise<JwDailyText | null> {
  try {
    const raw = await readFile(dailyTextCachePath(iso), "utf8");
    return JSON.parse(raw) as JwDailyText;
  } catch {
    return null;
  }
}

export async function readDailyTextCacheFromCdn(
  iso: string,
  siteUrl?: string
): Promise<JwDailyText | null> {
  const base =
    siteUrl ??
    process.env.URL ??
    process.env.DEPLOY_PRIME_URL ??
    process.env.NEXT_PUBLIC_SITE_URL;

  if (!base) return null;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4_000);
    const res = await fetch(`${base.replace(/\/$/, "")}/cache/daily-text/${iso}.json`, {
      cache: "force-cache",
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    return (await res.json()) as JwDailyText;
  } catch {
    return null;
  }
}

async function readDailyTextCacheAnywhere(iso: string): Promise<JwDailyText | null> {
  return (await readDailyTextCache(iso)) ?? (await readDailyTextCacheFromCdn(iso));
}

/** Cherche le cache pour la date demandée, puis les jours précédents. */
export async function readDailyTextCacheNear(
  iso: string,
  maxDaysBack = 7
): Promise<{ entry: JwDailyText; servedIso: string } | null> {
  for (let offset = 0; offset <= maxDaysBack; offset++) {
    const candidate = shiftParisIso(iso, -offset);
    const entry = await readDailyTextCacheAnywhere(candidate);
    if (entry) return { entry, servedIso: candidate };
  }
  return null;
}

/** Enregistre un texte en cache local (no-op si le FS est en lecture seule). */
export async function writeDailyTextCache(entry: JwDailyText): Promise<boolean> {
  try {
    await mkdir(DAILY_TEXT_CACHE_DIR, { recursive: true });
    await writeFile(dailyTextCachePath(entry.date), JSON.stringify(entry), "utf8");
    return true;
  } catch {
    return false;
  }
}

const ISO_FILE_RE = /^(\d{4}-\d{2}-\d{2})\.json$/;

/** Supprime les fichiers hors de la fenêtre [keepFrom, keepTo]. */
export async function pruneDailyTextCache(keepFrom: string, keepTo: string): Promise<string[]> {
  let files: string[];
  try {
    files = await readdir(DAILY_TEXT_CACHE_DIR);
  } catch {
    return [];
  }

  const removed: string[] = [];
  for (const file of files) {
    const match = file.match(ISO_FILE_RE);
    if (!match) continue;
    const iso = match[1];
    if (iso < keepFrom || iso > keepTo) {
      await unlink(path.join(DAILY_TEXT_CACHE_DIR, file));
      removed.push(iso);
    }
  }
  return removed.sort();
}

export async function dailyTextCacheExists(iso: string): Promise<boolean> {
  try {
    await readFile(dailyTextCachePath(iso));
    return true;
  } catch {
    return false;
  }
}

import { readFile } from "fs/promises";
import path from "path";
import type { JwDailyText } from "@/types/daily-text";

const CACHE_DIR = path.join(process.cwd(), "public", "cache", "daily-text");

export function dailyTextCachePath(iso: string) {
  return path.join(CACHE_DIR, `${iso}.json`);
}

function shiftIso(iso: string, days: number) {
  const date = new Date(`${iso}T12:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
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

/** Cherche le cache pour la date demandée, puis les jours précédents (WOL souvent indisponible en prod). */
export async function readDailyTextCacheNear(
  iso: string,
  maxDaysBack = 7
): Promise<{ entry: JwDailyText; servedIso: string } | null> {
  for (let offset = 0; offset <= maxDaysBack; offset++) {
    const candidate = shiftIso(iso, -offset);
    const entry = await readDailyTextCacheAnywhere(candidate);
    if (entry) return { entry, servedIso: candidate };
  }
  return null;
}

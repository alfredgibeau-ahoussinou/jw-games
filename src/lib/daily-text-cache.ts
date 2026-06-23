import { readFile } from "fs/promises";
import path from "path";
import type { JwDailyText } from "@/types/daily-text";

const CACHE_DIR = path.join(process.cwd(), "public", "cache", "daily-text");

export function dailyTextCachePath(iso: string) {
  return path.join(CACHE_DIR, `${iso}.json`);
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
    const res = await fetch(`${base.replace(/\/$/, "")}/cache/daily-text/${iso}.json`, {
      cache: "force-cache",
    });
    if (!res.ok) return null;
    return (await res.json()) as JwDailyText;
  } catch {
    return null;
  }
}

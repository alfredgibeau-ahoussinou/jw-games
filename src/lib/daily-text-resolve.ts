import { attachDailyTextQuestions } from "@/lib/daily-text-questions";
import {
  readDailyTextCache,
  readDailyTextCacheFromCdn,
  readDailyTextCacheNear,
  writeDailyTextCache,
} from "@/lib/daily-text-cache";
import { fetchJwDailyText, parseParisIso, toParisIso } from "@/lib/jw-daily-text";
import type { JwDailyText } from "@/types/daily-text";

export type DailyTextSource = "cache" | "live" | "cache-near" | "cache-fallback";

export interface ResolvedDailyText {
  entry: JwDailyText;
  source: DailyTextSource;
  requestedIso: string;
  servedIso: string;
}

function normalizeIso(input: string | null | undefined): string {
  if (!input) return toParisIso();
  const parsed = parseParisIso(input);
  return parsed ? toParisIso(parsed) : toParisIso();
}

/** Résout un texte du jour : cache exact → WOL en direct → repli proche (aujourd'hui seulement). */
export async function resolveDailyText(
  requestedIso?: string | null,
  options?: { allowNearFallback?: boolean }
): Promise<ResolvedDailyText> {
  const iso = normalizeIso(requestedIso);
  const allowNearFallback = options?.allowNearFallback ?? !requestedIso;

  const cached =
    (await readDailyTextCache(iso)) ?? (await readDailyTextCacheFromCdn(iso));
  if (cached) {
    return {
      entry: attachDailyTextQuestions(cached),
      source: "cache",
      requestedIso: iso,
      servedIso: iso,
    };
  }

  try {
    const date = parseParisIso(iso)!;
    const live = await fetchJwDailyText(date);
    await writeDailyTextCache(live);
    return {
      entry: attachDailyTextQuestions(live),
      source: "live",
      requestedIso: iso,
      servedIso: iso,
    };
  } catch (liveError) {
    if (allowNearFallback) {
      const near = await readDailyTextCacheNear(iso);
      if (near) {
        return {
          entry: attachDailyTextQuestions(near.entry),
          source: near.servedIso === iso ? "cache" : "cache-near",
          requestedIso: iso,
          servedIso: near.servedIso,
        };
      }

      const stale = await readDailyTextCacheNear(iso, 14);
      if (stale) {
        return {
          entry: attachDailyTextQuestions(stale.entry),
          source: "cache-fallback",
          requestedIso: iso,
          servedIso: stale.servedIso,
        };
      }
    }

    throw liveError;
  }
}

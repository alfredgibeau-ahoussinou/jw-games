import { NextResponse } from "next/server";
import { readDailyTextCache, readDailyTextCacheFromCdn } from "@/lib/daily-text-cache";
import { fetchJwDailyText } from "@/lib/jw-daily-text";

export const dynamic = "force-dynamic";

function parseDateParam(dateParam: string | null) {
  if (!dateParam) return new Date();
  const parsed = new Date(`${dateParam}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

/** Texte du jour officiel — source : bibliothèque en ligne (wol.jw.org) */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = parseDateParam(searchParams.get("date"));

  const iso = new Intl.DateTimeFormat("fr-CA", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  try {
    const cached =
      (await readDailyTextCache(iso)) ?? (await readDailyTextCacheFromCdn(iso));
    if (cached) {
      return NextResponse.json(cached, {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          "X-Daily-Text-Source": "cache",
        },
      });
    }

    const dailyText = await fetchJwDailyText(date);
    return NextResponse.json(dailyText, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "X-Daily-Text-Source": "live",
      },
    });
  } catch (err) {
    const stale =
      (await readDailyTextCache(iso)) ?? (await readDailyTextCacheFromCdn(iso));
    if (stale) {
      return NextResponse.json(stale, {
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
          "X-Daily-Text-Source": "cache-fallback",
        },
      });
    }

    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

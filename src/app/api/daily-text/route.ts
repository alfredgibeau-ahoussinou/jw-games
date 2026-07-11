import { NextResponse } from "next/server";
import { attachDailyTextQuestions } from "@/lib/daily-text-questions";
import { readDailyTextCacheNear } from "@/lib/daily-text-cache";
import { fetchJwDailyText } from "@/lib/jw-daily-text";

export const dynamic = "force-dynamic";

const isProductionServer = process.env.NETLIFY === "true" || process.env.VERCEL === "1";

function parseDateParam(dateParam: string | null) {
  if (!dateParam) return new Date();
  const parsed = new Date(`${dateParam}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

function cacheResponse(
  entry: ReturnType<typeof attachDailyTextQuestions>,
  source: string,
  requestedIso: string,
  servedIso: string
) {
  return NextResponse.json(entry, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "X-Daily-Text-Source": source,
      "X-Daily-Text-Requested": requestedIso,
      "X-Daily-Text-Served": servedIso,
    },
  });
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

  const cached = await readDailyTextCacheNear(iso);
  if (cached) {
    const source = cached.servedIso === iso ? "cache" : "cache-near";
    return cacheResponse(
      attachDailyTextQuestions(cached.entry),
      source,
      iso,
      cached.servedIso
    );
  }

  if (isProductionServer) {
    return NextResponse.json(
      {
        error:
          "Texte du jour temporairement indisponible. Réessayez plus tard ou consultez JW.org.",
      },
      { status: 503 }
    );
  }

  try {
    const dailyText = await fetchJwDailyText(date);
    return NextResponse.json(dailyText, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        "X-Daily-Text-Source": "live",
        "X-Daily-Text-Requested": iso,
        "X-Daily-Text-Served": iso,
      },
    });
  } catch (err) {
    const stale = await readDailyTextCacheNear(iso);
    if (stale) {
      return cacheResponse(
        attachDailyTextQuestions(stale.entry),
        "cache-fallback",
        iso,
        stale.servedIso
      );
    }

    const message =
      err instanceof Error && err.name === "AbortError"
        ? "Le texte du jour met trop de temps à répondre. Réessayez dans un instant."
        : err instanceof Error
          ? err.message
          : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

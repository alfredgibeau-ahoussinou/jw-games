import { NextResponse } from "next/server";
import { resolveDailyText } from "@/lib/daily-text-resolve";

export const dynamic = "force-dynamic";

function cacheResponse(
  resolved: Awaited<ReturnType<typeof resolveDailyText>>
) {
  return NextResponse.json(resolved.entry, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "X-Daily-Text-Source": resolved.source,
      "X-Daily-Text-Requested": resolved.requestedIso,
      "X-Daily-Text-Served": resolved.servedIso,
    },
  });
}

/** Texte du jour officiel — toute date via ?date=YYYY-MM-DD (WOL + cache). */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dateParam = searchParams.get("date");

  try {
    const resolved = await resolveDailyText(dateParam, {
      allowNearFallback: !dateParam,
    });
    return cacheResponse(resolved);
  } catch (err) {
    const message =
      err instanceof Error && err.name === "AbortError"
        ? "Le texte du jour met trop de temps à répondre. Réessayez dans un instant."
        : err instanceof Error
          ? err.message
          : "Erreur inconnue";

    return NextResponse.json({ error: message }, { status: 502 });
  }
}

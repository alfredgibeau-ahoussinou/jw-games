import { NextResponse } from "next/server";

interface JwMediaFile {
  title?: string;
  track?: number;
  file?: { url?: string };
  subtitles?: { url?: string };
}

interface JwMediaResponse {
  files?: {
    F?: {
      MP4?: JwMediaFile[];
    };
  };
}

function fileMediaKey(url: string): string | null {
  const match =
    url.match(/\/o\/([^/]+?)_r\d+P\.mp4$/i) ??
    url.match(/\/o\/([^/]+)\.mp4$/i);
  return match?.[1] ?? null;
}

function findSubtitleUrl(data: JwMediaResponse, mediaKey: string, track?: string) {
  const items = data.files?.F?.MP4 ?? [];

  if (track) {
    const trackNum = Number(track);
    const byTrack = items.find((item) => item.track === trackNum && item.subtitles?.url);
    if (byTrack?.subtitles?.url) return byTrack.subtitles.url;
  }

  for (const item of items) {
    const url = item.file?.url ?? "";
    const key = fileMediaKey(url);
    if (key === mediaKey && item.subtitles?.url) {
      return item.subtitles.url;
    }
  }

  return null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pub = searchParams.get("pub");
  const mediaKey = searchParams.get("mediaKey");
  const track = searchParams.get("track") ?? undefined;

  if (!pub || !mediaKey) {
    return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 });
  }

  const apiUrl = new URL("https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS");
  apiUrl.searchParams.set("output", "json");
  apiUrl.searchParams.set("pub", pub);
  apiUrl.searchParams.set("fileformat", "MP4");
  apiUrl.searchParams.set("alllangs", "0");
  apiUrl.searchParams.set("langwritten", "F");
  apiUrl.searchParams.set("txtCMSLang", "F");

  try {
    const res = await fetch(apiUrl.toString(), { next: { revalidate: 86400 } });
    if (!res.ok) {
      return NextResponse.json({ url: null }, { status: 502 });
    }

    const data = (await res.json()) as JwMediaResponse;
    const url = findSubtitleUrl(data, mediaKey, track);

    return NextResponse.json(
      { url },
      { headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" } }
    );
  } catch {
    return NextResponse.json({ url: null }, { status: 500 });
  }
}

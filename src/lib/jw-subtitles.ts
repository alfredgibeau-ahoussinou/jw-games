import type { JwVideo } from "@/data/jw-videos";

/** Clé média extraite de l'URL MP4 (ex. gnj_F_01, pk_F_059). */
export function mediaKeyFromStreamUrl(streamUrl: string): string | null {
  const match =
    streamUrl.match(/\/o\/([^/]+?)_r\d+P\.mp4$/i) ??
    streamUrl.match(/\/o\/([^/]+)\.mp4$/i);
  return match?.[1] ?? null;
}

export function subtitleLookupParams(video: JwVideo) {
  const mediaKey = mediaKeyFromStreamUrl(video.streamUrl);
  if (!video.pub || !mediaKey) return null;
  return { pub: video.pub, mediaKey, track: video.track?.toString() };
}

export async function fetchSubtitleUrl(video: JwVideo): Promise<string | null> {
  const params = subtitleLookupParams(video);
  if (!params) return null;

  const qs = new URLSearchParams({ pub: params.pub, mediaKey: params.mediaKey });
  if (params.track) qs.set("track", params.track);
  const res = await fetch(`/api/video-subtitles?${qs}`);
  if (!res.ok) return null;
  const data = (await res.json()) as { url?: string | null };
  return data.url ?? null;
}

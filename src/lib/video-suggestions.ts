import { JW_VIDEO_COLLECTIONS, JW_VIDEOS, type JwVideo } from "@/data/jw-videos";

/** 2–3 vidéos à regarder ensuite (même collection ou catégorie proche). */
export function getWatchNextSuggestions(
  watchedIds: string[] = [],
  limit = 3
): JwVideo[] {
  const watched = new Set(watchedIds);
  const unwatched = JW_VIDEOS.filter((v) => !watched.has(v.id));

  if (unwatched.length === 0) {
    return JW_VIDEOS.slice(0, limit);
  }

  const lastWatched = watchedIds[watchedIds.length - 1];
  const anchor = lastWatched
    ? JW_VIDEOS.find((v) => v.id === lastWatched)
    : undefined;

  const sameCollection = anchor
    ? JW_VIDEO_COLLECTIONS.find((c) => c.videos.some((v) => v.id === anchor.id))
    : undefined;

  const candidates: JwVideo[] = [];

  if (sameCollection) {
    for (const v of sameCollection.videos) {
      if (!watched.has(v.id) && v.id !== anchor?.id) candidates.push(v);
    }
  }

  if (candidates.length < limit && anchor) {
    for (const v of unwatched) {
      if (v.category === anchor.category && !candidates.some((c) => c.id === v.id)) {
        candidates.push(v);
      }
    }
  }

  for (const v of unwatched) {
    if (candidates.length >= limit) break;
    if (!candidates.some((c) => c.id === v.id)) candidates.push(v);
  }

  return candidates.slice(0, limit);
}

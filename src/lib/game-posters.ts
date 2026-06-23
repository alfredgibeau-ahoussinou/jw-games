import type { JwVideo } from "@/data/jw-videos";
import { JW_VIDEOS } from "@/data/jw-videos";
import type { GameMode } from "@/types/game";

/** Affiches uniques tirées du catalogue vidéo — une par jeu */
function uniquePosters(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const v of JW_VIDEOS) {
    if (v.posterUrl && !seen.has(v.posterUrl)) {
      seen.add(v.posterUrl);
      out.push(v.posterUrl);
    }
  }
  return out;
}

const POSTERS = uniquePosters();

function pick(index: number): string {
  return POSTERS[index % POSTERS.length] ?? POSTERS[0];
}

export const GAME_POSTER_URLS: Record<GameMode, string> = {
  quiz: pick(0),
  videoquiz: pick(1),
  vraifaux: pick(2),
  ordre: pick(3),
  mots: pick(4),
  versets: pick(5),
  cartes: pick(6),
  undercover: pick(7),
  rapidite: pick(8),
  memoire: pick(9),
  thematique: pick(10),
  equipe: pick(11),
  quotidien: pick(12),
  devinettes: pick(13),
  biblio: pick(14),
  etude: pick(15),
};

export function posterForVideo(video: JwVideo): string {
  return video.posterUrl || pick(video.id.length);
}

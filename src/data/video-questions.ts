import type { JwVideo } from "@/data/jw-videos";
import { VIDEO_QUIZ_BY_ID } from "./video-quiz-by-id";
import {
  BJF_LESSON_QUIZZES,
  CHARACTER_QUIZZES,
  FILM_QUIZZES,
  FAMILY_TITLE_QUIZZES,
  KIDS_VALUE_QUIZZES,
  GNJ_EPISODE_QUIZZES,
  GNJ_SPECIAL_QUIZZES,
  SONG_THEME_QUIZZES,
  TEEN_TITLE_QUIZZES,
  type MiniVideoQuestion,
} from "./video-quiz-bank";

export type { MiniVideoQuestion };

export const VIDEO_MINI_QUIZ_XP = 12;

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u2018\u2019\u201A\u2032`´]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBjfCharacter(title: string): string | null {
  const match = title.match(/amis de Jéhovah\s*:\s*(.+)$/i);
  if (!match) return null;
  const name = match[1].trim();
  if (name.includes("Hanania")) return "Hanania";
  if (name.includes("Josué")) return "Josué";
  if (name.includes("Caleb") && !name.includes("Josué")) return "Caleb";
  return name.split(" et ")[0].trim();
}

function extractGnjEpisode(title: string): string | null {
  const m = title.match(/[ÉE]pisode\s*(\d+)/i);
  return m ? m[1] : null;
}

function matchKeywordQuizzes(
  title: string,
  bank: { keywords: string[]; questions: MiniVideoQuestion[] }[]
): MiniVideoQuestion[] {
  const norm = normalize(title);
  for (const entry of bank) {
    if (entry.keywords.some((kw) => norm.includes(normalize(kw)))) {
      return entry.questions;
    }
  }
  return [];
}

function buildCoherentQuestions(video: JwVideo): MiniVideoQuestion[] {
  const title = video.title;
  const norm = normalize(title);
  const out: MiniVideoQuestion[] = [];

  // Films enfants
  if (norm.includes("david") && (norm.includes("confiance") || video.pub === "ivdd")) {
    out.push(...(FILM_QUIZZES.david ?? []));
  }
  if ((norm.includes("noe") || norm.includes("noé")) && (video.pub === "ivno" || norm.includes("marchait avec dieu"))) {
    out.push(...(FILM_QUIZZES.noé ?? []));
  }

  // GNJ épisodes
  const ep = extractGnjEpisode(title);
  if (ep && GNJ_EPISODE_QUIZZES[ep]) {
    out.push(...GNJ_EPISODE_QUIZZES[ep]);
  }
  if (norm.includes("son nom est jean")) out.push(...GNJ_SPECIAL_QUIZZES.jean);
  if (norm.includes("esclave de j") || norm.includes("esclave de jéhovah")) {
    out.push(...GNJ_SPECIAL_QUIZZES.esclave);
  }
  if (norm.includes("ange de j") || norm.includes("instructions de l'ange")) {
    out.push(...GNJ_SPECIAL_QUIZZES.ange);
  }

  // BJF personnages
  const character = extractBjfCharacter(title);
  if (character && CHARACTER_QUIZZES[character]) {
    out.push(...CHARACTER_QUIZZES[character]);
  }
  if (norm.includes("josué") && norm.includes("caleb")) {
    out.push(...(CHARACTER_QUIZZES.Caleb ?? []));
  }

  // BJF leçons par titre (y compris bandes-annonces)
  for (const lesson of BJF_LESSON_QUIZZES) {
    if (norm.includes(normalize(lesson.match))) {
      out.push(...lesson.questions);
      break;
    }
  }

  // Chansons pkon / enfants
  if (video.pub === "pkon" || video.id.startsWith("chansons-enfants") || norm.includes("chanson")) {
    out.push(...matchKeywordQuizzes(title, SONG_THEME_QUIZZES));
  }

  // Leçons de valeurs courtes (enfants)
  if (video.category === "enfants") {
    out.push(...matchKeywordQuizzes(title, KIDS_VALUE_QUIZZES));
  }

  // Jeunes
  if (video.category === "jeunes") {
    out.push(...matchKeywordQuizzes(title, TEEN_TITLE_QUIZZES));
  }

  // Famille, histoire, enseignement
  if (video.category === "famille" || video.category === "histoire" || video.category === "enseignement" || video.category === "broadcast") {
    out.push(...matchKeywordQuizzes(title, FAMILY_TITLE_QUIZZES));
    if (norm.includes("culte") || norm.includes("famil")) {
      out.push(...matchKeywordQuizzes("famille culte", SONG_THEME_QUIZZES));
    }
  }

  // Dédupliquer par id — banque thématique d'abord, puis questions par vidéo
  const seen = new Set<string>();
  const fromBank = out.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });

  const byId = VIDEO_QUIZ_BY_ID[video.id] ?? [];
  const merged: MiniVideoQuestion[] = [...fromBank];
  for (const item of byId) {
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    merged.push(item);
  }

  return merged;
}

/** Questions strictement liées au contenu de la vidéo — pas de quiz générique */
export function getVideoQuestions(video: JwVideo): MiniVideoQuestion[] {
  return buildCoherentQuestions(video);
}

export function hasVideoQuiz(video: JwVideo): boolean {
  return getVideoQuestions(video).length > 0;
}

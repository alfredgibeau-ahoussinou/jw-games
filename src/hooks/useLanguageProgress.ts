"use client";

import { useCallback, useEffect, useState } from "react";
import type { PreachLanguageId, PreachPhrase } from "@/types/language";
import { useUserStore } from "@/stores/user-store";

const STORAGE_KEY = "jw-games-language-progress";
const REVIEW_DAYS = 2;

type LangProgress = {
  known: string[];
  reviewNeeded?: string[];
  lastSeen?: Record<string, string>;
  lastStudied?: string;
};

type ProgressMap = Record<string, LangProgress>;

function readProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as ProgressMap;
  } catch {
    return {};
  }
}

function writeProgress(data: ProgressMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function daysSince(iso: string): number {
  const then = new Date(iso).getTime();
  const now = Date.now();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

export function getPhrasesToReview(
  langId: PreachLanguageId,
  phrases: PreachPhrase[]
): PreachPhrase[] {
  const all = readProgress();
  const prog = all[langId];
  if (!prog) return [];

  const reviewIds = new Set<string>();

  for (const id of prog.reviewNeeded ?? []) {
    reviewIds.add(id);
  }

  for (const id of prog.known ?? []) {
    const last = prog.lastSeen?.[id];
    if (last && daysSince(last) >= REVIEW_DAYS) {
      reviewIds.add(id);
    }
  }

  return phrases.filter((p) => reviewIds.has(p.id)).slice(0, 8);
}

export function useLanguageProgress(langId: PreachLanguageId) {
  const [knownIds, setKnownIds] = useState<string[]>([]);
  const [reviewIds, setReviewIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  const refresh = useCallback(() => {
    const all = readProgress();
    const prog = all[langId];
    setKnownIds(prog?.known ?? []);
    setReviewIds(prog?.reviewNeeded ?? []);
    setLoaded(true);
  }, [langId]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const markKnown = useCallback(
    (phraseId: string) => {
      setKnownIds((prev) => {
        if (prev.includes(phraseId)) return prev;
        const next = [...prev, phraseId];
        const all = readProgress();
        const prog = all[langId] ?? { known: [] };
        all[langId] = {
          ...prog,
          known: next,
          lastSeen: { ...prog.lastSeen, [phraseId]: new Date().toISOString() },
          lastStudied: new Date().toISOString(),
        };
        writeProgress(all);
        useUserStore.getState().trackDailyProgress("languages", 1);
        return next;
      });
    },
    [langId]
  );

  const markForReview = useCallback(
    (phraseId: string) => {
      const all = readProgress();
      const prog = all[langId] ?? { known: [] };
      const review = new Set(prog.reviewNeeded ?? []);
      review.add(phraseId);
      all[langId] = {
        ...prog,
        reviewNeeded: [...review],
        lastSeen: { ...prog.lastSeen, [phraseId]: new Date().toISOString() },
      };
      writeProgress(all);
      setReviewIds([...review]);
    },
    [langId]
  );

  const clearReview = useCallback(
    (phraseId: string) => {
      const all = readProgress();
      const prog = all[langId];
      if (!prog) return;
      all[langId] = {
        ...prog,
        reviewNeeded: (prog.reviewNeeded ?? []).filter((id) => id !== phraseId),
        lastSeen: { ...prog.lastSeen, [phraseId]: new Date().toISOString() },
      };
      writeProgress(all);
      setReviewIds(all[langId].reviewNeeded ?? []);
    },
    [langId]
  );

  const resetProgress = useCallback(() => {
    const all = readProgress();
    delete all[langId];
    writeProgress(all);
    setKnownIds([]);
    setReviewIds([]);
  }, [langId]);

  return {
    knownIds,
    reviewIds,
    markKnown,
    markForReview,
    clearReview,
    resetProgress,
    loaded,
    refresh,
  };
}

export function getAllLanguageProgress(): ProgressMap {
  return readProgress();
}

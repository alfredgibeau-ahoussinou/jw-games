"use client";

import { useCallback, useEffect, useState } from "react";
import type { PreachLanguageId } from "@/types/language";
import { useUserStore } from "@/stores/user-store";

const STORAGE_KEY = "jw-games-language-progress";

type ProgressMap = Record<string, { known: string[]; lastStudied?: string }>;

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

export function useLanguageProgress(langId: PreachLanguageId) {
  const [knownIds, setKnownIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const all = readProgress();
    setKnownIds(all[langId]?.known ?? []);
    setLoaded(true);
  }, [langId]);

  const markKnown = useCallback(
    (phraseId: string) => {
      setKnownIds((prev) => {
        if (prev.includes(phraseId)) return prev;
        const next = [...prev, phraseId];
        const all = readProgress();
        all[langId] = { known: next, lastStudied: new Date().toISOString() };
        writeProgress(all);
        useUserStore.getState().trackDailyProgress("languages", 1);
        return next;
      });
    },
    [langId]
  );

  const resetProgress = useCallback(() => {
    const all = readProgress();
    delete all[langId];
    writeProgress(all);
    setKnownIds([]);
  }, [langId]);

  return { knownIds, markKnown, resetProgress, loaded };
}

export function getAllLanguageProgress(): ProgressMap {
  return readProgress();
}

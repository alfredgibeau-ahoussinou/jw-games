"use client";

import { useCallback, useState } from "react";

export function useGameStreak() {
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [showCombo, setShowCombo] = useState(false);

  const registerAnswer = useCallback((correct: boolean) => {
    if (correct) {
      setStreak((s) => {
        const next = s + 1;
        if (next >= 2) {
          setShowCombo(true);
          window.setTimeout(() => setShowCombo(false), 1200);
        }
        setBestStreak((b) => Math.max(b, next));
        return next;
      });
      return true;
    }
    setStreak(0);
    return false;
  }, []);

  const resetStreak = useCallback(() => setStreak(0), []);

  const penalizeStreak = useCallback(() => {
    setStreak((s) => Math.max(0, s - 1));
  }, []);

  return { streak, bestStreak, showCombo, registerAnswer, resetStreak, penalizeStreak };
}

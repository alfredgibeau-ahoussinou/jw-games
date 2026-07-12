"use client";

import { useEffect, useRef } from "react";
import { msUntilParisMidnight, toParisIso } from "@/lib/jw-daily-text";

/** Appelle `onDayChange` à minuit Paris et quand l'onglet redevient visible après un changement de jour. */
export function useParisDayRotation(onDayChange: (newIso: string) => void) {
  const onDayChangeRef = useRef(onDayChange);
  onDayChangeRef.current = onDayChange;
  const todayRef = useRef(toParisIso());

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const checkAndNotify = () => {
      const newIso = toParisIso();
      if (newIso === todayRef.current) return;
      todayRef.current = newIso;
      onDayChangeRef.current(newIso);
    };

    const schedule = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        checkAndNotify();
        schedule();
      }, msUntilParisMidnight());
    };

    const onVisibility = () => {
      if (document.visibilityState !== "visible") return;
      checkAndNotify();
      schedule();
    };

    schedule();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
}

import { useCallback, useRef, useState } from "react";

/** Score affiché dans le HUD — se met à jour à chaque bonne réponse */
export function useGameScore() {
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);

  const addPoint = useCallback((points = 1) => {
    scoreRef.current += points;
    setScore(scoreRef.current);
  }, []);

  const resetScore = useCallback(() => {
    scoreRef.current = 0;
    setScore(0);
  }, []);

  const getScore = useCallback(() => scoreRef.current, []);

  return { score, addPoint, resetScore, getScore, setScore };
}

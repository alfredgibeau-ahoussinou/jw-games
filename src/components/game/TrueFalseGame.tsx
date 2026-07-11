"use client";

import { useState, useEffect, useCallback } from "react";
import type { TrueFalseQuestion } from "@/types/content";
import { useGameScore } from "@/hooks/useGameScore";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { useGameStreak } from "@/hooks/useGameStreak";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface TrueFalseGameProps {
  questions: TrueFalseQuestion[];
  onComplete: (score: number, total: number, meta?: { bestStreak: number }) => void;
}

export function TrueFalseGame({ questions, onComplete }: TrueFalseGameProps) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [swipeDir, setSwipeDir] = useState<"left" | "right" | null>(null);
  const { score, addPoint, getScore } = useGameScore();
  const { streak, bestStreak, showCombo, registerAnswer } = useGameStreak();

  const q = questions[index];
  const isLast = index >= questions.length - 1;
  const remaining = questions.length - index - 1;

  const answer = useCallback(
    (choice: boolean) => {
      if (feedback) return;
      const correct = choice === q.isTrue;
      if (correct) addPoint();
      registerAnswer(correct);
      setSwipeDir(choice ? "right" : "left");
      setFeedback(correct ? "correct" : "wrong");
    },
    [feedback, q.isTrue, registerAnswer]
  );

  const next = useCallback(() => {
    if (isLast) {
      onComplete(getScore(), questions.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setFeedback(null);
    setSwipeDir(null);
  }, [isLast, onComplete, questions.length, bestStreak, getScore]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (feedback) return;
      if (e.key === "ArrowLeft" || e.key === "f" || e.key === "F") {
        e.preventDefault();
        answer(false);
      }
      if (e.key === "ArrowRight" || e.key === "v" || e.key === "V" || e.key === "t" || e.key === "T") {
        e.preventDefault();
        answer(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [feedback, answer]);

  return (
    <div>
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={questions.length}
        score={score}
        streak={streak}
      />

      <div>
        {remaining > 0 &&
          [1, 2].map((offset) =>
            offset <= remaining ? (
              <div
                key={offset}
                aria-hidden
              />
            ) : null
          )}

        <>
          <div
            key={q.id}
          >
            <div>
              <Card>
                <p>{q.statement}</p>
                {!feedback && (
                  <p>
                    <span>Glissez ← Faux · Vrai →</span>
                    <span>Glissez ← Faux · Vrai → ou utilisez le clavier</span>
                  </p>
                )}
              </Card>
            </div>
          </div>
        </>
      </div>

      {!feedback ? (
        <div>
          <Button
            variant="danger"
            size="lg"
            onClick={() => answer(false)}
            aria-keyshortcuts="ArrowLeft F"
          >
            <ThumbsDown aria-hidden />
            Faux
            <span>← · F</span>
          </Button>
          <Button
            variant="success"
            size="lg"
            onClick={() => answer(true)}
            aria-keyshortcuts="ArrowRight V T"
          >
            <ThumbsUp aria-hidden />
            Vrai
            <span>→ · V</span>
          </Button>
        </div>
      ) : (
        <GameFeedbackPanel
          correct={feedback === "correct"}
          explanation={q.explanation}
          source={q.sources[0]?.reference}
          sourceEdition={q.sources[0]?.bibleEdition}
          correctLabel="Exact !"
          wrongLabel={q.isTrue ? "C'était vrai." : "C'était faux."}
          nextLabel={isLast ? "Voir les résultats 🏆" : "Affirmation suivante →"}
          onNext={next}
        />
      )}
    </div>
  );
}

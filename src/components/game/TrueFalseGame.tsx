"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import type { TrueFalseQuestion } from "@/types/content";
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

const SWIPE_THRESHOLD = 90;

export function TrueFalseGame({ questions, onComplete }: TrueFalseGameProps) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [swipeDir, setSwipeDir] = useState<"left" | "right" | null>(null);
  const correctCount = useRef(0);
  const { streak, bestStreak, showCombo, registerAnswer } = useGameStreak();

  const q = questions[index];
  const isLast = index >= questions.length - 1;
  const remaining = questions.length - index - 1;

  const answer = useCallback(
    (choice: boolean) => {
      if (feedback) return;
      const correct = choice === q.isTrue;
      if (correct) correctCount.current += 1;
      registerAnswer(correct);
      setSwipeDir(choice ? "right" : "left");
      setFeedback(correct ? "correct" : "wrong");
    },
    [feedback, q.isTrue, registerAnswer]
  );

  const next = useCallback(() => {
    if (isLast) {
      onComplete(correctCount.current, questions.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setFeedback(null);
    setSwipeDir(null);
  }, [isLast, onComplete, questions.length, bestStreak]);

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

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (feedback) return;
    if (info.offset.x > SWIPE_THRESHOLD) answer(true);
    else if (info.offset.x < -SWIPE_THRESHOLD) answer(false);
  }

  return (
    <div className="relative mx-auto max-w-lg">
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={questions.length}
        score={correctCount.current}
        streak={streak}
      />

      <div className="relative mb-8 min-h-[220px]">
        {remaining > 0 &&
          [1, 2].map((offset) =>
            offset <= remaining ? (
              <div
                key={offset}
                aria-hidden
                className="absolute inset-x-0 rounded-2xl border border-white/[0.06] bg-[var(--bg-elevated)]"
                style={{
                  top: offset * 6,
                  bottom: -offset * 6,
                  transform: `scale(${1 - offset * 0.03})`,
                  opacity: 0.35 - offset * 0.1,
                  zIndex: 10 - offset,
                }}
              />
            ) : null
          )}

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            className="relative z-20"
            initial={{
              opacity: 0,
              x: swipeDir === "left" ? -80 : swipeDir === "right" ? 80 : 0,
              rotate: swipeDir === "left" ? -4 : swipeDir === "right" ? 4 : 0,
            }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{
              opacity: 0,
              x: swipeDir === "left" ? -160 : swipeDir === "right" ? 160 : 0,
              rotate: swipeDir === "left" ? -12 : swipeDir === "right" ? 12 : 0,
              scale: 0.88,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <motion.div
              drag={!feedback ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.85}
              onDragEnd={handleDragEnd}
              whileDrag={{ cursor: "grabbing" }}
              className="touch-pan-y"
            >
              <Card className="flex min-h-[200px] select-none items-center justify-center px-6 py-8 text-center">
                <p className="text-2xl font-bold leading-snug text-[var(--text)]">{q.statement}</p>
                {!feedback && (
                  <p className="mt-4 text-xs text-[var(--text-muted)]">
                    <span className="sm:hidden">Glissez ← Faux · Vrai →</span>
                    <span className="hidden sm:inline">Glissez ← Faux · Vrai → ou utilisez le clavier</span>
                  </p>
                )}
              </Card>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {!feedback ? (
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="danger"
            size="lg"
            className="h-[4.5rem] flex-col gap-1 sm:h-20"
            onClick={() => answer(false)}
            aria-keyshortcuts="ArrowLeft F"
          >
            <ThumbsDown className="h-6 w-6" aria-hidden />
            Faux
            <span className="hidden text-xs font-normal opacity-70 sm:inline">← · F</span>
          </Button>
          <Button
            variant="success"
            size="lg"
            className="h-[4.5rem] flex-col gap-1 sm:h-20"
            onClick={() => answer(true)}
            aria-keyshortcuts="ArrowRight V T"
          >
            <ThumbsUp className="h-6 w-6" aria-hidden />
            Vrai
            <span className="hidden text-xs font-normal opacity-70 sm:inline">→ · V</span>
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

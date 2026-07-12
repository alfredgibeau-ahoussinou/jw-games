"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameOptionGrid } from "@/components/game/shared/GameOptionGrid";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { useGameStreak } from "@/hooks/useGameStreak";
import type { QuizQuestion } from "@/types/content";
import { DIFFICULTY_LABELS } from "@/lib/constants";

interface QuizGameProps {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number, meta?: { bestStreak: number }) => void;
}

const difficultyColors = {
  facile: "success",
  moyen: "info",
  difficile: "warning",
  expert: "neon",
} as const;

export function QuizGame({ questions, onComplete }: QuizGameProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const correctCount = useRef(0);
  const { streak, bestStreak, showCombo, registerAnswer } = useGameStreak();

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const answered = selectedIndex !== null;
  const isCorrect = answered && selectedIndex === question.correctIndex;

  const handleSelect = useCallback(
    (index: number) => {
      if (selectedIndex !== null) return;
      setSelectedIndex(index);
      const correct = index === question.correctIndex;
      if (correct) {
        correctCount.current += 1;
        setScore((s) => s + 1);
      }
      registerAnswer(correct);
    },
    [selectedIndex, question.correctIndex, registerAnswer]
  );

  const handleNext = useCallback(() => {
    if (isLast) {
      onComplete(correctCount.current, questions.length, { bestStreak });
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedIndex(null);
  }, [isLast, onComplete, questions.length, bestStreak]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (answered) return;
      const key = e.key.toLowerCase();
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= question.options.length) {
        e.preventDefault();
        handleSelect(num - 1);
      } else if (key >= "a" && key <= "d") {
        const idx = key.charCodeAt(0) - 97;
        if (idx < question.options.length) {
          e.preventDefault();
          handleSelect(idx);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answered, handleSelect, question.options.length]);

  const sourceRef = question.sources.map((s) => s.reference).join(" · ");
  const sourceEdition = question.sources[0]?.bibleEdition;

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <GameComboBanner streak={streak} show={showCombo} />

      <GameHud
        current={currentIndex + 1}
        total={questions.length}
        score={score}
        streak={streak}
        extra={
          <Badge variant={difficultyColors[question.difficulty]}>
            {DIFFICULTY_LABELS[question.difficulty]}
          </Badge>
        }
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 60, filter: "blur(3px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: -60, filter: "blur(3px)" }}
          transition={{ type: "spring", stiffness: 280, damping: 28 }}
        >
          <Card className="mb-6">
            <p className="text-xl font-semibold leading-relaxed text-[var(--text)] sm:text-2xl">
              {question.question}
            </p>
          </Card>

          <GameOptionGrid
            options={question.options}
            selectedIndex={selectedIndex}
            correctIndex={question.correctIndex}
            onSelect={handleSelect}
            disabled={answered}
          />

          {answered && (
            <GameFeedbackPanel
              correct={isCorrect}
              explanation={question.explanation}
              source={sourceRef}
              sourceEdition={sourceEdition}
              nextLabel={isLast ? "Voir les résultats 🏆" : "Question suivante →"}
              onNext={handleNext}
              className="mt-6"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

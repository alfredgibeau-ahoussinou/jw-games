"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { prepareQuizForPlay } from "@/lib/quiz-options";

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

  const shuffledQuestions = useMemo(() => prepareQuizForPlay(questions), [questions]);
  const question = shuffledQuestions[currentIndex];
  const isLast = currentIndex === shuffledQuestions.length - 1;
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
      onComplete(correctCount.current, shuffledQuestions.length, { bestStreak });
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedIndex(null);
  }, [isLast, onComplete, shuffledQuestions.length, bestStreak]);

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
    <div>
      <GameComboBanner streak={streak} show={showCombo} />

      <GameHud
        current={currentIndex + 1}
        total={shuffledQuestions.length}
        score={score}
        streak={streak}
        extra={
          <Badge variant={difficultyColors[question.difficulty]}>
            {DIFFICULTY_LABELS[question.difficulty]}
          </Badge>
        }
      />

      <>
        <div
          key={question.id}
        >
          <Card>
            <p>
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
            />
          )}
        </div>
      </>
    </div>
  );
}

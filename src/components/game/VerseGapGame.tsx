"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { VerseGapQuestion } from "@/types/content";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { GameOptionGrid } from "@/components/game/shared/GameOptionGrid";
import { useGameStreak } from "@/hooks/useGameStreak";
import { cn } from "@/lib/cn";
import { BookOpen } from "lucide-react";

interface VerseGapGameProps {
  questions: VerseGapQuestion[];
  onComplete: (score: number, total: number, meta?: { bestStreak: number }) => void;
}

function renderVerseWithGap(
  verse: string,
  gapWord: string,
  mode: "blank" | "selected" | "correct" | "wrong",
  word?: string
) {
  const [before, after] = verse.split("___");
  if (after === undefined) return <span>{verse}</span>;

  const display =
    mode === "blank"
      ? "……"
      : mode === "correct"
        ? gapWord
        : mode === "wrong"
          ? word ?? "……"
          : word ?? "……";

  return (
    <>
      {before}
      <mark
        className={cn(
          "mx-0.5 rounded px-1.5 py-0.5 font-semibold not-italic",
          mode === "blank" &&
            "border-b-2 border-dashed border-[var(--accent)] bg-[var(--accent-light)]/60 text-[var(--accent)]",
          mode === "correct" && "bg-[var(--success-bg)] text-[var(--success)]",
          mode === "wrong" && "bg-[var(--danger-bg)] text-[var(--danger)] line-through decoration-2",
          mode === "selected" && "bg-[var(--accent-light)] text-[var(--accent)]"
        )}
      >
        {display}
      </mark>
      {after}
    </>
  );
}

function buildFullVerse(verse: string, gapWord: string) {
  return verse.replace("___", gapWord);
}

export function VerseGapGame({ questions, onComplete }: VerseGapGameProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const correctCount = useRef(0);
  const { streak, bestStreak, showCombo, registerAnswer } = useGameStreak();

  const q = questions[index];
  const isLast = index >= questions.length - 1;

  const correctIndex = useMemo(
    () => q.options.findIndex((opt) => opt.toLowerCase() === q.gapWord.toLowerCase()),
    [q.options, q.gapWord]
  );

  const isCorrect =
    selected !== null && q.options[selected].toLowerCase() === q.gapWord.toLowerCase();

  function pick(i: number) {
    if (showResult) return;
    setSelected(i);
    setShowResult(true);
    const correct = q.options[i].toLowerCase() === q.gapWord.toLowerCase();
    if (correct) correctCount.current += 1;
    registerAnswer(correct);
  }

  function next() {
    if (isLast) {
      onComplete(correctCount.current, questions.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setShowResult(false);
  }

  const verseMode = !showResult
    ? "blank"
    : isCorrect
      ? "correct"
      : "wrong";

  const selectedWord = selected !== null ? q.options[selected] : undefined;

  return (
    <div className="relative mx-auto max-w-2xl">
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={questions.length}
        score={correctCount.current}
        streak={streak}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: "spring", stiffness: 280, damping: 26 }}
        >
          <Card className="mb-6 overflow-hidden">
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--accent)]">
              <BookOpen className="h-4 w-4 shrink-0" aria-hidden />
              <span className="scripture-ref font-medium">{q.reference}</span>
            </div>

            <blockquote className="border-l-2 border-[var(--accent)]/40 pl-4">
              <p className="scripture-block text-xl leading-relaxed text-[var(--text)] sm:text-2xl">
                « {renderVerseWithGap(q.verse, q.gapWord, verseMode, selectedWord)} »
              </p>
            </blockquote>
          </Card>

          <GameOptionGrid
            options={q.options}
            selectedIndex={selected}
            correctIndex={correctIndex}
            onSelect={pick}
            disabled={showResult}
            letters
          />

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              {!isCorrect && (
                <Card className="mb-4 border-[var(--success-border)]/40 bg-[var(--success-bg)]/20">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--success)]">
                    Verset complet
                  </p>
                  <p className="scripture-block text-lg leading-relaxed text-[var(--text)]">
                    « {renderVerseWithGap(q.verse, q.gapWord, "correct")} »
                  </p>
                </Card>
              )}

              <GameFeedbackPanel
                correct={isCorrect}
                explanation={
                  isCorrect
                    ? `Le mot manquant est « ${q.gapWord} ».`
                    : `Le bon mot était « ${q.gapWord} ». ${buildFullVerse(q.verse, q.gapWord)}`
                }
                source={q.reference}
                sourceEdition={q.sources[0]?.bibleEdition}
                correctLabel="Bien lu !"
                wrongLabel="Pas tout à fait…"
                nextLabel={isLast ? "Voir les résultats 🏆" : "Verset suivant →"}
                onNext={next}
              />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";

import type { VerseGapQuestion } from "@/types/content";
import { prepareVerseGapQuestions } from "@/lib/quiz-options";
import { useGameScore } from "@/hooks/useGameScore";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { GameOptionGrid } from "@/components/game/shared/GameOptionGrid";
import { useGameStreak } from "@/hooks/useGameStreak";
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
  const prepared = useMemo(() => prepareVerseGapQuestions(questions), [questions]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const { score, addPoint, getScore } = useGameScore();
  const { streak, bestStreak, showCombo, registerAnswer } = useGameStreak();

  const q = prepared[index];
  const isLast = index >= prepared.length - 1;

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
    if (correct) addPoint();
    registerAnswer(correct);
  }

  function next() {
    if (isLast) {
      onComplete(getScore(), prepared.length, { bestStreak });
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
    <div>
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={prepared.length}
        score={score}
        streak={streak}
      />

      <>
        <div
          key={q.id}
        >
          <Card>
            <div>
              <BookOpen aria-hidden />
              <span>{q.reference}</span>
            </div>

            <blockquote>
              <p>
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
            <div
            >
              {!isCorrect && (
                <Card>
                  <p>
                    Verset complet
                  </p>
                  <p>
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
            </div>
          )}
        </div>
      </>
    </div>
  );
}

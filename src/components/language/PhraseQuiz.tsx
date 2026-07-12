"use client";

import { useState, useMemo } from "react";
import type { PreachPhrase } from "@/types/language";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { shuffle } from "@/data/languages";

interface PhraseQuizProps {
  phrases: PreachPhrase[];
  languageName: string;
  onComplete: (score: number, total: number) => void;
}

export function PhraseQuiz({ phrases, languageName, onComplete }: PhraseQuizProps) {
  const questions = useMemo(
    () => shuffle(phrases).slice(0, Math.min(8, phrases.length)),
    [phrases]
  );
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const current = questions[index];

  const options = useMemo(() => {
    if (!current) return [];
    const wrong = shuffle(phrases.filter((p) => p.id !== current.id))
      .slice(0, 3)
      .map((p) => p.target);
    return shuffle([current.target, ...wrong]);
  }, [current, phrases]);

  if (!current || questions.length === 0) {
    return (
      <Card>
        <p className="text-center text-[var(--text-muted)]">Pas assez de phrases pour un quiz.</p>
      </Card>
    );
  }

  const handlePick = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    const correct = opt === current.target;
    const newScore = score + (correct ? 1 : 0);
    setScore(newScore);
    setTimeout(() => {
      if (index + 1 >= questions.length) {
        setDone(true);
        onComplete(newScore, questions.length);
      } else {
        setIndex((i) => i + 1);
        setSelected(null);
      }
    }, 1200);
  };

  if (done) return null;

  const isCorrect = selected === current.target;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--text-muted)]">
          Question {index + 1}/{questions.length}
        </span>
        <span className="font-medium text-[var(--accent)]">Score : {score}</span>
      </div>

      <Card glow className="text-center">
        <p className="text-caption mb-2">Traduisez en {languageName} :</p>
        <p className="text-lg font-semibold leading-snug">{current.french}</p>
      </Card>

      <ul className="game-option-list">
        {options.map((opt) => {
          let state: "default" | "correct" | "wrong" | "missed" = "default";
          if (selected) {
            if (opt === current.target) state = "correct";
            else if (opt === selected) state = "wrong";
            else state = "missed";
          }
          return (
            <li key={opt}>
              <button
                type="button"
                disabled={!!selected}
                onClick={() => handlePick(opt)}
                className={cn(
                  "game-option game-option--idle w-full",
                  state === "correct" && "game-option--correct",
                  state === "wrong" && "game-option--wrong",
                  state === "missed" && selected && "opacity-50"
                )}
              >
                {opt}
              </button>
            </li>
          );
        })}
      </ul>

      {selected && (
        <div
          className={cn(
            "rounded-xl border px-4 py-3 text-center text-sm font-medium",
            isCorrect
              ? "border-[var(--success-border)] bg-[var(--success-bg)] text-[var(--success-text)]"
              : "border-[var(--danger-border)] bg-[var(--danger-bg)] text-[var(--danger-text)]"
          )}
        >
          {isCorrect ? "Correct !" : `Réponse : ${current.target}`}
          {current.pronunciation && (
            <p className="mt-1 text-xs opacity-80">{current.pronunciation}</p>
          )}
        </div>
      )}
    </div>
  );
}

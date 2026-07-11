"use client";

import { useState, useMemo } from "react";

import type { PreachPhrase } from "@/types/language";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { shuffle } from "@/data/languages";

interface PhraseQuizProps {
  phrases: PreachPhrase[];
  languageName: string;
  onComplete: (score: number, total: number) => void;
}

export function PhraseQuiz({ phrases, languageName, onComplete }: PhraseQuizProps) {
  const questions = useMemo(() => shuffle(phrases).slice(0, Math.min(8, phrases.length)), [phrases]);
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
        <p>Pas assez de phrases pour un quiz.</p>
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
    <div>
      <div>
        <span>
          Question {index + 1}/{questions.length}
        </span>
        <span>Score : {score}</span>
      </div>

      <Card glow>
        <p>Traduisez en {languageName} :</p>
        <p>{current.french}</p>
      </Card>

      <ul>
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
              >
                {opt}
              </button>
            </li>
          );
        })}
      </ul>

      <>
        {selected && (
          <div
          >
            {isCorrect ? "Correct !" : `Réponse : ${current.target}`}
            {current.pronunciation && (
              <p>{current.pronunciation}</p>
            )}
          </div>
        )}
      </>
    </div>
  );
}

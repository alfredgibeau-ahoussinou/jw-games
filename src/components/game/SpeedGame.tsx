"use client";

import { useState, useEffect, useRef, useMemo } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { useGameStreak } from "@/hooks/useGameStreak";
import type { SpeedChallenge } from "@/types/content";
import { checkSpeedAnswer, getPrimarySpeedAnswer, getSpeedHint } from "@/lib/speed-answer";
import { Zap, Clock, SkipForward } from "lucide-react";

interface SpeedGameProps {
  challenges: SpeedChallenge[];
  onComplete: (score: number, total: number, meta?: { bestStreak: number }) => void;
}

const FAST_ANSWER_SECONDS = 3;

export function SpeedGame({ challenges, onComplete }: SpeedGameProps) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(challenges[0]?.timeLimitSeconds ?? 10);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | "skipped" | null>(null);
  const [bonusPoints, setBonusPoints] = useState(0);
  const correctCount = useRef(0);
  const totalScore = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const questionStartRef = useRef(Date.now());
  const { streak, bestStreak, showCombo, registerAnswer, resetStreak, penalizeStreak } = useGameStreak();

  const challenge = challenges[index];
  const hint = useMemo(() => getSpeedHint(challenge.answer), [challenge.id, challenge.answer]);
  const progress = (timeLeft / challenge.timeLimitSeconds) * 100;
  const urgent = timeLeft <= 3;
  const circumference = 2 * Math.PI * 54;
  const source = challenge.sources[0];
  const explanation =
    challenge.description && challenge.description !== "Répondez rapidement"
      ? challenge.description
      : undefined;

  useEffect(() => {
    questionStartRef.current = Date.now();
  }, [index]);

  useEffect(() => {
    if (feedback) return;
    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          window.clearInterval(timer);
          setFeedback("wrong");
          resetStreak();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [index, feedback, resetStreak]);

  useEffect(() => {
    if (!feedback) inputRef.current?.focus();
  }, [index, feedback]);

  function checkAnswer(value: string) {
    return checkSpeedAnswer(value, challenge.answer);
  }

  function getCorrectAnswerLabel() {
    return getPrimarySpeedAnswer(challenge.answer);
  }

  function submitAnswer(value: string) {
    if (feedback || !value.trim()) return;
    const isCorrect = checkAnswer(value);
    const responseTime = (Date.now() - questionStartRef.current) / 1000;
    const isFast = responseTime <= FAST_ANSWER_SECONDS;

    setFeedback(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      correctCount.current += 1;
      const bonus = isFast ? 1 : 0;
      totalScore.current += 1 + bonus;
      setScore(totalScore.current);
      registerAnswer(true);
      if (isFast) setBonusPoints(bonus);
    } else {
      resetStreak();
    }
  }

  function handleSkip() {
    if (feedback) return;
    penalizeStreak();
    setFeedback("skipped");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submitAnswer(answer);
  }

  function handleNext() {
    if (index >= challenges.length - 1) {
      onComplete(totalScore.current, challenges.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setAnswer("");
    setFeedback(null);
    setBonusPoints(0);
    setTimeLeft(challenges[index + 1].timeLimitSeconds);
  }

  return (
    <div>
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={challenges.length}
        score={score}
        streak={streak}
      />

      <div>
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" strokeWidth="6" />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
           
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
          />
        </svg>
        <div>
          <Clock
            aria-hidden
          />
          <span
            key={timeLeft}
          >
            {timeLeft}
          </span>
        </div>
      </div>

      <Card>
        <Zap
          aria-hidden
        />
        <p>{challenge.prompt}</p>
        {hint && (
          <p>{hint}</p>
        )}
      </Card>

      <>
        {!feedback ? (
          <div
            key="form"
          >
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Votre réponse…"
                autoComplete="off"
              />
              <div>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleSkip}
                  title="Passer (−1 combo)"
                >
                  <SkipForward aria-hidden />
                  Passer
                </Button>
                <Button type="submit" size="lg" disabled={!answer.trim()}>
                  <Zap aria-hidden />
                  Valider
                </Button>
              </div>
            </form>
          </div>
        ) : feedback === "correct" ? (
          <div
            key="correct"
          >
            {bonusPoints > 0 && (
              <p
              >
                ⚡ Réponse éclair ! +{bonusPoints} bonus
              </p>
            )}
            <GameFeedbackPanel
              correct
              explanation={explanation}
              source={source?.reference}
              sourceEdition={source?.bibleEdition}
              nextLabel={index >= challenges.length - 1 ? "Voir les résultats 🏆" : "Suivant →"}
              onNext={handleNext}
            />
          </div>
        ) : (
          <div
            key="wrong"
          >
            <GameFeedbackPanel
              correct={false}
              explanation={
                feedback === "skipped"
                  ? `La bonne réponse était : ${getCorrectAnswerLabel()}`
                  : explanation ?? `La bonne réponse était : ${getCorrectAnswerLabel()}`
              }
              source={source?.reference}
              sourceEdition={source?.bibleEdition}
              wrongLabel={feedback === "skipped" ? "Passé" : "Raté !"}
              nextLabel={index >= challenges.length - 1 ? "Voir les résultats 🏆" : "Suivant →"}
              onNext={handleNext}
            />
          </div>
        )}
      </>
    </div>
  );
}

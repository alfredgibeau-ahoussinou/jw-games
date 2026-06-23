"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { useGameStreak } from "@/hooks/useGameStreak";
import type { SpeedChallenge } from "@/types/content";
import { cn } from "@/lib/cn";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const questionStartRef = useRef(Date.now());
  const { streak, bestStreak, showCombo, registerAnswer, resetStreak, penalizeStreak } = useGameStreak();

  const challenge = challenges[index];
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

  function normalize(str: string) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function checkAnswer(value: string) {
    return (
      normalize(value) === normalize(challenge.answer) ||
      challenge.answer.split("|").some((a) => normalize(a) === normalize(value))
    );
  }

  function getCorrectAnswerLabel() {
    return challenge.answer.split("|")[0];
  }

  function submitAnswer(value: string) {
    if (feedback || !value.trim()) return;
    const isCorrect = checkAnswer(value);
    const responseTime = (Date.now() - questionStartRef.current) / 1000;
    const isFast = responseTime <= FAST_ANSWER_SECONDS;

    setFeedback(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      correctCount.current += 1;
      setScore((s) => s + 1);
      registerAnswer(true);
      if (isFast) setBonusPoints(1);
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
      onComplete(correctCount.current, challenges.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setAnswer("");
    setFeedback(null);
    setBonusPoints(0);
    setTimeLeft(challenges[index + 1].timeLimitSeconds);
  }

  const quickPicks = challenge.answer.includes("|")
    ? challenge.answer.split("|").slice(0, 4)
    : null;

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={challenges.length}
        score={score}
        streak={streak}
      />

      <div className="relative mb-8 flex justify-center">
        <svg className="h-36 w-36" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="var(--border)" strokeWidth="6" />
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={urgent ? "#dc2626" : "var(--accent)"}
            strokeWidth="6"
            strokeLinecap="round"
            className="timer-ring"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset: circumference * (1 - progress / 100) }}
            transition={{ duration: 0.3 }}
            style={{
              filter: urgent
                ? "drop-shadow(0 0 8px rgba(239,68,68,0.6))"
                : "drop-shadow(0 0 8px rgba(0,204,204,0.4))",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Clock
            className={cn("mb-1 h-5 w-5", urgent ? "text-danger" : "text-[var(--accent)]")}
            aria-hidden
          />
          <motion.span
            key={timeLeft}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            className={cn("text-4xl font-black", urgent ? "text-danger" : "text-[var(--text)]")}
          >
            {timeLeft}
          </motion.span>
        </div>
      </div>

      <Card className="mb-6 text-center">
        <Zap
          className={cn("mx-auto mb-3 h-8 w-8", urgent ? "text-danger" : "text-[var(--accent)]")}
          aria-hidden
        />
        <p className="text-xl font-semibold leading-snug text-[var(--text)]">{challenge.prompt}</p>
      </Card>

      <AnimatePresence mode="wait">
        {!feedback ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                ref={inputRef}
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Votre réponse…"
                className="input-field text-lg"
                autoComplete="off"
              />
              {quickPicks && (
                <div className="flex flex-wrap gap-2">
                  {quickPicks.map((pick) => (
                    <button
                      key={pick}
                      type="button"
                      onClick={() => {
                        setAnswer(pick);
                        submitAnswer(pick);
                      }}
                      className="rounded-lg border border-[var(--border)] bg-[var(--accent-light)] px-4 py-2 text-sm font-medium capitalize text-[var(--accent)] transition-colors hover:border-[var(--accent)]"
                    >
                      {pick}
                    </button>
                  ))}
                </div>
              )}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  className="shrink-0"
                  onClick={handleSkip}
                  title="Passer (−1 combo)"
                >
                  <SkipForward className="h-4 w-4" aria-hidden />
                  Passer
                </Button>
                <Button type="submit" className="flex-1" size="lg" disabled={!answer.trim()}>
                  <Zap className="h-5 w-5" aria-hidden />
                  Valider
                </Button>
              </div>
            </form>
          </motion.div>
        ) : feedback === "correct" ? (
          <motion.div
            key="correct"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {bonusPoints > 0 && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 text-center text-sm font-bold text-[var(--warning)]"
              >
                ⚡ Réponse éclair ! +{bonusPoints} bonus
              </motion.p>
            )}
            <GameFeedbackPanel
              correct
              explanation={explanation}
              source={source?.reference}
              sourceEdition={source?.bibleEdition}
              nextLabel={index >= challenges.length - 1 ? "Voir les résultats 🏆" : "Suivant →"}
              onNext={handleNext}
            />
          </motion.div>
        ) : (
          <motion.div
            key="wrong"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

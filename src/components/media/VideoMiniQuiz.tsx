"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, Sparkles, Zap } from "lucide-react";
import type { JwVideo } from "@/data/jw-videos";
import { getVideoQuestions, VIDEO_MINI_QUIZ_XP } from "@/data/video-questions";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useUserStore } from "@/stores/user-store";

interface VideoMiniQuizProps {
  video: JwVideo;
}

export function VideoMiniQuiz({ video }: VideoMiniQuizProps) {
  const questions = getVideoQuestions(video);
  const addXp = useUserStore((s) => s.addXp);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (questions.length === 0) return null;

  const q = questions[index];
  const answered = selected !== null;

  function pick(i: number) {
    if (answered) return;
    const correct = i === q.correctIndex;
    setSelected(i);
    const newScore = correct ? score + 1 : score;
    if (correct) setScore(newScore);

    if (index >= questions.length - 1) {
      const xp = newScore * VIDEO_MINI_QUIZ_XP;
      if (xp > 0) addXp(xp, { skipSession: true });
      setScore(newScore);
      setDone(true);
    }
  }

  function next() {
    setIndex((i) => i + 1);
    setSelected(null);
  }

  if (done) {
    const perfect = score === questions.length;
    return (
      <div className="border-t border-white/[0.06] bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-elevated)] p-6">
        <div className="flex items-center gap-4">
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl",
            perfect ? "bg-emerald-500/15 text-[var(--success)]" : "bg-[var(--accent-light)] text-[var(--accent)]"
          )}>
            <CheckCircle className="h-7 w-7" />
          </div>
          <div>
            <p className="text-heading text-base">Quiz terminé — {score}/{questions.length}</p>
            <p className="text-caption mt-0.5 flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-[var(--accent)]" />
              +{score * VIDEO_MINI_QUIZ_XP} XP
              {perfect && <span className="text-[var(--success)]">· Parfait !</span>}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-white/[0.06] bg-gradient-to-b from-[var(--bg-card)] to-[var(--bg-elevated)] p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-light)]">
            <Sparkles className="h-4 w-4 text-[var(--accent)]" />
          </span>
          <div>
            <h3 className="text-sm font-semibold tracking-tight">Quiz sur la vidéo</h3>
            <p className="text-caption">Question {index + 1} sur {questions.length}</p>
          </div>
        </div>
        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all duration-300"
            style={{ width: `${((index + (answered ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}>
          <p className="mb-5 text-[0.9375rem] font-medium leading-relaxed text-[var(--text)]">{q.question}</p>
          <ul className="game-option-list">
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correctIndex;
              const isSelected = i === selected;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => pick(i)}
                    disabled={answered}
                    className={cn(
                      "game-option w-full",
                      answered && isCorrect && "border-[var(--success)]/60 bg-emerald-950/30",
                      answered && isSelected && !isCorrect && "border-red-500/50 bg-red-950/25"
                    )}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                    <span className="min-w-0 flex-1 text-left leading-relaxed">{opt}</span>
                    {answered && isCorrect && <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" />}
                    {answered && isSelected && !isCorrect && <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" />}
                  </button>
                </li>
              );
            })}
          </ul>

          {answered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent-light)] px-4 py-3 text-sm leading-relaxed text-[var(--text-secondary)]"
            >
              {q.explanation}
            </motion.p>
          )}

          {answered && index < questions.length - 1 && (
            <Button className="mt-5 w-full sm:w-auto" onClick={next}>
              Question suivante
            </Button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

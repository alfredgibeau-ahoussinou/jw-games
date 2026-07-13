"use client";

import { useMemo, useState } from "react";
import { CheckCircle, Sparkles, Zap } from "lucide-react";
import type { JwVideo } from "@/data/jw-videos";
import { getVideoQuestions, VIDEO_MINI_QUIZ_XP } from "@/data/video-questions";
import { GameOptionGrid } from "@/components/game/shared/GameOptionGrid";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/cn";
import { prepareQuizForPlay } from "@/lib/quiz-options";
import { useUserStore } from "@/stores/user-store";

interface VideoMiniQuizProps {
  video: JwVideo;
}

export function VideoMiniQuiz({ video }: VideoMiniQuizProps) {
  const questions = useMemo(
    () => prepareQuizForPlay(getVideoQuestions(video)),
    [video.id]
  );
  const addXp = useUserStore((s) => s.addXp);
  const tryClaimVideoQuizXp = useUserStore((s) => s.tryClaimVideoQuizXp);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(0);
  const [xpAlreadyClaimed, setXpAlreadyClaimed] = useState(false);

  if (questions.length === 0) return null;

  const q = questions[index];
  const answered = selected !== null;
  const perfect = score === questions.length;

  function pick(i: number) {
    if (answered) return;
    const correct = i === q.correctIndex;
    setSelected(i);
    const newScore = correct ? score + 1 : score;
    if (correct) setScore(newScore);

    if (index >= questions.length - 1) {
      const potentialXp = newScore * VIDEO_MINI_QUIZ_XP;
      if (potentialXp > 0) {
        if (tryClaimVideoQuizXp(video.id)) {
          addXp(potentialXp, { skipSession: true });
          setXpAwarded(potentialXp);
        } else {
          setXpAlreadyClaimed(true);
        }
      }
      setScore(newScore);
      setDone(true);
    }
  }

  function next() {
    setIndex((i) => i + 1);
    setSelected(null);
  }

  if (done) {
    return (
      <section
        aria-label="Résultat du quiz vidéo"
        className="border-t border-white/[0.08] bg-[var(--bg-elevated)] p-4 sm:p-5"
      >
        <div
          className={cn(
            "flex items-start gap-4 rounded-xl border p-4 sm:p-5",
            perfect
              ? "border-[var(--success-border)] bg-[var(--success-bg)]"
              : "border-white/[0.08] bg-[var(--bg-card)]"
          )}
        >
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
              perfect
                ? "bg-[var(--success)]/20 text-[var(--success)]"
                : "bg-[var(--accent)]/20 text-[var(--accent)]"
            )}
          >
            <CheckCircle className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1 space-y-1">
            <p className="font-semibold text-[var(--text)]">
              Quiz terminé — {score}/{questions.length}
            </p>
            {xpAlreadyClaimed ? (
              <p className="text-sm text-[var(--text-muted)]">
                XP déjà gagné aujourd&apos;hui pour cette vidéo
              </p>
            ) : xpAwarded > 0 ? (
              <p className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                <Zap className="h-4 w-4" aria-hidden />
                +{xpAwarded} XP
                {perfect && (
                  <span className="rounded-full bg-[var(--accent-light)] px-2 py-0.5 text-xs font-semibold">
                    Parfait !
                  </span>
                )}
              </p>
            ) : (
              <p className="text-sm text-[var(--text-muted)]">
                Revenez demain pour gagner de l&apos;XP sur ce quiz.
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-label="Quiz sur la vidéo"
      className="border-t border-white/[0.08] bg-[var(--bg-elevated)] p-4 sm:p-5"
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)]">
            <Sparkles className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-[var(--text)]">Quiz sur la vidéo</h3>
            <p className="text-caption mt-0.5">
              Question {index + 1} sur {questions.length}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold tabular-nums text-[var(--accent)]">
          +{VIDEO_MINI_QUIZ_XP} XP / bonne réponse
        </span>
      </div>

      <ProgressBar value={index + (answered ? 1 : 0)} max={questions.length} className="mb-5" />

      <div className="space-y-4">
        <p className="text-base font-medium leading-relaxed text-[var(--text)] sm:text-lg">
          {q.question}
        </p>

        <GameOptionGrid
          options={q.options}
          selectedIndex={selected}
          correctIndex={q.correctIndex}
          onSelect={pick}
          disabled={answered}
        />

        {answered && q.explanation && (
          <p className="rounded-xl border border-white/[0.06] bg-[var(--bg-card)] px-4 py-3 text-sm leading-relaxed text-[var(--text-muted)]">
            {q.explanation}
          </p>
        )}

        {answered && index < questions.length - 1 && (
          <div className="flex justify-end pt-1">
            <Button onClick={next}>Question suivante</Button>
          </div>
        )}
      </div>
    </section>
  );
}

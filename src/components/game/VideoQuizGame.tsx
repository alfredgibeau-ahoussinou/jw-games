"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { VideoQuizItem } from "@/types/content";
import { getVideoById } from "@/data/jw-videos";
import { JwVideoPlayer } from "@/components/media/JwVideoPlayer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameOptionGrid } from "@/components/game/shared/GameOptionGrid";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { useGameStreak } from "@/hooks/useGameStreak";
import { cn } from "@/lib/cn";
import { Play, HelpCircle, Film } from "lucide-react";

interface VideoQuizGameProps {
  items: VideoQuizItem[];
  onComplete: (score: number, total: number, meta?: { bestStreak: number }) => void;
  onVideoWatched?: (videoId: string) => void;
}

export function VideoQuizGame({ items, onComplete, onVideoWatched }: VideoQuizGameProps) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"watch" | "quiz">("watch");
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const correctCount = useRef(0);
  const { streak, bestStreak, showCombo, registerAnswer, resetStreak } = useGameStreak();

  const item = items[index];
  const video = getVideoById(item.videoId);
  const isLast = index >= items.length - 1;
  const source = item.sources[0];
  const isCorrect = selected !== null && selected === item.correctIndex;

  function answer(optionIndex: number) {
    if (showResult) return;
    setSelected(optionIndex);
    setShowResult(true);
    if (optionIndex === item.correctIndex) {
      correctCount.current += 1;
      registerAnswer(true);
    } else {
      resetStreak();
    }
  }

  function next() {
    if (isLast) {
      onComplete(correctCount.current, items.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setPhase("watch");
    setSelected(null);
    setShowResult(false);
  }

  if (!video) {
    return <p className="text-center text-danger">Vidéo introuvable</p>;
  }

  return (
    <div className="relative mx-auto max-w-3xl">
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={items.length}
        score={correctCount.current}
        streak={streak}
        extra={
          <Badge variant={phase === "watch" ? "info" : "neon"} className="gap-1">
            {phase === "watch" ? (
              <>
                <Film className="h-3 w-3" aria-hidden /> Visionnage
              </>
            ) : (
              <>
                <HelpCircle className="h-3 w-3" aria-hidden /> Quiz
              </>
            )}
          </Badge>
        }
      />

      <AnimatePresence mode="wait">
        {phase === "watch" ? (
          <motion.div
            key={`watch-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <JwVideoPlayer
              video={video}
              className="mb-4 video-shell--featured"
              onWatched={() => onVideoWatched?.(item.videoId)}
            />

            <Card className="mb-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-[var(--text)]">{video.title}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Regardez la vidéo, puis répondez à la question associée.
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                  Question {index + 1} / {items.length}
                </span>
              </div>
            </Card>

            <Card className="mb-6 border-dashed border-[var(--border)] bg-[var(--surface-subtle)]">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Question à venir
              </p>
              <p className="text-sm text-[var(--text-secondary)]">{item.question}</p>
            </Card>

            <Button className="w-full" size="lg" onClick={() => setPhase("quiz")}>
              <Play className="h-5 w-5" aria-hidden />
              J&apos;ai regardé — Passer au quiz
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key={`quiz-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <Badge variant="neon" className="gap-1">
                <HelpCircle className="h-3 w-3" aria-hidden />
                Phase quiz
              </Badge>
              <button
                type="button"
                onClick={() => setPhase("watch")}
                disabled={showResult}
                className={cn(
                  "text-sm text-[var(--accent)] underline-offset-2 hover:underline",
                  showResult && "pointer-events-none opacity-40"
                )}
              >
                Revoir la vidéo
              </button>
            </div>

            <Card className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Question {index + 1} sur {items.length}
              </p>
              <p className="mt-2 text-xl font-bold text-[var(--text)]">{item.question}</p>
            </Card>

            <GameOptionGrid
              options={item.options}
              selectedIndex={selected}
              correctIndex={item.correctIndex}
              onSelect={answer}
              disabled={showResult}
            />

            {showResult && selected !== null && (
              <div className="mt-6">
                <GameFeedbackPanel
                  correct={isCorrect}
                  explanation={item.explanation}
                  source={source?.reference}
                  sourceEdition={source?.bibleEdition}
                  nextLabel={isLast ? "Résultats 🏆" : "Vidéo suivante →"}
                  onNext={next}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

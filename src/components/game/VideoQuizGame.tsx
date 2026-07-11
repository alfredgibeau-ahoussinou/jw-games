"use client";

import { useState, useMemo } from "react";
import { prepareQuizForPlay } from "@/lib/quiz-options";
import { useGameScore } from "@/hooks/useGameScore";

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
  const { score, addPoint, getScore } = useGameScore();
  const { streak, bestStreak, showCombo, registerAnswer, resetStreak } = useGameStreak();

  const preparedItems = useMemo(() => prepareQuizForPlay(items), [items]);
  const item = preparedItems[index];
  const video = getVideoById(item.videoId);
  const isLast = index >= items.length - 1;
  const source = item.sources[0];
  const isCorrect = selected !== null && selected === item.correctIndex;

  function answer(optionIndex: number) {
    if (showResult) return;
    setSelected(optionIndex);
    setShowResult(true);
    if (optionIndex === item.correctIndex) {
      addPoint();
      registerAnswer(true);
    } else {
      resetStreak();
    }
  }

  function next() {
    if (isLast) {
      onComplete(getScore(), preparedItems.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setPhase("watch");
    setSelected(null);
    setShowResult(false);
  }

  if (!video) {
    return <p>Vidéo introuvable</p>;
  }

  return (
    <div>
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={preparedItems.length}
        score={score}
        streak={streak}
        extra={
          <Badge variant={phase === "watch" ? "info" : "neon"}>
            {phase === "watch" ? (
              <>
                <Film aria-hidden /> Visionnage
              </>
            ) : (
              <>
                <HelpCircle aria-hidden /> Quiz
              </>
            )}
          </Badge>
        }
      />

      <>
        {phase === "watch" ? (
          <div
            key={`watch-${index}`}
          >
            <JwVideoPlayer
              video={video}
              onWatched={() => onVideoWatched?.(item.videoId)}
            />

            <Card>
              <div>
                <div>
                  <p>{video.title}</p>
                  <p>
                    Regardez la vidéo, puis répondez à la question associée.
                  </p>
                </div>
                <span>
                  Question {index + 1} / {items.length}
                </span>
              </div>
            </Card>

            <Card>
              <p>
                Après la vidéo
              </p>
              <p>
                Une question sur ce que vous venez de voir — regardez attentivement avant de
                répondre.
              </p>
            </Card>

            <Button size="lg" onClick={() => setPhase("quiz")}>
              <Play aria-hidden />
              J&apos;ai regardé — Passer au quiz
            </Button>
          </div>
        ) : (
          <div
            key={`quiz-${index}`}
          >
            <div>
              <Badge variant="neon">
                <HelpCircle aria-hidden />
                Phase quiz
              </Badge>
              <button
                type="button"
                onClick={() => setPhase("watch")}
                disabled={showResult}
              >
                Revoir la vidéo
              </button>
            </div>

            <Card>
              <p>
                Question {index + 1} sur {items.length}
              </p>
              <p>{item.question}</p>
            </Card>

            <GameOptionGrid
              options={item.options}
              selectedIndex={selected}
              correctIndex={item.correctIndex}
              onSelect={answer}
              disabled={showResult}
            />

            {showResult && selected !== null && (
              <div>
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
          </div>
        )}
      </>
    </div>
  );
}

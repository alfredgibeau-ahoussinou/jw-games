"use client";

import { useMemo, useState } from "react";

import { CheckCircle, XCircle, Sparkles, Zap } from "lucide-react";
import type { JwVideo } from "@/data/jw-videos";
import { getVideoQuestions, VIDEO_MINI_QUIZ_XP } from "@/data/video-questions";
import { Button } from "@/components/ui/Button";
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
    const perfect = score === questions.length;
    return (
      <div>
        <div>
          <div>
            <CheckCircle />
          </div>
          <div>
            <p>Quiz terminé — {score}/{questions.length}</p>
            {xpAlreadyClaimed ? (
              <p>
                XP déjà gagné aujourd&apos;hui pour cette vidéo
              </p>
            ) : xpAwarded > 0 ? (
              <p>
                <Zap />
                +{xpAwarded} XP
                {perfect && <span>· Parfait !</span>}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>
          <span>
            <Sparkles />
          </span>
          <div>
            <h3>Quiz sur la vidéo</h3>
            <p>Question {index + 1} sur {questions.length}</p>
          </div>
        </div>
        <div>
          <div
          />
        </div>
      </div>

      <>
        <div key={q.id}>
          <p>{q.question}</p>
          <ul>
            {q.options.map((opt, i) => {
              const isCorrect = i === q.correctIndex;
              const isSelected = i === selected;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => pick(i)}
                    disabled={answered}
                  >
                    <span>{String.fromCharCode(65 + i)}</span>
                    <span>{opt}</span>
                    {answered && isCorrect && <CheckCircle />}
                    {answered && isSelected && !isCorrect && <XCircle />}
                  </button>
                </li>
              );
            })}
          </ul>

          {answered && (
            <p
            >
              {q.explanation}
            </p>
          )}

          {answered && index < questions.length - 1 && (
            <Button onClick={next}>
              Question suivante
            </Button>
          )}
        </div>
      </>
    </div>
  );
}

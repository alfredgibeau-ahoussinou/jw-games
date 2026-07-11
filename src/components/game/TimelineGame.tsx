"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import type { TimelineSet } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { ChevronUp, ChevronDown, Check, X, Lightbulb, Star, Lock } from "lucide-react";

interface TimelineGameProps {
  set: TimelineSet;
  onComplete: (score: number, total: number) => void;
}

function shuffleEvents(events: TimelineSet["events"]) {
  const copy = [...events];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function countCorrectPositions(
  items: TimelineSet["events"],
  correctOrder: TimelineSet["events"]
) {
  return items.filter((item, i) => correctOrder[i]?.id === item.id).length;
}

function starCount(score: number, total: number) {
  const percent = total > 0 ? (score / total) * 100 : 0;
  if (percent >= 90) return 3;
  if (percent >= 60) return 2;
  if (percent >= 30) return 1;
  return 0;
}

export function TimelineGame({ set, onComplete }: TimelineGameProps) {
  const correctOrder = useMemo(
    () => [...set.events].sort((a, b) => a.yearOrder - b.yearOrder),
    [set.events]
  );

  const [items, setItems] = useState(() => shuffleEvents(set.events));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [lockedId, setLockedId] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const liveCorrect = countCorrectPositions(items, correctOrder);
  const stars = starCount(score, set.events.length);

  const move = useCallback(
    (index: number, dir: -1 | 1) => {
      if (submitted) return;
      const item = items[index];
      if (item.id === lockedId) return;

      const next = index + dir;
      if (next < 0 || next >= items.length) return;
      if (items[next].id === lockedId) return;

      const arr = [...items];
      [arr[index], arr[next]] = [arr[next], arr[index]];
      setItems(arr);
      setFocusedIndex(next);
    },
    [items, lockedId, submitted]
  );

  const useHint = useCallback(() => {
    if (hintUsed || submitted) return;
    const first = correctOrder[0];
    setItems((prev) => {
      const rest = prev.filter((e) => e.id !== first.id);
      return [first, ...rest];
    });
    setLockedId(first.id);
    setHintUsed(true);
    setFocusedIndex(0);
  }, [correctOrder, hintUsed, submitted]);

  function submit() {
    const s = countCorrectPositions(items, correctOrder);
    setScore(s);
    setSubmitted(true);
    onComplete(s, set.events.length);
  }

  useEffect(() => {
    if (submitted) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        move(focusedIndex, -1);
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        move(focusedIndex, 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusedIndex, move, submitted]);

  return (
    <div>
      <Card glow>
        <p>{set.title}</p>
        <p>{set.description}</p>
      </Card>

      <GameHud
        current={submitted ? set.events.length : liveCorrect}
        total={set.events.length}
        score={submitted ? score : undefined}
        scoreLabel="bonnes positions"
        showProgress={submitted}
        extra={
          !submitted && !hintUsed ? (
            <Button variant="outline" size="sm" onClick={useHint}>
              <Lightbulb aria-hidden />
              Indice
            </Button>
          ) : hintUsed ? (
            <span>Indice utilisé</span>
          ) : null
        }
      />

      <LayoutGroup>
        <div role="list">
          {items.map((item, i) => {
            const isCorrect =
              submitted && correctOrder[i]?.id === item.id;
            const isWrong = submitted && !isCorrect;
            const isLocked = item.id === lockedId;
            const isFocused = focusedIndex === i && !submitted;

            return (
              <div
                key={item.id}
                role="listitem"
                tabIndex={submitted ? -1 : 0}
                onFocus={() => setFocusedIndex(i)}
                onClick={() => !submitted && setFocusedIndex(i)}
              >
                <span
                >
                  {isLocked ? <Lock aria-hidden /> : i + 1}
                </span>

                <div>
                  <p>{item.event}</p>
                  {submitted && (
                    <p>
                      Position chronologique n° {item.yearOrder}
                    </p>
                  )}
                </div>

                {!submitted && (
                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        move(i, -1);
                      }}
                      disabled={i === 0 || isLocked || (i === 1 && items[0]?.id === lockedId)}
                      aria-label="Monter"
                    >
                      <ChevronUp />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        move(i, 1);
                      }}
                      disabled={
                        i === items.length - 1 ||
                        isLocked ||
                        (i === items.length - 2 && items[items.length - 1]?.id === lockedId)
                      }
                      aria-label="Descendre"
                    >
                      <ChevronDown />
                    </button>
                  </div>
                )}

                {submitted && isCorrect && (
                  <Check aria-hidden />
                )}
                {submitted && isWrong && (
                  <X aria-hidden />
                )}
              </div>
            );
          })}
        </div>
      </LayoutGroup>

      {!submitted ? (
        <>
          <p>
            Utilisez ↑ ↓ pour réordonner · sélectionnez une carte puis les flèches
          </p>
          <Button size="lg" onClick={submit}>
            Valider l&apos;ordre
          </Button>
        </>
      ) : (
        <div>
          <Card glow>
            <p>
              {score}/{set.events.length}
            </p>
            <p>
              événements dans le bon ordre
            </p>

            <div aria-label={`${stars} étoiles sur 3`}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                >
                  <Star
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p>
              Ordre chronologique correct
            </p>
            <ol>
              {correctOrder.map((event, i) => (
                <li
                  key={event.id}
                >
                  <span>
                    {i + 1}
                  </span>
                  <div>
                    <p>{event.event}</p>
                    <p>
                      Étape chronologique n° {event.yearOrder}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      )}
    </div>
  );
}

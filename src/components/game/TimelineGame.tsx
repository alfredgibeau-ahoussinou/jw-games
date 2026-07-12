"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import type { TimelineSet } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { cn } from "@/lib/cn";
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
    <div className="mx-auto max-w-lg">
      <Card glow className="mb-6 text-center">
        <p className="text-xl font-bold text-[var(--text)]">{set.title}</p>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{set.description}</p>
      </Card>

      <GameHud
        current={submitted ? set.events.length : liveCorrect}
        total={set.events.length}
        score={submitted ? score : liveCorrect}
        scoreLabel={submitted ? "bonnes positions" : "en place"}
        showProgress
        extra={
          !submitted && !hintUsed ? (
            <Button variant="outline" size="sm" onClick={useHint}>
              <Lightbulb className="h-3.5 w-3.5" aria-hidden />
              Indice
            </Button>
          ) : hintUsed ? (
            <span className="text-xs text-[var(--text-muted)]">Indice utilisé</span>
          ) : null
        }
      />

      <LayoutGroup>
        <div className="mb-6 space-y-3" role="list">
          {items.map((item, i) => {
            const isCorrect =
              submitted && correctOrder[i]?.id === item.id;
            const isWrong = submitted && !isCorrect;
            const isLocked = item.id === lockedId;
            const isFocused = focusedIndex === i && !submitted;

            return (
              <motion.div
                key={item.id}
                layout
                role="listitem"
                tabIndex={submitted ? -1 : 0}
                onFocus={() => setFocusedIndex(i)}
                onClick={() => !submitted && setFocusedIndex(i)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-4 transition-colors",
                  "border-[var(--border)] bg-[var(--bg-elevated)]",
                  isFocused && !submitted && "ring-2 ring-[var(--accent)]/50",
                  submitted && isCorrect && "game-option--correct",
                  submitted && isWrong && "border-[var(--danger-border)]/40 opacity-80",
                  isLocked && "border-[var(--warning-border)]/50"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                    isLocked
                      ? "bg-[var(--warning-bg)] text-[var(--warning)]"
                      : "bg-[var(--accent-light)] text-[var(--accent)]"
                  )}
                >
                  {isLocked ? <Lock className="h-4 w-4" aria-hidden /> : i + 1}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-snug text-[var(--text)]">{item.event}</p>
                  {submitted && (
                    <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                      Position chronologique n° {item.yearOrder}
                    </p>
                  )}
                </div>

                {!submitted && (
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        move(i, -1);
                      }}
                      disabled={i === 0 || isLocked || (i === 1 && items[0]?.id === lockedId)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-muted)] transition-colors hover:bg-[var(--accent-light)] hover:text-[var(--accent)] disabled:opacity-30"
                      aria-label="Monter"
                    >
                      <ChevronUp className="h-6 w-6" />
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
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-muted)] transition-colors hover:bg-[var(--accent-light)] hover:text-[var(--accent)] disabled:opacity-30"
                      aria-label="Descendre"
                    >
                      <ChevronDown className="h-6 w-6" />
                    </button>
                  </div>
                )}

                {submitted && isCorrect && (
                  <Check className="h-5 w-5 shrink-0 text-[var(--success)]" aria-hidden />
                )}
                {submitted && isWrong && (
                  <X className="h-5 w-5 shrink-0 text-[var(--danger)]" aria-hidden />
                )}
              </motion.div>
            );
          })}
        </div>
      </LayoutGroup>

      {!submitted ? (
        <>
          <p className="mb-3 text-center text-xs text-[var(--text-muted)]">
            Utilisez ↑ ↓ pour réordonner · sélectionnez une carte puis les flèches
          </p>
          <Button className="w-full" size="lg" onClick={submit}>
            Valider l&apos;ordre
          </Button>
        </>
      ) : (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <Card glow className="mb-4 text-center">
            <p className="text-3xl font-bold gradient-text-gold">
              {score}/{set.events.length}
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              événements dans le bon ordre
            </p>

            <div className="my-4 flex justify-center gap-1" aria-label={`${stars} étoiles sur 3`}>
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  <Star
                    className={cn(
                      "h-7 w-7",
                      i <= stars
                        ? "fill-[var(--warning)] text-[var(--warning)]"
                        : "text-[var(--border-strong)]"
                    )}
                    aria-hidden
                  />
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="mb-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
              Ordre chronologique correct
            </p>
            <ol className="space-y-2">
              {correctOrder.map((event, i) => (
                <li
                  key={event.id}
                  className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-[var(--surface-subtle)] px-3 py-2.5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--accent-light)] text-xs font-bold text-[var(--accent)]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-[var(--text)]">{event.event}</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Étape chronologique n° {event.yearOrder}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

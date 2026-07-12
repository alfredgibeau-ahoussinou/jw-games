"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import type { MemoryPair } from "@/types/content";
import { cn } from "@/lib/cn";
import { Star, Brain, BookOpen } from "lucide-react";

interface MemoryGameProps {
  pairs: MemoryPair[];
  onComplete: (moves: number) => void;
}

type CardState = {
  id: string;
  content: string;
  pairId: string;
  isFlipped: boolean;
  isMatched: boolean;
};

const PREVIEW_SECONDS = 3;

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildDeck(pairs: MemoryPair[]): CardState[] {
  const cards: CardState[] = [];
  pairs.forEach((pair) => {
    cards.push({
      id: `${pair.id}-term`,
      content: pair.term,
      pairId: pair.id,
      isFlipped: false,
      isMatched: false,
    });
    cards.push({
      id: `${pair.id}-match`,
      content: pair.match,
      pairId: pair.id,
      isFlipped: false,
      isMatched: false,
    });
  });
  return shuffle(cards);
}

function getStars(moves: number, pairCount: number) {
  const perfect = pairCount * 2;
  if (moves <= perfect) return 3;
  if (moves <= perfect + pairCount) return 2;
  if (moves <= perfect + pairCount * 2) return 1;
  return 0;
}

function StarPreview({ moves, pairCount }: { moves: number; pairCount: number }) {
  const stars = getStars(moves, pairCount);
  return (
    <div className="flex items-center gap-0.5" aria-label="Aperçu des étoiles">
      {[1, 2, 3].map((s) => (
        <Star
          key={s}
          className={cn(
            "h-4 w-4 transition-all",
            moves > 0 && s <= stars
              ? "fill-[var(--warning)] text-[var(--warning)]"
              : "text-[var(--text-dim)]"
          )}
        />
      ))}
    </div>
  );
}

export function MemoryGame({ pairs, onComplete }: MemoryGameProps) {
  const [deck, setDeck] = useState<CardState[]>(() => buildDeck(pairs));
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedCount, setMatchedCount] = useState(0);
  const [matchTooltip, setMatchTooltip] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [preview, setPreview] = useState(true);
  const [previewCountdown, setPreviewCountdown] = useState(PREVIEW_SECONDS);
  const [shakeIds, setShakeIds] = useState<string[]>([]);
  const [pulsePairId, setPulsePairId] = useState<string | null>(null);

  const pairMap = useRef(new Map(pairs.map((p) => [p.id, p]))).current;
  const allMatched = matchedCount === pairs.length;
  const stars = getStars(moves, pairs.length);

  useEffect(() => {
    if (!preview) return;
    setDeck((d) => d.map((c) => ({ ...c, isFlipped: true })));
    const tick = window.setInterval(() => {
      setPreviewCountdown((c) => {
        if (c <= 1) {
          window.clearInterval(tick);
          setPreview(false);
          setDeck((d) => d.map((card) => ({ ...card, isFlipped: false })));
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => window.clearInterval(tick);
  }, [preview]);

  const checkMatch = useCallback(
    (ids: string[]) => {
      const [a, b] = ids.map((id) => deck.find((c) => c.id === id)!);
      if (a.pairId === b.pairId) {
        setDeck((d) =>
          d.map((c) =>
            c.pairId === a.pairId ? { ...c, isMatched: true, isFlipped: true } : c
          )
        );
        setMatchedCount((m) => m + 1);
        setPulsePairId(a.pairId);
        const source = pairMap.get(a.pairId)?.sources[0]?.reference;
        if (source) setMatchTooltip(source);
        window.setTimeout(() => {
          setPulsePairId(null);
          setMatchTooltip(null);
        }, 1800);
      } else {
        setShakeIds(ids);
        window.setTimeout(() => setShakeIds([]), 600);
        window.setTimeout(() => {
          setDeck((d) =>
            d.map((c) => (ids.includes(c.id) ? { ...c, isFlipped: false } : c))
          );
          setLocked(false);
        }, 900);
      }
      setFlippedIds([]);
      if (a.pairId === b.pairId) setLocked(false);
    },
    [deck, pairMap]
  );

  useEffect(() => {
    if (preview || flippedIds.length !== 2) return;
    setMoves((m) => m + 1);
    setLocked(true);
    checkMatch(flippedIds);
  }, [flippedIds, checkMatch, preview]);

  const completedRef = useRef(false);

  useEffect(() => {
    if (allMatched && !completedRef.current) {
      completedRef.current = true;
      onComplete(moves);
    }
  }, [allMatched, moves, onComplete]);

  function handleFlip(id: string) {
    if (preview) return;
    const card = deck.find((c) => c.id === id);
    if (!card || card.isFlipped || card.isMatched || flippedIds.length >= 2 || locked) return;

    setDeck((d) => d.map((c) => (c.id === id ? { ...c, isFlipped: true } : c)));
    setFlippedIds((ids) => [...ids, id]);
  }

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <GameHud
        current={Math.max(1, matchedCount)}
        total={pairs.length}
        score={moves}
        scoreLabel="coups"
        showProgress={false}
        extra={
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <span className="text-sm text-[var(--text-muted)]">
              Paires{" "}
              <strong className="text-[var(--accent)]">
                {matchedCount}/{pairs.length}
              </strong>
            </span>
            <StarPreview moves={moves} pairCount={pairs.length} />
          </div>
        }
      />

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mb-4 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-light)] px-4 py-3 text-center"
          >
            <Brain className="mx-auto mb-1 h-5 w-5 text-[var(--accent)]" />
            <p className="text-sm font-semibold text-[var(--text)]">Mémorisez les cartes</p>
            <p className="text-xs text-[var(--text-muted)]">
              La partie commence dans {previewCountdown}s…
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {matchTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4 }}
            className="pointer-events-none absolute left-1/2 top-16 z-20 -translate-x-1/2"
          >
            <span className="feedback-banner flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              {matchTooltip}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {allMatched ? (
        <Card glow className="py-10 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <p className="mb-4 text-5xl">🧠</p>
            <p className="gradient-text-gold text-3xl font-bold">Mémoire parfaite !</p>
            <p className="mt-3 text-[var(--text-muted)]">
              {pairs.length} paires en {moves} coups
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {[1, 2, 3].map((s) => (
                <motion.div
                  key={s}
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: s * 0.15, type: "spring" }}
                >
                  <Star
                    className={cn(
                      "h-8 w-8",
                      s <= stars
                        ? "fill-[var(--warning)] text-[var(--warning)] drop-shadow-[0_0_10px_rgba(245,165,36,0.35)]"
                        : "text-[var(--text-dim)]"
                    )}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Card>
      ) : (
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4">
          {deck.map((card, i) => {
            const isFlipped = preview || card.isFlipped || card.isMatched;
            const isPulsing = pulsePairId === card.pairId && card.isMatched;
            const isShaking = shakeIds.includes(card.id);

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={
                  isShaking
                    ? { x: [0, -8, 8, -6, 6, -3, 3, 0], scale: 1, opacity: 1 }
                    : isPulsing
                      ? { scale: [1, 1.12, 1.04, 1], opacity: 1 }
                      : { opacity: 1, scale: 1 }
                }
                transition={
                  isShaking
                    ? { duration: 0.55 }
                    : isPulsing
                      ? { duration: 0.6, ease: "easeOut" }
                      : { delay: i * 0.04, type: "spring" }
                }
                className="aspect-square perspective-[800px]"
              >
                <button
                  type="button"
                  onClick={() => handleFlip(card.id)}
                  disabled={preview || (isFlipped && card.isMatched)}
                  className="relative h-full w-full"
                  style={{ perspective: "800px" }}
                  aria-label={isFlipped ? card.content : "Carte cachée"}
                >
                  <div
                    className={cn(
                      "memory-card-inner relative h-full w-full",
                      isFlipped && "flipped"
                    )}
                  >
                    <div className="memory-card-face bg-[var(--accent-light)]">
                      <span className="text-2xl font-bold text-[var(--accent)]">?</span>
                    </div>
                    <div
                      className={cn(
                        "memory-card-face memory-card-back",
                        card.isMatched ? "game-option--correct" : "border-[var(--accent)]/30"
                      )}
                    >
                      <span className="line-clamp-4 text-xs font-semibold leading-tight text-[var(--text)] sm:text-sm">
                        {card.content}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}

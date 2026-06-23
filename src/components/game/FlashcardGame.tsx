"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Flashcard } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { RotateCcw, Check, X, BookOpen } from "lucide-react";

interface FlashcardGameProps {
  cards: Flashcard[];
  onComplete: (known: number, total: number) => void;
}

function SessionStatsBar({
  known,
  review,
  remaining,
}: {
  known: number;
  review: number;
  remaining: number;
}) {
  return (
    <div className="mb-6 grid grid-cols-3 gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] p-3 text-center text-sm">
      <div>
        <p className="text-xs text-[var(--text-muted)]">Maîtrisées</p>
        <p className="font-bold text-[var(--success)]">{known}</p>
      </div>
      <div>
        <p className="text-xs text-[var(--text-muted)]">À revoir</p>
        <p className="font-bold text-[var(--warning)]">{review}</p>
      </div>
      <div>
        <p className="text-xs text-[var(--text-muted)]">Restantes</p>
        <p className="font-bold text-[var(--accent)]">{remaining}</p>
      </div>
    </div>
  );
}

function CardProgressRing({ current, total }: { current: number; total: number }) {
  const pct = total > 0 ? (current / total) * 100 : 0;
  const r = 52;
  const circumference = 2 * Math.PI * r;
  const offset = circumference * (1 - pct / 100);

  return (
    <div className="relative mx-auto mb-6 flex h-28 w-28 items-center justify-center">
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="var(--border)"
          strokeWidth="6"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset: offset }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </svg>
      <div className="text-center">
        <p className="text-2xl font-black text-[var(--accent)]">{current}</p>
        <p className="text-xs text-[var(--text-muted)]">/ {total}</p>
      </div>
    </div>
  );
}

export function FlashcardGame({ cards, onComplete }: FlashcardGameProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [review, setReview] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [finalKnown, setFinalKnown] = useState(0);

  const card = cards[index];
  const remaining = cards.length - index;
  const done = index >= cards.length;

  const toggleFlip = useCallback(() => {
    if (showSummary || done) return;
    setFlipped((f) => !f);
  }, [showSummary, done]);

  const mark = useCallback(
    (knew: boolean) => {
      if (showSummary || done) return;
      const newKnown = knew ? known + 1 : known;
      const newReview = knew ? review : review + 1;

      if (knew) setKnown(newKnown);
      else setReview(newReview);

      setFlipped(false);

      if (index >= cards.length - 1) {
        setFinalKnown(newKnown);
        setShowSummary(true);
      } else {
        setIndex((i) => i + 1);
      }
    },
    [showSummary, done, known, review, index, cards.length]
  );

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (showSummary || done) return;
      if (e.code === "Space") {
        e.preventDefault();
        toggleFlip();
      }
      if (flipped && e.key === "1") mark(false);
      if (flipped && e.key === "2") mark(true);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showSummary, done, flipped, toggleFlip, mark]);

  if (showSummary) {
    const masteryPct = Math.round((finalKnown / cards.length) * 100);
    return (
      <Card glow className="mx-auto max-w-md py-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="mb-4 text-4xl">🃏</p>
          <p className="gradient-text-gold text-3xl font-bold">Session terminée</p>
          <p className="mt-2 text-[var(--text-muted)]">{masteryPct}% de maîtrise</p>

          <div className="mx-auto mt-6 grid max-w-xs grid-cols-3 gap-3 text-sm">
            <div className="rounded-lg bg-[var(--success)]/10 px-3 py-2">
              <p className="text-xs text-[var(--text-muted)]">Je sais</p>
              <p className="text-xl font-bold text-[var(--success)]">{finalKnown}</p>
            </div>
            <div className="rounded-lg bg-[var(--warning)]/10 px-3 py-2">
              <p className="text-xs text-[var(--text-muted)]">À revoir</p>
              <p className="text-xl font-bold text-[var(--warning)]">{review}</p>
            </div>
            <div className="rounded-lg bg-[var(--accent-light)] px-3 py-2">
              <p className="text-xs text-[var(--text-muted)]">Total</p>
              <p className="text-xl font-bold text-[var(--accent)]">{cards.length}</p>
            </div>
          </div>

          <Button
            className="mt-8 w-full"
            size="lg"
            onClick={() => onComplete(finalKnown, cards.length)}
          >
            Continuer
          </Button>
        </motion.div>
      </Card>
    );
  }

  if (done) return null;

  return (
    <div className="mx-auto max-w-md">
      <CardProgressRing current={index + 1} total={cards.length} />
      <SessionStatsBar known={known} review={review} remaining={remaining} />

      <div className="perspective-[1200px] mb-8">
        <motion.button
          type="button"
          onClick={toggleFlip}
          className="relative w-full aspect-[4/3] cursor-pointer"
          style={{ perspective: "1200px" }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="memory-card-inner relative h-full w-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="memory-card-face flex flex-col items-center justify-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <p className="px-6 text-2xl font-semibold text-[var(--accent)]">{card.front}</p>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                Espace pour retourner · 1 / 2 pour répondre
              </p>
            </div>
            <div
              className="memory-card-face memory-card-back flex flex-col items-center justify-center"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <p className="px-6 text-base leading-relaxed text-[var(--text)]">{card.back}</p>
              {card.sources[0]?.reference && (
                <p className="mt-3 scripture-ref">{card.sources[0].reference}</p>
              )}
            </div>
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence mode="wait">
        {flipped ? (
          <motion.div
            key="actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="grid grid-cols-2 gap-4"
          >
            <Button variant="danger" size="lg" onClick={() => mark(false)}>
              <X className="h-5 w-5" aria-hidden />
              À revoir
              <span className="ml-1 text-xs opacity-70">(1)</span>
            </Button>
            <Button variant="success" size="lg" onClick={() => mark(true)}>
              <Check className="h-5 w-5" aria-hidden />
              Je sais
              <span className="ml-1 text-xs opacity-70">(2)</span>
            </Button>
          </motion.div>
        ) : (
          <motion.div key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Button variant="ghost" className="w-full" onClick={toggleFlip}>
              <RotateCcw className="h-4 w-4" aria-hidden />
              Retourner la carte (Espace)
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {card.sources[0]?.reference && !flipped && (
        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)]">
          <BookOpen className="h-3 w-3" aria-hidden />
          {card.sources[0].reference}
        </p>
      )}
    </div>
  );
}

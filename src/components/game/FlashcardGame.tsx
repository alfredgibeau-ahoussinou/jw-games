"use client";

import { useState, useEffect, useCallback } from "react";

import type { Flashcard } from "@/types/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
    <div>
      <div>
        <p>Maîtrisées</p>
        <p>{known}</p>
      </div>
      <div>
        <p>À revoir</p>
        <p>{review}</p>
      </div>
      <div>
        <p>Restantes</p>
        <p>{remaining}</p>
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
    <div>
      <svg viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
         
          strokeWidth="6"
        />
        <circle
          cx="60"
          cy="60"
          r={r}
          fill="none"
         
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
        />
      </svg>
      <div>
        <p>{current}</p>
        <p>/ {total}</p>
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
      <Card glow>
        <div
        >
          <p>🃏</p>
          <p>Session terminée</p>
          <p>{masteryPct}% de maîtrise</p>

          <div>
            <div>
              <p>Je sais</p>
              <p>{finalKnown}</p>
            </div>
            <div>
              <p>À revoir</p>
              <p>{review}</p>
            </div>
            <div>
              <p>Total</p>
              <p>{cards.length}</p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => onComplete(finalKnown, cards.length)}
          >
            Continuer
          </Button>
        </div>
      </Card>
    );
  }

  if (done) return null;

  return (
    <div>
      <CardProgressRing current={index + 1} total={cards.length} />
      <SessionStatsBar known={known} review={review} remaining={remaining} />

      <div>
        <button
          type="button"
          onClick={toggleFlip}
        >
          <div
          >
            <div
            >
              <p>{card.front}</p>
              <p>
                Espace pour retourner · 1 / 2 pour répondre
              </p>
            </div>
            <div
            >
              <p>{card.back}</p>
              {card.sources[0]?.reference && (
                <p>{card.sources[0].reference}</p>
              )}
            </div>
          </div>
        </button>
      </div>

      <>
        {flipped ? (
          <div
            key="actions"
          >
            <Button variant="danger" size="lg" onClick={() => mark(false)}>
              <X aria-hidden />
              À revoir
              <span>(1)</span>
            </Button>
            <Button variant="success" size="lg" onClick={() => mark(true)}>
              <Check aria-hidden />
              Je sais
              <span>(2)</span>
            </Button>
          </div>
        ) : (
          <div key="hint">
            <Button variant="ghost" onClick={toggleFlip}>
              <RotateCcw aria-hidden />
              Retourner la carte (Espace)
            </Button>
          </div>
        )}
      </>

      {card.sources[0]?.reference && !flipped && (
        <p>
          <BookOpen aria-hidden />
          {card.sources[0].reference}
        </p>
      )}
    </div>
  );
}

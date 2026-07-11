"use client";

import { useState, useEffect, useCallback, useRef } from "react";

import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import type { MemoryPair } from "@/types/content";
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
    <div aria-label="Aperçu des étoiles">
      {[1, 2, 3].map((s) => (
        <Star
          key={s}
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
    <div>
      <GameHud
        current={Math.max(1, matchedCount)}
        total={pairs.length}
        score={moves}
        scoreLabel="coups"
        showProgress={false}
        extra={
          <div>
            <span>
              Paires{" "}
              <strong>
                {matchedCount}/{pairs.length}
              </strong>
            </span>
            <StarPreview moves={moves} pairCount={pairs.length} />
          </div>
        }
      />

      <>
        {preview && (
          <div
          >
            <Brain />
            <p>Mémorisez les cartes</p>
            <p>
              La partie commence dans {previewCountdown}s…
            </p>
          </div>
        )}
      </>

      <>
        {matchTooltip && (
          <div
          >
            <span>
              <BookOpen aria-hidden />
              {matchTooltip}
            </span>
          </div>
        )}
      </>

      {allMatched ? (
        <Card glow>
          <div
          >
            <p>🧠</p>
            <p>Mémoire parfaite !</p>
            <p>
              {pairs.length} paires en {moves} coups
            </p>
            <div>
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                >
                  <Star
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      ) : (
        <div>
          {deck.map((card, i) => {
            const isFlipped = preview || card.isFlipped || card.isMatched;
            const isPulsing = pulsePairId === card.pairId && card.isMatched;
            const isShaking = shakeIds.includes(card.id);

            return (
              <div
                key={card.id}
              >
                <button
                  type="button"
                  onClick={() => handleFlip(card.id)}
                  disabled={preview || (isFlipped && card.isMatched)}
                  aria-label={isFlipped ? card.content : "Carte cachée"}
                >
                  <div
                  >
                    <div>
                      <span>?</span>
                    </div>
                    <div
                    >
                      <span>
                        {card.content}
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

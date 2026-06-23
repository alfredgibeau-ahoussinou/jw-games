"use client";

import { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import type { WordScrambleItem } from "@/types/content";
import { scrambleWord } from "@/data/sample-words";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { useGameStreak } from "@/hooks/useGameStreak";
import { cn } from "@/lib/cn";
import { Lightbulb, Shuffle } from "lucide-react";

interface WordScrambleGameProps {
  items: WordScrambleItem[];
  onComplete: (score: number, total: number, meta?: { bestStreak: number }) => void;
}

interface LetterTile {
  id: string;
  letter: string;
}

function buildTiles(word: string, roundKey: number): LetterTile[] {
  const scrambled = scrambleWord(word);
  return scrambled.split("").map((letter, i) => ({
    id: `${roundKey}-${i}`,
    letter,
  }));
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function WordScrambleGame({ items, onComplete }: WordScrambleGameProps) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [hintUsed, setHintUsed] = useState(false);
  const [roundKey, setRoundKey] = useState(0);
  const correctCount = useRef(0);
  const { streak, bestStreak, showCombo, registerAnswer } = useGameStreak();

  const item = items[index];
  const isLast = index >= items.length - 1;

  const tiles = useMemo(() => buildTiles(item.word, roundKey), [item.word, roundKey]);
  const [poolOrder, setPoolOrder] = useState<string[]>(() => tiles.map((t) => t.id));

  useEffect(() => {
    setPoolOrder(tiles.map((t) => t.id));
    setSelectedIds([]);
    setAnswer("");
    setFeedback(null);
    setHintUsed(false);
  }, [index, tiles]);

  const availableIds = poolOrder.filter((id) => !selectedIds.includes(id));

  const pickLetter = useCallback(
    (tileId: string) => {
      if (feedback) return;
      const tile = tiles.find((t) => t.id === tileId);
      if (!tile || selectedIds.includes(tileId)) return;
      setSelectedIds((s) => [...s, tileId]);
      setAnswer((a) => a + tile.letter);
    },
    [feedback, selectedIds, tiles]
  );

  function backspace() {
    if (feedback || selectedIds.length === 0) return;
    setSelectedIds((s) => s.slice(0, -1));
    setAnswer((a) => a.slice(0, -1));
  }

  function shuffleUnused() {
    if (feedback) return;
    const unused = poolOrder.filter((id) => !selectedIds.includes(id));
    const used = poolOrder.filter((id) => selectedIds.includes(id));
    setPoolOrder([...shuffleArray(unused), ...used]);
  }

  function useHint() {
    if (feedback || hintUsed || answer.length >= item.word.length) return;
    const targetLetter = item.word[answer.length];
    const tile = tiles.find(
      (t) =>
        t.letter.toUpperCase() === targetLetter.toUpperCase() && !selectedIds.includes(t.id)
    );
    if (!tile) return;
    setHintUsed(true);
    pickLetter(tile.id);
  }

  function check() {
    if (feedback || answer.length !== item.word.length) return;
    const correct = answer.toUpperCase() === item.word.toUpperCase();
    setFeedback(correct ? "correct" : "wrong");
    if (correct) correctCount.current += 1;
    registerAnswer(correct);
  }

  function next() {
    if (isLast) {
      onComplete(correctCount.current, items.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setRoundKey((k) => k + 1);
  }

  return (
    <div className="relative mx-auto max-w-lg">
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={items.length}
        score={correctCount.current}
        streak={streak}
      />

      <Card className="mb-6 text-center">
        <p className="mb-4 text-sm text-[var(--text-muted)]">
          <Lightbulb className="mr-1 inline h-3.5 w-3.5 text-[var(--warning)]" aria-hidden />
          {item.hint}
        </p>

        <LayoutGroup>
          <div className="flex min-h-[3.5rem] flex-wrap justify-center gap-2">
            {answer.split("").map((letter, i) => (
              <motion.span
                key={`slot-${i}`}
                layout
                initial={{ scale: 0, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="flex h-12 w-10 items-center justify-center rounded-xl border border-[var(--accent)]/40 bg-[var(--accent-light)] text-xl font-bold text-[var(--accent)]"
              >
                {letter}
              </motion.span>
            ))}
            {Array.from({ length: item.word.length - answer.length }).map((_, i) => (
              <motion.span
                key={`empty-${i}`}
                layout
                className="h-12 w-10 rounded-xl border border-dashed border-white/20"
              />
            ))}
          </div>
        </LayoutGroup>
      </Card>

      {!feedback && (
        <>
          <LayoutGroup>
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              <AnimatePresence mode="popLayout">
                {availableIds.map((tileId) => {
                  const tile = tiles.find((t) => t.id === tileId)!;
                  return (
                    <motion.button
                      key={tileId}
                      layout
                      type="button"
                      initial={{ scale: 0, rotate: -8 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, opacity: 0, rotate: 12 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 380, damping: 20 }}
                      onClick={() => pickLetter(tileId)}
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)]",
                        "bg-[var(--bg-elevated)] text-lg font-bold text-[var(--text)]",
                        "hover:border-[var(--accent)] hover:bg-[var(--accent-light)]"
                      )}
                    >
                      {tile.letter}
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </LayoutGroup>

          <div className="mb-3 flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={useHint}
              disabled={hintUsed || answer.length >= item.word.length}
            >
              <Lightbulb className="h-4 w-4" aria-hidden />
              Indice
            </Button>
            <Button variant="outline" size="sm" className="flex-1" onClick={shuffleUnused}>
              <Shuffle className="h-4 w-4" aria-hidden />
              Mélanger
            </Button>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={backspace} disabled={!answer} aria-label="Effacer">
              ⌫
            </Button>
            <Button
              className="flex-1"
              size="lg"
              onClick={check}
              disabled={answer.length !== item.word.length}
            >
              Valider
            </Button>
          </div>
        </>
      )}

      {feedback && (
        <GameFeedbackPanel
          correct={feedback === "correct"}
          explanation={
            feedback === "correct"
              ? `Le mot était bien « ${item.word} ».`
              : `La bonne réponse était « ${item.word} ».`
          }
          source={item.sources[0]?.reference}
          sourceEdition={item.sources[0]?.bibleEdition}
          correctLabel="Bravo !"
          wrongLabel="Presque…"
          nextLabel={isLast ? "Voir les résultats 🏆" : "Mot suivant →"}
          onNext={next}
        />
      )}
    </div>
  );
}

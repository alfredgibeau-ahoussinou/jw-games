"use client";

import { useGameScore } from "@/hooks/useGameScore";
import { useState, useMemo, useCallback, useEffect } from "react";
import { LayoutGroup } from "framer-motion";
import type { WordScrambleItem } from "@/types/content";
import { scrambleWord } from "@/data/sample-words";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GameHud } from "@/components/game/GameHud";
import { GameComboBanner } from "@/components/game/shared/GameComboBanner";
import { GameFeedbackPanel } from "@/components/game/shared/GameFeedbackPanel";
import { useGameStreak } from "@/hooks/useGameStreak";
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
  const { score, addPoint, getScore } = useGameScore();
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
    if (correct) addPoint();
    registerAnswer(correct);
  }

  function next() {
    if (isLast) {
      onComplete(getScore(), items.length, { bestStreak });
      return;
    }
    setIndex((i) => i + 1);
    setRoundKey((k) => k + 1);
  }

  return (
    <div>
      <GameComboBanner show={showCombo} streak={streak} />

      <GameHud
        current={index + 1}
        total={items.length}
        score={score}
        streak={streak}
      />

      <Card>
        <p>
          <Lightbulb aria-hidden />
          {item.hint}
        </p>

        <LayoutGroup>
          <div>
            {answer.split("").map((letter, i) => (
              <span
                key={`slot-${i}`}
              >
                {letter}
              </span>
            ))}
            {Array.from({ length: item.word.length - answer.length }).map((_, i) => (
              <span
                key={`empty-${i}`}
              />
            ))}
          </div>
        </LayoutGroup>
      </Card>

      {!feedback && (
        <>
          <LayoutGroup>
            <div>
              <>
                {availableIds.map((tileId) => {
                  const tile = tiles.find((t) => t.id === tileId)!;
                  return (
                    <button
                      key={tileId}
                      type="button"
                      onClick={() => pickLetter(tileId)}
                    >
                      {tile.letter}
                    </button>
                  );
                })}
              </>
            </div>
          </LayoutGroup>

          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={useHint}
              disabled={hintUsed || answer.length >= item.word.length}
            >
              <Lightbulb aria-hidden />
              Indice
            </Button>
            <Button variant="outline" size="sm" onClick={shuffleUnused}>
              <Shuffle aria-hidden />
              Mélanger
            </Button>
          </div>

          <div>
            <Button variant="outline" onClick={backspace} disabled={!answer} aria-label="Effacer">
              ⌫
            </Button>
            <Button
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

"use client";

import { useState, useCallback } from "react";

import { RotateCcw, Check, X, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import type { PreachPhrase } from "@/types/language";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { canSpeakPhrase, speakPhrase } from "@/lib/language-speech";

interface PhraseFlashcardsProps {
  phrases: PreachPhrase[];
  knownIds: string[];
  onMarkKnown: (id: string) => void;
  languageId: string;
}

export function PhraseFlashcards({
  phrases,
  knownIds,
  onMarkKnown,
  languageId,
}: PhraseFlashcardsProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const phrase = phrases[index];
  const isKnown = phrase && knownIds.includes(phrase.id);

  const goNext = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i + 1) % phrases.length);
  }, [phrases.length]);

  const goPrev = useCallback(() => {
    setFlipped(false);
    setIndex((i) => (i - 1 + phrases.length) % phrases.length);
  }, [phrases.length]);

  const listenAllowed = phrase && canSpeakPhrase(languageId, { flipped });
  const listenText = phrase
    ? languageId === "fr" && !flipped
      ? phrase.french
      : phrase.target
    : "";

  const handleListen = () => {
    if (!listenAllowed || !phrase) return;
    speakPhrase(languageId, listenText);
  };

  if (!phrase) {
    return (
      <Card>
        <p>Aucune phrase dans cette catégorie.</p>
      </Card>
    );
  }

  return (
    <div>
      <div>
        <span>
          {index + 1} / {phrases.length}
        </span>
        <span>
          {knownIds.filter((id) => phrases.some((p) => p.id === id)).length} maîtrisées
        </span>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? "Voir le français" : "Voir la traduction"}
      >
        <Card
          glow
        >
          <>
            <div
              key={flipped ? "back" : "front"}
            >
              {!flipped ? (
                <>
                  <p>En français</p>
                  <p>{phrase.french}</p>
                  <p>Appuyez pour voir la traduction</p>
                  {languageId !== "fr" && (
                    <p>
                      Retournez la carte pour écouter la prononciation
                    </p>
                  )}
                </>
              ) : (
                <>
                  <p>Dans la langue cible</p>
                  <p>
                    {phrase.target}
                  </p>
                  {phrase.pronunciation && (
                    <p>
                      {phrase.pronunciation}
                    </p>
                  )}
                  {phrase.tip && (
                    <p>
                      💡 {phrase.tip}
                    </p>
                  )}
                </>
              )}
            </div>
          </>
        </Card>
      </button>

      <div>
        <Button variant="outline" size="sm" onClick={goPrev} aria-label="Précédent">
          <ChevronLeft />
        </Button>
        {listenAllowed ? (
          <Button variant="ghost" size="sm" onClick={handleListen} aria-label="Écouter">
            <Volume2 />
            Écouter
          </Button>
        ) : (
          <Button variant="ghost" size="sm" disabled>
            <Volume2 />
            Écouter
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={() => setFlipped((f) => !f)}>
          <RotateCcw />
          Retourner
        </Button>
        <Button variant="outline" size="sm" onClick={goNext} aria-label="Suivant">
          <ChevronRight />
        </Button>
      </div>

      {flipped && (
        <div>
          <Button
            variant="outline"
            onClick={goNext}
          >
            <X />
            À revoir
          </Button>
          <Button
            variant="success"
            onClick={() => {
              onMarkKnown(phrase.id);
              goNext();
            }}
          >
            <Check />
            Je la connais
          </Button>
        </div>
      )}
    </div>
  );
}

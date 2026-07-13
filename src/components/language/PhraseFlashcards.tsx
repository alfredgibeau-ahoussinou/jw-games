"use client";

import { useState, useCallback } from "react";
import { RotateCcw, Check, X, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import type { PreachPhrase } from "@/types/language";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import { canSpeakPhrase, speakPhrase } from "@/lib/language-speech";

interface PhraseFlashcardsProps {
  phrases: PreachPhrase[];
  knownIds: string[];
  onMarkKnown: (id: string) => void;
  onMarkForReview?: (id: string) => void;
  languageId: string;
}

export function PhraseFlashcards({
  phrases,
  knownIds,
  onMarkKnown,
  onMarkForReview,
  languageId,
}: PhraseFlashcardsProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const phrase = phrases[index];

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
        <p className="text-center text-[var(--text-muted)]">Aucune phrase dans cette catégorie.</p>
      </Card>
    );
  }

  const masteredInSet = knownIds.filter((id) => phrases.some((p) => p.id === id)).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--text-muted)]">
          {index + 1} / {phrases.length}
        </span>
        <span className="font-medium text-[var(--accent)]">
          {masteredInSet} maîtrisées
        </span>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-2xl"
        aria-label={flipped ? "Voir le français" : "Voir la traduction"}
      >
        <Card glow className="min-h-[220px] flex flex-col justify-center">
          <div key={flipped ? "back" : "front"} className="space-y-3 text-center">
            {!flipped ? (
              <>
                <p className="text-caption uppercase tracking-wider">En français</p>
                <p className="text-xl font-semibold leading-snug sm:text-2xl">{phrase.french}</p>
                <p className="text-sm text-[var(--text-muted)]">Appuyez pour voir la traduction</p>
                {languageId !== "fr" && (
                  <p className="text-xs text-[var(--text-dim)]">
                    Retournez la carte pour écouter la prononciation
                  </p>
                )}
              </>
            ) : (
              <>
                <p className="text-caption uppercase tracking-wider">Dans la langue cible</p>
                <p className="text-xl font-semibold leading-snug sm:text-2xl">{phrase.target}</p>
                {phrase.pronunciation && (
                  <p className="text-sm italic text-[var(--text-muted)]">{phrase.pronunciation}</p>
                )}
                {phrase.tip && (
                  <p className="rounded-lg bg-[var(--surface-subtle)] px-3 py-2 text-sm text-[var(--text-muted)]">
                    💡 {phrase.tip}
                  </p>
                )}
              </>
            )}
          </div>
        </Card>
      </button>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="outline" size="sm" onClick={goPrev} aria-label="Précédent">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {listenAllowed ? (
          <Button variant="ghost" size="sm" onClick={handleListen} aria-label="Écouter">
            <Volume2 className="h-4 w-4" />
            Écouter
          </Button>
        ) : (
          <Button variant="ghost" size="sm" disabled>
            <Volume2 className="h-4 w-4" />
            Écouter
          </Button>
        )}
        <Button variant="outline" size="sm" onClick={() => setFlipped((f) => !f)}>
          <RotateCcw className="h-4 w-4" />
          Retourner
        </Button>
        <Button variant="outline" size="sm" onClick={goNext} aria-label="Suivant">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {flipped && (
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            onClick={() => {
              onMarkForReview?.(phrase.id);
              goNext();
            }}
            className="w-full"
          >
            <X className="h-4 w-4" />
            À revoir
          </Button>
          <Button
            variant="success"
            onClick={() => {
              onMarkKnown(phrase.id);
              goNext();
            }}
            className="w-full"
          >
            <Check className="h-4 w-4" />
            Je la connais
          </Button>
        </div>
      )}
    </div>
  );
}

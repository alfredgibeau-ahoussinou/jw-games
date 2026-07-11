"use client";

import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { jwBibleLookupUrl } from "@/lib/jw-bible-url";

interface GameFeedbackPanelProps {
  correct: boolean;
  explanation?: string;
  source?: string;
  sourceEdition?: string;
  correctLabel?: string;
  wrongLabel?: string;
  nextLabel: string;
  onNext: () => void;
  className?: string;
}

export function GameFeedbackPanel({
  correct,
  explanation,
  source,
  sourceEdition,
  correctLabel = "Correct !",
  wrongLabel = "Pas tout à fait…",
  nextLabel,
  onNext,
}: GameFeedbackPanelProps) {
  const bibleUrl = source ? jwBibleLookupUrl(source) : null;

  return (
    <div>
      <Card>
        <div>
          {correct ? <CheckCircle aria-hidden /> : <XCircle aria-hidden />}
          <p>{correct ? correctLabel : wrongLabel}</p>
        </div>
        {explanation && <p>{explanation}</p>}
        {source && (
          <footer>
            <BookOpen aria-hidden />
            {bibleUrl ? (
              <a href={bibleUrl} target="_blank" rel="noopener noreferrer">
                <cite>
                  {source}
                  {sourceEdition ? ` — ${sourceEdition}` : ""} (TMN sur jw.org)
                </cite>
              </a>
            ) : (
              <cite>
                {source}
                {sourceEdition ? ` — ${sourceEdition}` : ""}
              </cite>
            )}
          </footer>
        )}
      </Card>
      <Button size="lg" onClick={onNext}>
        {nextLabel}
      </Button>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

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
  className,
}: GameFeedbackPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={className}
    >
      <Card
        glow
        className={cn(
          "mb-4",
          correct ? "border-[var(--success-border)]" : "border-[var(--danger-border)]"
        )}
      >
        <div className="mb-3 flex items-center gap-2">
          {correct ? (
            <CheckCircle className="h-6 w-6 text-[var(--success)]" aria-hidden />
          ) : (
            <XCircle className="h-6 w-6 text-[var(--danger)]" aria-hidden />
          )}
          <p className={cn("text-lg font-bold", correct ? "text-[var(--success)]" : "text-[var(--danger)]")}>
            {correct ? correctLabel : wrongLabel}
          </p>
        </div>
        {explanation && (
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{explanation}</p>
        )}
        {source && (
          <footer className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3">
            <BookOpen className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden />
            <cite className="scripture-ref not-italic">
              {source}
              {sourceEdition ? ` — ${sourceEdition}` : ""}
            </cite>
          </footer>
        )}
      </Card>
      <Button className="w-full" size="lg" onClick={onNext}>
        {nextLabel}
      </Button>
    </motion.div>
  );
}

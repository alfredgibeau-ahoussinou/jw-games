"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";
import type { PreachPhrase } from "@/types/language";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface ReviewTodaySectionProps {
  phrases: PreachPhrase[];
  onClearReview: (phraseId: string) => void;
}

export function ReviewTodaySection({ phrases, onClearReview }: ReviewTodaySectionProps) {
  if (phrases.length === 0) return null;

  return (
    <Card className="border-[var(--accent)]/25 bg-[var(--accent-light)]/30">
      <div className="flex items-center gap-2">
        <RotateCcw className="h-5 w-5 text-[var(--accent)]" aria-hidden />
        <h2 className="text-heading">À revoir aujourd&apos;hui</h2>
      </div>
      <p className="text-body mt-2 text-sm">
        {phrases.length} phrase{phrases.length > 1 ? "s" : ""} à réviser selon votre progression.
      </p>
      <ul className="mt-4 space-y-2">
        {phrases.map((phrase) => (
          <li
            key={phrase.id}
            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/[0.06] bg-[var(--bg-card)] px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="text-sm font-medium">{phrase.french}</p>
              <p className="text-caption text-[var(--accent)]">{phrase.target}</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => onClearReview(phrase.id)}>
              Révisé
            </Button>
          </li>
        ))}
      </ul>
      <p className="text-caption mt-3">
        Marquez « Révisé » après répétition, ou utilisez les{" "}
        <Link href="#cartes" className="link-primary">
          cartes mémoire
        </Link>
        .
      </p>
    </Card>
  );
}

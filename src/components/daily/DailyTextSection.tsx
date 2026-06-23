"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle, ExternalLink, Loader2, Sparkles, XCircle, Zap } from "lucide-react";
import { DAILY_TEXT_QUIZ_XP, formatDailyTextDate } from "@/lib/daily-text";
import type { JwDailyText } from "@/types/daily-text";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { useUserStore } from "@/stores/user-store";

export function DailyTextSection() {
  const addXp = useUserStore((s) => s.addXp);
  const [dateLabel, setDateLabel] = useState("");

  useEffect(() => {
    setDateLabel(formatDailyTextDate());
  }, []);

  const [entry, setEntry] = useState<JwDailyText | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/daily-text");
        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(body?.error ?? "Impossible de charger le texte du jour");
        }
        const data = (await res.json()) as JwDailyText;
        if (!cancelled) {
          setEntry(data);
          setIndex(0);
          setSelected(null);
          setScore(0);
          setDone(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Erreur de chargement");
          setEntry(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const questions = entry?.questions ?? [];
  const q = questions[index];
  const answered = selected !== null;

  function pick(i: number) {
    if (!q || answered) return;
    const correct = i === q.correctIndex;
    setSelected(i);
    const newScore = correct ? score + 1 : score;
    if (correct) setScore(newScore);

    if (index >= questions.length - 1) {
      const xp = newScore * DAILY_TEXT_QUIZ_XP;
      if (xp > 0) addXp(xp, { skipSession: true });
      setScore(newScore);
      setDone(true);
    }
  }

  function next() {
    setIndex((i) => i + 1);
    setSelected(null);
  }

  return (
    <section className="container-app mb-8" aria-label="Texte du jour">
      <div className="rounded-2xl border border-[var(--accent)]/25 bg-gradient-to-br from-[var(--bg-card)] via-[var(--bg-card)] to-[var(--accent-light)]/40 shadow-lg">
        <div className="border-b border-white/[0.06] px-6 py-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] ring-1 ring-[var(--accent)]/20">
                <BookOpen className="h-5 w-5 text-[var(--accent)]" aria-hidden />
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Texte du jour</h2>
                <p className="text-caption capitalize">{(entry?.heading ?? dateLabel) || "Texte du jour"}</p>
              </div>
            </div>
            {entry && (
              <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[0.6875rem] font-medium text-[var(--text-dim)]">
                {entry.scriptureReference}
              </span>
            )}
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center gap-3 px-6 py-16 text-[var(--text-muted)]">
            <Loader2 className="h-5 w-5 animate-spin text-[var(--accent)]" aria-hidden />
            <p className="text-sm">Chargement du texte officiel…</p>
          </div>
        )}

        {!loading && error && (
          <div className="space-y-4 px-6 py-10 sm:px-8">
            <p className="text-sm text-[var(--text-muted)]">{error}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setLoading(true);
                  setError(null);
                  void fetch("/api/daily-text")
                    .then(async (res) => {
                      if (!res.ok) {
                        const body = (await res.json().catch(() => null)) as { error?: string } | null;
                        throw new Error(body?.error ?? "Impossible de charger le texte du jour");
                      }
                      return res.json() as Promise<JwDailyText>;
                    })
                    .then((data) => {
                      setEntry(data);
                      setIndex(0);
                      setSelected(null);
                      setScore(0);
                      setDone(false);
                    })
                    .catch((err) => {
                      setError(err instanceof Error ? err.message : "Erreur de chargement");
                      setEntry(null);
                    })
                    .finally(() => setLoading(false));
                }}
              >
                Réessayer
              </Button>
              <Link
              href="https://www.jw.org/finder?alias=daily-text&wtlocale=F&srcid=jwlshare"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary inline-flex items-center gap-1.5 text-sm"
            >
              Voir sur JW.org
              <ExternalLink className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        )}

        {!loading && entry && (
          <>
            <div className="space-y-6 px-6 py-6 sm:px-8">
              <blockquote className="scripture-block text-[1.0625rem] leading-relaxed break-words whitespace-pre-wrap">
                {entry.scripture}
                <footer className="scripture-ref mt-3 not-italic">{entry.scriptureReference}</footer>
              </blockquote>

              <div>
                <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-[var(--accent)]">
                  Commentaire
                </p>
                <p className="text-body text-[0.9375rem] leading-relaxed break-words whitespace-pre-wrap text-[var(--text-secondary)]">
                  {entry.commentary}
                </p>
                {entry.commentarySource && (
                  <p className="mt-3 text-[0.8125rem] font-medium text-[var(--text-dim)]">
                    Source : {entry.commentarySource}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.06] pt-4 text-[0.8125rem]">
                <span className="text-[var(--text-dim)]">{entry.publicationTitle}</span>
                <Link
                  href={entry.jwOrgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary inline-flex items-center gap-1"
                >
                  JW.org
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </Link>
                <Link
                  href={entry.wolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary inline-flex items-center gap-1"
                >
                  Bibliothèque en ligne
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="border-t border-white/[0.06] bg-[var(--bg-elevated)]/80 px-6 py-6 sm:px-8">
              {done ? (
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl",
                      score === questions.length
                        ? "bg-emerald-500/15 text-[var(--success)]"
                        : "bg-[var(--accent-light)] text-[var(--accent)]"
                    )}
                  >
                    <CheckCircle className="h-7 w-7" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold tracking-tight">
                      Quiz terminé — {score}/{questions.length}
                    </p>
                    <p className="text-caption mt-0.5 flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden />+
                      {score * DAILY_TEXT_QUIZ_XP} XP
                    </p>
                  </div>
                </div>
              ) : q ? (
                <>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[var(--accent)]" aria-hidden />
                      <p className="text-sm font-semibold">Quiz sur le texte</p>
                    </div>
                    <p className="text-caption">
                      Question {index + 1} / {questions.length}
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      <p className="mb-4 text-[0.9375rem] font-medium leading-relaxed break-words whitespace-pre-wrap">
                        {q.question}
                      </p>
                      <ul className="game-option-list">
                        {q.options.map((opt, i) => {
                          const isCorrect = i === q.correctIndex;
                          const isSelected = i === selected;
                          return (
                            <li key={i}>
                              <button
                                type="button"
                                onClick={() => pick(i)}
                                disabled={answered}
                                className={cn(
                                  "game-option w-full",
                                  answered && isCorrect && "border-[var(--success)]/60 bg-emerald-950/30",
                                  answered && isSelected && !isCorrect && "border-red-500/50 bg-red-950/25"
                                )}
                              >
                                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                                <span className="min-w-0 flex-1 break-words whitespace-pre-wrap leading-relaxed">
                                  {opt}
                                </span>
                                {answered && isCorrect && (
                                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--success)]" aria-hidden />
                                )}
                                {answered && isSelected && !isCorrect && (
                                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" aria-hidden />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>

                      {answered && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent-light)] px-4 py-3 text-sm leading-relaxed break-words whitespace-pre-wrap text-[var(--text-secondary)]"
                        >
                          {q.explanation}
                        </motion.p>
                      )}

                      {answered && index < questions.length - 1 && (
                        <Button className="mt-5 w-full sm:w-auto" onClick={next}>
                          Question suivante
                        </Button>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </>
              ) : null}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

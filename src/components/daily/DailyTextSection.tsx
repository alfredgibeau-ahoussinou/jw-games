"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { BookOpen, CheckCircle, ChevronRight, ExternalLink, Loader2, Sparkles, XCircle, Zap } from "lucide-react";
import { DAILY_TEXT_QUIZ_XP, formatDailyTextDate } from "@/lib/daily-text";
import type { JwDailyText } from "@/types/daily-text";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { jwImageForSlot } from "@/lib/jw-images";
import { jwBibleLookupUrl } from "@/lib/jw-bible-url";
import { useUserStore } from "@/stores/user-store";
import { cn } from "@/lib/cn";

function shortenVerse(text: string, max = 120): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

interface DailyTextSectionProps {
  variant?: "full" | "compact";
}

export function DailyTextSection({ variant = "full" }: DailyTextSectionProps) {
  const addXp = useUserStore((s) => s.addXp);
  const tryClaimDailyTextQuizXp = useUserStore((s) => s.tryClaimDailyTextQuizXp);
  const trackDailyProgress = useUserStore((s) => s.trackDailyProgress);
  const [dateLabel, setDateLabel] = useState("");

  useEffect(() => {
    setDateLabel(formatDailyTextDate());
  }, []);

  const [entry, setEntry] = useState<JwDailyText | null>(null);
  const [cacheNote, setCacheNote] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(0);
  const [xpAlreadyClaimed, setXpAlreadyClaimed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      setCacheNote(null);
      try {
        const res = await fetch("/api/daily-text");
        if (!res.ok) {
          const body = (await res.json().catch(() => null)) as { error?: string } | null;
          throw new Error(body?.error ?? "Impossible de charger le texte du jour");
        }
        const data = (await res.json()) as JwDailyText;
        const requested = res.headers.get("X-Daily-Text-Requested");
        const served = res.headers.get("X-Daily-Text-Served");
        if (!cancelled) {
          setEntry(data);
          setCacheNote(
            requested && served && requested !== served
              ? `Texte en cache (${data.heading}) — mise à jour du jour en cours`
              : null
          );
          setIndex(0);
          setSelected(null);
          setScore(0);
          setDone(false);
          setXpAwarded(0);
          setXpAlreadyClaimed(false);
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
  const isCompact = variant === "compact";

  function pick(i: number) {
    if (!q || answered) return;
    const correct = i === q.correctIndex;
    setSelected(i);
    const newScore = correct ? score + 1 : score;
    if (correct) setScore(newScore);

    if (index >= questions.length - 1) {
      const potentialXp = newScore * DAILY_TEXT_QUIZ_XP;
      if (potentialXp > 0) {
        if (tryClaimDailyTextQuizXp()) {
          addXp(potentialXp, { skipSession: true });
          setXpAwarded(potentialXp);
        } else {
          setXpAlreadyClaimed(true);
        }
      }
      setScore(newScore);
      setDone(true);
      trackDailyProgress("dailytext", 1);
    }
  }

  function next() {
    setIndex((i) => i + 1);
    setSelected(null);
  }

  return (
    <section
      className={cn("card scripture-panel stack", isCompact && "card")}
      aria-label="Texte du jour"
      id={isCompact ? undefined : "texte-du-jour"}
    >
      <div>
        {!isCompact && (
          <div>
            <SafeImage
              src={jwImageForSlot("daily.text").url}
              alt="" fill sizes="(max-width: 768px) 100vw, 800px" />
            <div />
            <div>
              <p>
                Texte officiel du jour
              </p>
              {entry && (
                <p>{entry.scriptureReference}</p>
              )}
            </div>
          </div>
        )}
        <div>
          <div>
            <div>
              <span>
                <BookOpen aria-hidden />
              </span>
              <div>
                <h2>Texte du jour</h2>
                <p>{(entry?.heading ?? dateLabel) || "Texte du jour"}</p>
                {cacheNote && (
                  <p>{cacheNote}</p>
                )}
              </div>
            </div>
            {entry && isCompact && (
              <span>
                {entry.scriptureReference}
              </span>
            )}
            {entry && !isCompact && !loading && (
              <span>
                {entry.publicationTitle}
              </span>
            )}
          </div>
        </div>

        {loading && (
          <div>
            <Loader2 aria-hidden />
            <p>Chargement du texte officiel…</p>
          </div>
        )}

        {!loading && error && (
          <div>
            <p>{error}</p>
            <div>
              <Button
                size="sm" variant="outline" onClick={() => {
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
                      setXpAwarded(0);
                      setXpAlreadyClaimed(false);
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
                href="https://www.jw.org/finder?alias=daily-text&wtlocale=F&srcid=jwlshare" target="_blank" rel="noopener noreferrer" >
                Voir sur JW.org
                <ExternalLink aria-hidden />
              </Link>
            </div>
          </div>
        )}

        {!loading && entry && isCompact && (
          <div>
            <blockquote>
              {shortenVerse(entry.scripture)}
              <footer>{entry.scriptureReference}</footer>
            </blockquote>
            <Link
              href="/quotidien#texte-du-jour" >
              Lire le commentaire et le quiz
              <ChevronRight aria-hidden />
            </Link>
          </div>
        )}

        {!loading && entry && !isCompact && (
          <>
            <div>
              <blockquote>
                {entry.scripture}
                <footer>
                  <a href={jwBibleLookupUrl(entry.scriptureReference)} target="_blank" rel="noopener noreferrer">
                    {entry.scriptureReference}
                  </a>
                </footer>
              </blockquote>

              <div>
                <p>
                  Commentaire
                </p>
                <p>
                  {entry.commentary}
                </p>
                {entry.commentarySource && (
                  <p>
                    Source : {entry.commentarySource}
                  </p>
                )}
              </div>

              <div>
                <span>{entry.publicationTitle}</span>
                <Link
                  href={entry.jwOrgUrl}
                  target="_blank" rel="noopener noreferrer" >
                  JW.org
                  <ExternalLink aria-hidden />
                </Link>
                <Link
                  href={entry.wolUrl}
                  target="_blank" rel="noopener noreferrer" >
                  Bibliothèque en ligne
                  <ExternalLink aria-hidden />
                </Link>
              </div>
            </div>

            <div>
              {done ? (
                <div>
                  <div
                  >
                    <CheckCircle aria-hidden />
                  </div>
                  <div>
                    <p>
                      Quiz terminé — {score}/{questions.length}
                    </p>
                    {xpAlreadyClaimed ? (
                      <p>
                        XP déjà gagné aujourd&apos;hui — rejouez demain !
                      </p>
                    ) : xpAwarded > 0 ? (
                      <p>
                        <Zap aria-hidden />+
                        {xpAwarded} XP
                      </p>
                    ) : null}
                  </div>
                </div>
              ) : q ? (
                <>
                  <div>
                    <div>
                      <Sparkles aria-hidden />
                      <p>Questions sur le texte</p>
                    </div>
                    <p>
                      Question {index + 1} / {questions.length}
                    </p>
                  </div>

                  <>
                    <div
                      key={q.id}
                    >
                      <p>
                        {q.question}
                      </p>
                      <ul>
                        {q.options.map((opt, i) => {
                          const isCorrect = i === q.correctIndex;
                          const isSelected = i === selected;
                          return (
                            <li key={i}>
                              <button
                                type="button" onClick={() => pick(i)}
                                disabled={answered}
                              >
                                <span>{String.fromCharCode(65 + i)}</span>
                                <span>
                                  {opt}
                                </span>
                                {answered && isCorrect && (
                                  <CheckCircle aria-hidden />
                                )}
                                {answered && isSelected && !isCorrect && (
                                  <XCircle aria-hidden />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>

                      {answered && (
                        <p >
                          {q.explanation}
                        </p>
                      )}

                      {answered && index < questions.length - 1 && (
                        <Button onClick={next}>
                          Question suivante
                        </Button>
                      )}
                    </div>
                  </>
                </>
              ) : null}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { BookOpen, CalendarDays } from "lucide-react";
import {
  getCurrentWeeklySlotIndex,
  getWeeklyProgramWeek,
  weeklyScriptureUrl,
} from "@/data/weekly-program";

export function WeeklyMeetingSection() {
  const week = getWeeklyProgramWeek();
  const slotLabel = String.fromCharCode(65 + getCurrentWeeklySlotIndex());

  return (
    <section
      className="space-y-5 rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6"
      aria-label="Programme de la semaine"
    >
      <div>
        <p className="flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
          <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
          Cette semaine · Réunion · Vie chrétienne
        </p>
        <h2 className="text-heading mt-2">{week.title}</h2>
        <p className="text-caption mt-1">
          Rotation {slotLabel} — thème vie chrétienne et étude de la Tour de Garde
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/[0.06] bg-[var(--bg-elevated)] p-4">
          <h3 className="text-sm font-semibold">Vie chrétienne</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            {week.christianLifeTheme}
          </p>
        </div>
        <div className="rounded-xl border border-white/[0.06] bg-[var(--bg-elevated)] p-4">
          <h3 className="text-sm font-semibold">Étude biblique (TG)</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            {week.tgStudyFocus}
          </p>
        </div>
      </div>

      <blockquote className="scripture-block text-base">
        <p>{week.scriptureText}</p>
        <footer className="scripture-ref mt-3 not-italic">
          <Link
            href={weeklyScriptureUrl(week.scriptureRef)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            {week.scriptureRef} — TMN
          </Link>
        </footer>
      </blockquote>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold">Questions de révision</h3>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-secondary)]">
          {week.reviewQuestions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </div>

      <div className="space-y-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold">
          <BookOpen className="h-4 w-4 text-[var(--accent)]" aria-hidden />
          Articles d&apos;étude liés
        </h3>
        <ul className="space-y-2">
          {week.articleLinks.map((link) => (
            <li key={link.articleId}>
              <Link
                href={`/etude/article/${link.articleId}`}
                className="link-primary inline-flex text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

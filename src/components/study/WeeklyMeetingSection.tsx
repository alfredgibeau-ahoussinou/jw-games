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
    <section className="page-section card stack" aria-label="Programme de la semaine">
      <div className="section-header">
        <div>
          <p>
            <CalendarDays aria-hidden />
            Cette semaine · Réunion · Vie chrétienne
          </p>
          <h2>{week.title}</h2>
          <p>
            Rotation {slotLabel} — thème vie chrétienne et étude de la Tour de Garde
          </p>
        </div>
      </div>

      <div className="grid-2">
        <div>
          <h3>Vie chrétienne</h3>
          <p>{week.christianLifeTheme}</p>
        </div>
        <div>
          <h3>Étude biblique (TG)</h3>
          <p>{week.tgStudyFocus}</p>
        </div>
      </div>

      <blockquote>
        <p>{week.scriptureText}</p>
        <footer>
          <Link href={weeklyScriptureUrl(week.scriptureRef)} target="_blank" rel="noopener noreferrer">
            {week.scriptureRef} — TMN
          </Link>
        </footer>
      </blockquote>

      <div className="stack">
        <h3>Questions de révision</h3>
        <ol>
          {week.reviewQuestions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </div>

      <div className="stack">
        <h3>
          <BookOpen aria-hidden />
          Articles d&apos;étude liés
        </h3>
        <ul>
          {week.articleLinks.map((link) => (
            <li key={link.articleId}>
              <Link href={`/etude/article/${link.articleId}`}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import { BookOpen, Newspaper } from "lucide-react";
import type { StudyArticle } from "@/types/study";
import { STUDY_PUBLICATION_LABELS } from "@/types/study";
import { getStudyTheme } from "@/data/study-themes";
import { cn } from "@/lib/cn";

const KIND_STYLE: Record<StudyArticle["kind"], { icon: typeof BookOpen; badge: string }> = {
  "tours-de-garde": {
    icon: BookOpen,
    badge: "bg-amber-500/15 text-amber-200 ring-amber-500/25",
  },
  "reveillez-vous": {
    icon: Newspaper,
    badge: "bg-sky-500/15 text-sky-200 ring-sky-500/25",
  },
  livre: {
    icon: BookOpen,
    badge: "bg-violet-500/15 text-violet-200 ring-violet-500/25",
  },
  brochure: {
    icon: BookOpen,
    badge: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/25",
  },
};

interface StudyArticleViewProps {
  article: StudyArticle;
}

export function StudyArticleView({ article }: StudyArticleViewProps) {
  const style = KIND_STYLE[article.kind];
  const Icon = style.icon;
  const label = STUDY_PUBLICATION_LABELS[article.kind];
  const theme = article.themeId ? getStudyTheme(article.themeId) : undefined;
  const meta = [article.year, article.issue].filter(Boolean).join(" · ");

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 border-b border-white/[0.06] pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-wider ring-1",
              style.badge
            )}
          >
            <Icon className="h-3 w-3" aria-hidden />
            {label}
          </span>
          {meta && <span className="text-caption">{meta}</span>}
          {theme && (
            <Link
              href={`/etude/${theme.id}`}
              className="text-caption ml-auto hover:text-[var(--accent)]"
            >
              Thème : {theme.title}
            </Link>
          )}
        </div>
        <h1 className="text-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          {article.title}
        </h1>
        {article.subtitle && (
          <p className="text-body mt-2 text-lg text-[var(--text-muted)]">{article.subtitle}</p>
        )}
        <p className="text-body mt-4 text-[1.0625rem] font-medium leading-relaxed text-[var(--text)]">
          {article.excerpt}
        </p>
      </header>

      <div className="prose-study space-y-5">
        {article.body.map((paragraph, i) => (
          <p key={i} className="text-body text-[1.0625rem] leading-[1.75] text-[var(--text-muted)]">
            {paragraph}
          </p>
        ))}
      </div>

      {article.scriptureRefs && article.scriptureRefs.length > 0 && (
        <footer className="mt-10 rounded-2xl border border-white/[0.06] bg-[var(--bg-elevated)] p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--text-dim)]">
            Références bibliques
          </h2>
          <div className="flex flex-wrap gap-2">
            {article.scriptureRefs.map((ref) => (
              <span
                key={ref}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-sm font-medium text-[var(--accent)]"
              >
                {ref}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}

import Link from "next/link";
import { BookOpen, ExternalLink, Newspaper } from "lucide-react";
import type { StudyArticle, StudyArticleBlock } from "@/types/study";
import { STUDY_PUBLICATION_LABELS } from "@/types/study";
import { getStudyTheme } from "@/data/study-themes";
import { estimateReadMinutes } from "@/data/study/article-builder";
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

const KIND_INTRO: Record<StudyArticle["kind"], string> = {
  "tours-de-garde": "Étude biblique — style Tours de garde",
  "reveillez-vous": "Étude biblique — style Réveillez-vous !",
  livre: "Étude biblique — style publication",
  brochure: "Étude biblique — style brochure",
};

function ArticleBlock({ block }: { block: StudyArticleBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="text-heading mt-8 text-lg first:mt-0 sm:text-xl">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-6 text-base font-semibold tracking-tight text-[var(--text)]">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="text-body mt-4">
          {block.text}
        </p>
      );
    case "scripture":
      return (
        <blockquote className="scripture-block mt-6 not-italic">
          « {block.text} »
          <footer className="scripture-ref mt-2 block not-italic">{block.ref}</footer>
        </blockquote>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-body"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "question":
      return (
        <div className="mt-6 rounded-xl border border-[var(--accent)]/25 bg-[var(--accent-light)]/40 p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
            Question de méditation
          </p>
          <p className="mt-2 font-medium leading-relaxed text-[var(--text)]">{block.text}</p>
        </div>
      );
    case "note":
      return (
        <div className="mt-6 rounded-xl border border-white/[0.06] bg-[var(--bg-card)] p-4 sm:p-5">
          <p className="text-sm font-semibold text-[var(--text)]">
            {block.title}
          </p>
          <p className="text-body mt-2">
            {block.text}
          </p>
        </div>
      );
    default:
      return null;
  }
}

interface StudyArticleViewProps {
  article: StudyArticle;
}

export function StudyArticleView({ article }: StudyArticleViewProps) {
  const style = KIND_STYLE[article.kind];
  const Icon = style.icon;
  const label = STUDY_PUBLICATION_LABELS[article.kind];
  const theme = article.themeId ? getStudyTheme(article.themeId) : undefined;
  const meta = [article.year, article.issue].filter(Boolean).join(" · ");
  const readMinutes = estimateReadMinutes(article.body);

  return (
    <article className="space-y-8">
      <div className="rounded-xl border border-white/[0.06] bg-[var(--bg-elevated)] px-4 py-3 sm:px-5">
        <p className="text-caption leading-relaxed">
          {KIND_INTRO[article.kind]} · lecture ~{readMinutes} min · texte d&apos;étude original pour{" "}
          <strong className="text-[var(--text-secondary)]">JW Games</strong>, fondé sur la
          Bible. Pour les publications officielles, consultez{" "}
          <a
            href="https://www.jw.org/fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary inline-flex items-center gap-1"
          >
            jw.org
            <ExternalLink className="h-3 w-3" aria-hidden />
          </a>
          .
        </p>
      </div>

      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 gap-y-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
              style.badge
            )}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {label}
          </span>
          {meta && <span className="text-caption">{meta}</span>}
          {theme && (
            <Link
              href={`/etude/${theme.id}`}
              className="link-primary text-sm"
            >
              Thème : {theme.title}
            </Link>
          )}
        </div>
        <h1 className="text-display text-2xl sm:text-3xl">
          {article.title}
        </h1>
        {article.subtitle && (
          <p className="text-lg font-medium text-[var(--text-secondary)]">{article.subtitle}</p>
        )}
        <p className="text-body text-base">
          {article.excerpt}
        </p>
      </header>

      <div className="border-t border-white/[0.06] pt-8">
        {article.body.map((block, i) => (
          <ArticleBlock key={`${block.type}-${i}`} block={block} />
        ))}
      </div>

      {article.studyQuestions && article.studyQuestions.length > 0 && (
        <section className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
          <h2 className="text-heading mb-4">
            Questions pour approfondir votre étude
          </h2>
          <ol className="space-y-3">
            {article.studyQuestions.map((question, i) => (
              <li
                key={question}
                className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-xs font-bold text-[var(--accent)]">
                  {i + 1}
                </span>
                <span className="text-body leading-relaxed">{question}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {article.scriptureRefs && article.scriptureRefs.length > 0 && (
        <footer className="rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] p-5 sm:p-6">
          <h2 className="text-heading mb-4">
            Références bibliques à lire
          </h2>
          <div className="flex flex-wrap gap-2">
            {article.scriptureRefs.map((ref) => (
              <span
                key={ref}
                className="inline-flex items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent-light)] px-3 py-1 text-xs font-semibold text-[var(--accent)]"
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

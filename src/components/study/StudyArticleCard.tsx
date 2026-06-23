import Link from "next/link";
import { ArrowUpRight, BookOpen, Newspaper } from "lucide-react";
import type { StudyArticle } from "@/types/study";
import { STUDY_PUBLICATION_LABELS } from "@/types/study";
import { cn } from "@/lib/cn";

const KIND_STYLE: Record<
  StudyArticle["kind"],
  { icon: typeof BookOpen; badge: string; ring: string }
> = {
  "tours-de-garde": {
    icon: BookOpen,
    badge: "bg-amber-500/15 text-amber-200 ring-amber-500/25",
    ring: "hover:border-amber-500/30",
  },
  "reveillez-vous": {
    icon: Newspaper,
    badge: "bg-sky-500/15 text-sky-200 ring-sky-500/25",
    ring: "hover:border-sky-500/30",
  },
  livre: {
    icon: BookOpen,
    badge: "bg-violet-500/15 text-violet-200 ring-violet-500/25",
    ring: "hover:border-violet-500/30",
  },
  brochure: {
    icon: BookOpen,
    badge: "bg-emerald-500/15 text-emerald-200 ring-emerald-500/25",
    ring: "hover:border-emerald-500/30",
  },
};

interface StudyArticleCardProps {
  article: StudyArticle;
  compact?: boolean;
}

export function StudyArticleCard({ article, compact }: StudyArticleCardProps) {
  const style = KIND_STYLE[article.kind];
  const Icon = style.icon;
  const label = STUDY_PUBLICATION_LABELS[article.kind];
  const meta = [article.year, article.issue].filter(Boolean).join(" · ");
  const readMinutes = Math.max(2, Math.ceil(article.body.length * 0.8));

  return (
    <Link
      href={`/etude/article/${article.id}`}
      className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <article
        className={cn(
          "flex h-full flex-col rounded-2xl border border-white/[0.06] bg-[var(--bg-card)] transition-all",
          style.ring,
          compact ? "p-4" : "p-5 sm:p-6"
        )}
      >
        <div className="mb-3 flex flex-wrap items-center gap-2">
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
          <span className="text-caption ml-auto">~{readMinutes} min</span>
        </div>
        <h3 className={cn("font-semibold tracking-tight", compact ? "text-sm" : "text-base")}>
          {article.title}
        </h3>
        {article.subtitle && (
          <p className="text-caption mt-0.5">{article.subtitle}</p>
        )}
        <p
          className={cn(
            "mt-3 flex-1 text-[var(--text-muted)] leading-relaxed",
            compact ? "line-clamp-4 text-[0.8125rem]" : "line-clamp-3 text-[0.9375rem]"
          )}
        >
          {article.excerpt}
        </p>
        <p className="mt-4 flex items-center gap-1.5 text-[0.8125rem] font-medium text-[var(--accent)]">
          Lire l&apos;article
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </p>
      </article>
    </Link>
  );
}

/** @deprecated utilisez StudyArticleCard */
export const StudyPublicationCard = StudyArticleCard;

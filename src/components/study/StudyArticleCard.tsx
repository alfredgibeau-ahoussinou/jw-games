"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, CheckCircle2, Newspaper } from "lucide-react";
import type { StudyArticle } from "@/types/study";
import { STUDY_PUBLICATION_LABELS } from "@/types/study";
import { estimateReadMinutes } from "@/data/study/article-builder";
import { jwImageForArticle } from "@/lib/jw-images";
import { isArticleRead } from "@/lib/study-progress";
import { useUserStore } from "@/stores/user-store";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/cn";

const KIND_CLASS: Record<StudyArticle["kind"], string> = {
  "tours-de-garde": "article-card__badge--tg",
  "reveillez-vous": "article-card__badge--awake",
  livre: "article-card__badge--book",
  brochure: "article-card__badge--brochure",
};

interface StudyArticleCardProps {
  article: StudyArticle;
  compact?: boolean;
}

export function StudyArticleCard({ article, compact }: StudyArticleCardProps) {
  const studyProgress = useUserStore((s) => s.studyProgress);
  const read = isArticleRead(studyProgress, article.id);
  const label = STUDY_PUBLICATION_LABELS[article.kind];
  const meta = [article.year, article.issue].filter(Boolean).join(" · ");
  const readMinutes = estimateReadMinutes(article.body);
  const thumb = jwImageForArticle(article.id);

  return (
    <Link href={`/etude/article/${article.id}`} className="article-card-link">
      <article className={cn("article-card", compact && "article-card--compact")}>
        {thumb && (
          <div className="article-card__thumb">
            <SafeImage src={thumb.url} alt="" fill sizes="160px" frameClassName="media-frame--fill" />
          </div>
        )}
        <div className="article-card__body">
          <div className="article-card__meta">
            <span className={cn("article-card__badge", KIND_CLASS[article.kind])}>{label}</span>
            {read && (
              <span className="article-card__read">
                <CheckCircle2 aria-hidden />
                Lu
              </span>
            )}
            {meta && <span>{meta}</span>}
            <span>~{readMinutes} min</span>
          </div>
          <h3>{article.title}</h3>
          {article.subtitle && <p className="article-card__subtitle">{article.subtitle}</p>}
          {!compact && <p className="article-card__excerpt">{article.excerpt}</p>}
          <p className="article-card__cta">
            {read ? "Relire" : "Lire l'article"}
            <ArrowUpRight aria-hidden />
          </p>
        </div>
      </article>
    </Link>
  );
}

/** @deprecated utilisez StudyArticleCard */
export const StudyPublicationCard = StudyArticleCard;

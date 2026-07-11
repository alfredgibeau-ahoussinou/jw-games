"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BookMarked } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { jwImageForSlot } from "@/lib/jw-images";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { STUDY_ARTICLES } from "@/data/study/articles";
import { STUDY_PUBLICATION_LABELS, type StudyPublicationKind } from "@/types/study";
import { isArticleRead } from "@/lib/study-progress";
import { useUserStore } from "@/stores/user-store";
import { SegmentTabs } from "@/components/ui/SegmentTabs";

const SECTIONS: StudyPublicationKind[] = [
  "tours-de-garde",
  "reveillez-vous",
  "livre",
  "brochure",
];

type ArticleFilter = "all" | "unread" | "read";

const FILTERS: { id: ArticleFilter; label: string }[] = [
  { id: "all", label: "Tous" },
  { id: "unread", label: "À lire" },
  { id: "read", label: "Lus" },
];

export function StudyArticlesIndexContent() {
  const studyProgress = useUserStore((s) => s.studyProgress);
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter");
  const [filter, setFilter] = useState<ArticleFilter>(
    initialFilter === "unread" || initialFilter === "read" ? initialFilter : "all"
  );

  useEffect(() => {
    const q = searchParams.get("filter");
    if (q === "unread" || q === "read") setFilter(q);
  }, [searchParams]);

  const readCount = studyProgress.readArticleIds.length;

  const filteredArticles = useMemo(() => {
    return STUDY_ARTICLES.filter((article) => {
      const read = isArticleRead(studyProgress, article.id);
      if (filter === "read") return read;
      if (filter === "unread") return !read;
      return true;
    });
  }, [filter, studyProgress]);

  return (
    <PageWrapper>
      <StudioPageShell>
        <PageHeader
          title="Bibliothèque"
          titleAccent="d'étude"
          description={`${STUDY_ARTICLES.length} études · ${readCount} lues`}
          backHref="/etude"
          backLabel="Étude personnelle"
          icon={BookMarked}
          heroImage={jwImageForSlot("hero.etude").url}
          heroImageAlt={jwImageForSlot("hero.etude").alt}
          eyebrow="Articles"
        />

        <StudioPageBody>

        <SegmentTabs
          items={FILTERS}
          value={filter}
          onChange={setFilter}
          ariaLabel="Filtrer les articles"
        />

        {filteredArticles.length === 0 ? (
          <p>
            {filter === "unread"
              ? "Vous avez lu tous les articles de ce filtre. Bravo !"
              : "Aucun article dans ce filtre."}
          </p>
        ) : (
          <div>
            {SECTIONS.map((kind) => {
              const articles = filteredArticles.filter((a) => a.kind === kind);
              if (articles.length === 0) return null;
              return (
                <section key={kind} aria-label={STUDY_PUBLICATION_LABELS[kind]}>
                  <h2>
                    {STUDY_PUBLICATION_LABELS[kind]} ({articles.length})
                  </h2>
                  <div>
                    {articles.map((article) => (
                      <StudyArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}

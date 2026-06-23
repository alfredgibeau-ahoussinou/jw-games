"use client";

import { BookMarked } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { STUDY_ARTICLES } from "@/data/study/articles";
import { STUDY_PUBLICATION_LABELS, type StudyPublicationKind } from "@/types/study";

const SECTIONS: StudyPublicationKind[] = [
  "tours-de-garde",
  "reveillez-vous",
  "livre",
  "brochure",
];

export default function StudyArticlesIndexPage() {
  return (
    <PageWrapper>
      <div className="container-app pb-12">
        <PageHeader
          title="Bibliothèque d'étude"
          description={`${STUDY_ARTICLES.length} articles à lire sur le site`}
          backHref="/etude"
          backLabel="Étude personnelle"
          icon={BookMarked}
        />

        <div className="space-y-12">
          {SECTIONS.map((kind) => {
            const articles = STUDY_ARTICLES.filter((a) => a.kind === kind);
            if (articles.length === 0) return null;
            return (
              <section key={kind} aria-label={STUDY_PUBLICATION_LABELS[kind]}>
                <h2 className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-dim)]">
                  {STUDY_PUBLICATION_LABELS[kind]} ({articles.length})
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <StudyArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}

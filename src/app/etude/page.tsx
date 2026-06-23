"use client";

import Link from "next/link";
import { BookMarked, Sparkles } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudyThemeCard } from "@/components/study/StudyThemeCard";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { STUDY_ARTICLES } from "@/data/study/articles";
import { getFeaturedArticles, STUDY_THEMES } from "@/data/study-themes";
import { Button } from "@/components/ui/Button";

export default function EtudePage() {
  const totalGames = STUDY_THEMES.reduce((n, t) => n + t.miniGames.length, 0);
  const totalReadings = STUDY_THEMES.reduce((n, t) => n + (t.readings?.length ?? 0), 0);
  const featured = getFeaturedArticles(6);

  return (
    <PageWrapper>
      <div className="container-app pb-12">
        <PageHeader
          title="Étude personnelle"
          description={`${STUDY_THEMES.length} thématiques · ${STUDY_ARTICLES.length} articles · ${totalGames} mini-jeux · ${totalReadings} méditations`}
          icon={BookMarked}
        >
          <Link href="/etude/articles">
            <Button variant="outline" size="sm">
              Tous les articles
            </Button>
          </Link>
        </PageHeader>

        <section className="mb-10 rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent-light)] p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                <Sparkles className="h-4 w-4" aria-hidden />
                Comment ça marche
              </p>
              <p className="text-body text-[0.9375rem]">
                Choisissez une thématique, lisez les articles des{" "}
                <strong className="font-semibold text-[var(--text)]">Tours de garde</strong> et de{" "}
                <strong className="font-semibold text-[var(--text)]">Réveillez-vous !</strong>{" "}
                directement ici, puis ancrez ce que vous avez appris avec les mini-jeux.
              </p>
            </div>
            <p className="text-caption shrink-0 rounded-xl border border-white/[0.08] bg-[var(--bg-card)] px-4 py-3">
              +{15} XP par bonne réponse
            </p>
          </div>
        </section>

        {featured.length > 0 && (
          <section className="mb-10" aria-label="Articles à lire">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-heading text-lg">Articles à lire</h2>
                <p className="text-caption mt-1">
                  Tours de garde, Réveillez-vous ! et livres — lus sur le site
                </p>
              </div>
              <Link href="/etude/articles" className="link-primary shrink-0 text-sm">
                Voir tout
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((article) => (
                <StudyArticleCard key={article.id} article={article} compact />
              ))}
            </div>
          </section>
        )}

        <section aria-label="Thématiques d'étude">
          <h2 className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-dim)]">
            Thématiques ({STUDY_THEMES.length})
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STUDY_THEMES.map((theme) => (
              <StudyThemeCard key={theme.id} theme={theme} />
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

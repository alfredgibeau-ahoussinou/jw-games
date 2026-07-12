"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { StudyArticleView } from "@/components/study/StudyArticleView";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { Button } from "@/components/ui/Button";
import { getStudyTheme, getThemeArticles } from "@/data/study-themes";
import { getStudyArticle } from "@/data/study/articles";
import { getNextPathStep } from "@/lib/study-paths";
import { isArticleRead } from "@/lib/study-progress";
import type { StudyArticle } from "@/types/study";
import { useUserStore } from "@/stores/user-store";

interface StudyArticlePageContentProps {
  article: StudyArticle;
}

export function StudyArticlePageContent({ article }: StudyArticlePageContentProps) {
  const profile = useUserStore((s) => s.profile);
  const studyProgress = useUserStore((s) => s.studyProgress);
  const openStudyArticle = useUserStore((s) => s.openStudyArticle);
  const markStudyArticleRead = useUserStore((s) => s.markStudyArticleRead);

  const endRef = useRef<HTMLDivElement>(null);
  const read = isArticleRead(studyProgress, article.id);

  useEffect(() => {
    openStudyArticle(article.id, article.themeId);
  }, [article.id, article.themeId, openStudyArticle]);

  useEffect(() => {
    if (read || !endRef.current) return;
    const node = endRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) markStudyArticleRead(article.id);
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [article.id, markStudyArticleRead, read]);

  const theme = article.themeId ? getStudyTheme(article.themeId) : undefined;
  const related = theme
    ? getThemeArticles(theme.id).filter((a) => a.id !== article.id)
    : [];

  const nextStep = getNextPathStep(
    profile?.preferences,
    studyProgress.currentPathWeek,
    studyProgress.readArticleIds
  );
  const nextArticle = nextStep ? getStudyArticle(nextStep.articleId) : null;

  return (
    <PageWrapper>
      <StudioPageShell>
        <PageHeader
          title={article.title}
          description={theme?.title ?? "Étude personnelle"}
          backHref={theme ? `/etude/${theme.id}` : "/etude"}
          backLabel={theme ? theme.title : "Étude personnelle"}
          eyebrow="Article"
        />

        <StudioPageBody narrow className="space-y-8">
          {read && (
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--success-bg)] px-4 py-2 text-sm font-medium text-[var(--success-text)]">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              Article marqué comme lu
            </div>
          )}

          <StudyArticleView article={article} />

          <div ref={endRef}>
            {!read && (
              <Button variant="outline" onClick={() => markStudyArticleRead(article.id)}>
                Marquer comme lu
              </Button>
            )}
          </div>

          {read && nextArticle && nextArticle.id !== article.id && (
            <div className="rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-light)] p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                Prochaine étape du parcours
              </p>
              <p className="mt-1 font-semibold">{nextArticle.title}</p>
              <Link href={`/etude/article/${nextArticle.id}`} className="mt-3 inline-block">
                <Button size="sm">Continuer la lecture</Button>
              </Link>
            </div>
          )}

          {theme && (
            <div className="flex flex-wrap gap-3">
              <Link href={`/etude/${theme.id}`}>
                <Button variant="outline" size="sm">
                  Retour à la thématique
                </Button>
              </Link>
              {theme.miniGames[0] && (
                <Link href={`/etude/${theme.id}/${theme.miniGames[0].id}`}>
                  <Button size="sm">Mini-jeu associé</Button>
                </Link>
              )}
            </div>
          )}

          {related.length > 0 && (
            <section aria-label="Articles liés" className="space-y-4">
              <h2 className="text-heading">À lire aussi</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((a) => (
                  <StudyArticleCard key={a.id} article={a} compact />
                ))}
              </div>
            </section>
          )}
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}

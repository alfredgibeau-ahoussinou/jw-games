"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { StudyArticleView } from "@/components/study/StudyArticleView";
import { StudyArticleCard } from "@/components/study/StudyArticleCard";
import { Button } from "@/components/ui/Button";
import { getStudyArticle, getStudyTheme, getThemeArticles } from "@/data/study-themes";

export default function StudyArticlePage() {
  const params = useParams<{ articleId: string }>();
  const article = getStudyArticle(params.articleId);
  if (!article) notFound();

  const theme = article.themeId ? getStudyTheme(article.themeId) : undefined;
  const related = theme
    ? getThemeArticles(theme.id).filter((a) => a.id !== article.id)
    : [];

  return (
    <PageWrapper>
      <div className="container-app pb-12">
        <PageHeader
          title="Article"
          description={theme?.title ?? "Étude personnelle"}
          backHref={theme ? `/etude/${theme.id}` : "/etude"}
          backLabel={theme ? theme.title : "Étude personnelle"}
        />

        <StudyArticleView article={article} />

        {theme && (
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-3">
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
          <section className="mx-auto mt-14 max-w-5xl" aria-label="Articles liés">
            <h2 className="text-heading mb-4 text-lg">À lire aussi</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((a) => (
                <StudyArticleCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </PageWrapper>
  );
}

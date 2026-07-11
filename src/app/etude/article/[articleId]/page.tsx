import { notFound } from "next/navigation";
import { StudyArticlePageContent } from "@/components/study/StudyArticlePageContent";
import { getAllArticleIds, getStudyArticle } from "@/data/study/articles";

export function generateStaticParams() {
  return getAllArticleIds().map((articleId) => ({ articleId }));
}

export default async function StudyArticlePage({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;
  const article = getStudyArticle(articleId);
  if (!article) notFound();

  return <StudyArticlePageContent article={article} />;
}

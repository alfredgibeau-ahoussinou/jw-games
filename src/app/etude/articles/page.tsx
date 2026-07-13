import { Suspense } from "react";
import { StudyArticlesIndexContent } from "@/components/study/StudyArticlesIndexContent";

export default function StudyArticlesIndexPage() {
  return (
    <Suspense
      fallback={
        <div className="page-shell container-app flex min-h-[40vh] items-center justify-center">
          <p className="text-caption animate-pulse">Chargement de la bibliothèque…</p>
        </div>
      }
    >
      <StudyArticlesIndexContent />
    </Suspense>
  );
}

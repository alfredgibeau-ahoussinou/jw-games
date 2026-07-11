import { Suspense } from "react";
import { StudyArticlesIndexContent } from "@/components/study/StudyArticlesIndexContent";

export default function StudyArticlesIndexPage() {
  return (
    <Suspense
      fallback={
        <div>
          Chargement de la bibliothèque…
        </div>
      }
    >
      <StudyArticlesIndexContent />
    </Suspense>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import { MediathequeContent } from "./MediathequeContent";

export const metadata: Metadata = {
  title: "Médiathèque",
};

export default function MediathequePage() {
  return (
    <Suspense
      fallback={
        <div className="container-app flex min-h-[40vh] items-center justify-center py-16 text-sm text-[var(--text-muted)]">
          Chargement de la médiathèque…
        </div>
      }
    >
      <MediathequeContent />
    </Suspense>
  );
}

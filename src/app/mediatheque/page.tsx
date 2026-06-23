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
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-[var(--text-muted)]">
          Chargement de la médiathèque…
        </div>
      }
    >
      <MediathequeContent />
    </Suspense>
  );
}

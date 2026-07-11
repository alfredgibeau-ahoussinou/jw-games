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
        <div>
          Chargement de la médiathèque…
        </div>
      }
    >
      <MediathequeContent />
    </Suspense>
  );
}

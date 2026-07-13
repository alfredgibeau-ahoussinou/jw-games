"use client";

import { PageWrapper } from "@/components/motion/PageWrapper";
import { HeroBanner } from "@/components/media/HeroBanner";
import { MediaRow, VideoPoster } from "@/components/media/MediaRow";
import { JW_VIDEO_COLLECTIONS, JW_VIDEOS } from "@/data/jw-videos";
import { useUserStore } from "@/stores/user-store";

const heroVideo = JW_VIDEOS.find((v) => v.category === "enfants") ?? JW_VIDEOS[0];

export function MediathequeContent() {
  const watchedVideoIds = useUserStore((s) => s.profile?.watchedVideos);

  return (
    <PageWrapper>
      <div className="container-app pb-2 pt-1 lg:hidden">
        <h1 className="text-2xl font-bold tracking-tight">Médiathèque</h1>
        <p className="text-caption mt-1">Vidéos officielles · {JW_VIDEOS.length} titres</p>
      </div>
      <HeroBanner video={heroVideo} compact />

      <div className="relative z-10 pb-10 pt-2">
        {JW_VIDEO_COLLECTIONS.map((collection) => (
          <MediaRow key={collection.id} title={collection.title} externalHref={collection.jwPageUrl}>
            {collection.videos.map((video) => (
              <VideoPoster
                key={`${collection.id}-${video.id}`}
                video={video}
                watched={watchedVideoIds?.includes(video.id)}
                href={`/mediatheque/${video.id}`}
              />
            ))}
          </MediaRow>
        ))}
      </div>
    </PageWrapper>
  );
}

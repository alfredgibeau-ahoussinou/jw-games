"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { HeroBanner } from "@/components/media/HeroBanner";
import { MediaRow, VideoPoster } from "@/components/media/MediaRow";
import { JwVideoPlayer } from "@/components/media/JwVideoPlayer";
import { VideoMiniQuiz } from "@/components/media/VideoMiniQuiz";
import { Button } from "@/components/ui/Button";
import { JW_VIDEO_COLLECTIONS, JW_VIDEOS } from "@/data/jw-videos";
import { useUserStore } from "@/stores/user-store";
import { ExternalLink, X, HelpCircle } from "lucide-react";
import Link from "next/link";
import { getVideoQuestions, hasVideoQuiz } from "@/data/video-questions";

export function MediathequeContent() {
  const searchParams = useSearchParams();
  const [activeId, setActiveId] = useState<string | null>(null);
  const watchVideo = useUserStore((s) => s.watchVideo);
  const watchedVideoIds = useUserStore((s) => s.profile?.watchedVideos);
  const active = JW_VIDEOS.find((v) => v.id === activeId);
  const heroVideo = active ?? JW_VIDEOS.find((v) => v.category === "enfants") ?? JW_VIDEOS[0];

  useEffect(() => {
    const videoParam = searchParams.get("video");
    if (videoParam && JW_VIDEOS.some((v) => v.id === videoParam)) {
      setActiveId(videoParam);
    }
  }, [searchParams]);

  return (
    <PageWrapper>
      {!active && (
        <>
          <div className="container-app pb-2 pt-1 lg:hidden">
            <h1 className="text-2xl font-bold tracking-tight">Médiathèque</h1>
            <p className="text-caption mt-1">Vidéos officielles · {JW_VIDEOS.length} titres</p>
          </div>
          <HeroBanner video={heroVideo} onPlay={() => setActiveId(heroVideo.id)} compact />
        </>
      )}

      <div className="relative z-10 pb-10 pt-2">
        {active && (
          <section key={active.id} className="container-app mb-8">
            <div className="video-player-panel">
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-4 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold tracking-tight">{active.title}</p>
                  {hasVideoQuiz(active) && (
                    <p className="text-caption mt-0.5 flex items-center gap-1.5">
                      <HelpCircle className="h-3.5 w-3.5 text-[var(--accent)]" />
                      {getVideoQuestions(active).length} question{getVideoQuestions(active).length > 1 ? "s" : ""} liée{getVideoQuestions(active).length > 1 ? "s" : ""} à cette vidéo
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="shrink-0 rounded-lg p-2 hover:bg-white/10"
                  aria-label="Fermer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <JwVideoPlayer
                video={active}
                autoPlay
                onWatched={() => watchVideo(active.id)}
                className="video-shell--featured video-shell--flat"
              />

              <VideoMiniQuiz video={active} />

              <div className="flex flex-wrap gap-3 border-t border-white/10 bg-black p-4">
                <Link href={active.jwPageUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    JW.org
                  </Button>
                </Link>
                <Link href="/jeux/video-quiz">
                  <Button size="sm">Mode quiz vidéo</Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {JW_VIDEO_COLLECTIONS.map((collection) => (
          <MediaRow key={collection.id} title={collection.title} externalHref={collection.jwPageUrl}>
            {collection.videos.map((video) => (
              <VideoPoster
                key={`${collection.id}-${video.id}`}
                video={video}
                watched={watchedVideoIds?.includes(video.id)}
                onClick={() => setActiveId(video.id)}
              />
            ))}
          </MediaRow>
        ))}
      </div>
    </PageWrapper>
  );
}

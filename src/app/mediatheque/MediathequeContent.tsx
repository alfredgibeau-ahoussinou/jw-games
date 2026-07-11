"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { StudioPageHero } from "@/components/studio/StudioPageHero";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { MediaRow, VideoPoster } from "@/components/media/MediaRow";
import { JwVideoPlayer } from "@/components/media/JwVideoPlayer";
import { VideoMiniQuiz } from "@/components/media/VideoMiniQuiz";
import { Button } from "@/components/ui/Button";
import { JW_VIDEO_COLLECTIONS, JW_VIDEOS } from "@/data/jw-videos";
import { posterForVideo } from "@/lib/game-posters";
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
      <StudioPageShell>
        {!active && (
          <StudioPageHero
            eyebrow="Médiathèque"
            title="Vidéos"
            titleAccent="officielles"
            description={`${JW_VIDEOS.length} titres JW.org · quiz associés · sans publicité`}
            imageSrc={posterForVideo(heroVideo)}
          />
        )}

        <StudioPageBody>
        {active && (
          <section key={active.id}>
            <div>
              <div>
                <div>
                  <p>{active.title}</p>
                  {hasVideoQuiz(active) && (
                    <p>
                      <HelpCircle />
                      {getVideoQuestions(active).length} question{getVideoQuestions(active).length > 1 ? "s" : ""} liée{getVideoQuestions(active).length > 1 ? "s" : ""} à cette vidéo
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  aria-label="Fermer"
                >
                  <X />
                </button>
              </div>

              <JwVideoPlayer
                video={active}
                autoPlay
                onWatched={() => watchVideo(active.id)}
              />

              <VideoMiniQuiz video={active} />

              <div>
                <Link href={active.jwPageUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink aria-hidden />
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
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}

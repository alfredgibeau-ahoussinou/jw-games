"use client";

import Link from "next/link";
import { ExternalLink, HelpCircle } from "lucide-react";
import { PageWrapper } from "@/components/motion/PageWrapper";
import { PageHeader } from "@/components/layout/PageHeader";
import { JwVideoPlayer } from "@/components/media/JwVideoPlayer";
import { VideoMiniQuiz } from "@/components/media/VideoMiniQuiz";
import { StudioPageBody, StudioPageShell } from "@/components/studio/StudioPageShell";
import { Button } from "@/components/ui/Button";
import type { JwVideo } from "@/data/jw-videos";
import { VIDEO_CATEGORY_LABELS } from "@/data/jw-videos";
import { getVideoQuestions, hasVideoQuiz } from "@/data/video-questions";
import { useUserStore } from "@/stores/user-store";

interface VideoPageContentProps {
  video: JwVideo;
}

export function VideoPageContent({ video }: VideoPageContentProps) {
  const watchVideo = useUserStore((s) => s.watchVideo);
  const questionCount = getVideoQuestions(video).length;

  return (
    <PageWrapper>
      <StudioPageShell className="pb-10 pt-4">
        <PageHeader
          title={video.title}
          description={video.description}
          backHref="/mediatheque"
          backLabel="Retour aux vidéos"
          eyebrow={VIDEO_CATEGORY_LABELS[video.category]}
        />

        <StudioPageBody className="space-y-6">
          <div className="video-player-panel">
            {hasVideoQuiz(video) && (
              <div className="border-b border-white/[0.08] px-4 py-3 sm:px-5">
                <p className="text-caption flex items-center gap-1.5">
                  <HelpCircle className="h-3.5 w-3.5 text-[var(--accent)]" />
                  {questionCount} question{questionCount > 1 ? "s" : ""} liée{questionCount > 1 ? "s" : ""} à cette vidéo
                </p>
              </div>
            )}

            <JwVideoPlayer
              video={video}
              autoPlay
              onWatched={() => watchVideo(video.id)}
              className="video-shell--featured video-shell--flat"
            />

            <VideoMiniQuiz video={video} />

            <div className="flex flex-wrap gap-3 border-t border-white/10 bg-black p-4">
              <Link href={video.jwPageUrl} target="_blank" rel="noopener noreferrer">
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
        </StudioPageBody>
      </StudioPageShell>
    </PageWrapper>
  );
}

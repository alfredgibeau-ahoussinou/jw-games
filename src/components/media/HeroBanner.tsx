"use client";

import Link from "next/link";

import { Play, Info } from "lucide-react";
import type { JwVideo } from "@/data/jw-videos";
import { posterForVideo } from "@/lib/game-posters";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";

interface HeroBannerProps {
  video: JwVideo;
  onPlay?: () => void;
  compact?: boolean;
}

export function HeroBanner({ video, onPlay, compact }: HeroBannerProps) {
  const poster = posterForVideo(video);

  return (
    <section
    >
      <SafeImage src={poster} alt="" fill priority sizes="100vw" />
      <div
      />
      <div
      />

      <div
      >
        <p
        >
          À la une
        </p>
        <h1
        >
          {video.title}
        </h1>
        <p
        >
          {video.description}
        </p>
        <div
        >
          {onPlay ? (
            <button
              type="button"
              onClick={onPlay}
            >
              <Play aria-hidden />
              Lecture
            </button>
          ) : (
            <Link href={`/mediatheque?video=${video.id}`}>
              <span>
                <Play aria-hidden />
                Lecture
              </span>
            </Link>
          )}
          <Link href="/mediatheque">
            <Button
              variant="secondary"
              size="lg"
            >
              <Info aria-hidden />
              Catalogue
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

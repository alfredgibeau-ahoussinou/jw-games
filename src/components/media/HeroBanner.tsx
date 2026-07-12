"use client";

import Link from "next/link";
import { Play, Info } from "lucide-react";
import type { JwVideo } from "@/data/jw-videos";
import { posterForVideo } from "@/lib/game-posters";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

interface HeroBannerProps {
  video: JwVideo;
  onPlay?: () => void;
  compact?: boolean;
}

export function HeroBanner({ video, onPlay, compact }: HeroBannerProps) {
  const poster = posterForVideo(video);

  return (
    <section className="hero-banner relative w-full max-lg:-mt-[calc(3.5rem+0.5rem+var(--safe-top))] lg:-mt-[calc(5.25rem+1.75rem+var(--safe-top))]">
      <SafeImage src={poster} alt="" fill priority className="hero-banner__bg object-cover" sizes="100vw" />
      <div className="hero-banner__gradient" />
      <div className="hero-banner__gradient-side hidden md:block" />

      <div
        className={cn(
          "relative z-10 flex flex-col justify-end px-4 pb-10 pt-20 sm:pb-16 sm:pt-32 md:px-10 md:pb-20",
          compact
            ? "min-h-[52vh] sm:min-h-[58vh] max-lg:min-h-[28vh] max-lg:pb-8 max-lg:pt-14"
            : "min-h-[52vh] sm:min-h-[58vh]"
        )}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">À la une</p>
        <h1 className="max-w-2xl text-display drop-shadow-lg">{video.title}</h1>
        <p className="mt-3 max-w-lg text-body line-clamp-3">{video.description}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {onPlay ? (
            <button
              type="button"
              onClick={onPlay}
              className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-zinc-900 shadow-lg transition-colors hover:bg-white/90 sm:min-w-[8.5rem] sm:w-auto"
            >
              <Play className="h-5 w-5 shrink-0 fill-zinc-900" aria-hidden />
              Lecture
            </button>
          ) : (
            <Link href={`/mediatheque?video=${video.id}`} className="w-full sm:w-auto">
              <span className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-base font-semibold text-zinc-900 shadow-lg transition-colors hover:bg-white/90 sm:min-w-[8.5rem]">
                <Play className="h-5 w-5 shrink-0 fill-zinc-900" aria-hidden />
                Lecture
              </span>
            </Link>
          )}
          <Link href="/mediatheque" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full min-h-12 border border-white/20 bg-white/15 text-white backdrop-blur hover:bg-white/25 sm:min-w-[8rem]">
              <Info className="h-5 w-5" aria-hidden />
              Catalogue
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

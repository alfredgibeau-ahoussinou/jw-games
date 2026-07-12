"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import type { JwVideo } from "@/data/jw-videos";
import { formatDuration } from "@/data/jw-videos";
import { posterForVideo } from "@/lib/game-posters";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/cn";

interface MediaRowProps {
  title: string;
  href?: string;
  externalHref?: string;
  children: React.ReactNode;
  className?: string;
}

function RowTitle({ title, href, externalHref }: { title: string; href?: string; externalHref?: string }) {
  if (externalHref) {
    return (
      <a href={externalHref} target="_blank" rel="noopener noreferrer" className="media-row__title hover:text-[var(--accent)]">
        {title} ↗
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className="media-row__title hover:text-[var(--accent)]">
        {title} →
      </Link>
    );
  }
  return <h2 className="media-row__title">{title}</h2>;
}

export function MediaRow({ title, href, externalHref, children, className }: MediaRowProps) {
  return (
    <section className={cn("media-row", className)}>
      <div className="media-row__header">
        <RowTitle title={title} href={href} externalHref={externalHref} />
      </div>
      <div className="media-row__scroll">{children}</div>
    </section>
  );
}

interface VideoPosterProps {
  video: JwVideo;
  onClick?: () => void;
  href?: string;
  watched?: boolean;
}

export function VideoPoster({ video, onClick, href, watched }: VideoPosterProps) {
  const poster = posterForVideo(video);

  const cardClass = cn(
    "poster-card poster-card--video group block shrink-0 text-left",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
  );

  const inner = (
    <article className="poster-card--video__inner">
      <div className="poster-card--video__thumb">
        <SafeImage
          src={poster}
          alt=""
          fill
          className="object-cover transition-transform duration-300 group-active:scale-[1.02]"
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 240px, 280px"
        />
        {watched && (
          <span className="poster-card--video__badge poster-card--video__badge--watched">Vu</span>
        )}
        <div className="poster-card--video__overlay" aria-hidden>
          <span className="poster-card--video__play">
            <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
          </span>
        </div>
        {video.durationSeconds ? (
          <span className="poster-card--video__duration">{formatDuration(video.durationSeconds)}</span>
        ) : null}
      </div>
      <p className="poster-card--video__title">{video.title}</p>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cardClass}>
      {inner}
    </button>
  );
}

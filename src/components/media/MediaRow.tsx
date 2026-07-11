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
      <a href={externalHref} target="_blank" rel="noopener noreferrer" className="netflix-row-title">
        {title} ↗
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className="netflix-row-title">
        {title} →
      </Link>
    );
  }
  return <h2 className="netflix-row-title">{title}</h2>;
}

export function MediaRow({ title, href, externalHref, children, className }: MediaRowProps) {
  return (
    <section className={cn("netflix-row", className)}>
      <RowTitle title={title} href={href} externalHref={externalHref} />
      <div className="netflix-row__track scroll-row">{children}</div>
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

  const inner = (
    <>
      <article>
        <div className="netflix-tile__media">
          <SafeImage
            src={poster}
            alt=""
            fill
            sizes="(max-width: 640px) 75vw, (max-width: 1024px) 240px, 320px"
          />
          {watched && <span className="netflix-tile__watched">Vu</span>}
          <div className="netflix-tile__play" aria-hidden>
            <span>
              <Play fill="currentColor" />
            </span>
          </div>
          {video.durationSeconds ? (
            <span className="netflix-tile__duration">{formatDuration(video.durationSeconds)}</span>
          ) : null}
        </div>
      </article>
      <p className="netflix-tile__title">{video.title}</p>
    </>
  );

  const className = "netflix-tile netflix-tile--video";

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {inner}
    </button>
  );
}

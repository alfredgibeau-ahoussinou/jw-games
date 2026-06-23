"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  Maximize2,
  AlertCircle,
  Subtitles,
} from "lucide-react";
import type { JwVideo } from "@/data/jw-videos";
import { formatDuration } from "@/data/jw-videos";
import { useVideoSubtitles } from "@/hooks/useVideoSubtitles";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

interface JwVideoPlayerProps {
  video: JwVideo;
  autoPlay?: boolean;
  onWatched?: () => void;
  className?: string;
}

function formatPlaybackTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const total = Math.floor(seconds);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

export function JwVideoPlayer({ video, autoPlay = false, onWatched, className }: JwVideoPlayerProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [watched, setWatched] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [ready, setReady] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(true);
  const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { subtitleUrl } = useVideoSubtitles(video);
  const hasSubtitles = Boolean(subtitleUrl);

  const syncSubtitleTrack = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    for (let i = 0; i < el.textTracks.length; i++) {
      el.textTracks[i].mode = subtitlesOn && subtitleUrl ? "showing" : "hidden";
    }
  }, [subtitlesOn, subtitleUrl]);

  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setWatched(false);
    setLoadError(false);
    setReady(false);
    setMuted(autoPlay);
    setSubtitlesOn(true);

    const el = ref.current;
    if (!el) return;

    el.load();

    if (!autoPlay) return;

    el.muted = true;
    void el.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [video.id, autoPlay]);

  useEffect(() => {
    syncSubtitleTrack();
  }, [syncSubtitleTrack, ready, subtitleUrl]);

  useEffect(() => {
    return () => {
      if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    };
  }, []);

  function revealControls(autoHide = true) {
    setControlsVisible(true);
    if (hideControlsTimer.current) clearTimeout(hideControlsTimer.current);
    if (autoHide && playing) {
      hideControlsTimer.current = setTimeout(() => setControlsVisible(false), 3200);
    }
  }

  function togglePlay() {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      void el.play().then(() => {
        setPlaying(true);
        revealControls();
      }).catch(() => setPlaying(false));
    } else {
      el.pause();
      setPlaying(false);
      setControlsVisible(true);
    }
  }

  function handleTimeUpdate() {
    const el = ref.current;
    if (!el || !el.duration) return;
    setCurrentTime(el.currentTime);
    setDuration(el.duration);
    setProgress((el.currentTime / el.duration) * 100);
    if (!watched && el.currentTime / el.duration > 0.5) {
      setWatched(true);
      onWatched?.();
    }
  }

  function handleLoadedMetadata() {
    const el = ref.current;
    if (el?.duration) setDuration(el.duration);
    setReady(true);
    syncSubtitleTrack();
  }

  function handleSeek(clientX: number, rect: DOMRect) {
    const el = ref.current;
    if (!el || !el.duration) return;
    const pct = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    el.currentTime = pct * el.duration;
    revealControls(false);
  }

  function handleSeekMouse(e: React.MouseEvent<HTMLDivElement>) {
    handleSeek(e.clientX, e.currentTarget.getBoundingClientRect());
  }

  function handleSeekTouch(e: React.TouchEvent<HTMLDivElement>) {
    const touch = e.changedTouches[0];
    if (!touch) return;
    handleSeek(touch.clientX, e.currentTarget.getBoundingClientRect());
  }

  function goFullscreen() {
    const shell = ref.current?.closest(".video-shell");
    if (shell && "requestFullscreen" in shell) {
      void (shell as HTMLElement).requestFullscreen?.();
      return;
    }
    ref.current?.requestFullscreen?.();
  }

  const showControls = controlsVisible || !playing;

  return (
    <div
      className={cn("video-shell group relative", className)}
      onMouseMove={() => revealControls()}
      onTouchStart={() => revealControls(false)}
    >
      <video
        ref={ref}
        key={video.id}
        src={video.streamUrl}
        poster={video.posterUrl}
        playsInline
        preload="metadata"
        muted={muted}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => {
          setPlaying(true);
          revealControls();
        }}
        onPause={() => {
          setPlaying(false);
          setControlsVisible(true);
        }}
        onError={() => setLoadError(true)}
        onEnded={() => {
          setPlaying(false);
          setControlsVisible(true);
          if (!watched) {
            setWatched(true);
            onWatched?.();
          }
        }}
        className="video-shell__media"
      >
        {subtitleUrl ? (
          <track
            kind="subtitles"
            src={subtitleUrl}
            srcLang="fr"
            label="Français"
            default
            onLoad={syncSubtitleTrack}
          />
        ) : null}
      </video>

      {!ready && !loadError && (
        <div className="video-shell__placeholder" aria-hidden>
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[var(--accent)]" />
        </div>
      )}

      {loadError && (
        <div className="video-shell__placeholder px-6 text-center">
          <AlertCircle className="mx-auto mb-3 h-10 w-10 text-[var(--warning)]" aria-hidden />
          <p className="text-sm text-white/90">Impossible de lire cette vidéo ici.</p>
          <Link href={video.jwPageUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <Button size="sm" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
              <ExternalLink className="h-4 w-4" aria-hidden />
              Voir sur JW.org
            </Button>
          </Link>
        </div>
      )}

      {!loadError && (
        <>
          <div
            className={cn(
              "video-overlay-play absolute inset-0 z-10 flex items-center justify-center transition-opacity pointer-events-none",
              showControls && !playing ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
            )}
          >
            {!playing && (
              <motion.button
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                onClick={togglePlay}
                className="touch-target pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-[0_0_40px_rgba(0,184,184,0.45)] sm:h-20 sm:w-20"
                aria-label="Lecture"
              >
                <Play className="ml-1 h-7 w-7 fill-current sm:h-10 sm:w-10" />
              </motion.button>
            )}
          </div>

          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="video-controls-bar"
              >
                <div
                  className="video-controls-bar__seek"
                  onClick={handleSeekMouse}
                  onTouchEnd={handleSeekTouch}
                  role="slider"
                  aria-label="Progression"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="video-controls-bar__seek-fill" style={{ width: `${progress}%` }} />
                </div>

                <div className="video-controls-bar__toolbar">
                  <div className="video-controls-bar__cluster video-controls-bar__cluster--start">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="video-ctrl-btn"
                      aria-label={playing ? "Pause" : "Lecture"}
                    >
                      {playing ? <Pause /> : <Play className="fill-current" />}
                    </button>
                  </div>

                  <div className="video-controls-bar__cluster video-controls-bar__cluster--center">
                    <span className="video-controls-bar__time">
                      {formatPlaybackTime(currentTime)}
                      <span className="text-white/45"> / </span>
                      {formatPlaybackTime(duration || video.durationSeconds || 0)}
                    </span>
                  </div>

                  <div className="video-controls-bar__cluster video-controls-bar__cluster--end">
                    <button
                      type="button"
                      onClick={() => {
                        const el = ref.current;
                        if (!el) return;
                        el.muted = !el.muted;
                        setMuted(el.muted);
                      }}
                      className={cn("video-ctrl-btn", muted && "video-ctrl-btn--active")}
                      aria-label={muted ? "Activer le son" : "Couper le son"}
                    >
                      {muted ? <VolumeX /> : <Volume2 />}
                    </button>

                    {hasSubtitles ? (
                      <button
                        type="button"
                        onClick={() => setSubtitlesOn((v) => !v)}
                        className={cn("video-ctrl-btn", subtitlesOn && "video-ctrl-btn--active")}
                        aria-label={subtitlesOn ? "Masquer les sous-titres" : "Afficher les sous-titres"}
                        aria-pressed={subtitlesOn}
                      >
                        <Subtitles />
                      </button>
                    ) : null}

                    <button
                      type="button"
                      onClick={goFullscreen}
                      className="video-ctrl-btn"
                      aria-label="Plein écran"
                    >
                      <Maximize2 />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {watched && !loadError && (
        <div className="absolute right-2 top-2 z-20 rounded-full bg-emerald-500/90 px-2.5 py-1 text-[0.6875rem] font-bold text-white sm:right-3 sm:px-3 sm:text-xs">
          ✓ +XP
        </div>
      )}
    </div>
  );
}

interface VideoCardProps {
  video: JwVideo;
  onClick?: () => void;
  compact?: boolean;
}

export function VideoCard({ video, onClick, compact }: VideoCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className="group w-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-left shadow-sm transition-shadow hover:shadow-md"
    >
      <div className={cn("relative overflow-hidden", compact ? "h-28" : "h-40")}>
        <Image
          src={video.posterUrl}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--accent)] opacity-0 shadow-md transition-opacity group-hover:opacity-100">
            <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
          </div>
        </div>
        {video.durationSeconds ? (
          <span className="absolute bottom-2 right-2 rounded bg-black/75 px-2 py-0.5 text-xs text-white">
            {formatDuration(video.durationSeconds)}
          </span>
        ) : null}
      </div>
      {!compact && (
        <div className="p-4">
          <p className="font-semibold text-[var(--text)] line-clamp-2 group-hover:text-[var(--accent)]">
            {video.title}
          </p>
          <p className="mt-1 text-xs text-[var(--text-muted)] line-clamp-2">{video.description}</p>
        </div>
      )}
    </motion.button>
  );
}

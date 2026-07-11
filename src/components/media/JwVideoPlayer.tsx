"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        <div aria-hidden>
          <div />
        </div>
      )}

      {loadError && (
        <div>
          <AlertCircle aria-hidden />
          <p>Impossible de lire cette vidéo ici.</p>
          <Link href={video.jwPageUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline">
              <ExternalLink aria-hidden />
              Voir sur JW.org
            </Button>
          </Link>
        </div>
      )}

      {!loadError && (
        <>
          <div
          >
            {!playing && (
              <button
                onClick={togglePlay}
                aria-label="Lecture"
              >
                <Play />
              </button>
            )}
          </div>

          <>
            {showControls && (
              <div
              >
                <div
                  onClick={handleSeekMouse}
                  onTouchEnd={handleSeekTouch}
                  role="slider"
                  aria-label="Progression"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div />
                </div>

                <div>
                  <div>
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={playing ? "Pause" : "Lecture"}
                    >
                      {playing ? <Pause /> : <Play />}
                    </button>
                  </div>

                  <div>
                    <span>
                      {formatPlaybackTime(currentTime)}
                      <span> / </span>
                      {formatPlaybackTime(duration || video.durationSeconds || 0)}
                    </span>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        const el = ref.current;
                        if (!el) return;
                        el.muted = !el.muted;
                        setMuted(el.muted);
                      }}
                      aria-label={muted ? "Activer le son" : "Couper le son"}
                    >
                      {muted ? <VolumeX /> : <Volume2 />}
                    </button>

                    {hasSubtitles ? (
                      <button
                        type="button"
                        onClick={() => setSubtitlesOn((v) => !v)}
                        aria-label={subtitlesOn ? "Masquer les sous-titres" : "Afficher les sous-titres"}
                        aria-pressed={subtitlesOn}
                      >
                        <Subtitles />
                      </button>
                    ) : null}

                    <button
                      type="button"
                      onClick={goFullscreen}
                      aria-label="Plein écran"
                    >
                      <Maximize2 />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        </>
      )}

      {watched && !loadError && (
        <div>
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
    <button
      onClick={onClick}
    >
      <div>
        <Image
          src={video.posterUrl}
          alt={video.title}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div>
          <div>
            <Play fill="currentColor" />
          </div>
        </div>
        {video.durationSeconds ? (
          <span>
            {formatDuration(video.durationSeconds)}
          </span>
        ) : null}
      </div>
      {!compact && (
        <div>
          <p>
            {video.title}
          </p>
          <p>{video.description}</p>
        </div>
      )}
    </button>
  );
}

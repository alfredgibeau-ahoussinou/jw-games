"use client";

import { useEffect, useState } from "react";
import type { JwVideo } from "@/data/jw-videos";
import { fetchSubtitleUrl } from "@/lib/jw-subtitles";

export function useVideoSubtitles(video: JwVideo) {
  const [subtitleUrl, setSubtitleUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setSubtitleUrl(null);

    fetchSubtitleUrl(video)
      .then((url) => {
        if (!cancelled) setSubtitleUrl(url);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [video.id, video.pub, video.streamUrl, video.track]);

  return { subtitleUrl, loadingSubtitles: loading };
}

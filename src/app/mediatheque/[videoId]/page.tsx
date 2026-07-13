import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VideoPageContent } from "./VideoPageContent";
import { JW_VIDEOS, getVideoById } from "@/data/jw-videos";

export function generateStaticParams() {
  return JW_VIDEOS.map((video) => ({ videoId: video.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ videoId: string }>;
}): Promise<Metadata> {
  const { videoId } = await params;
  const video = getVideoById(videoId);
  if (!video) return { title: "Vidéo introuvable" };
  return {
    title: video.title,
    description: video.description,
  };
}

export default async function VideoPage({
  params,
}: {
  params: Promise<{ videoId: string }>;
}) {
  const { videoId } = await params;
  const video = getVideoById(videoId);
  if (!video) notFound();

  return <VideoPageContent video={video} />;
}

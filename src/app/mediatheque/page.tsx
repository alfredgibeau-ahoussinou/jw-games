import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { MediathequeContent } from "./MediathequeContent";
import { getVideoById } from "@/data/jw-videos";

export const metadata: Metadata = {
  title: "Médiathèque",
};

export default async function MediathequePage({
  searchParams,
}: {
  searchParams: Promise<{ video?: string }>;
}) {
  const { video } = await searchParams;
  if (video && getVideoById(video)) {
    redirect(`/mediatheque/${video}`);
  }

  return <MediathequeContent />;
}

"use client";

import type { ReactNode } from "react";
import type { JwVideo } from "@/data/jw-videos";
import {
  StudioPageHero,
  StudioSection,
  StudioSectionHeader,
  type StudioPageHeroProps,
} from "@/components/studio/StudioPageHero";

export {
  StudioPageHero,
  StudioSection,
  StudioSectionHeader,
  StudioBackLink,
} from "@/components/studio/StudioPageHero";

interface LegacyEditorialHeroProps extends Omit<StudioPageHeroProps, "title"> {
  headline: string;
  video?: JwVideo;
}

/** Compat — mappe headline → title, ignore video (pas de CTA vidéo) */
export function EditorialHero({
  headline,
  video: _video,
  ...props
}: LegacyEditorialHeroProps) {
  return <StudioPageHero title={headline} {...props} />;
}

export { StudioSection as EditorialSection };
export { StudioSectionHeader as EditorialSectionHeader };

export type EditorialSectionProps = {
  children: ReactNode;
  className?: string;
  alt?: boolean;
  fullBleed?: boolean;
  reveal?: boolean;
  id?: string;
  "aria-label"?: string;
};

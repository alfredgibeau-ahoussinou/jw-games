"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";

interface VisualNavTileProps {
  href: string;
  label: string;
  imageUrl: string;
  icon: LucideIcon;
  accent?: string;
}

export function VisualNavTile({ href, label, imageUrl, icon: Icon }: VisualNavTileProps) {
  return (
    <div
    >
      <Link
        href={href}
      >
        <div>
          <SafeImage
            src={imageUrl}
            alt=""
            fill
            sizes="(max-width: 640px) 45vw, 220px"
          />
          <div />
          <span
          >
            <Icon strokeWidth={2.25} aria-hidden />
          </span>
        </div>
        <p>
          {label}
        </p>
      </Link>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

import type { JwImage } from "@/lib/jw-images";
import { ExternalLink } from "lucide-react";

interface JwImageCardProps {
  image: JwImage;
  className?: string;
  size?: "sm" | "md" | "lg";
  overlay?: boolean;
}

const sizeClasses = {
  sm: "h-32",
  md: "h-48",
  lg: "h-64",
};

export function JwImageCard({
  image,
  className,
  size = "md",
  overlay = true,
}: JwImageCardProps) {
  return (
    <div
    >
      <Link
        href={image.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {overlay && (
            <div />
          )}
          <div>
            <p>
              {image.alt}
            </p>
            <span>
              jw.org <ExternalLink />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

interface JwHeroImageProps {
  image: JwImage;
  className?: string;
}

export function JwHeroImage({ image, className }: JwHeroImageProps) {
  return (
    <div
    >
      <div>
        <Image
          src={image.url}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
        />
        <div />
        <div>
          <p>
            Source officielle · jw.org
          </p>
          <p>
            {image.alt}
          </p>
        </div>
      </div>
    </div>
  );
}

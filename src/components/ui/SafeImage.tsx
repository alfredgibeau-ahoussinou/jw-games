"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackClassName?: string;
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackClassName,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--accent)]/30 to-[var(--bg-elevated)] text-4xl",
          fallbackClassName,
          className
        )}
        aria-hidden
      >
        📖
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

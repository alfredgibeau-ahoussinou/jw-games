"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackClassName?: string;
  /** Classe du conteneur lorsque fill=true */
  frameClassName?: string;
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackClassName,
  frameClassName,
  fill,
  ...props
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  const content =
    failed || !src ? (
      <div className={cn("safe-image-fallback", fallbackClassName, !fill && className)} aria-hidden>
        📖
      </div>
    ) : (
      <Image
        {...props}
        fill={fill}
        src={src}
        alt={alt}
        className={cn(fill && "media-frame__img", !fill && className)}
        loading={props.priority ? "eager" : props.loading}
        onError={() => setFailed(true)}
      />
    );

  if (fill) {
    return <div className={cn("media-frame", frameClassName)}>{content}</div>;
  }

  return content;
}

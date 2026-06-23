"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { JwImage } from "@/lib/jw-images";
import { cn } from "@/lib/cn";
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
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn("group relative overflow-hidden rounded-2xl", className)}
    >
      <Link
        href={image.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className={cn("relative w-full overflow-hidden", sizeClasses[size])}>
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#003d3d]/90 via-[#006666]/30 to-transparent" />
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-sm font-semibold text-[var(--text)] leading-snug">
              {image.alt}
            </p>
            <span className="mt-1 inline-flex items-center gap-1 text-xs text-[var(--text)]/70">
              jw.org <ExternalLink className="h-3 w-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

interface JwHeroImageProps {
  image: JwImage;
  className?: string;
}

export function JwHeroImage({ image, className }: JwHeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-[#006666]/40 shadow-[0_0_40px_rgba(0,102,102,0.2)]",
        className
      )}
    >
      <div className="relative aspect-video w-full sm:aspect-[21/9]">
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003333]/80 via-[#006666]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--text)]/60">
            Source officielle · jw.org
          </p>
          <p className="mt-1 text-lg font-bold text-[var(--text)] sm:text-xl">
            {image.alt}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

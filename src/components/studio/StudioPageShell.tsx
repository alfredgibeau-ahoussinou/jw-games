"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Enveloppe standard des pages intérieures */
export function StudioPageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-app", className)}>{children}</div>;
}

/** Corps de page sous le hero */
export function StudioPageBody({
  children,
  className,
  narrow,
}: {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "section-block space-y-6",
        narrow && "mx-auto max-w-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}

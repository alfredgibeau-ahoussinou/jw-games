"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Enveloppe standard des pages intérieures — fond + espacement Studio */
export function StudioPageShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("page container", className)}>{children}</div>;
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
    <div className={cn("page-section stack stack--lg", narrow && "container container--narrow", className)}>
      {children}
    </div>
  );
}

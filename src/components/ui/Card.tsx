"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  interactive?: boolean;
  shine?: boolean;
  glass?: boolean;
}

export function Card({ className, children, onClick, ...props }: CardProps) {
  return (
    <div className={cn("card", className)} onClick={onClick} {...props}>
      {children}
    </div>
  );
}

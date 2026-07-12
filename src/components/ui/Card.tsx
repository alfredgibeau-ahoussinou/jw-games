"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
  interactive?: boolean;
  shine?: boolean;
}

export function Card({
  className,
  hover = false,
  glow = false,
  interactive = false,
  shine = false,
  children,
  onClick,
  ...props
}: CardProps) {
  const baseClass = cn(
    "rounded-md border border-[var(--border)] bg-[var(--bg-card)] p-6",
    glow && "border-[var(--accent)]/30 shadow-md",
    shine && "",
    hover && "cursor-pointer hover:border-[var(--border-strong)] hover:shadow-md transition-shadow",
    className
  );

  if (interactive || hover || onClick) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.99 }}
        className={baseClass}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={
          onClick
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
                }
              }
            : undefined
        }
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClass} onClick={onClick} {...props}>
      {children}
    </div>
  );
}

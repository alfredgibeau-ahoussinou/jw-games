"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "glow" | "success" | "danger" | "play" | "info";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, loading, disabled, ...props }, ref) => {
    const variantClass =
      variant === "secondary"
        ? undefined
        : variant === "play"
          ? "btn--play"
          : variant === "info"
            ? "btn--info"
            : variant === "outline"
              ? "btn--outline"
              : variant === "ghost"
                ? "btn--ghost"
                : variant === "glow"
                  ? "btn--primary btn--glow"
                  : variant === "success"
                    ? "btn--success"
                    : variant === "danger"
                      ? "btn--danger"
                      : "btn--primary";

    return (
      <button
        ref={ref}
        className={cn(
          "btn",
          variantClass,
          size === "sm" && "btn--sm",
          size === "lg" && "btn--lg",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 aria-hidden />
            <span>Chargement</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

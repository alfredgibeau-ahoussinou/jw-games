import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "glow" | "success" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-150 touch-manipulation",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
          "active:scale-[0.98]",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)]": variant === "primary",
            "bg-[var(--bg-hover)] text-white hover:bg-[#333]": variant === "secondary",
            "text-[var(--text-secondary)] hover:bg-white/10 hover:text-white": variant === "ghost",
            "border border-[var(--border-strong)] bg-transparent text-white hover:border-white":
              variant === "outline",
            "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]": variant === "glow",
            "bg-[var(--success)] text-black hover:opacity-90": variant === "success",
            "bg-[var(--danger)] text-white hover:opacity-90": variant === "danger",
          },
          {
            "min-h-10 px-3 py-2 text-sm": size === "sm",
            "min-h-11 px-5 py-2.5 text-sm": size === "md",
            "min-h-12 px-6 py-3 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

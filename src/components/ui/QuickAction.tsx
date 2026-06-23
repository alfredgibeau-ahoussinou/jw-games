import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface QuickActionProps {
  href: string;
  icon: LucideIcon;
  label: string;
  description: string;
  accent?: "default" | "warm" | "cool";
  className?: string;
}

const accents = {
  default: "bg-[var(--accent-light)] text-[var(--accent)]",
  warm: "bg-orange-50 text-orange-700",
  cool: "bg-sky-50 text-sky-700",
};

export function QuickAction({
  href,
  icon: Icon,
  label,
  description,
  accent = "default",
  className,
}: QuickActionProps) {
  return (
    <Link
      href={href}
      className={cn(
        "surface-card flex min-h-[5.5rem] flex-col justify-between p-4 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
        className
      )}
    >
      <div
        className={cn(
          "mb-3 flex h-10 w-10 items-center justify-center rounded-lg",
          accents[accent]
        )}
      >
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <p className="font-semibold text-[var(--text)]">{label}</p>
        <p className="text-caption mt-0.5 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}

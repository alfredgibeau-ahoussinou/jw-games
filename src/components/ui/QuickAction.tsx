import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface QuickActionProps {
  href: string;
  icon: LucideIcon;
  label: string;
  description: string;
  accent?: "default" | "warm" | "cool";
  className?: string;
}

export function QuickAction({ href, icon: Icon, label, description }: QuickActionProps) {
  return (
    <Link href={href}>
      <div>
        <Icon aria-hidden />
      </div>
      <div>
        <p>{label}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
}

"use client";

import { cn } from "@/lib/cn";
import { DEFAULT_PREFERENCES } from "@/lib/user-preferences";
import type { UserProfile } from "@/types/user";

interface ProfileAvatarProps {
  profile: Pick<UserProfile, "displayName" | "preferences">;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZES = {
  sm: "avatar avatar--sm",
  md: "avatar avatar--md",
  lg: "avatar avatar--lg",
};

export function ProfileAvatar({ profile, size = "md", className }: ProfileAvatarProps) {
  const color = profile.preferences?.avatarColor ?? DEFAULT_PREFERENCES.avatarColor;
  const initial = profile.displayName.charAt(0).toUpperCase();

  return (
    <div
      className={cn(SIZES[size], className)}
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {initial}
    </div>
  );
}

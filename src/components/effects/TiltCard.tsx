import type { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  accentGradient?: string;
}

export function TiltCard({ children }: TiltCardProps) {
  return <>{children}</>;
}

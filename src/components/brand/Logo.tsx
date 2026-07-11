import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/** Ratio du logo transparent (393×322) */
const LOGO_WIDTH = 393;
const LOGO_HEIGHT = 322;

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
  href?: string;
}

const sizes = {
  sm: "h-9 w-auto",
  md: "h-12 w-auto",
  lg: "h-16 w-auto",
  xl: "h-28 w-auto sm:h-32",
};

export function Logo({
  size = "md",
  showText = false,
  className,
  href = "/",
}: LogoProps) {
  const image = (
    <Image
      src="/images/logo.png"
      alt="JW Games"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority
    />
  );

  return (
    <Link href={href} className={cn("logo", `logo--${size}`, className)}>
      {image}
      {showText && (
        <span>
          JW Games
        </span>
      )}
    </Link>
  );
}

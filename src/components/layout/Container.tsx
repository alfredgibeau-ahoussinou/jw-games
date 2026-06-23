import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function Container({ children, className, narrow }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-3 py-5 sm:px-6 sm:py-10",
        narrow ? "max-w-2xl" : "max-w-[var(--max-width)]",
        className
      )}
    >
      {children}
    </div>
  );
}

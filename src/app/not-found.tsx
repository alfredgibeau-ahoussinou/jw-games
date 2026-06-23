import Link from "next/link";
import { Home, Gamepad2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-8xl font-bold gradient-text">404</p>
      <h1 className="mt-4 text-2xl font-bold text-[var(--text)]">Page introuvable</h1>
      <p className="mt-2 text-[var(--text-muted)]">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors"
        >
          <Home className="h-4 w-4" />
          Accueil
        </Link>
        <Link
          href="/jeux"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent)] px-6 py-3 font-semibold text-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors"
        >
          <Gamepad2 className="h-4 w-4" />
          Jeux
        </Link>
      </div>
    </div>
  );
}

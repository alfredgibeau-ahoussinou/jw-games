import Link from "next/link";
import { Home, Gamepad2 } from "lucide-react";

export default function NotFound() {
  return (
    <div>
      <p>404</p>
      <h1>Page introuvable</h1>
      <p>
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <div>
        <Link
          href="/"
        >
          <Home />
          Accueil
        </Link>
        <Link
          href="/jeux"
        >
          <Gamepad2 />
          Jeux
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { JW_ORG_LINK } from "@/lib/jw-images";

export function JwOfficialBar() {
  return (
    <div className="jw-top-bar relative z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:px-6 text-white/90">
        <span>Contenu basé sur les sources officielles JW.org</span>
        <Link
          href={JW_ORG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:underline"
        >
          jw.org →
        </Link>
      </div>
    </div>
  );
}

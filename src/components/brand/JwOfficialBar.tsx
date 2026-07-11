import Link from "next/link";
import { JW_ORG_LINK } from "@/lib/jw-images";

export function JwOfficialBar() {
  return (
    <div>
      <div>
        <span>Contenu basé sur les sources officielles JW.org</span>
        <Link
          href={JW_ORG_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          jw.org →
        </Link>
      </div>
    </div>
  );
}

import type { OfficialSource } from "@/types/content";

export const TMN = "Traduction du monde nouveau";

export function bible(ref: string): OfficialSource[] {
  return [{ type: "bible", reference: ref, bibleEdition: TMN }];
}

export function jwLib(ref: string): OfficialSource[] {
  return [{ type: "jw-library", reference: ref }];
}

export const VERIFIED = "2026-01-01";

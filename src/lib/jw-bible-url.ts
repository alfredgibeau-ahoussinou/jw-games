/** Lien vers la Bible sur jw.org / WOL à partir d'une référence TMN (ex. « Jean 3:16 »). */
export function jwBibleLookupUrl(reference: string): string {
  const q = reference.trim();
  if (!q) return "https://www.jw.org/fr/bibliothèque/bible/bible-d-etude/livres/";
  return `https://wol.jw.org/wol/finder/r1/lp-f?q=${encodeURIComponent(q)}&srcid=jwlshare`;
}

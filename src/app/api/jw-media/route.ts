import { NextResponse } from "next/server";

/** Proxy vers l'API publique GETPUBMEDIALINKS de jw-cdn.org */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pub = searchParams.get("pub") ?? "gnj";
  const issue = searchParams.get("issue") ?? "";
  const lang = searchParams.get("lang") ?? "F";

  const url = new URL("https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS");
  url.searchParams.set("output", "json");
  url.searchParams.set("pub", pub);
  url.searchParams.set("fileformat", "MP4");
  url.searchParams.set("alllangs", "0");
  url.searchParams.set("langwritten", lang);
  url.searchParams.set("txtCMSLang", lang);
  if (issue) url.searchParams.set("issue", issue);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 86400 },
    });
    if (!res.ok) {
      return NextResponse.json({ error: "JW media unavailable" }, { status: 502 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}

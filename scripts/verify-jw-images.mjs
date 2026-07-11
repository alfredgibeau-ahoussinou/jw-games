/**
 * Vérifie les URLs JW (GET 200) et met à jour src/data/jw-verified-images.json
 */
import fs from "node:fs";

const v = fs.readFileSync("src/data/jw-videos.ts", "utf8");
const candidates = [
  ...new Set([
    ...[...v.matchAll(/"posterUrl": "(https:\/\/[^"]+)"/g)].map((m) => m[1]),
    ...[...v.matchAll(/"imageUrl": "(https:\/\/[^"]+)"/g)].map((m) => m[1]),
    "https://cms-imgp.jw-cdn.org/img/p/pkon/univ/pt/pkon_univ_lg.jpg",
    "https://cfp2.jw-cdn.org/a/fd2fea4/1/ir/gnj_univ_01_lg.jpg",
    "https://cfp2.jw-cdn.org/a/b31dd6b/2/ir/gnj_univ_2_lg.jpg",
    "https://cfp2.jw-cdn.org/a/0c1d42b/2/ir/gnj_univ_lg.jpg",
  ]),
];

const urlTitles = new Map();
const blockRe = /"title": "([^"]+)"[\s\S]*?"posterUrl": "(https:\/\/[^"]+)"/g;
let m;
while ((m = blockRe.exec(v)) !== null) {
  if (!urlTitles.has(m[2])) urlTitles.set(m[2], m[1]);
}

async function ok(url) {
  try {
    const r = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; JWGames/1.0)",
        Referer: "https://www.jw.org/fr/",
      },
    });
    return r.status === 200;
  } catch {
    return false;
  }
}

const good = [];
for (const url of candidates) {
  if (await ok(url)) {
    good.push({
      url,
      alt: urlTitles.get(url) ?? "Image JW.org",
      href: "https://www.jw.org/fr/",
    });
  } else {
    console.warn("SKIP (non-200):", url);
  }
}

fs.writeFileSync("src/data/jw-verified-images.json", JSON.stringify(good, null, 2));
console.log(`Verified ${good.length} URLs → src/data/jw-verified-images.json`);

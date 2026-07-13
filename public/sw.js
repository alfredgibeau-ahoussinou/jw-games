const CACHE_NAME = "jw-games-v1";
const DAILY_TEXT_PREFIX = "/cache/daily-text/";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (
    url.pathname.startsWith(DAILY_TEXT_PREFIX) ||
    url.pathname === "/api/daily-text" ||
    url.pathname.startsWith("/api/daily-text?")
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        try {
          const response = await fetch(event.request);
          if (response.ok) {
            cache.put(event.request, response.clone());
          }
          return response;
        } catch {
          if (cached) return cached;
          throw new Error("Network error");
        }
      })
    );
  }
});

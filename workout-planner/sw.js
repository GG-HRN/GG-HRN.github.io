const CACHE_NAME = "planner-cache-v1";
const FILES_TO_CACHE = [
  "/workout-planner/planner.html",
  "/workout-planner/manifest.json",
  "/workout-planner/sw.js",
  "/workout-planner/icons/icon-192.png",
  "/workout-planner/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

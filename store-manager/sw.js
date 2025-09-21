const CACHE_NAME = 'stock-manager-cache-v1';
const OFFLINE_URL = 'index.html';

const FILES_TO_CACHE = [
  OFFLINE_URL,
  'dashboard.html',
  'products.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'style.css',
  'main.js'
];

// Install: cache all static files
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
  self.clients.claim();
});

// Fetch: serve cached files first, then network
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    // For page navigation
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match(OFFLINE_URL))
  );
});

// Optional: listen to message events for dynamic JSON caching
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CACHE_JSON') {
    caches.open(CACHE_NAME).then(cache => {
      cache.put(event.data.url, new Response(JSON.stringify(event.data.data)));
      console.log('[SW] Cached JSON:', event.data.url);
    });
  }
});

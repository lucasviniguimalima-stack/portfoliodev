const CACHE = 'portfolio-v6';
const FILES = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/favicon.png',
    '/icon-512.png',
    '/manifest.json',
    '/curriculo.pdf',
    '/portfolio.png',
    '/igreja-messianica.png',
    '/og-image.png',
    '/logosimples.png',
    '/perfil.webp'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(FILES))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cached) => cached || fetch(e.request))
    );
});

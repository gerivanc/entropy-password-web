/* ================================================================
 * EntroPy Password Generator - Web Version
 * Service worker: offline support + installability (PWA)
 *
 * Security notes:
 *  - Passwords are generated entirely client-side with crypto.getRandomValues
 *    and never travel over the network, so nothing sensitive is ever cached.
 *  - Only GET requests from this origin and Google Fonts are cached.
 *    Third-party requests (e.g. the view counter badge) are never intercepted.
 * ================================================================ */

'use strict';

// Bump this value on every deploy so old caches are purged on activate
const CACHE_VERSION = 'entropy-web-v1';

// Core files needed to open the generator offline
const APP_SHELL = [
    '/',
    '/entropyweb.html',
    '/site.webmanifest',
    '/favicon.ico',
    '/favicon-256x256.png',
    '/apple-touch-icon-256x247.png',
    '/web-app-manifest-871x874.png'
];

// Page served when a navigation fails and the requested URL is not cached
const OFFLINE_FALLBACK = '/entropyweb.html';

// Cross-origin hosts whose responses may be cached (web fonts only)
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

// ---------- Install: pre-cache the app shell ----------
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) =>
            // Cache files one by one so a single missing file does not
            // abort the whole installation (cache.addAll is all-or-nothing)
            Promise.all(
                APP_SHELL.map((url) =>
                    cache.add(new Request(url, { cache: 'reload' }))
                        .catch((err) => console.warn('[SW] Skipped pre-cache of', url, err))
                )
            )
        ).then(() => self.skipWaiting()) // Activate the new version immediately
    );
});

// ---------- Activate: remove caches from previous versions ----------
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((key) => key !== CACHE_VERSION)
                    .map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim()) // Take control of open pages right away
    );
});

// ---------- Fetch: routing strategies ----------
self.addEventListener('fetch', (event) => {
    const request = event.request;

    // Never touch non-GET requests
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const sameOrigin = url.origin === self.location.origin;
    const isFont = FONT_HOSTS.includes(url.hostname);

    // Let the browser handle everything else (e.g. the komarev.com counter)
    if (!sameOrigin && !isFont) return;

    // HTML pages: network first, so users always get the latest version online
    if (request.mode === 'navigate') {
        event.respondWith(networkFirst(request));
        return;
    }

    // Static assets and fonts: serve from cache, refresh in the background
    event.respondWith(staleWhileRevalidate(event, request));
});

// Try the network, fall back to the cache, then to the offline page
async function networkFirst(request) {
    const cache = await caches.open(CACHE_VERSION);
    try {
        const response = await fetch(request);
        if (response && response.ok) {
            cache.put(request, response.clone());
        }
        return response;
    } catch (err) {
        const cached = await cache.match(request, { ignoreSearch: true });
        return cached ||
               (await cache.match(OFFLINE_FALLBACK)) ||
               new Response('Offline / Sem conexão', {
                   status: 503,
                   headers: { 'Content-Type': 'text/plain; charset=utf-8' }
               });
    }
}

// Answer from the cache immediately and update the cached copy in the background
async function staleWhileRevalidate(event, request) {
    const cache = await caches.open(CACHE_VERSION);
    const cached = await cache.match(request);

    const networkFetch = fetch(request)
        .then((response) => {
            // Opaque responses come from no-cors font requests; they are safe to store
            if (response && (response.ok || response.type === 'opaque')) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => undefined);

    if (cached) {
        // Keep the worker alive until the background refresh finishes
        event.waitUntil(networkFetch);
        return cached;
    }

    const response = await networkFetch;
    return response || new Response('', { status: 504, statusText: 'Offline' });
}

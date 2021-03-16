const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

// Resources that are always cached
const PRECACHE_URLS = [
	'index.html',
	'./',
	'css/style.css',
	'js/main.js',
	'sw.js',
];

console.log("[SW] Initializing");

self.addEventListener('install', event => {
	console.log('[SW] Install');
	event.waitUntil(
		caches.open(PRECACHE).then(cache =>
			cache.addAll(PRECACHE_URLS)
		)
	);
});

self.addEventListener('activate', event => {
	console.log('[SW] Activate');
});

self.addEventListener('fetch', event => {
	console.log('[SW] Fetch');
	event.respondWith(
		caches.match(event.request).then(response =>
			response || fetch(event.request)
		)
	);
});

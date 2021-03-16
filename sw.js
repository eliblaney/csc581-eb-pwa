const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

// Resources that are always cached
const PRECACHE_URLS = [
	'index.html',
	'./',
	'css/style.css',
	'js/main.js',
	'images/favicon.ico',
	'images/icon192.png',
	'images/icon512.png',
	'images/logo.png',
	'sw.js',
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(PRECACHE).then(cache =>
			cache.addAll(PRECACHE_URLS)
		)
	);
});

self.addEventListener('activate', event => {
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response =>
			response || fetch(event.request)
		)
	);
});

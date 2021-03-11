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

console.log("Service worker starting...");

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(PRECACHE).then(cache => {
			return cache.addAll(PRECACHE_URLS);
		})
	);
});

self.addEventListener('activate', event => {
	console.log('Service worker activating...');
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		});
	);
});

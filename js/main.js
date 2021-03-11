function registerServiceWorker() {
	if('serviceworker' in navigator) {
		navigator.serviceWorker.register('./sw.js');
	}
}

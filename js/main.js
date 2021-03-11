function registerServiceWorker() {
	console.log('[SW] Regstering...');
	if('serviceworker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then(registration => {
			console.log('[SW] Registered!');

		} , err => {
			// registration failed :(
			console.log('[SW] Registration failed: ', err);
		}).catch(err => {
			console.log(err);
		});
	}
}

function registerServiceWorker() {
	if('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./sw.js').then(registration => {
			console.log('[SW] Registered successfully.');
		} , err => {
			// registration failed :(
			console.log('[SW] Registration failed: ', err);
		}).catch(err => {
			console.log(err);
		});
	}
}

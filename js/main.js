function registerServiceWorker() {
	console.log('Regstering service worker...');
	if('serviceworker' in navigator) {
		navigator.serviceWorker.register('../sw.js').then(registration => {
			console.log('Registered!');

		} , err => {
			// registration failed :(
			console.log('ServiceWorker registration failed: ', err);
		}).catch(err => {
			console.log(err);
		});
	}
}

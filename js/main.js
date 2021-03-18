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

STATE_BIRDS = {
	'California Gull': [
		'California',
		'Utah',
	],
	'Cardinal': [
		'Illinois',
		'Indiana',
		'Kentucky',
		'North Carolina',
		'Ohio',
		'Virginia',
		'West Virginia'
	],
	'Chicken': [
		'Delaware',
		'Rhode Island'
	],
	'Meadowlark': [
		'Kansas',
		'Montana',
		'Nebraska',
		'North Dakota',
		'Oregon',
		'Wyoming'
	],
	'Mockingbird': [
		'Florida',
		'Mississippi',
		'Tennessee',
		'Texas'
	]
}

function openState(name, filename) {
	if(filename === undefined) {
		filename = name;
	}
	swal({
		title: name + ' States:',
		text: STATE_BIRDS[name].join("\n"),
		icon: "images/" + filename + ".png",
		button: {
			text: "Close"
		}
	});
}

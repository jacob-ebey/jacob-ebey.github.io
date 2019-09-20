import * as sapper from '@sapper/app';

sapper.start({
	target: document.querySelector('#sapper')
});

if (window.navigator && navigator.serviceWorker) {
	navigator.serviceWorker.getRegistrations().then(function(registrations) {
		for (let registration of registrations) {
			registration.unregister();
		}
	});
}

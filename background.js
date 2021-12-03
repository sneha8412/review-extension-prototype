chrome.runtime.onMessage.addListener( data => {
	if ( data.type === 'persistent' ) {
			
		const title = 'Persistent Notification from SW';
		const options = {
		  body: 'Yay it works.',
		  icon: './assets/icons/pikachu-128.png',
		  badge: './assets/icons/icon128.png'
		};

		self.registration.showNotification(title, options);
	}
	
	if ( data.type === 'non-persistent' ) {

		chrome.notifications.create(
		'',
		{
			type: 'basic',
			title: 'Non-persistent Notification from SW!',
			message: data.message || 'Message!',
			iconUrl: './assets/icons/pika-128.png',
		});
	}

  });
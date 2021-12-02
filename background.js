chrome.runtime.onMessage.addListener( data => {
	if ( data.type === 'notification' ) {
			chrome.notifications.create(
				'',
				{
					type: 'basic',
					title: 'Notification from service worker!',
					message: data.message || 'Message!',
					iconUrl: './assets/icons/pika-128.png',
				}
			);
	}
  });
chrome.runtime.onMessage.addListener( data => {
	if ( data.type === 'notification' ) {
			chrome.notifications.create(
				'',
				{
					type: 'basic',
					title: 'Notify notification title!',
					message: data.message || 'Notify message!',
					iconUrl: './assets/icons/pika-128.png',
				}
			);
	}
  });
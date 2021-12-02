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
			// const notification = new Notification(
			// 	`${data.message}`, 
			// 	{ 
			// 		body: `${data.message}`, 
			// 		tag: "Toast Notification From Service worker", 
			// 		icon: "./assets/icons/Pikachu-128.png", 
			// 		image: "./assets/icons/pikachu-image.jpg", 
			// 		requireInteraction: false
			// 	});
	}
  });
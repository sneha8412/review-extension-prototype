chrome.runtime.onMessage.addListener( data => {
	if ( data.type === 'persistent' ) {
			
		const title = 'Persistent Notification from SW';
		const options = {
		  body: 'Yay it works.',
		  icon: './assets/icons/pikachu-128.png',
		  badge: './assets/icons/icon128.png'
		};

		registration.showNotification(title, options);
	}

	// closes all service worker originated notifications via registration.showNotifications
	if (data.type == "close-all" )
	{
		// see: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/getNotifications
		if (registration !== null) {
			registration.getNotifications()
			  .then((resultList) => {
				console.log(`Clearing <b>${resultList.length}</b> notifications!`)
	  
				resultList.forEach((notification) => {
				  notification.close();
				});
			  }).catch((error) => {
				console.log(`getNotifications() failed: ${error}.`);
			  });
		  }
	}
	//----------------------- chrome.notifications.create API ---------------------
	
	if ( data.type === 'non-persistent' ) {

		chrome.notifications.create(
		'chrome-create-sw-api',
		{
			type: 'basic',
			title: 'Non-persistent Notification from SW!',
			message: data.message || 'Message!',
			iconUrl: './assets/icons/pika-128.png',
		});
	}

  });
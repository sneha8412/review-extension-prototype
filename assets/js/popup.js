const text = document.getElementById( 'notify-text' );
const notifySwExt = document.getElementById( 'notify-sw-ext' );
const reset = document.getElementById( 'notify-reset' );
const counter = document.getElementById( 'notify-count' );
const notifyExtDoc = document.getElementById('notify-doc-ext');
const notifyToast = document.getElementById('notify-toast');
const clearButton = document.getElementById('notify-reset');
const log = document.getElementById("log");

//------------ clear button-----------------------------------------------
clearButton.addEventListener('click', () => {

	closeAllToastNotifications();
	toastId = 1;
	log.innerHTML = '';
	localStorage.clear();
});

function closeAllToastNotifications() {
    ToastNotificationIdsList?.forEach((toast) => {
      toast.close();
    });
    ToastNotificationIdsList = [];
  }

//--------Document Notification API ----------------------------------------- 
notifyExtDoc.addEventListener( 'click', () => {

	chrome.notifications.create(
		'',
		{
			type: 'basic',
			title: 'Notification from document!',
			message: text.value || 'Message!',
			iconUrl: './assets/icons/pikachu-folder-128.png',
		}
	);
} );


//-----------Extension service worker notification API-----------------------------------------

notifySwExt.addEventListener( 'click', () => {
	chrome.runtime.sendMessage( '', {
		type: 'notification',
		message: text.value
	});
} );


//--------Document notification object ----------------------------------------- 
notifyToast.addEventListener('click', () => {
	showToast(text.value || 'Message!');
});

let ToastNotificationIdsList = [];
let toastId = localStorage.getItem("toastId");
if (toastId === null) {
  toastId = 1;
  localStorage.setItem("toastId", toastId);
}

function showToast(message) {
	
	closeAllToastNotifications();

	const notification = new Notification(
		"Toast Notification title!",
		// `${message}-${toastId}`, 
		{ 
			body: `${message}`, 
			tag: "Toast Notification From Doc", 
			icon: "./assets/icons/Pikachu-128.png", 
			image: "./assets/icons/pikachu-image.jpg", 
			requireInteraction: false
		});

	localStorage.setItem("toastId", toastId);
	ToastNotificationIdsList.push(notification);
	
	notification.onclick = () => {
		logMessage(`Window 'click' event for: ${notification.title}, 
		timestamp: ${new Date(notification.timestamp)}, 
		requireInteraction: ${notification.requireInteraction}, 
		silent: ${notification.silent}`);
	};
	
	notification.onerror = () => {
		logMessage(`Window 'error' event for: ${notification.title}`);
	};
	
	notification.onshow = () => {
		logMessage(`Window 'show' event for: ${notification.title}`);
	};
	
	notification.onclose = () => {
		logMessage(`Window 'close' event for: ${notification.title}`);
	};

	toastId++;

}

  function logMessage(message) {
    log.innerHTML += `${message}<br/>`;
  }
  
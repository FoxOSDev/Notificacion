(function () {
     // Notifications
    var addNotification = document.querySelector("#add-notification");
    if (addNotification) {
        addNotification.onclick = function () {
            var notification = navigator.mozNotification.createNotification(
                "¡Mira esto!", 
                "¡Es una notificación!"
            );
			notification.show();
        };
    }
  })();
  
  function install(){
  	var instalar = window.navigator.mozApps.install("http://foxosdev.es/firefoxapp/Notificacion/manifest.webapp")
  	instalar.onsuccess = function () {
  		alert('Instalado correctamente.')
  	}
  	instalar.onerror = function () {
  		alert('Error en la instalación ('+this.error.name+')')
  	}
  }
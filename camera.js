var video = null;

		// Funcția de capturare a stream-ului video de la cameră
		function on_cam_success(stream) {
			video.srcObject = stream;
		}

		// Funcția care tratează erorile de acces la cameră
		function on_cam_error(err) {
			alert("Eroare: " + err.message);
		}

		// Setăm constrângerile pentru a accesa doar video-ul
		var constraints = { audio: false, video: true };

		// Când pagina s-a încărcat, pornim camera
		window.onload = function() {
			video = document.getElementById("video");

			// Solicităm accesul la camera utilizatorului
			navigator.mediaDevices.getUserMedia(constraints)
				.then(on_cam_success)
				.catch(on_cam_error);
		}

		// Funcția de captare a imaginii din video și desenarea pe canvas
		function capteaza() {
			var c = document.getElementById("canvas");
			c.width = video.videoWidth;
			c.height = video.videoHeight;
			var ctx = c.getContext("2d");
			ctx.drawImage(video, 0, 0, c.width, c.height);
		}
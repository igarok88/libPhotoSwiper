window.addEventListener("DOMContentLoaded", () => {
	var openPhotoSwipe = function () {
		var pswpElement = document.querySelectorAll(".pswp")[0];

		// build items array

		var items = [
			{
				src: "img/1.jpg",
				w: 964,
				h: 1024,
			},
			{
				src: "img/2.jpg",
				w: 1964,
				h: 1024,
			},
			{
				src: "img/3.jpg",
				w: 964,
				h: 1024,
			},
		];

		// define options (if needed)
		var options = {
			// history & focus options are disabled on CodePen
			history: false,
			focus: false,

			showAnimationDuration: 0,
			hideAnimationDuration: 0,
		};

		var gallery = new PhotoSwipe(
			pswpElement,
			PhotoSwipeUI_Default,
			items,
			options
		);
		gallery.init();
	};

	openPhotoSwipe();

	document.getElementById("btn").onclick = openPhotoSwipe;
});

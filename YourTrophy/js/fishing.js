"use strict";
document.addEventListener("DOMContentLoaded", function () {
	const sliders = document.querySelectorAll(".fishing-type__photos");
	sliders.forEach((el) => {
		const slider = new Swiper(el, {
			spaceBetween: 0,
			slidesPerView: 1,
			rewind: true,
			// autoplay: true,
			speed: 400,

			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	});
});

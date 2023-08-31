"use strict";
document.addEventListener("DOMContentLoaded", function () {
	const aboutSlider = new Swiper(".about__gallery-slider", {
		spaceBetween: 0,
		slidesPerView: 1,
		autoplay: true,
		speed: 400,

		breakpoints: {
			568: {
				slidesPerView: 2,
				spaceBetween: 60,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 60,
			},
			990: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 130,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});
	const tournerSlider = new Swiper(".tourner__slider", {
		autoplay: true,
		spaceBetween: 40,
		slidesPerView: 2,

		breakpoints: {
			568: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
	});
});

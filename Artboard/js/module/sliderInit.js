const initOptions = {
	effect: "fade",
	speed: 1000,
	autoplay: {
		delay: 5000,
	},
	loop: true,
	fadeEffect: {
		crossFade: true,
	},
};

export const sliderInit = (selector, options = initOptions) => {
	return new Swiper(selector, options);
};

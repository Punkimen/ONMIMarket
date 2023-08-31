const initOptions = {
	effect: "fade",
	speed: 1000,
	fadeEffect: {
		crossFade: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
};

export const sliderInit = (selector, options = initOptions) => {
	return new Swiper(selector, options);
};

export const sliderPrety = (slider, windowWidth) => {
	let rightProp = '7vw'
	if (windowWidth > (992)) {
		rightProp = '8.8vw'
	} else if (windowWidth < (768)) {
		rightProp = 0
	}
	const arrSliders = slider.slides;
	const lastEl = arrSliders[arrSliders.length - 1];
	if (slider.activeIndex === arrSliders.length - 1) {
		lastEl.style.right = rightProp;
		lastEl.style.transotionDuration = "600ms";
	} else {
		lastEl.style.right = "0vw";
		lastEl.style.transotionDuration = "600ms";
	}
};

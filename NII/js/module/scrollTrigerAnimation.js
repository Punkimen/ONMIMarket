import {scrollAnimate} from "./scrollAnimate.js";

const options = {
	rootMargin: "5px",
	threshold: 0.2,
};

export const observerScroll = new IntersectionObserver(scrollAnimate, options);

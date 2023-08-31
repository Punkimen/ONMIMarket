export const getDelay = (el) => {
	const delay = el.getAttribute("data-delay");
	return delay ? +delay : 0;
};
export const getDuration = (el) => {
	const dur = el.getAttribute("data-duration");
	return dur ? +dur : 1;
};
export const getEffect = (el) => {
	const effect = el.getAttribute("data-effect");
	return effect;
};
export const random = (min, max) => {
	return Math.random() * (max - min) + min;
};

export const setDelay = (el, delay) => {
	el.setAttribute("data-delay", +delay.toFixed(2));
};

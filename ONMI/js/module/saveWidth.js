export const saveWidth = (el) => {
	const initWidth = el.clientWidth;
	initWidth;
	el.style.minWidth = `${initWidth}px`;
	el.style.width = "100%";
};

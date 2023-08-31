import {addClass, removeClass} from "./handleClassnames.js";
export const showPopup = (id) => {
	const popupsBlock = document.querySelector(".popups");
	const popup = popupsBlock.querySelector(id);
	popupsBlock.style.transitionDelay = "0s";
	addClass(popupsBlock, "show");
	addClass(popup, "show");
};
export const closePopup = () => {
	const popupsBlock = document.querySelector(".popups");
	popupsBlock.querySelectorAll(".popup").forEach((el) => {
		removeClass(el, "show");
	});
	popupsBlock.style.transitionDelay = "0.2s";
	removeClass(popupsBlock, "show");
};

import {saveWidth} from "./saveWidth.js";

export const animateWord = (el) => {
	saveWidth(el);
	el.classList.add("showText");
	el.style.minWidth = "auto";
	el.style.width = "auto";
};
export const animateLetters = (el) => {
	const letters = el.querySelectorAll(".letter");
	letters.forEach((letter, ind) => {
		setTimeout(() => letter.classList.add("showLetter"), ind * 100);
	});
};

import { saveWidth } from "./saveWidth.js";

export const animateWord = (el) => {
	saveWidth(el);
	const words = el.querySelectorAll(".word");
	words.forEach((letter,ind) => {
		setTimeout(() => letter.classList.add("showWord"),ind * 50);
	});
	// el.classList.add("showText");
	el.style.minWidth = "auto";
	el.style.width = "auto";
};
export const animateLetters = (el) => {
	const letters = el.querySelectorAll(".letter");
	letters.forEach((letter,ind) => {
		letter.classList.add("showLetter");
		letter.style.animationDelay = `${ind * 100}ms`;
		// setTimeout(() => letter.classList.add("showLetter"), ind * 100);
	});
};

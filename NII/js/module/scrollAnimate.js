import {animateWord, animateLetters} from "./animateText.js";

export const scrollAnimate = (el) => {
	el.forEach((change) => {
		if (
			change.target.classList.contains("animate-text") &&
			!change.target.classList.contains("animated")
		) {
			if (change.isIntersecting) {
				animateWord(change.target);
				change.target.classList.add("animated");
			}
		} else if (
			change.target.classList.contains("animate-letters") &&
			!change.target.classList.contains("animated")
		) {
			if (change.isIntersecting) {
				animateLetters(change.target);
				change.target.classList.add("animated");
			}
		} else if (
			!change.target.classList.contains("animate-text") &&
			!change.target.classList.contains("element-show")
		) {
			if (change.isIntersecting) {
				change.target.classList.add("element-show");
			}
		}
	});
};

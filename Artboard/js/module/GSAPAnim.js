import {getDelay, getDuration} from "./helpers.js";

export const lineShow = (el) => {
	gsap.fromTo(
		el,
		{
			y: "150%",
		},
		{
			y: "0",
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};

export const opacityIn = (el) => {
	gsap.fromTo(
		el,
		{
			opacity: 0,
		},
		{
			opacity: 1,
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const transformTop = (el) => {
	gsap.fromTo(
		el,
		{
			y: "100%",
			opacity: ".3",
		},
		{
			y: 0,
			opacity: 1,
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const fadeDown = (el) => {
	gsap.fromTo(
		el,
		{
			opacity: 0,
			y: 50,
		},
		{
			y: 0,
			opacity: 1,
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const fadeUp = (el) => {
	gsap.fromTo(
		el,
		{
			opacity: 0,
			y: -150,
		},
		{
			opacity: 1,
			y: "0",
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const fadeLeft = (el) => {
	gsap.fromTo(
		el,
		{
			opacity: 0,
			x: -150,
		},
		{
			x: 0,
			opacity: 1,
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const fadeRight = (el) => {
	gsap.fromTo(
		el,
		{
			opacity: 0,
			x: 150,
		},
		{
			x: 0,
			opacity: 1,
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const fadeRightTop = (el) => {
	gsap.fromTo(
		el,
		{
			opacity: 0,
			x: 150,
			y: -150,
		},
		{
			x: 0,
			y: 0,
			opacity: 1,
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const fadeLeftTop = (el) => {
	gsap.fromTo(
		el,
		{
			opacity: 0,
			x: -150,
			y: -150,
		},
		{
			x: 0,
			y: 0,
			opacity: 1,
			delay: getDelay(el),
			duration: getDuration(el),
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const fadeIn = (el) => {
	const delay = el.getAttribute("data-delay")
		? el.getAttribute("data-delay")
		: 0;
	const duration = el.getAttribute("data-duration")
		? el.getAttribute("data-duration")
		: 1;
	gsap.fromTo(
		el,
		{
			opacity: 0,
		},
		{
			z: 0,
			opacity: 1,
			delay: delay,
			duration: duration,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const flipAnim = (el) => {
	const delay = el.getAttribute("data-delay")
		? el.getAttribute("data-delay")
		: 0;
	const duration = el.getAttribute("data-duration")
		? el.getAttribute("data-duration")
		: 0.8;
	gsap.fromTo(
		el,
		{
			opacity: 0,
			rotationX: -80,
			y: "100%",
		},
		{
			scrollTrigger: {
				trigger: el,
			},
			delay: delay,
			duration: duration,
			ease: "power1.inOut",
			opacity: 1,
			rotationX: 0,
			y: 0,
		},
	);
};
export const leftToRight = (el, trigger) => {
	if (el) {
		gsap.fromTo(
			el,
			{
				width: 0,
			},
			{
				width: "100%",
				delay: 0,
				duration: 1,
				ease: "power1.inOut",
				scrollTrigger: {
					trigger: trigger ? trigger : el,
				},
			},
		);
	}
};
export const rightToLeft = (el, trigger) => {
	const delay = el.getAttribute("data-delay")
		? el.getAttribute("data-delay")
		: 0;
	const duration = el.getAttribute("data-duration")
		? el.getAttribute("data-duration")
		: 1;

	gsap.fromTo(
		el,
		{
			opacity: 0,
			x: "100%",
		},
		{
			x: 0,
			opacity: 1,
			delay: delay,
			duration: duration,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: trigger ? trigger : el,
			},
		},
	);
};
export const showElem = (el) => {
	gsap.fromTo(
		el,
		{
			// y: -200,
			// x: 200,
			opacity: 0,
		},
		{
			y: 0,
			x: 0,
			opacity: 1,
			duration: 1,
		},
	);
};
export const hideElem = (el) => {
	gsap.fromTo(
		el,
		{
			y: 0,
			x: 0,
			opacity: 1,
		},
		{
			opacity: 0,
			duration: 1,
		},
	);
};

export const scaling = (el) => {
	const delay = el.getAttribute("data-delay")
		? el.getAttribute("data-delay")
		: 0;
	const duration = el.getAttribute("data-duration")
		? el.getAttribute("data-duration")
		: 1.3;
	gsap.fromTo(
		el,
		{
			scale: 0.3,
			opacity: 1,
		},
		{
			opacity: 1,
			scale: 1,
			delay: delay,
			duration: duration,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: el,
			},
		},
	);
};
export const circleDraw = (el, tirgger) => {
	const delay = el.getAttribute("data-delay")
		? el.getAttribute("data-delay")
		: 0;
	const duration = el.getAttribute("data-duration")
		? el.getAttribute("data-duration")
		: 1.2;

	gsap.to(el, {
		strokeDashoffset: "0",
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			start: "top bottom",
			trigger: tirgger ? tirgger : el,
		},
	});
};

export const startEffectAnim = (el) => {
	const effect = el.getAttribute("data-effect");

	switch (effect) {
		case "opacity":
			return opacityIn(el);
			break;
		case "fadeDown":
			return fadeDown(el);
			break;
		case "fadeUp":
			fadeUp(el);
			break;
		case "line":
			lineShow(el);
			break;
		case "fadeLeft":
			return fadeLeft(el);
			break;
		case "fadeRight":
			return fadeRight(el);
			break;
		case "fadeRightTop":
			return fadeRightTop(el);
			break;
		case "fadeLeftTop":
			return fadeLeftTop(el);
			break;
		default:
		// code block
	}
};

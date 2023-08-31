"use strict";
import {setStyle} from "./module/setStyle.js";
import {initMap} from "./module/map.js";
import {startEffectAnim} from "./module/GSAPAnim.js";
import {random, setDelay} from "./module/helpers.js";
import {closePopup, showPopup} from "./module/popup.js";
import {adaptiveHeader, adaptiveTerra, toggleMenu} from "./module/adaptive.js";
import {sliderInit} from "./module/sliderInit.js";
import {validate} from "./module/validate.js";

document.addEventListener("DOMContentLoaded", () => {
	const initPage = () => {
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		//  ===== variables =================================
		const delayElem = document.querySelectorAll("[data-delay]");
		const durationElem = document.querySelectorAll("[data-duration]");
		const scrollToElems = document.querySelectorAll("[data-to]");
		const header = document.querySelector("header");
		const animEls = document.querySelectorAll("[data-effect]");
		const featuresItems = document.querySelectorAll(".features-item");
		const spacesLists = document.querySelectorAll(".spaces-item__list");
		const featuresItemsText = document.querySelectorAll(
			".features-item__text",
		);
		const smoother = ScrollSmoother.create({
			smooth: 1.3,
			effects: true,
			smoothTouch: 0.3,
		});
		const popupShowBtns = document.querySelectorAll("[data-popup]");
		const popupHideBtns = document.querySelectorAll(".js-close");
		//  ===== variables =================================

		toggleMenu();
		adaptiveTerra();

		for (let elm of delayElem) {
			setStyle(elm, elm.dataset);
		}

		for (let elm of durationElem) {
			setStyle(elm, elm.dataset);
		}

		let firstSection = document.querySelector(".hero");

		scrollToElems.forEach((el) => {
			el.addEventListener("click", (e) => {
				e.preventDefault();
				const toVal = el.getAttribute("data-to");
				smoother.scrollTo(toVal, true);
			});
		});

		const sliderBtns = document.querySelectorAll(".slider-btn");

		const slider_banner = sliderInit(
			document.querySelector("#banner_slider"),
		);
		const slider_1 = sliderInit(document.querySelector("#slider_1"));
		const slider_2 = sliderInit(document.querySelector("#slider_2"));
		const slider_3 = sliderInit(document.querySelector("#slider_3"));
		const slider_4 = sliderInit(document.querySelector("#slider_4"));

		sliderBtns.forEach((btn) => {
			btn.addEventListener("click", (e) => {
				const id = btn.getAttribute("id");
				switch (id) {
					case "banner_next":
						slider_banner.slideNext();
						break;
					case "banner_prev":
						slider_banner.slidePrev();
						break;
					case "slide_1_next":
						slider_1.slideNext();
						break;
					case "slide_1_prev":
						slider_1.slidePrev();
						break;
					case "slide_2_next":
						slider_2.slideNext();
						break;
					case "slide_2_prev":
						slider_2.slidePrev();
						break;
					case "slide_3_next":
						slider_3.slideNext();
						break;
					case "slide_3_prev":
						slider_3.slidePrev();
						break;
					case "slide_4_next":
						slider_4.slideNext();
						break;
					case "slide_4_prev":
						slider_4.slidePrev();
						break;
				}
			});
		});
		gsap.fromTo(
			firstSection,
			{
				opacity: 1,
				scale: 1,
			},
			{
				opacity: 0,
				scale: 0.7,
				scrollTrigger: {
					trigger: firstSection,
					scrub: true,
					start: "top top",
					end: "+=60%",
					pin: true,
					pinSpacing: false,
					onEnterBack() {
						if (window.innerWidth >= 767) {
							header.classList.remove("hide-menu");
						}
					},
					onLeave() {
						if (window.innerWidth >= 767) {
							header.classList.add("hide-menu");
						}
					},
				},
			},
		);

		spacesLists.forEach((list) => {
			list.querySelectorAll(".spaces-item__elem").forEach((el, idx) => {
				setDelay(el, 0.1 * idx);
			});
		});

		featuresItems.forEach((el) => {
			el.dataset.delay = random(0, 0.3).toFixed(2);
			el.dataset.duration = random(1, 1.7).toFixed(2);
		});
		featuresItemsText.forEach((el) => {
			el.dataset.delay = random(0, 0.3).toFixed(2);
			el.dataset.duration = random(1, 1.5).toFixed(2);
		});

		animEls.forEach((el) => {
			startEffectAnim(el);
		});

		gsap.fromTo(
			".concep__slider",
			{x: "10%"},
			{
				x: "-40%",
				scrollTrigger: {
					trigger: ".concep__slider",
					scrub: true,
					start: "top bottom",
					end: "+=150%",
				},
			},
		);

		popupShowBtns.forEach((el) => {
			el.addEventListener("click", () => {
				const id = el.getAttribute("data-popup");
				showPopup(id);
			});
		});
		popupHideBtns.forEach((el) => {
			el.addEventListener("click", () => {
				closePopup();
			});
		});

		initMap("map");

		// form
		validate();
	};
	initPage();
	adaptiveHeader();
	window.addEventListener("resize", () => {
		adaptiveHeader();
		adaptiveTerra();
	});
});
document.addEventListener("click", (e) => {
	if (e.target.classList.contains("popups__inner")) {
		closePopup();
	}
});

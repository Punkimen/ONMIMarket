"use strict";
import { sliderInit } from "./module/sliderInit.js";
import { splitText } from "./module/splitText.js";
import { setStyle } from "./module/setStyle.js";
import { sectionHeightInit } from "./module/sectionHeightInit.js";

import {
	fadeDown,
	fadeIn,
	flipAnim,
	lineShow,
	opacityIn,
	scalingPositive,
	transformTop,
} from "./module/GSAPAnim.js";
import { CalcStats } from "./module/calcScore.js";

window.onload = function () {
	const initPage = () => {
		const animEls = document.querySelectorAll(".animate");
		const delayElem = document.querySelectorAll("[data-delay]");
		const durationElem = document.querySelectorAll("[data-duration]");

		for (let elm of delayElem) {
			setStyle(elm,elm.dataset);
		}
		for (let elm of durationElem) {
			setStyle(elm,elm.dataset);
		}
		// for (let elm of animEls) {
		// 	observerScroll.observe(elm);
		// }

		{
			const cardSliderOptions = {
				slidesPerView: "auto",
				spaceBetween: 10,
				grabCursor: true,
				speed: 600,
				effect: "creative",
				parallax: true,

				creativeEffect: {
					limitProgress: 2,
					prev: {
						shadow: true,
						translate: [0,0,-400],
						scale: [0],
						opacity: 0,
					},
					next: {
						translate: ["calc(100% + 10px)",0,0],
					},
				},

				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			};
			const slider_1 = sliderInit(".adventure__phone");
			const slider_2 = sliderInit(".cards-slider__slider",cardSliderOptions);
			slider_2.controller.control = slider_1;
			const sliderPrety = () => {
				const arrSliders = slider_2.slides;
				const lastEl = arrSliders[arrSliders.length - 1];
				if (slider_2.activeIndex === arrSliders.length - 1) {
					lastEl.style.right = "9.7vw";
					lastEl.style.transotionDuration = "600ms";
				} else {
					lastEl.style.right = "0vw";
					lastEl.style.transotionDuration = "600ms";
				}
			};
			slider_2.on("slideChange",function () {
				sliderPrety();
			});

			// OMI slider

			const omiSliderOption = {
				slidesPerView: 5,
				centeredSlides: true,
				loop: true,
				allowTouchMove: false,

				navigation: {
					nextEl: ".create-omi__btn_next",
					prevEl: ".create-omi__btn",
				},
			};
			const omiSlider = sliderInit(".create-omi__slider",omiSliderOption);
			const omiOpacitySlides = () => {
				const arrSliders = omiSlider.slides;
				const activeIndex = omiSlider.activeIndex;
				const activeSlide = arrSliders[activeIndex];
				activeSlide.style.opacity = 1;
				const siblingsSlides = (count) => {
					let arr = [];
					arr.push(arrSliders[activeIndex - count]);
					arr.push(arrSliders[activeIndex + count]);
					return arr;
				};
				const first = siblingsSlides(1);
				const second = siblingsSlides(2);
				first.forEach((el) => {
					el.style.opacity = 0.3;
				});
				second.forEach((el) => {
					el.style.opacity = 0.15;
				});
			};
			omiSlider.on("slideChange",function () {
				omiOpacitySlides();
			});
			omiOpacitySlides();
		}

		const text = document.querySelectorAll(".animate-letters");
		text.forEach((el) => {
			splitText(el);
		});

		const textWord = document.querySelectorAll(".animate-text");
		textWord.forEach((el) => {
			splitText(el);
		});

		const titles = document.querySelectorAll(".title-line");
		titles.forEach((el) => {
			splitText(el);
		});
		sectionHeightInit();
		// parallaxInit();

		// score
		const handle = document.querySelector(".omi-card__handle");
		const pointsAnim = document.querySelector("#unallocated-points");
		let count = 1;

		const stats = new CalcStats(12.0,10.0,23.4,2.1,2.1,56);
		stats.render();

		handle.addEventListener("click",async (e) => {
			const target = e.target;
			const btn = target.closest(".omi-card__point-btn");

			if (btn) {
				const animBlock = document.createElement("span");
				animBlock.className = "scalingBlock";
				animBlock.setAttribute("data-id",count);
				pointsAnim.append(animBlock);
				await scalingPositive(".scalingBlock");
				animBlock.remove();
				const statName = btn.getAttribute("data-stat");
				if (target.classList.contains("btn-plus")) {
					stats.statPlus(statName);
				} else if (target.classList.contains("btn-minus")) {
					stats.statMinus(statName);
				}
			}
		});

		// gsap
		gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

		if (ScrollTrigger.isTouch !== 1) {
			ScrollSmoother.create({
				smooth: 1.3,
				effects: true,
				smoothTouch: 0.3,
			});
		}

		const lineElems = document.querySelectorAll('[data-effect="line"]');
		const opacityElems = document.querySelectorAll('[data-effect="opacity"]');
		lineElems.forEach((el) => {
			lineShow(el);
		});
		opacityElems.forEach((el) => {
			opacityIn(el);
		});

		const mapPointsFindCircles = document.querySelectorAll(
			".find-map__point .map-point__circle"
		);
		const mapPointsFindText = document.querySelectorAll(
			".find-map__point .map-point__text"
		);
		mapPointsFindCircles.forEach((el) => {
			const delay = el.getAttribute("data-delay")
				? el.getAttribute("data-delay")
				: 0;
			const duration = el.getAttribute("data-duration")
				? el.getAttribute("data-duration")
				: 1.2;
			gsap.fromTo(
				el,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					delay: delay,
					duration: duration,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: ".find-map",
						start: "top center",
					},
				}
			);
		});
		mapPointsFindText.forEach((el) => {
			const delay = el.getAttribute("data-delay")
				? el.getAttribute("data-delay")
				: 0;
			const duration = el.getAttribute("data-duration")
				? el.getAttribute("data-duration")
				: 1.2;
			gsap.fromTo(
				el,
				{
					opacity: 0,
					y: "80%",
				},
				{
					y: 0,
					opacity: 1,
					delay: delay,
					duration: duration,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: ".find-map",
						start: "top center",
					},
				}
			);
		});

		const mapPointsDescover = document.querySelectorAll(
			".descover__map .map-point__circle"
		);

		mapPointsDescover.forEach((el) => {
			const delay = el.getAttribute("data-delay")
				? el.getAttribute("data-delay")
				: 0;
			const duration = el.getAttribute("data-duration")
				? el.getAttribute("data-duration")
				: 1.2;
			gsap.fromTo(
				el,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					delay: delay,
					duration: duration,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: ".descover__map",
						start: "top top",
					},
				}
			);
		});


		const heroTitle = document.querySelector(".hero__title");
		transformTop(heroTitle);
		const fadesOpecityElems = document.querySelectorAll(
			'[data-effect="fade-down"]'
		);
		const fadeInElems = document.querySelectorAll('[data-effect="fade-in"]');
		fadesOpecityElems.forEach((el) => {
			fadeDown(el);
		});
		fadeInElems.forEach((el) => {
			fadeIn(el);
		});
		const flipElems = document.querySelectorAll(".flip");
		flipElems.forEach((el) => {
			flipAnim(el);
		});
		gsap.fromTo(
			".pvp__title",
			{ scale: 1.7 },
			{
				scale: 1,
				scrollTrigger: {
					trigger: ".pvp",
					start: "top center",
					end: "center+=100px center",
					scrub: true,
				},
				ease: "none",
			}
		);
		const pvpShowElems = document.querySelectorAll(".pvp-show");
		pvpShowElems.forEach((el) => {
			gsap.fromTo(
				el,
				{
					opacity: 0,
					y: "10%",
				},
				{
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: ".pvp",
						start: "20%",
						end: "center",
						scrub: true,
					},
				}
			);
		});

		const pinEl = document.querySelector(".description-reality__content");

		const showEl = (el,isShow) => {
			isShow ? (el.style.opacity = 1) : (el.style.opacity = 0);
		};
		const st = ScrollTrigger.create({
			trigger: ".description-reality",
			pinned: true,
			start: "top top",
			end: "bottom bottom",
			marker: true,
			onToggle: (self) => showEl(pinEl,self.isActive),
		});
	};
	initPage();
};

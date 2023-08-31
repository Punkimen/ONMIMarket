"use strict";
window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		document.body.classList.add("loaded");
		document.body.classList.remove("loaded_hiding");
	}, 500);
};
// main functions
document.addEventListener("DOMContentLoaded", function () {
	const addClass = (el, className) => {
		el.classList.add(className);
	};
	const removeClass = (el, className) => {
		el.classList.remove(className);
	};
	const body = document.querySelector("body");
	{
		// header
		const mobileMenu = document.querySelector(".mobile-menu");
		const mobileMenuContainer = document.querySelector(
			".mobile-menu__container"
		);
		const headerNav = document.querySelector(".header__nav");
		const headerLogo = document.querySelector(".header__logo");
		const burger = document.querySelector(".burger");

		const headerMobileBuild = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 992 && !mobileMenu.classList.contains("innered")) {
				mobileMenuContainer.prepend(headerNav);
				addClass(mobileMenu, "innered");
			} else if (
				windowWidth > 992 &&
				mobileMenu.classList.contains("innered")
			) {
				headerLogo.after(headerNav);
				removeClass(mobileMenu, "innered");
			}
		};
		headerMobileBuild();

		burger.addEventListener("click", (e) => {
			if (!burger.classList.contains("active")) {
				addClass(mobileMenu, "open");
				addClass(burger, "active");
				addClass(body, "overlay");
			} else {
				removeClass(mobileMenu, "open");
				removeClass(burger, "active");
				removeClass(body, "overlay");
			}
		});

		// hero
		const heroContent = document.querySelector(".hero__content");
		const heroTitle = document.querySelector(".hero__title");
		const heroImg = document.querySelector(".hero__img");

		const heroBlocksChange = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 992 && !heroContent.classList.contains("mobile")) {
				heroTitle.after(heroImg);
				addClass(heroContent, "mobile");
			} else if (
				windowWidth > 992 &&
				heroContent.classList.contains("mobile")
			) {
				heroContent.after(heroImg);
				removeClass(heroContent, "mobile");
			}
		};
		if (heroContent) {
			heroBlocksChange();
		}
		window.addEventListener("resize", (e) => {
			headerMobileBuild();
			if (heroContent) {
				heroBlocksChange();
			}
		});
	}
});

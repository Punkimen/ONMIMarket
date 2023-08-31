import {addClass, removeClass, toggleClass} from "./toggleClass.js";
const mobMenu = document.querySelector(".mobile-menu");
const mobileMenuContainer = document.querySelector(".mobile-menu__container");
const navMenu = document.querySelector(".header__nav");
const headerLogo = document.querySelector(".header__logo");
const burger = document.querySelector(".burger");
const headerHandle = document.querySelector(".header__handle");
const headerLangue = document.querySelector(".header__language");
export const menuRelocate = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth <= 992 && !navMenu.classList.contains("mobile")) {
		mobileMenuContainer.append(navMenu);
		addClass(navMenu, "mobile");
	} else if (windowWidth > 992 && navMenu.classList.contains("mobile")) {
		headerLogo.after(navMenu);
		removeClass(navMenu, "mobile");
	}
	if (windowWidth <= 568 && !headerLangue.classList.contains("mobile")) {
		mobileMenuContainer.append(headerLangue);
		addClass(headerLangue, "mobile");
	} else if (windowWidth > 568 && headerLangue.classList.contains("mobile")) {
		headerHandle.prepend(headerLangue);
		removeClass(headerLangue, "mobile");
	}
};
burger.addEventListener("click", (e) => {
	toggleClass(burger, "active");
	toggleClass(mobMenu, "show");
});

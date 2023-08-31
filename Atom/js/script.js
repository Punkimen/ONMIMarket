"use strict";

// Подключения слайдера
{
	const breakpointsPartners = {
		440: {
			slidesPerView: 2,
			spaceBetween: 20,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
		},
		// when window width is >= 990px
		990: {
			slidesPerView: 3,
			spaceBetween: 30,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
		},
		// when window width is >= 1200px
		1200: {
			slidesPerView: 4,
			spaceBetween: 40,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
		},
	};
	const breakpointsSertificate = {
		// when window width is >= 990px
		568: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		// when window width is >= 1200px
		1200: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	};
	const option_1 = {
		slidesPerView: 1,
		loop: true,
		SpaceBetween: 35,
		autoHeight: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	};
	const option_2 = {
		slidesPerView: 1,
		loop: false,
		SpaceBetween: 35,
		// autoHeight: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	};
	const swiper = new Swiper(".partners__slider", {
		...option_1,
		breakpoints: breakpointsPartners,
	});
	const sliderSertificate = new Swiper(".sertivicates__slider", {
		...option_2,
		breakpoints: breakpointsSertificate,
	});
}
// Бургер меню

const headerMobile = document.querySelector(".header-mobile");
const headerNav = document.querySelector(".header__nav");
const headerLogo = document.querySelector(".header__logo");
const burgerBtn = document.querySelector(".burger__icon");

const toogleClass = (el, className) => {
	el.classList.toggle(className);
};
const removeClass = (el, className) => {
	el.classList.remove(className);
};
const adaptiveMenu = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth <= 1200) {
		headerMobile.querySelector(".container").prepend(headerNav);
	} else {
		headerLogo.after(headerNav);
	}
};
adaptiveMenu();
window.addEventListener("resize", adaptiveMenu);

burgerBtn.addEventListener("click", (e) => {
	toogleClass(burgerBtn, "active");
	toogleClass(headerMobile, "show");
});

// Якорные ссылки

const smoothLinks = document.querySelectorAll("[scroll-href]");

for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener("click", function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute("scroll-href");
		removeClass(burgerBtn, "active");
		removeClass(headerMobile, "show");
		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}

// Галерея сертификатов

lightGallery(document.getElementById("sertivicates-gallery"));

const scrollTopBtn = document.querySelector(".top-scroll");
const scrollBtnDisplay = function () {
	document.documentElement.scrollTop > window.innerHeight
		? scrollTopBtn.classList.add("show")
		: scrollTopBtn.classList.remove("show");
};
window.addEventListener("scroll", (e) => scrollBtnDisplay());

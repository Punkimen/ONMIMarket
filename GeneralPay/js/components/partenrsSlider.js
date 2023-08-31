export const swiper = new Swiper(".swiper", {
	// Default parameters
	slidesPerView: 2,
	spaceBetween: 20,
	autoplay: true,
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1200: {
			slidesPerView: 6,
			spaceBetween: 40,
		},
	},
});
const btnNext = document.querySelector(".swiper-button-next");
const btnPrev = document.querySelector(".swiper-button-prev");

btnNext.addEventListener("click", () => {
	swiper.slideNext();
});
btnPrev.addEventListener("click", () => {
	swiper.slidePrev();
});

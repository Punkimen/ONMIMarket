"use strict";
{
	const paywalls = document.querySelectorAll(".paywall-plan");
	const paywallBtn = document.querySelectorAll(".paywall__btn");
	const paywallHeader = document.querySelectorAll(".paywall__row_header");
	const paywallSwitch = document.querySelector(".pay-switch");

	const changeBtnPositon = () => {
		const windowWidth = window.innerWidth;
		paywalls.forEach((el) => {
			const btn = el.querySelector(".paywall__btn");
			const parent = el.querySelector(".paywall__row_header");
			if (windowWidth <= 992) {
				parent.appendChild(btn);
			} else {
				el.appendChild(btn);
			}
		});
	};
	changeBtnPositon();
}

import {removeClass, toggleClass} from "./handleClassnames.js";

export const adaptiveHeader = () => {
	const windowWidth = window.innerWidth;
	const headerMenues = document.querySelectorAll(".header__menu");
	const mobMenu = document.querySelector(".header__mobile");
	const mobMenuWrapper = mobMenu.querySelector(".header__mobile-wrapper");
	const headerCenterContainer = document.querySelector(".header__center");
	const headerLeftContainer = document.querySelector(".header__left");

	if (windowWidth <= 767 && !mobMenu.classList.contains("mobile")) {
		mobMenu.classList.add("mobile");
		headerMenues.forEach((menu) => {
			mobMenuWrapper.append(menu);
		});
	} else if (windowWidth > 767 && mobMenu.classList.contains("mobile")) {
		mobMenu.classList.remove("mobile");
		headerMenues.forEach((menu) => {
			if (menu.classList.contains("mobile")) {
				headerCenterContainer.append(menu);
			} else {
				headerLeftContainer.append(menu);
			}
		});
	}
};

export const toggleMenu = () => {
	const burger = document.querySelector(".burger");
	const mobMenu = document.querySelector(".header__mobile");
	const mobLink = document.querySelectorAll(".header__menu-elem");

	mobLink.forEach((el) => {
		el.addEventListener("click", (e) => {
			removeClass(burger, "active");
			removeClass(mobMenu, "open");
			removeClass(document.body, "overlay");
		});
	});

	burger.addEventListener("click", () => {
		toggleClass(burger, "active");
		toggleClass(mobMenu, "open");
		toggleClass(document.body, "overlay");
	});
};

export const adaptiveTerra = () => {
	const windowWidth = window.innerWidth;
	const terraContent = document.querySelector(".terra__content");
	const terraText = terraContent.querySelector(".main__text");
	const terraCol = document.querySelector(".terra__photos-col_1");

	if (windowWidth <= 767 && !terraText.classList.contains("mobile")) {
		terraText.classList.add("mobile");
		terraCol.after(terraText);
	} else if (windowWidth > 767 && terraText.classList.contains("mobile")) {
		terraText.classList.remove("mobile");
		terraContent.append(terraText);
	}
};

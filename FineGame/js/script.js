document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    // Header
    (function () {
        const burger = document.querySelector('.header__burger')
        const burgerFooter = document.querySelector('.footer__burger')
        const mobileMenu = document.querySelector('.mobile-menu')
        const mobileContainer = document.querySelector('.mobile-menu__container')
        const headerNav = document.querySelector('.header__nav')
        const headerLogo = document.querySelector('.header__logo')
        const headerBtns = document.querySelector('.header__btns')

        burger.addEventListener('click', () => {
            burger.querySelector('.burger__icon').classList.toggle('active')
            mobileMenu.classList.toggle('show')
            document.body.classList.toggle('overlay')
        })
        burgerFooter.addEventListener('click', () => {
            burgerFooter.querySelector('.burger__icon').classList.toggle('active')
            mobileMenu.classList.toggle('footer-show')
            document.body.classList.toggle('overlay')
        })
        const setMobileMenu = () => {
            let windowWidth = +window.innerWidth;
            if (windowWidth <= 993) {
                mobileContainer.prepend(headerNav)
            } else if (windowWidth > 993) {
                headerLogo.after(headerNav)
            }
            if (windowWidth <= 414) {
                mobileContainer.append(headerBtns)
            } else {
                burger.before(headerBtns)
            }
        }
        setMobileMenu();
        window.addEventListener('resize', setMobileMenu)
    })();
    (function () {
        // hero and rewiew
        let swiper = new Swiper(".preview-slider", {
            spaceBetween: 6,
            slidesPerView: 2,
            breakpoints: {
                568: {
                    slidesPerView: 3,
                },
                // when window width is >= 480px
                768: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 6,
                },
            }
        });
        let swiper2 = new Swiper(".hero__slider", {
            thumbs: {
                swiper: swiper,
            },
        });
        const nextArrow = document.querySelector('.hero__slider-arrows--next')
        const prevtArrow = document.querySelector('.hero__slider-arrows--prev')
        nextArrow.addEventListener('click', e => {
            swiper2.slideNext()
        })
        prevtArrow.addEventListener('click', e => {
            swiper2.slidePrev()
        })

        const sectionReview = document.querySelector('.review')
        const setSliderHeight = () => {
            let windowWidth = +window.innerWidth;
            if (windowWidth > 1440) {
                const sliderHeight = document.querySelector('.preview-slider').clientHeight;
                sectionReview.style.height = sliderHeight + "px"
            } else {
                sectionReview.style.height = "auto"
            }

        }
        setSliderHeight()
        window.addEventListener('resize', setSliderHeight)

        // const btnShowLiveBlock = document.querySelector('.matches-table__btn')
        // const matchesTable = document.querySelector(".matches-table")
        // btnShowLiveBlock.addEventListener('click', () => {
        //     matchesTable.classList.toggle('show')
        // })
    })();
    (function () {
        // tournament-section
        let swiper3 = new Swiper(".tourner__slider", {
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination"
            },
        });
    })();
    (function () {
        // gallery
    })();

})
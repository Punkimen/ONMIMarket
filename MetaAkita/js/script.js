"use strict";
document.addEventListener("DOMContentLoaded",function () {

  const addClass = (el,className) => {
    el.classList.add(className);
  };
  const removeClass = (el,className) => {
    el.classList.remove(className);
  };

  const body = document.querySelector("body");

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
      addClass(mobileMenu,"innered");
    } else if (
      windowWidth > 992 &&
      mobileMenu.classList.contains("innered")
    ) {
      headerLogo.after(headerNav);
      removeClass(mobileMenu,"innered");
    }
  };
  headerMobileBuild();

  burger.addEventListener("click",(e) => {
    if (!burger.classList.contains("active")) {
      addClass(mobileMenu,"open");
      addClass(burger,"active");
      addClass(body,"overlay");
    } else {
      removeClass(mobileMenu,"open");
      removeClass(burger,"active");
      removeClass(body,"overlay");
    }
  });
  // slider
  const swiper = new Swiper('.map__slider',{
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,

    breakpoints: {
      // when window width is >= 320px
      568: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  // questions 
  const questions = document.querySelectorAll('.question')
  questions.forEach(ques => {
    ques.addEventListener('click',e => {
      if (e.target.closest('.question__header') || e.target.closest('.question__toggle-btn')) {
        ques.classList.toggle('open')
      }
    })
  })

  // join
  const joinImg = document.querySelector('.join__img')
  const joinBtn = document.querySelector('.join__btn')
  const joinWrapper = document.querySelector('.join__wrapper')

  const joinChange = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 768 && !joinWrapper.classList.contains("change")) {
      joinBtn.after(joinImg);
      addClass(joinWrapper,"change");
    } else if (
      windowWidth > 768 &&
      joinWrapper.classList.contains("change")
    ) {
      joinWrapper.prepend(joinImg);
      removeClass(joinWrapper,"change");
    }
  };
  joinChange()

  const smoothLinks = document.querySelectorAll("[scroll-href]");

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click",function (e) {
      e.preventDefault();
      removeClass(mobileMenu,"open");
      removeClass(burger,"active");
      removeClass(body,"overlay");
      const id = smoothLink.getAttribute("scroll-href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }


  window.addEventListener("resize",(e) => {
    headerMobileBuild();
    joinChange()
  });
})


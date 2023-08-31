"use strict";
import {setHeader} from "./module/setHeader.min.js";
import {scrollTrigger} from "./module/scrollTrigger.min.js";
import {sliderInit, sliderPrety} from "./module/sliderInit.min.js";
import {
  cardsAdaptive, formAdaptive,
  journeyCardsAdaptive
} from "./module/adaptiveResize.min.js";
import {sectionHeightInit} from "./module/sectionHeightInit.min.js";
import {scalingBtnNegative, scalingBtnPositive, setNormalSize} from "./module/hoverBtn.min.js";

let windowWidth = window.innerWidth
let lastScrollTop = 0

const logo = document.querySelector('.header__logo')
const firstParenLine = document.querySelectorAll('.parent-line.first-load')
const firstTextLine = document.querySelectorAll('.text-line.first-load')
const firstOpacityElems = document.querySelectorAll('[data-effect="opacity"].first-load');
const firstFadeOpacityElems = document.querySelectorAll('[data-effect="fade-down"].first-load');
const textLine = document.querySelectorAll('.text-line:not(.first-load)')
const opacityElems = document.querySelectorAll('[data-effect="opacity"]:not(.first-load)');
const fadeOpacityElems = document.querySelectorAll('[data-effect="fade-down"]:not(.first-load)');
const lines = document.querySelectorAll('.line')
const marqueeLines = document.querySelectorAll('.marquee3k')
const quests = document.querySelectorAll(".question-item")
const btnGooglePlay = document.querySelector('.platform__btn_google')
const btnApplePlay = document.querySelector('.platform__btn_apple')

const openElems = document.querySelectorAll('[data-open]')
const closeElems = document.querySelectorAll('.modal__close')
const burger = document.querySelector('.header__burger')
const mobMenu = document.querySelector('.mob-menu')

const hoverBtns = (windowWidth) => {
  if (windowWidth > (768)) {
    btnApplePlay.addEventListener('mouseenter', () => {
      scalingBtnPositive(btnApplePlay)
      scalingBtnNegative(btnGooglePlay)
    })
    btnGooglePlay.addEventListener('mouseenter', () => {
      scalingBtnPositive(btnGooglePlay)
      scalingBtnNegative(btnApplePlay)
    })
    btnApplePlay.addEventListener('mouseleave', () => {
      setNormalSize(btnApplePlay)
      setNormalSize(btnGooglePlay)
    })
    btnGooglePlay.addEventListener('mouseleave', () => {
      setNormalSize(btnApplePlay)
      setNormalSize(btnGooglePlay)
    })
  } else {
    return null
  }
}

scrollTrigger(firstParenLine)
scrollTrigger(firstTextLine)
scrollTrigger(firstOpacityElems)
scrollTrigger(firstFadeOpacityElems)

document.addEventListener('DOMContentLoaded', e => {
  Marquee3k && Marquee3k.init()
  Marquee3k.pauseAll();

  scrollTrigger(textLine)
  scrollTrigger(opacityElems)
  scrollTrigger(fadeOpacityElems)
  scrollTrigger(lines)
  scrollTrigger(marqueeLines, (el) => {
    Marquee3k.playAll()
  })

  burger.addEventListener('click', e => {
    e.preventDefault();
    toggleClass(burger, 'active')
    toggleClass(mobMenu, 'show')
    toggleClass(document.body, 'overflow')
  })
  // sliders with options
  {
    let numSize = "0.52vw"
    const initNum = () => {
      if (windowWidth <= (568)) {
        numSize = "11.52vw"
      } else {
        numSize = "0.52vw"
      }
    }
    initNum()

    const cardSliderOptions = {
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      speed: 600,
      effect: "creative",
      parallax: true,

      creativeEffect: {
        limitProgress: 2,
        prev: {
          shadow: true,
          translate: [0, 0, -400],
          scale: [0],
          opacity: 0,
        },
        next: {
          translate: [`calc(100% + ${numSize})`, 0, 0],
        },
      },
      breakpoints: {
        568: {
          slidesPerView: "auto",
          spaceBetween: 10
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
    const slider_1 = sliderInit(".adventure__phone");
    const slider_2 = sliderInit(".cards-slider__slider", cardSliderOptions);

    slider_2.controller.control = slider_1;
    slider_2.on("slideChange", function () {
      const phoneHand = document.querySelector('.adventure__phone-hand');
      sliderPrety(slider_2, windowWidth);
      if (slider_2.slides.length - 1 === slider_2.activeIndex) {
        phoneHand.classList.add('show')
      } else {
        phoneHand.classList.remove('show')
      }
    });
    window.addEventListener('resize', () => {
      initNum()
    })
  }


  openElems.forEach(el => {
    el.addEventListener('click', e => {
      const selector = document.querySelector(el.dataset.open);
      addClass(selector, 'show')
      addClass(document.body, 'overflow')
    })
  })
  closeElems.forEach(el => {
    el.addEventListener('click', e => {
      const selector = el.parentElement
      removeClass(selector, 'show')
      removeClass(document.body, 'overflow')
    })
  })

  quests.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      const head = e.target.closest('.question-item__header')
      if (head) {
        el.classList.toggle('open')
      }
    })
  })

  cardsAdaptive(windowWidth)
  journeyCardsAdaptive(windowWidth)
  hoverBtns(windowWidth)

  logo.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  })

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
    formAdaptive(windowWidth)
    sectionHeightInit(windowWidth);
    cardsAdaptive(windowWidth)
    journeyCardsAdaptive(windowWidth)
    hoverBtns(windowWidth)
  })

  window.addEventListener(
    "scroll",
    function () {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && lastScrollTop > window.innerHeight / 8) {
        setHeader(true);
      } else if (st === 0) {
        setHeader(false);
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );

})


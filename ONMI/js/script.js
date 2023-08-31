"use strict";
import {sliderInit} from "./module/sliderInit.min.js";
import {CustomScroll} from './module/CustomScroll.min.js'
import {setHeader} from "./module/setHeader.min.js";
import {sectionHeightInit} from "./module/sectionHeightInit.min.js";
import {
    scalingFoo,
    verticalTransform
} from "./module/GSAPAnim.js";
import {formAdaptive, cardsAdaptive, journeyCardsAdaptive} from "./module/adaptiveResize.min.js";
import {addClass, toggleClass, removeClass} from "./module/handleClassnames.min.js";
import {scrollTrigger} from "./module/ScrollTrigger.min.js";


let windowWidth = window.innerWidth
const createScript = (id, src) => {
    const script = document.createElement('script')
    script.setAttribute('src', src)
    script.setAttribute('id', id)
    script.setAttribute('type', 'module')
    script.setAttribute('defer', '')
    return script
}

const addScripts = (windowWidth) => {
    if (windowWidth > 768) {
        if (!document.querySelector('#scriptDesktop')) {
            document.body.append(createScript('scriptDesktop', "js/scriptDesktop.min.js"))
        }
    } else {
        if (!document.querySelector('#scriptMob')) {
            document.body.append(createScript('scriptMob', "js/scriptMob.min.js"))
        }
        if (document.querySelector('#scriptDesktop')) {
            document.querySelector('#scriptDesktop').remove()
            location.reload();
        }
    }
}
addScripts(windowWidth);
// const
const logo = document.querySelector('.header__logo')
// ------- First and massive elems
const firstParenLine = document.querySelectorAll('.parent-line.first-load')
const firstTextLine = document.querySelectorAll('.text-line.first-load')
const firstOpacityElems = document.querySelectorAll('[data-effect="opacity"].first-load');
const firstFadeOpacityElems = document.querySelectorAll('[data-effect="fade-down"].first-load');
// ------- First and massive elems
const textLine = document.querySelectorAll('.text-line:not(.first-load)')
const opacityElems = document.querySelectorAll('[data-effect="opacity"]:not(.first-load)');
const fadeOpacityElems = document.querySelectorAll('[data-effect="fade-down"]:not(.first-load)');
const pinEl = document.querySelector(".description-reality__content");
const btnGooglePlay = document.querySelector('.platform__btn_google')
const btnApplePlay = document.querySelector('.platform__btn_apple')
const marqueeLines = document.querySelectorAll('.marquee3k')
const quests = document.querySelectorAll(".question-item")
const lines = document.querySelectorAll(".line");
const securityBlock = document.querySelector('.security');
const pvpPose1 = document.querySelector('.pvp-pose_1')
const pvpPose2 = document.querySelector('.pvp-pose_2')

const video1 = document.querySelector('#video_phone')
const openElems = document.querySelectorAll('[data-open]')
const closeElems = document.querySelectorAll('.modal__close')
const burger = document.querySelector('.header__burger')
const mobMenu = document.querySelector('.mob-menu')
const modal = document.querySelector('.modal')
sectionHeightInit(windowWidth);
gsap.registerPlugin(ScrollTrigger);

scrollTrigger(firstParenLine)
scrollTrigger(firstTextLine)
scrollTrigger(firstOpacityElems)
scrollTrigger(firstFadeOpacityElems)

const showEl = (el, isShow) => {
    if (isShow) {
        el.classList.add('show');
        el.classList.remove('hide');
    } else {
        el.classList.add('hide');
        el.classList.remove('show')
    }
};
const sliderPrety = (slider) => {
    let rightProp = '7vw'
    if (windowWidth > (992)) {
        rightProp = '8.8vw'
    } else if (windowWidth < (768)) {
        rightProp = 0
    }
    const arrSliders = slider.slides;
    const lastEl = arrSliders[arrSliders.length - 1];
    if (slider.activeIndex === arrSliders.length - 1) {
        lastEl.style.right = rightProp;
        lastEl.style.transotionDuration = "600ms";
    } else {
        lastEl.style.right = "0vw";
        lastEl.style.transotionDuration = "600ms";
    }
};
const scalingBtnPositive = (el) => {
    el.style.width = `120%`
    el.style.borderRadius = '15.10vw'
}
const scalingBtnNegative = (el) => {
    el.style.width = `80%`
}
const setNormalSize = el => {
    el.style.width = "100%"
}
const leveSizeBtns = () => {
    setNormalSize(btnApplePlay)
    setNormalSize(btnGooglePlay)
}
const hoverGoogleBtn = () => {
    scalingBtnPositive(btnGooglePlay)
    scalingBtnNegative(btnApplePlay)
}
const hoverAppleBtn = () => {
    scalingBtnPositive(btnApplePlay)
    scalingBtnNegative(btnGooglePlay)
}

// initPage start
// functions


// initPage end
const descrReality = (windowWidth) => {
    if (windowWidth > (768)) {
        gsap.to(".description-reality", {
            ease: 'none',
            scrollTrigger: {
                trigger: ".description-reality",
                pinned: true,
                start: "top top",
                end: "bottom bottom",
                onToggle: (self) => showEl(pinEl, self.isActive),
            }
        })
    } else {
        gsap.to(".description-reality", {
            ease: 'none',
            scrollTrigger: {
                trigger: ".description-reality",
                pinned: true,
                start: "top top",
                end: "bottom+=10% bottom",
                onToggle: (self) => showEl(pinEl, self.isActive),
            }
        })
    }
}
const initPage = () => {
    modal.style.display = 'block';
    CustomScroll.init();
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh()
    /*  if (windowWidth > (768)) {
        gsap.to(securityBlock, {
          // yPercent: -100,
          ease: 'SineInOut',
          // stagger: 0.5,
          scrollTrigger: {
            trigger: '.cards-token',
            start: "center+=25% center",
            end: `+=200%`,
            scrub: true,
            pin: true
          }
        });
      }*/
    logo.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
    //init functions
    descrReality(windowWidth)
    verticalTransform(pvpPose1, pvpPose1, '5%', '-5%', true)
    verticalTransform(pvpPose2, pvpPose2, '-5%', '5%', true)
    windowWidth > (568) && scalingFoo(".pvp__title", ".pvp__descr", 1.7, 1, "top-=25% bottom", "50% center", true)
    // functions end

    scrollTrigger(textLine)
    scrollTrigger(opacityElems)
    scrollTrigger(fadeOpacityElems)
    scrollTrigger(lines)
// // questions
    quests.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            const head = e.target.closest('.question-item__header')
            if (head) {
                el.classList.toggle('open')
            }
        })
    })
    formAdaptive(windowWidth)
    Marquee3k && Marquee3k.init()
    Marquee3k.pauseAll();

    marqueeLines.forEach((el, index) => {
        gsap.to(el, {
            ease: 'none',
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                onToggle: (self) => {
                    self.isActive ? Marquee3k.play(index) : Marquee3k.pauseAll();
                },
            }
        })
    })


    if (windowWidth > (768)) {
        btnApplePlay.addEventListener('mouseenter', hoverAppleBtn)
        btnGooglePlay.addEventListener('mouseenter', hoverGoogleBtn)
        btnApplePlay.addEventListener('mouseleave', leveSizeBtns)
        btnGooglePlay.addEventListener('mouseleave', leveSizeBtns)
    }

// //init functions
    video1 && video1?.currentTime > 0 && video1?.play()

    burger.addEventListener('click', e => {
        e.preventDefault();
        toggleClass(burger, 'active')
        toggleClass(mobMenu, 'show')
        toggleClass(document.body, 'overflow')
    })
    // // sliders
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
            const phone = document.querySelector('.adventure__phone-phone');
            sliderPrety(slider_2);
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

    cardsAdaptive(windowWidth)
    journeyCardsAdaptive(windowWidth)
}
document.addEventListener('DOMContentLoaded', () => {
    initPage();
})
window.addEventListener('resize', () => {
    descrReality(windowWidth)
    addScripts(windowWidth)
    windowWidth = window.innerWidth
    formAdaptive(windowWidth)
    sectionHeightInit(windowWidth);
    cardsAdaptive(windowWidth)
    journeyCardsAdaptive(windowWidth)
})
let lastScrollTop = 0;
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

import {showMarker} from "./showMarkers.js";
import {setStyle} from "./setStyle.js";

export const triggerAnimate = (el, trigger, start) => {
  setStyle(el, el.dataset)

  ScrollTrigger.create({
    trigger: trigger || el,
    start: start || 'top bottom',
    onToggle: self => el.classList.add('animate'),
  })
}
/*export const animTextLine = (el, trigger) => {
  gsap.fromTo(el, {
    opacity: 0,
    y: "100%",
    rotate: '0.001deg'
  }, {
    opacity: 1,
    y: 0,
    rotate: 0,
    // delay: delay,
    // duration: duration,
    scrollTrigger: {
      trigger: trigger || el,
      start: 'top bottom+=20%'
    }
  })
}*/
/*export const fadeDown = (el, trigger, yStart, start) => {
  const delay = el.getAttribute('data-delay') || 0
  const duration = el.getAttribute('data-duration') || 0.8
  gsap.fromTo(el, {
    y: yStart || "50",
  }, {
    y: 0,
    delay: delay,
    duration: duration,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: trigger || el,
      start: start || 'top-=10% bottom-=10%'
    }
  })
  gsap.fromTo(el, {
    opacity: 0,
  }, {
    opacity: 1,
    delay: +delay + +duration / 3,
    duration: duration - duration / 3,
    // delay: +delay + +duration / 1.6,
    // duration: duration,
    ease: "power4.in",
    scrollTrigger: {
      trigger: el.parentElement && el,
      start: start || 'top+=10% bottom+=10%',
    },
  })
}*/

export const fadeUp = el => {
  const delay = el.getAttribute('data-delay') || 0
  const duration = el.getAttribute('data-duration') || 2
  gsap.fromTo(el, {
    opacity: 0,
    skewY: 3,
    y: "-30%"
  }, {
    opacity: 1,
    skewY: 0,
    y: "0",
    delay: delay,
    duration: duration,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: el,
    }
  })
}

export const leftToRight = (el, trigger, start) => {
  if (el) {
    gsap.fromTo(el, {
      width: 0,
    }, {
      width: "100%",
      delay: 0,
      duration: 0.8,
      ease: "power1.inOut",
      scrollTrigger: {
        start: start || "top bottom",
        trigger: trigger ? trigger : el,
      }
    })
  }
}
export const svgDraw = (el, tirgger, start, dashOffset) => {
  const delay = el.getAttribute('data-delay') || 0
  const duration = el.getAttribute('data-duration') || 0.8

  gsap.to(el, {
    strokeDashoffset: dashOffset || 0,
    delay: delay,
    duration: duration,
    ease: "power1.inOut",
    scrollTrigger: {
      start: start || "top bottom",
      trigger: tirgger ? tirgger : el
    }
  })
}

export const horizontalTransform = (el, trigger, startVal, endValue, scrub = true, ease, start, end) => {
  const delay = el.getAttribute('data-delay') || 0
  const duration = el.getAttribute('data-duration') || 1.2
  gsap.fromTo(el, {
    x: startVal || 0,
  }, {
    x: endValue || '100%',
    ease: ease || "none",
    delay: delay,
    duration: duration,
    scrollTrigger: {
      trigger: trigger || el,
      start: start || "center bottom",
      end: end || "bottom center",
      scrub: scrub
    }
  })
}
export const verticalTransform = (el, trigger, startVal, endValue, scrub = true, starAnim, endAnim) => {
  const delay = el.getAttribute('data-delay') || 0
  const duration = el.getAttribute('data-duration') || 1.2
  gsap.fromTo(el, {
    y: startVal || 0,
  }, {
    y: endValue || '100%',
    ease: "none",
    delay: delay,
    duration: duration,
    scrollTrigger: {
      trigger: trigger || el,
      start: starAnim || "top bottom",
      end: endAnim || "bottom top",
      scrub: scrub
    }
  })
}
export const readText = (el, trigger) => {
  gsap.to(el, {
    duration: 2,
    ease: 'none',
    opacity: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: trigger || el,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    }
  })
}
export const drawSvgLine = (el, trigger, markers) => {
  gsap.to(el, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: trigger || el,
      start: 'top bottom',
      end: 'center-=15% top',
      scrub: true,
      onUpdate: ((self) => {
        const progress = self.progress.toFixed(2)
        showMarker(progress, markers)
      })
    }
  })
}
export const scalingFoo = (el, trigger, startScale = 1, endScale = 1.4,
                           start = 'top bottom', end = 'bottom top', scrub = false) => {
  gsap.fromTo(el, {
    scale: startScale
  }, {
    scale: endScale,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: trigger || el,
      start: start,
      end: end,
      scrub: scrub,
    }
  })
}

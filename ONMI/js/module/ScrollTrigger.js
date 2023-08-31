import {setStyle} from './setStyle.min.js';

export const scrollTrigger = (els, options = {}) => {
  els = Array.from(els)
  els.forEach(el => {
    setStyle(el, el.dataset)
    addObserver(el, options)
  })
}

function addObserver(el, options) {
  if (!('IntersectionObserver' in window)) {
    if (options.cb) {
      options.cb(el)
    } else {
      entry.target.classList.add('animate')
    }
    return
  }
  let observer = new IntersectionObserver((entries, observer) => {
    //this takes a callback function which receives two arguments: the elemts list and
    //the observer instance
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el)
        } else {
          entry.target.classList.add('animate')
        }
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(el)
}

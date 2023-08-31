"use strict";
const changePosition = (changedElem, beforeElem, innerStartElem, mediaSize) => {
  const windowSize = window.innerWidth
  if (windowSize <= mediaSize) {
    beforeElem.before(changedElem)
  } else {
    innerStartElem.prepend(changedElem)
  }
}

const fundingTitle = document.querySelector('.funding__title')
const fundingImg = document.querySelector('.funding__img')
const fundingContent = document.querySelector('.funding__content')

const whatTitle = document.querySelector('.what__title')
const whatImg = document.querySelector('.what__img')
const whatContent = document.querySelector('.what__content')


if (whatTitle != null) {
  changePosition(whatTitle, whatImg, whatContent, 768)
}
if (fundingTitle != null) {
  changePosition(fundingTitle, fundingImg, fundingContent, 768)
}


window.addEventListener("resize", function () {
  if (whatTitle != null) {
    changePosition(whatTitle, whatImg, whatContent, 768)
  }
  if (fundingTitle != null) {
    changePosition(fundingTitle, fundingImg, fundingContent, 768)
  }
});

const scrollElements = document.querySelectorAll('.custom-scroll')
if (scrollElements.length > 0) {
  scrollElements.forEach(el => {
    Scrollbar.init(el, {});
  })
}
// custom-select

const closeSelect = (el) => {
  el.classList.remove('show')
}
const selectOption = (option, select) => {
  option.classList.add('active')
  select.classList.add('selected')
  closeSelect(select)
  const val = option.textContent
  select.querySelector('.custom-select__val').textContent = val
  select.querySelector('.custom-select__input').setAttribute('value', val.replace(/ /g, ''))
}

const selects = document.querySelectorAll('.custom-select')
selects.forEach(el => {
  el.querySelector('.custom-select__header').addEventListener('click', (e) => {
    const thisSelect = e.target.closest('.custom-select')
    if (!thisSelect.classList.contains('show')) {
      thisSelect.classList.add('show')
    } else {
      thisSelect.classList.remove('show')
    }
    const thisOptions = thisSelect.querySelectorAll('.custom-select__item')
    thisOptions.forEach(el => {
      el.addEventListener('click', (e) => {
        thisOptions.forEach(el => { el.classList.remove('active') })
        selectOption(el, thisSelect)
      })
    })
  })
})

document.addEventListener('click', e => {
  if (!e.target.closest('.custom-select')) {
    selects.forEach(select => closeSelect(select))
  }
})
const isFirst = sessionStorage.getItem("isFirstLoad")
const offHeroAnimation = function () {
  const headerElems = document.querySelectorAll('.header [data-effect]')
  const heroElems = document.querySelectorAll('.hero [data-effect]')
  const btnsElems = document.querySelectorAll('.fixed-btns__app')
  headerElems.forEach(el => {
    el.dataset.effect = ''
  })
  heroElems.forEach(el => {
    el.dataset.effect = ''
  })
  btnsElems.forEach((el,idx) => {
    el.dataset.delay = 0.1 * idx
  })
}
if (!isFirst) {
  sessionStorage.setItem("isFirstLoad",true);
} else {
  offHeroAnimation()
  console.log('second');
}

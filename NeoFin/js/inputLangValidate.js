const addErrorMessage = (el) => {
  el.classList.add('error')
}
const removeErrorMessage = (el) => {
  el.classList.remove('error')
}

const validate = (el, errorEl) => {
  const reg = /[а-яА-ЯёЁ]/g;
  if (el.value.search(reg) != -1) {
    el.value = el.value.replace(reg, '');
    addErrorMessage(errorEl)
  } else {
    removeErrorMessage(errorEl)
  }
}
const inputEl = document.querySelectorAll('#email')
inputEl.forEach(el => {
  el.addEventListener('keyup', function (e) {
    console.log(e.target.parentElement);
    validate(e.target, e.target.parentElement)
  })
})

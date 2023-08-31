function showPopup(el) {
  $('.popups').show();
  $(el).show();
}
function closePopup() {
  $('.popups').hide();
  $('.popup').hide()
}

$('[data-popup]').on('click', function (e) {
  e.preventDefault()

  let el = $(this).attr('data-popup')

  showPopup(el)
});

$('.js-close-popup').on('click', function () {
  closePopup()
});
document.addEventListener('click', e => {
  if (e.target.className === 'popups__inner') {
    closePopup()
  }
});
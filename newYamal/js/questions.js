$('.questions-item__quest-header').on('click', function () {
  $(this).parents('.questions-item__quest').toggleClass('active')
  $(this).parents('.questions-item__quest').children('.questions-item__quest-body').slideToggle()
})
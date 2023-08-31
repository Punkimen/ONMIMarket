"use strict";
function showOutherBlock(block) {
  $('.form-block').removeClass('show')
  $(block).addClass('show');
}

$('#login-form').validate();

$("[data-showBlock]").on('click', function (e) {
  e.preventDefault()
  let block = $(this).attr('data-showBlock')
  showOutherBlock(block)
})

$('.enter').on('click', function (e) {
  e.preventDefault();
  if ($('#login-form').valid()) {
    window.location.href = $(this).attr('src-href');
  }
})

$('.js-showPassword').on('click', function () {
  let inp = $(this).parents('.form-block__input-inner').find('input')

  if (inp.attr('type') === 'password') {
    inp.attr('type', 'text')
  } else {
    inp.attr('type', 'password')
  }
})
$('.header__elem.hovered>.header__link').on('click', function () {
  const windowWidth = $(window).width();
  if (windowWidth <= 767) {
    $(this).parents('.header__elem').toggleClass('open')
  } else {
    return false;
  }
})
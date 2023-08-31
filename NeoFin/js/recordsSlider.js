$(document).ready(function () {
  const slider = $('.records-awards')
  if (slider) {
    slider.slick({
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-btn slick-btn__prev"><img src="img/icon/arrow.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-btn slick-btn__next"><img src="img/icon/arrow.svg" alt=""></button>'
    })
  }
});
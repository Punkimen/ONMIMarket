const aboutContentChanges = function () {
  const windowWidth = $(window).width()
  if (windowWidth < 768) {
    $('.about__wrapper').append($('.about-links'))
  } else {
    $('.about-content__bottom').prepend($('.about-links'))
  }

  if ($('.about-content__right').length !== 0) {
    if (windowWidth < 768) {
      $('.about-content__body').append($('.about-content__right'))
    } else {
      $('.about-content__wrapper').append($('.about-content__right'))
    }
  }
  if ($('.about-nordLight__global').length !== 0) {
    if (windowWidth < 768) {
      $('.about-links').before($('.about-nordLight__global'))
    } else {
      $('.about-content__bottom').append($('.about-nordLight__global'))
    }
  }
}
aboutContentChanges()

$(window).on('resize', function () {
  aboutContentChanges()
})

$('.about-content__show-btn').on('click', function () {
  $(this).toggleClass('active')
  $(this).parents('.about-content__top').find('.about-content__body').slideToggle(400)
})
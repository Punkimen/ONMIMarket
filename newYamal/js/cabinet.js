const posterSlider = new Swiper('.poster-slider', {
  slidesPerView: "auto",
  spaceBetween: 14,
  breakpoints: {
    990: {
      spaceBetween: 40
    }
  }
})

$('.category__btns').mCustomScrollbar({
  axis: "x",
});

const reviewsSlider = new Swiper('.reviews__slider', {
  slidesPerView: "auto",
  breakpoints: {
    768: {
      spaceBetween: 12
    },
    990: {
      spaceBetween: 20
    }
  }
})
const windowWidth = $(window).width()

$('.review-item__arrow--prev').on('click', function () {
  reviewsSlider.slidePrev()
})
$('.review-item__arrow--next').on('click', function () {
  reviewsSlider.slideNext()
})


animTabsInit()

function showTab(block) {
  $('.cabinet__item').removeClass('show')
  $(block).addClass('show');
}

$('.cabinet__tab').on('click', function () {
  let elemBlock = $(this).attr('data-tab')

  $('.cabinet__tab').removeClass('active')
  $(this).addClass('active')
})


$("[data-tab]").on('click', function (e) {
  e.preventDefault()
  let block = $(this).attr('data-tab')
  showTab(block)
})

$('.comment-block__event').on('click', function (e) {
  e.preventDefault()
  let index = $(this).index()
  $('.comment-block__comments-item').removeClass('show')
  console.log($('.comment-block__comments-item').eq(1));
  $('.comment-block__comments-item').eq(index).addClass('show')
})
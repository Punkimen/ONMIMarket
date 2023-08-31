const swiperReviews = new Swiper('.reviews__slider', {
  loop: false,
  spaceBetween: 15,
  slidesPerView: 1,
  autoHeigh: true,
  breakpoints: {

    992: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});
const swiperVideo = new Swiper('.reviews-videos__slider', {
  loop: false,
  spaceBetween: 15,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

let count = swiperReviews.activeIndex + 1;
let countMax = $('.reviews-slide').length;
function sliderCountSet(count) {
  $('#start-slide').text(count)
  $('#end-slide').text(countMax)
}
sliderCountSet()
function sliderCountPlus() {
  if (count < countMax) {
    count++
    sliderCountSet(count)
  }
}
function sliderCountMinus() {
  if (count > 1) {
    count--
    sliderCountSet(count)
  }
}

$('#reviews-slider__prev').on('click', function () {
  swiperReviews.slidePrev()
  swiperVideo.slidePrev();
  sliderCountMinus()
})
$('#reviews-slider__next').on('click', function () {
  swiperReviews.slideNext()
  swiperVideo.slideNext()
  sliderCountPlus()
})

swiperReviews.on('slideChange', function () {
  sliderCountSet(swiperReviews.activeIndex + 1)
});

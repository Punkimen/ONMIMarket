(function () {

  const swiperGids = new Swiper('.gids-slide', {
    loop: false,
    spaceBetween: 15,
    slidesPerView: 1,
    autoHeigh: true,
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


  let countMax = $('.gids-item').length;
  function sliderCountSet(count) {
    $('#start-slide-gids').text(count)
    $('#end-slide-gids').text(countMax)
  }

  const changePagination = (slider) => {
    sliderCountSet(slider.activeIndex + 1)
  }

  $('#gids-slider__prev').on('click', function () {
    swiperGids.slidePrev()
    changePagination(swiperGids)

  })
  $('#gids-slider__next').on('click', function () {
    swiperGids.slideNext()
    changePagination(swiperGids)
  })

  swiperGids.on('slideChange', function () {
    changePagination(swiperGids)
  });
})();


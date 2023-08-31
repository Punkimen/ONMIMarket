const posterSlider = new Swiper('.poster-slider', {
  slidesPerView: "auto",
  spaceBetween: 14,
  breakpoints: {
    767: {
      slidesPerView: 4,
    },
    990: {
      spaceBetween: 40
    }
  }
})
const seasonSlider = new Swiper('.season-event__slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
  breakpoints: {
    768: {
      spaceBetween: 22
    },
    990: {
      spaceBetween: 40
    }
  }
})

$('.season-event__arrow--next').on('click', function () {
  seasonSlider.slideNext()
})
$('.season-event__arrow--prev').on('click', function () {
  seasonSlider.slidePrev()
})
const cardPageGallery = new Swiper('.card-gallery__wrapper', {
  slidesPerView: "auto",
  spaceBetween: 11,
  breakpoints: {
    768: {
      spaceBetween: 13
    },
    990: {
      spaceBetween: 23
    }
  }
})

$('.card-gallery__arrow--next').on('click', function () {
  cardPageGallery.slideNext()
})
$('.card-gallery__arrow--prev').on('click', function () {
  cardPageGallery.slidePrev()
})

function scrollInit() {
  $('.category__btns').mCustomScrollbar({
    axis: "x",
  });
}
scrollInit()


// generate hotel-stars

const starsGenerate = () => {
  const starsInner = document.querySelectorAll('.card-hotel__stars')

  starsInner.forEach(el => {
    let starsQuantity = +el.getAttribute('data-stars')
    for (let i = 0; i < starsQuantity; i++) {
      let starEl = document.createElement('img')
      starEl.setAttribute('src', 'img/icon/star.svg')
      el.append(starEl)
    }
  })
}
starsGenerate()


// showCatalog
// .hotel-choose__variants.showSearch
$('#show-var').on('click', function () {
  const windowWidth = $(window).width();
  let dataDo = $(this).attr('data-do')
  if (dataDo === 'show') {
    if (windowWidth < 768) { $('.hotel-choose__catalog').show() }
    $(this).parents('.hotel-choose__filter').find('.hotel-choose__btns').addClass('visible')
    // $(this).parents('.hotel-choose__filter').addClass('showSearch')
    $(this).text('Изменить поиск').attr('data-do', 'change')
    animTabsInit()
  } else if (dataDo === 'change') {

    if (windowWidth < 768) { $('.hotel-choose__catalog').hide() }
    $(this).parents('.hotel-choose__filter').find('.hotel-choose__btns').removeClass('visible')
    $(this).text('Посмотреть варианты').attr('data-do', 'show')
    animTabsInit()
  }
})

function filterStyler() {
  const windowWidth = $(window).width();
  if (windowWidth < 414) { $('.hotel-choose__filter').removeClass('showSearch') }
  if (windowWidth > 768) {
    $('.hotel-choose__catalog').show();
  }
}
filterStyler()

$(window).on('resize', function () {
  filterStyler()
})
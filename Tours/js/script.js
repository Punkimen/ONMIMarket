"use strict";
// change theme 
(function () {
  $('#change-theme').on('change', function () {
    $('body').toggleClass('dark')
  })
})();

// header
(function () {
  $('.burger__icon').on('click', function () {
    $(this).toggleClass('active');
    $('.mob-menu').slideToggle();
    $('body').toggleClass('overlay')
  });
  $('.header__profile').on('click', function () {
    $('.profile-menu').slideToggle()
  })

  document.addEventListener('click', function (e) {
    if ((!e.target.closest('.header__profile')) && (!e.target.closest('.profile-menu')) || (e.target.closest('.profile-menu__btn'))) {
      $('.profile-menu').slideUp();
    }
  })

  const mobmenuAddedNav = () => {
    const windowWidth = $(window).width();
    if (windowWidth <= 992) {
      $('.mob-menu__content').prepend($('.header__nav'))
      $('.mob-menu__content').append($('.header__lang'))
      $('.mob-menu__top').prepend($('.switch-theme'))
    } else {
      $('.header__logo').after($('.header__nav'))
    }
  }
  const mobmenuAddedOther = () => {
    const windowWidth = $(window).width();
    if (windowWidth <= 768) {
      $('.mob-menu__content').append($('.header__lang'))
      $('.mob-menu__top').prepend($('.switch-theme'))
    } else {
      $('.profile').after($('.header__lang'))
      $('.profile').before($('.switch-theme'))
    }
  }
  mobmenuAddedNav()
  mobmenuAddedOther()
  $(window).on('resize', function () {
    mobmenuAddedNav();
    mobmenuAddedOther();
  })

})();
// costum-select
(function () {
  $('.custom-select__header').on('click', function () {
    $(this).parents('.custom-select').toggleClass('open')
    $(this).next().slideToggle()
  })

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.custom-select')) {
      $('.custom-select__body').slideUp();
      $('.custom-select').removeClass('open')
    }
  })

  $('.custom-select__radio').on('click', function () {
    let value = $(this).val()
    $(this).parents('.custom-select__item').addClass('current').siblings().removeClass('current')
    $(this).parents('.custom-select').find('.custom-select__val').text(value)
    $(this).parents('.custom-select').addClass('filed').removeClass('open')
    $(this).parents('.custom-select').addClass('filed').removeClass('error')
    $(this).parents('.custom-select__body').slideToggle()
    // $(this).parents()
  })
})();


// animation
(function () {
  let bgItems = document.querySelectorAll('.hero__bg-item')
  function mainScreenBgAnimation() {
    let count = 0

    bgItems.forEach(el => {
      let index = el.getAttribute('data-index')
      el.style.zIndex = index
    })
    bgItems[count].classList.add('active')

    const heroBtns = document.querySelector('.hero__btns')

    heroBtns.addEventListener('mousemove', function (e) {
      const imgIndex = e.target.getAttribute('data-bg');
      if (imgIndex == 1) {
        bgItems.forEach(el => {
          el.classList.remove('active')
        })
        bgItems[imgIndex].classList.add('active')
      } else if (imgIndex == 2) {
        bgItems.forEach(el => {
          el.classList.remove('active')
        })
        bgItems[imgIndex].classList.add('active')
      }
    })
    heroBtns.addEventListener('mouseleave', function () {
      bgItems.forEach(el => {
        el.classList.remove('active')
      })
      bgItems[0].classList.add('active')
    })
  }
  if (bgItems.length) {
    mainScreenBgAnimation();
  }
})();


// 100vh height
(function () {
  const setHeight = (el) => {
    const paddingHeader = parseFloat($('.header').css('paddingTop')) + parseFloat($('.header').css('paddingBottom'))
    const headerHeight = $('.header').height() + paddingHeader
    $(el).css({
      'height': `calc(100vh - ${headerHeight}px)`
    })
  }
  setHeight('.100vh')
  $(window).on('resize', function () {
    setHeight('.100vh')
  })
})();

// video-popup

$(document).ready(function () {
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});

$('.mfp-close').innerText = ``
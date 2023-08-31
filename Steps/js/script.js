"use strict";

// header
(function () {
  function changeHeader() {
    const windowWidth = $(window).width();

    if (windowWidth < 767) {
      $('.header-mobile__wrapper').prepend($('.header__menu'))
    } else {
      $('.header__logo').after($('.header__menu'))
    }
  }
  changeHeader()
  $(window).on('resize', function () {
    changeHeader()
    createBtnChangePos()
  })

  $('.burger__icon').on('click', function () {
    $(this).toggleClass('active');
    $('.header-mobile').slideToggle()
  })

  $('.user__btn').on('click', function () {
    $(this).toggleClass('active')
    $('.user-menu').slideToggle()
  })

  function createBtnChangePos() {
    if ($('.header__btn_create-project').length > 0) {
      const windowWidth = $(window).width();
      if (windowWidth <= 992) {
        $('.user-menu').append($('.header__btn_create-project'))
      } else {
        $('.header__btns').prepend($('.header__btn_create-project'))
      }
    }
  }
  createBtnChangePos()
})();
// header end

// main section

(function () {
  const checkboxes = [
    {
      text: "POS credit / Buy Now Pay Later",
      value: "",
      name: "checkbox",
    },
    {
      text: "Decision engine / Credit scoring",
      value: "",
      name: "checkbox",
    },
    {
      text: "Loan accounting system",
      value: "",
      name: "checkbox",
    },
    {
      text: "APIs integrations",
      value: "",
      name: "checkbox",
    },
    {
      text: "Digital onboarding + KYC",
      value: "",
      name: "checkbox",
    },
    {
      text: "CRM",
      value: "",
      name: "checkbox",
    },
    {
      text: "Debt Collection",
      value: "",
      name: "checkbox",
    },
    {
      text: "Mobile API",
      value: "",
      name: "checkbox",
    },
  ];

  const renderCheckbox = function () {
    checkboxes.forEach(({ text, value, name }) => {
      const checkboxesInner = document.querySelector('.main__checkboxes-inner')
      const checkbox = document.createElement('div')

      checkbox.classList.add('main__checkbox')
      checkbox.innerHTML = `
      <label class="control control-group__item control-checkbox">
        <div class="contol-group__text">${text}</div>
        <input type="checkbox" name="${name}" value="${value}" />
        <div class="control_indicator"></div>
      </label>
      `

      checkboxesInner.append(checkbox)

    })
  }

  const mainDemoChangePosition = function () {
    const windowWidth = $(window).width()
    if (windowWidth <= 1200) {
      $('.main .container').append($('.main__demo'))
    } else {
      $('.main .big-container').append($('.main__demo'))
    }
  }

  $('.show-modules').on('click', function () {
    if ($(this).hasClass('show')) {
      $('.main__checkboxes-inner').removeClass('show')
      $(this).find('.show-modules__text').text('show 5 more modules')
    } else {
      $('.main__checkboxes-inner').addClass('show')
      $(this).find('.show-modules__text').text('hide 5 modules')
    }
    $(this).toggleClass('show')
  });

  if ($('.main__checkboxes-inner').length > 0) {
    renderCheckbox();
  }
  mainDemoChangePosition();
  $(window).on('resize', function () {
    mainDemoChangePosition()
  });

  // animation for checkbox added
  const checkboxesInner = document.querySelector('.main__checkboxes-inner')
  const animationBlocInner = document.querySelector('.main__demo-btn')
  const btn = document.querySelector('.main__demo-btn>.demo-btn')
  if (checkboxesInner) {
    checkboxesInner.addEventListener('click', function (e) {
      if (e.target.closest('input') && e.target.checked === true) {
        btn.style.animation = ''
        const animBlock = document.createElement('div')
        animBlock.classList.add('animation-block')
        animationBlocInner.append(animBlock)
        animBlock.style.animation = '';
        animBlock.style.animation = `addedBlock 1s ease 1 forwards`;
        setTimeout(function () {
          btn.style.animation = `bounce .3s ease 1 normal`;
          animBlock.remove()
        }, 900)
      }
    })
  }
})();

// main section end

// benefits

(function () {
  $(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  });

  $('.benefits__tabs-elem').on('click', function (e) {
    e.preventDefault();
    $('.benefits__tabs-elem').css({
      "border-bottom": "1px solid #CECECE"
    })
    let index = $(this).index()
    $('.benefits__tabs-elem').removeClass('active')
    $(this).addClass('active')
    $('.benefits-item').removeClass('show')
    $('.benefits-item').eq(index).addClass('show')
    $(this).css({
      "border": "none"
    })
    $(this).prev().css({
      "border": "none"
    })

  })

  const sliderInit = function () {
    const windowWidth = $(window).width()
    if (windowWidth <= 767) {
      $('.benefits__body').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-btn slick-btn__prev"><img src="img/icon/arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn__next"><img src="img/icon/arrow.svg" alt=""></button>'
      });
    } else if ((windowWidth > 767) && $('.slick-initialized').length != 0) {
      $('.benefits__body').slick('unslick');
    }
  }
  sliderInit()
  $(window).on('resize', function () {
    sliderInit()
  })
})();

// benefits end

// pricing

(function () {
  const summText = $('#summ')
  $(".js-range-slider").ionRangeSlider({

    skin: "round",
    prettify_enabled: false,
    min: 0,
    max: 3000,
    from: 1350,
    // postfix: " active loans per month"
    onStart: function (data) {
      summText.text(`$${data.from}`);
      costumnPostfixCreate()
    },
    onChange: function (data) {
      summText.text(`$${data.from}`)
      costumnPostfixCreate()
    }
  }
  );

  function costumnPostfixCreate() {
    const innerPostfix = document.querySelector('.pricing-item__range .irs-single')
    const textBlcok = document.createElement('div')
    textBlcok.classList.add('postfix-range')
    textBlcok.innerText = 'active loans per month'
    innerPostfix.append(textBlcok)
  }

  if ($('.pricing-item__range .irs-single').length > 0) {
    costumnPostfixCreate();
  }

})();

// pricing end

// testimonials

(function () {
  const testimonialsWrapper = document.querySelector('.testimonials__wrapper')
  const sliderInit = function () {
    const windowWidth = $(window).width()
    if (windowWidth <= 767) {
      $('.testimonials__wrapper').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-btn slick-btn__prev"><img src="img/icon/arrow.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-btn__next"><img src="img/icon/arrow.svg" alt=""></button>'
      });
    } else if ((windowWidth > 767) && $('.slick-initialized').length != 0) {
      $('.testimonials__wrapper').slick('unslick');
      return false
    }
  }
  if (testimonialsWrapper) {
    sliderInit()
    $(window).on('resize', function () {
      sliderInit()
    })
  }
})();

// testimonials end

// scrollBarInits

(function () {
  var Scrollbar = window.Scrollbar;
  if ($('.testimonials-trusted__inner').length > 0) {
    Scrollbar.init(document.querySelector('.testimonials-trusted__inner'));

  }
  if ($('.scroll-block').length > 0) {
    const scrollBlocks = document.querySelectorAll('.scroll-block');
    scrollBlocks.forEach(el => {
      Scrollbar.init(el);
    })
  }
})();

// scrollBarInits end

// questions

(function () {
  const moveQuestion = function () {
    const windowWidth = $(window).width()
    if (windowWidth <= 768) {
      $('.questions__items').after($('.questions__info'))
    } else {
      $('.questions__title').after($('.questions__info'))
    }
  }
  moveQuestion()
  $(window).on('resize', function () {
    moveQuestion()
  })

  $('.questions-item__head').on('click', function () {
    $(this).parent().toggleClass('show')
  })

})();

// questions end

// tech-doc

$('.tech-doc__header').on('click', function () {
  $(this).toggleClass('active')
  $(this).next().slideToggle();
});

// tech-doc end

// controlPanel

//// sign-up

(function () {
  $('.sign-up__handle').on('click', function () {
    let index = $(this).index()
    $('.sign-up__step').removeClass('show')
    $('.sign-up__handle').removeClass('active')
    $(this).addClass('active')
    $('.sign-up__step').eq(index).addClass('show')
  })
})();

//// sign-up end


(function () {
  $('.choose-item input').on('click', function () {
    if ($(this).prop('checked') === true) {
      $(this).parents('.choose-item').addClass('checked')
    } else {
      $(this).parents('.choose-item').removeClass('checked')
    }
    $('.welcome-step__btns').addClass('show')
  });
  $('.choose-item__btn').on('click', function () {
    $(this).parents('.choose-item').toggleClass('open')
  });

  //// frequent questions

  $('.question-item__head').on('click', function () {
    $(this).parents('.question-item').toggleClass('active')
  })
  function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }
  function setCountForQuest() {

    let countList = 1;
    let countSublist = 1;
    const listElementsBlock = document.querySelectorAll('.frequent .tech-doc__header>span');
    const sublistElementsBlock = document.querySelectorAll('.question-item__label')
    listElementsBlock.forEach(el => {
      let textStart = el.textContent
      el.textContent = `${countList}. ${textStart}`


      findAncestor(el, 'benefits-item').querySelectorAll('.question-item__label')
        .forEach(el => {
          let textStart = el.textContent
          el.textContent = `${countList}.${countSublist} ${textStart}`
          countSublist++;
        })
      countList++;
    })
  }

  const setCountForQuestInit = function () {
    const windowWidth = $(window).width()
    if (windowWidth <= 768) {
      setCountForQuest()
    } else {
      return
    }
  }
  setCountForQuestInit()
  //// frequent questions end
})();
//// range-progress

(function () {
  if ($('#progress-demo').length) {
    $('#progress-demo').roundSlider({
      max: 30,
      value: 11,
      radius: 60,
      sliderType: "min-range",
      readOnly: true,
      handleShape: "round",
      radius: "40",
      lineCap: "round",
      startAngle: 90,
      width: "7",
      tooltipFormat: function (args) {
        return `${args.value} <div>days</div>`;
      },
      start: "tooltipVal",
      change: "tooltipVal"
    })
    function tooltipVal(args) {
      return args.value + "days";
    }
  }
})();

//// range-progress end

// controlPanel end

// footer

(function () {
  const moveSocials = function () {
    const windowWidth = $(window).width()
    if (windowWidth <= 768) {
      $('.footer__descr').after($('.footer-socials'))
    } else {
      $('.footer__right').prepend($('.footer-socials'))
    }
  }
  moveSocials()
  $(window).on('resize', function () {
    moveSocials()
  })
})();

// footer end

// costumn-select
(function () {
  const select = document.querySelector('.costum-select')
  const selectHeader = $('.costum-select__header')
  const selectOption = $('.costum-select__option>input')

  selectHeader.on('click', function () {
    $(this).parent().toggleClass('open')
  })
  selectOption.on('click', function () {
    const value = $(this).val()
    const selectVal = $(this).parents('.costum-select').find('.costum-select__val')
    selectVal.text(value);
    $(this).parents('.costum-select').removeClass('open')
  })
  if (select) {
    document.addEventListener('click', e => {
      if (!e.target.closest('.costum-select')) {
        $('.costum-select').removeClass('open')
      }
    })
  }
})();
// costumn-select end

// create-prject

//// steps-changed
(function () {
  let countStep = 0;
  function nextStep() {
    if (countStep !== 3) {
      $('.create-project__item').removeClass('show')
      $('.step-progress__item').eq(countStep).addClass('done')
      countStep++;
      $('.step-progress__item').eq(countStep).addClass('active')
      $('.create-project__item').eq(countStep).addClass('show')
    }
  }
  function prevStep() {
    if (countStep !== 0) {
      $('.create-project__item').removeClass('show')
      $('.step-progress__item').eq(countStep).removeClass('done active')
      countStep--;
      $('.step-progress__item').eq(countStep).removeClass('done')
      $('.create-project__item').eq(countStep).addClass('show')
    }
  }
  $('.next-step__btn').on('click', e => {
    e.preventDefault()
    nextStep()
  })
  $('.back-step__btn').on('click', e => {
    e.preventDefault()
    prevStep()
  })
})();
//// steps-changed end


////changed-color

(function () {
  $('input[name="design-interface"]').on('change', function () {
    let val = $(this).val()
    if (val === 'default') {
      $('.appearance__colors').removeClass('show')
    } else {
      $('.appearance__colors').addClass('show')
    }
  })

  $('input[name="choose-color"]').on('input', function () {
    const elChanged = $(this).attr('data-for');
    const val = $(this).val()
    $(elChanged).val(val)
  })
  $('input[name="color"]').on('change', function () {
    const elChanged = "#" + $(this).attr('id');
    const val = $(this).val()
    $('input[data-for="' + elChanged + '"]').val(val)
  })
})();

//// changed-color end

// create-prject end


// filter-table
$('.change-filter').on('click', function () {
  $(this).toggleClass('rotate')
})
// filter-table end


// popup
const timer = (seconds, el, cb) => {
  let sec = seconds;
  let h, m, s, t;
  function countDown() {
    if (sec > 0) {
      sec--;
      h = sec / 3600 ^ 0,
        m = (sec - h * 3600) / 60 ^ 0,
        s = sec - h * 3600 - m * 60,
        t = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
      el.text(t);
    } else {
      if (cb != null) {
        cb()
      }

      return false
    }
    setTimeout(function () {
      countDown();
    }, 1000);
  }
  countDown()
}
function showPopup(el) {
  $('.popups').show();
  $(el).addClass('show');
}
function closePopup() {
  $('.popups').hide();
  $('.popup').removeClass('show')
}
function noCloseShowPopup(el) {
  $('.popups-noclose').show();
  $(el).addClass('show');
}
function noCloseClosePopup() {
  $('.popups-noclose').hide();
  $('.popup').removeClass('show')
}
$('[data-popup]').on('click', function (e) {
  e.preventDefault()

  let el = $(this).attr('data-popup')

  showPopup(el)
  timer(3, $('.timer'), null)
  // timer(3, $('.timer'), closePopup)
});


const popupTimerProgress = (seconds) => {
  $('.popup-timer__progress').roundSlider({
    max: seconds,
    value: seconds,
    radius: 55,
    sliderType: "min-range",
    readOnly: true,
    handleShape: "round",
    lineCap: "round",
    startAngle: 90,
    width: "11",
    tooltipFormat: function (args) {
      return args.value < 10 ? `00:0${args.value}` : `00:${args.value}`;
    },
    start: "tooltipVal",
    change: "tooltipVal"
  })
}

let stopIndex = 0

$('.timer-popup[data-popup]').on('click', function (e) {
  e.preventDefault()
  stopIndex++
  if (stopIndex === 1) {
    let seconds = 12
    popupTimerProgress(seconds);
    let el = $(this).attr('data-popup')
    const setValueSlider = (index) => {
      $('.popup-timer__progress').roundSlider(
        { value: index, }
      )
    }
    const startTimer = setInterval(function () {
      console.log(seconds);
      seconds--
      setValueSlider(seconds)
      if (seconds <= 0) {
        clearInterval(startTimer)
      }
    }, 1000)
    timer(seconds, $('.timer'), function () {
      closePopup(el)
    })
  }
  showPopup(el)
  timer(seconds, $('.timer'), function () {
    closePopup(el)
  })
});

$('.js-close-popup').on('click', function () {
  closePopup()
});
document.addEventListener('click', e => {
  if (e.target.className === 'popups__inner') {
    closePopup()
  }
});
// popup end

// loading progress
function loadingProgress() {
  const loadingProgress = $('.loading__progress');
  const val = loadingProgress.attr('data-value');
  loadingProgress.css({
    "width": val + '%',
  })
}
loadingProgress()
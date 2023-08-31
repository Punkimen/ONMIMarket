// 'use strick'
let lang = $('.header__lang');
let langItem = $('.header__lang-item');

$('.header__lang').click(function () {
    $(this).toggleClass('active');
})

$('.header__lang-item').click(function () {
    let setLang = $('.header__lang').data('location'),
        dataLangSelect = $(this).data('lang')
    $('.header__lang').data('location', dataLangSelect);
    $('.header__lang-item').removeClass('active');
    $(this).toggleClass('active');
})

$('select').on('change', function () {
    $(this).css('color', '#333');
})

$('#radio_idCard').on('click', function (event) {
    $('.passport__content-section').removeClass('visible');
    $('.idCard__content-section').addClass('visible');
    $('.passport__inner').removeClass('visible');
    $('.idCard__inner').addClass('visible');
})
$('#radio_passport').on('click', function (event) {
    $('.passport__content-section').addClass('visible');
    $('.idCard__content-section').removeClass('visible');
    $('.passport__inner').addClass('visible');
    $('.idCard__inner').removeClass('visible');
})
$('.passport__content-section').addClass('visible');
$('.passport__inner').addClass('visible');
$('.header__mobile').css('display', 'none')
$('.header__mobil-menu').on('click', function () {
    $('.header__mobile').slideToggle();
    if ($('.header__mobil-menu > img').attr('src') == 'illustration/close.svg') {
        $('.header__mobil-menu > img').attr('src', 'illustration/menu.svg')
    } else {
        $('.header__mobil-menu > img').attr('src', 'illustration/close.svg')
    }
})

$('.file').on('change', function () {
    $(this).children('.select-file').css('display', 'none');
    $(this).children('.downloaded-file').css('display', 'inline-block');
})

let stepItem = $('.register__wrapper-item'),
    nextBtn = $('.nextBtn'),
    prevBtn = $('.prevBtn'),
    index = 0;
let svgActive = $('.svg__path');
nextBtn.on('click', function () {
    stepItem.eq(index).slideUp(500);
    svgActive.eq(index).addClass('finish')
    index += 1;
    stepItem.eq(index).slideDown(500);
    svgActive.eq(index).addClass('active');

    if (index == 0) {
        prevBtn.html('Отменить')
    } else if (index == 1) {
        prevBtn.html('Назад')
    } else if (index == 5) {
        nextBtn.html('Оформить');
        nextBtn.addClass('last')
    }

})
prevBtn.on('click', function () {
    stepItem.eq(index).slideUp(500);
    svgActive.eq(index).removeClass('active')
    index -= 1;
    stepItem.eq(index).slideDown(500);
    svgActive.eq(index).removeClass('finish');
    if (index < 0) {
        location.reload();
    } else if (index == 0) {
        prevBtn.html('Отменить');
    } else if (index == 4) {
        nextBtn.html('Продолжить');
        nextBtn.addClass('last');
        nextBtn.removeClass('last')
    }
})


document.querySelectorAll('.header-about').forEach(elem => {
    elem.addEventListener('touchend', function () {
        this.parentElement.classList.toggle('active-list-about');
    })
})
document.querySelectorAll('.item-question').forEach(elem => {
    elem.addEventListener('touchend', function () {
        document.querySelectorAll('.active-item-question').forEach(elem => {
            elem.classList.remove('active-item-question');
        });
        this.classList.add('active-item-question');
    })
});

let tabHead = $('.tabs__header-item');
let tabContent = $('.tabs__content-item');
tabContent.hide()
tabContent.eq(0).show()
tabHead.on('click', function () {
    let index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    tabContent.eq(index).slideDown().siblings().slideUp();
})

let creditsTabs = $('.credits__tabs-title'),
    creditsContent = $('.credits__tabs-content');


creditsTabs.on('click', function () {
    $(this).next().slideToggle();
})

let tabMobile = $('.tabs__wrapper-mobile .tabs__wrapper-header');
let contentMobile = $('.tabs__wrapper-mobile .tabs__wrapper-content');

tabMobile.on('click', function () {
    tabMobile.removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
    $('.tabs__wrapper-content').slideUp();
    $(this).next().slideDown();
})


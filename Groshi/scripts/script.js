$('.reviews__slider').slick({
    arrows: true,
    swipe: true,
    dots: true,
    adaptiveHeight: true,
    nextArrow: '<button type="button" class="slick-next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.52114 6L6.51235 12L8 10.5106L3.49644 6L8 1.48942L6.51235 -6.50272e-08L0.52114 6Z" fill="#111111"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.52114 6L6.51235 12L8 10.5106L3.49644 6L8 1.48942L6.51235 -6.50272e-08L0.52114 6Z" fill="#111111"/></svg></button>',
});

$('.burger__menu').on('click', function () {
    $('.menu-phone').slideToggle();
    if ($('.burger__menu').hasClass('close')) {
        $('.burger__menu').removeClass('close');
    } else {
        $('.burger__menu').addClass('close');
    }
})

$('.rigistration__window-exit').on('click', function () {
    $('.registration__window').hide()
})

$('#radio_passport').on('click', function () {
    $('.registration__step-passport').show();
    $('.registration__step-card').hide();
    $('.cabinet__global-passport').show();
    $('.cabinet__global-IDcard').hide();
})
$('#radio_idCard').on('click', function () {
    $('.registration__step-passport').hide();
    $('.registration__step-card').show();
    $('.cabinet__global-passport').hide();
    $('.cabinet__global-IDcard').show();
})

$('select').on('change', function () {
    $(this).css('color', '#111');
})

$('#photo').on('change', function () {
    $(this).parent().prev().addClass('download');
    $(this).parent().html('Загрузить другую');
})

$('.notidication__info-more').on('click', function () {
    $(this).parent().parent().toggleClass('active');
    if ($(this).parent().parent().hasClass('active')) {
        $(this).html('Скрыть')
    } else {
        $(this).html('Подробнее')
    }
})
$('.notification__pagination li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
})


let answerHead = $('.FAQ__head-item'),
    answerContent = $('.FAQ__content');
answerHead.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    let index = $(this).index();
    answerContent.eq(index).addClass('active').siblings().removeClass('active');
})
let answerTitle = $('.FAQ__content-title');
answerTitle.on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
})

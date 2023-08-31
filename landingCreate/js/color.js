let purple = $('.purple');
let darkBlue = $('.darkBlue');
let grey = $('.grey');
let green = $('.green');
let blue = $('.blue');
let orange = $('.orange');
let turquoise = $('.turquoise');
let start = $('.start');
let footer = $('footer');
let postFooter = $('.post-footer');
purple.on('click', function () {
    if ($('#style-color').hasClass('second__color-turquoise')) {
        $('#style-color').attr('class', 'style__color-purple second__color-turquoise');
    } else {
        $('#style-color').attr('class', 'style__color-purple second__color-orange');
    }
    $('.why-image').attr('src', 'illustration/purple/image1.svg');
    $('.spend-image').attr('src', 'illustration/purple/image2.svg');
    $('.advans-image').attr('src', 'illustration/purple/image3.svg');
    $('.item-way-img').attr('src', 'illustration/purple/image4.svg');
    $('.item-way-img2').attr('src', 'illustration/purple/image5.svg');
    $('.quetions-image').attr('src', 'illustration/purple/image6.svg');
});
darkBlue.on('click', function () {
    if ($('#style-color').hasClass('second__color-turquoise')) {
        $('#style-color').attr('class', 'style__color-darkBlue second__color-turquoise');
    } else {
        $('#style-color').attr('class', 'style__color-darkBlue second__color-orange');
    }
    $('.why-image').attr('src', 'illustration/dark_blue/image1-1.svg');
    $('.spend-image').attr('src', 'illustration/dark_blue/image2-1.svg');
    $('.advans-image').attr('src', 'illustration/dark_blue/image3-1.svg');
    $('.item-way-img').attr('src', 'illustration/dark_blue/image4-1.svg');
    $('.item-way-img2').attr('src', 'illustration/dark_blue/image5-1.svg');
    $('.quetions-image').attr('src', 'illustration/dark_blue/image6-1.svg');
});
green.on('click', function () {
    if ($('#style-color').hasClass('second__color-turquoise')) {
        $('#style-color').attr('class', 'style__color-green second__color-turquoise');
    } else {
        $('#style-color').attr('class', 'style__color-green second__color-orange');
    }
    $('.why-image').attr('src', 'illustration/green/image1-3.svg');
    $('.spend-image').attr('src', 'illustration/green/image2-3.svg');
    $('.advans-image').attr('src', 'illustration/green/image3-3.svg');
    $('.item-way-img').attr('src', 'illustration/green/image4-3.svg');
    $('.item-way-img2').attr('src', 'illustration/green/image5-3.svg');
    $('.quetions-image').attr('src', 'illustration/green/image6-3.svg');
});
grey.on('click', function () {
    if ($('#style-color').hasClass('second__color-turquoise')) {
        $('#style-color').attr('class', 'style__color-grey second__color-turquoise');
    } else {
        $('#style-color').attr('class', 'style__color-grey second__color-orange');
    }
    $('.why-image').attr('src', 'illustration/grey/image1-2.svg');
    $('.spend-image').attr('src', 'illustration/grey/image2-2.svg');
    $('.advans-image').attr('src', 'illustration/grey/image3-2.svg');
    $('.item-way-img').attr('src', 'illustration/grey/image4-2.svg');
    $('.item-way-img2').attr('src', 'illustration/grey/image5-2.svg');
    $('.quetions-image').attr('src', 'illustration/grey/image6-2.svg');
});
blue.on('click', function () {
    if ($('#style-color').hasClass('second__color-turquoise')) {
        $('#style-color').attr('class', 'style__color-blue second__color-turquoise');
    } else {
        $('#style-color').attr('class', 'style__color-blue second__color-orange');
    }
    $('.why-image').attr('src', 'illustration/blue/image1-4.svg');
    $('.spend-image').attr('src', 'illustration/blue/image2-4.svg');
    $('.advans-image').attr('src', 'illustration/blue/image3-4.svg');
    $('.item-way-img').attr('src', 'illustration/blue/image4-4.svg');
    $('.item-way-img2').attr('src', 'illustration/blue/image5-4.svg');
    $('.quetions-image').attr('src', 'illustration/blue/image6-4.svg');
});

orange.on('click', function () {
    if ($('#style-color').hasClass('second__color-turquoise')) {
        $('#style-color').removeClass('second__color-turquoise');
        $('#style-color').addClass('second__color-orange');
    } else {
        $('#style-color').addClass('second__color-orange');
    }

});

turquoise.on('click', function () {
    if ($('#style-color').hasClass('second__color-orange')) {
        $('#style-color').removeClass('second__color-orange');
        $('#style-color').addClass('second__color-turquoise');
    } else {
        $('#style-color').addClass('second__color-turquoise');
    }
});

let logoLeft = $('.vidjet__logo-left'),
    logoCenter = $('.vidjet__logo-center'),
    logoRight = $('.vidjet__logo-right'),
    newLogo = $('<div>LOGO</div>').attr({ 'class': 'logo' });


$('.vidjet__logo-item').not('.active').click(function () {
    let index = $(this).index();
    let content = $('.vidjet__logo-item').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
});
$('.vidjet__position-item').not('.active').click(function () {
    let index = $(this).index();
    let content = $('.vidjet__position-item').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
});
newLogo.prependTo('header');
logoLeft.on('click', function leftPos() {

    if ($(window).width() < '1140') {
        return false;
    } else {
        newLogo.prependTo('header');
        $('.desktop-nav').css({
            'width': '770px',
        })
    }

});
logoCenter.on('click', function centerPos() {

    if ($(window).width() < '1140') {
        return false;
    } else {
        newLogo.insertAfter($('.desktop-nav').find($('a').eq(3)));
        $('.desktop-nav').css({
            'width': '1000px',
        })
    }
});
logoRight.on('click', function rightPos() {

    if ($(window).width() < '1140') {
        return false;
    } else {
        newLogo.insertAfter('.desktop-nav');
        $('.desktop-nav').css({
            'width': '770px',
        })
    }
});

let posStandart = $('.vidjet__position-standart');
let posMirror = $('.vidjet__position-mirror');

posStandart.on('click', function () {
    $('#style-color').attr('data-pos', '');
});
posMirror.on('click', function () {
    $('#style-color').attr('data-pos', 'mirror');
});

let arrow = $('.vidjet-arrow');
let vidjet = $('.vidjet');

arrow.on('click', function () {
    if (arrow.hasClass('show')) {
        arrow.removeClass('show');
        vidjet.addClass('posVidjet')
    } else {
        arrow.addClass('show')
        vidjet.removeClass('posVidjet')
    }
});



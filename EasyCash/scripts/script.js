let lang = $('.account__language-item')
lang.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
})

$('.accordion__title').on('click', function () {
    $(this).toggleClass('active').next().slideToggle();
    return false;
});

$('.info__slider').slick({
    arrows: false,
    swipe: true,
    dots: true,
    adaptiveHeight: true
});

$('.burger__menu').on('click', function () {
    $('.mainMenu').slideToggle();
    return false;
})


if ($(window).width() <= '750') {
    $('.menu__list-link').on('click', function () {
        $('.header__menu').slideToggle();
    })
}

$('.credits-contract').on('click', function () {
    $(this).toggleClass('active').parent(this).next().slideToggle();
})

$('.pay-cards-btn').on('click', function () {
    $('.pay-cards-add').slideToggle();
    return false;
})


$('.file').on('change', function () {
    $(this).children('.select-file').css('display', 'none');
    $(this).children('.downloaded-file').css('display', 'inline-block');
})

$('select').on('change', function () {
    $(this).css('color', '#333');
    $('.lang').css('color', '#fff');
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

$('.reg__step-code').eq(0).css('display', 'block');

$('.passport__content-section').addClass('visible');
$('.passport__inner').addClass('visible');
let stepItem = $('.reg__step-code');
let index = 0;


$('#price-range-filter-header').click(function () {
    FilterContainerSlideUpDown('filter_but', 'price-range-filter-header');
});
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 300,
        values: [0, 300],
        step: 5,
        slide: function (event, ui) {
            $("#slider-range-caption").html('<?=$currency_type->symbol?>' + ui.values[0] + ' - ' + '<?=$currency_type->symbol?>' + ui.values[1]);
        },
        change: function (event, ui) {
            ApplyPriceRangeFilter(ui.values[0], ui.values[1]);
        }

    });

    $("#slider-range-caption").html('<?=$currency_type->symbol?>' + $("#slider-range").slider("values", 0) + ' - ' + '<?=$currency_type->symbol?>' + $("#slider-range").slider("values", 1));

    //initialise jquery scrollbar
});
$('.tabs__name-item').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
})

$('.verification-exit').on('click', function () {
    $(this).parent().hide()
})
$('.chatbot').on('click', function () {
    $('.chatbot__messanger').slideToggle()
})

$('.photo__nowork-btn').on('click', function () {
    $('.photo__wrapper-do').hide();
    $('.photo__nowork').hide();
    $('.take__photo-phone').show();
})
$('.photo__work-btn').on('click', function () {
    $('.photo__wrapper-do').show();
    $('.photo__nowork').show();
    $('.take__photo-phone').hide();
})

if ($(window).width() >= '450') {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('.account-verification').fadeIn(500)
        } else {
            $('.account-verification').fadeOut(300)
        }
        console.log($(window).scrollTop())
    });;
}

let checkboxAdress = $('input[name="checkbox-adressNo"]');

checkboxAdress.on('change', function (event) {
    if (this.checked == true) {
        $('.adress__reg-check').show(200);
    } else {
        $('.adress__reg-check').hide(200);
    }

})

let selectStatus = $('#live-status');
selectStatus.on('change', function () {
    let value = $(this).val();
    if (value == 1) {
        $('.reg-item_work').hide(200);
        $('.reg-item_study').show(200);
        $('.reg-item_ip').hide(200);
    } else if (value == 2) {
        $('.reg-item_work').show(200);
        $('.reg-item_study').hide(200);
        $('.reg-item_ip').hide(200);
    } else if (value == 3) {
        $('.reg-item_work').hide(200);
        $('.reg-item_study').hide(200);
        $('.reg-item_ip').show(200);
    } else {
        $('.reg-item_work').hide(200);
        $('.reg-item_study').hide(200);
        $('.reg-item_ip').hide(200);
    }
    console.log($(this).val())
})
// $('.reg-item_newCard').hide();
$('#addCard').on('click', function () {
    $('.reg-item_newCard').show(200);
    return false;
})

function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
$(document).ready(function () {
    equalHeight($(".balance__wrapper-window"));
});

$('.account__name').on('click', function () {
    $('.account__name-menu').slideToggle();
})
$('.header__account-phone').on('click', function () {
    $('.account__name-menu').slideToggle();
})

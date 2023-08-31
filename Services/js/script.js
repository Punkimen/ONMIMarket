$('.header-setting__click').on('click', function () {
    $('.header-setting__menu').slideToggle();
})
$('.header-setting__exit').on('click', function () {
    $('.header-setting__menu').slideUp();
})
let colorItem = $('.colorpicker__items-item');
colorItem.on('click', function () {
    let color = $(this).attr('data-color');
    $('.colorpicker__screen').css('background', color);
    $('.header').css('background', color);
    if (jQuery(window).width() > 990) {
        if ($(this).attr('data-color') == '#3F4E57' || $(this).attr('data-color') == '#4D22B2') {
            $('.header').css('color', '#fff')
        } else {
            $('.header').css('color', 'inherit')
        }
    }
})

$('.asside-accodion__title').on('click', function () {
    $(this).parent('.asside-accodion').toggleClass('active');
    $(this).toggleClass('active');
    $(this).next('.asside-accodion__content').slideToggle();
})

$('.oneCheckbox').click(function () {
    if ($(this).is(':checked')) {
        $('.oneCheckbox').not(this).prop('checked', false);
    }
});
$('.result-more__title').click(function () {
    $(this).toggleClass('active');
    $(this).next('.result-more__content').slideToggle();
})

let sortItemt = $('.sort-content__item');
sortItemt.on('click', function () {
    let sortValue = $(this).attr('data-sort');
    if ($(this).hasClass('active')) {
        if (sortValue == 'max') {
            $(this).attr('data-sort', 'min');
        } else {
            $(this).attr('data-sort', 'max');
        }
    } else { $(this).addClass('active').siblings().removeClass('active'); }
})

const SelectSort = () => {
    let sortSelect = $('.sort-select__item');
    let sortSelectOption = $('.sort-select__option');
    let sortSelectActive = $('.sort-select__item active');

    sortSelect.on('click', function () {
        let sortValue = $(this).attr('data-sort');
        if (sortValue == 'max') {
            $(this).attr('data-sort', 'min');
        } else {
            $(this).attr('data-sort', 'max');
        }
        $('.sort-select__menu-options').slideUp();
    })


    const valueOption = () => {
        let valOpt = 0;

        const optionHide = () => {
            console.log(valOpt);
            sortSelectOption.each(function () {
                if ($(this).attr('data-option') == valOpt) {
                    $(this).hide().siblings().show();
                }
            });
        }
        $('.sort-select__plus').on('click', function () {
            $('.sort-select__menu-options').slideToggle();
            optionHide();
        })
        sortSelectOption.on('click', function () {
            let index = +$(this).attr('data-option');
            console.log(index);
            sortSelect.eq(index).addClass('active').siblings().removeClass('active');
            sortSelect.each(function () {
                if ($(this).hasClass('active')) {
                    let valOption = $(this).attr('data-option');
                    valOpt = valOption;
                }
            });
            optionHide();
        })
    }
    valueOption()

}
SelectSort();

function oneHeight() {
    var maxHeight = 0,
        element = $('.reviews-slider__item .review');

    element.each(function () {
        var elHeight = $(this).height();
        maxHeight = Math.max(elHeight, maxHeight);
    });

    element.height(maxHeight);
}

// slider
let slider = $('.blog-articles__slider');
if (jQuery(window).width() > 600) {
    slider.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        prevArrow: '<div class="slider-arrows slider-arrows__left"></div>',
        nextArrow: '<div class="slider-arrows slider-arrows__right"></div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },]
    })
}

// formValidate

$('#formVal_1').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        surname: {
            required: true,
            minlength: 2
        },
        fatherName: {
            required: true,
        },
        bornDate: {
            required: true,
        },
        pasportSer: {
            required: true,
        },
        pasportNum: {
            required: true,
        },
        issued: {
            required: true,
        },
        INN: {
            required: true,
        },
        issuedDate: {
            required: true,
        },
        loanSumm: {
            required: true,
        },
        loanTerm: {
            required: true,
        },
    },
    messages: {
        name: {
            required: "Пожалуйста заполните поле",
            minlength: "В имени миниму 2 символа"
        },
        surname: {
            required: "Пожалуйста заполните поле",
            minlength: "В фамилии миниму 2 символа"
        },
        fatherName: {
            required: "Пожалуйста заполните поле",
        },
        bornDate: {
            required: "Пожалуйста заполните поле",
        },
        pasportSer: {
            required: "Пожалуйста заполните поле",
        },
        pasportNum: {
            required: "Пожалуйста заполните поле",
        },
        issued: {
            required: "Пожалуйста заполните поле",
        },
        INN: {
            required: "Пожалуйста заполните поле",
        },
        issuedDate: {
            required: "Пожалуйста заполните поле",
        },
        loanSumm: {
            required: "Пожалуйста заполните поле",
        },
        loanTerm: {
            required: "Пожалуйста заполните поле",
        },
    }
});
$('#formVal_2').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        surname: {
            required: true,
            minlength: 2
        },
        fatherName: {
            required: true,
        },
        bornDate: {
            required: true,
        },
        pasportSer: {
            required: true,
        },
        pasportNum: {
            required: true,
        },
        issued: {
            required: true,
        },
        INN: {
            required: true,
        },
        issuedDate: {
            required: true,
        },
        loanSumm: {
            required: true,
        },
        loanTerm: {
            required: true,
        },
    },
    messages: {
        name: {
            required: "Пожалуйста заполните поле",
            minlength: "В имени миниму 2 символа"
        },
        surname: {
            required: "Пожалуйста заполните поле",
            minlength: "В фамилии миниму 2 символа"
        },
        fatherName: {
            required: "Пожалуйста заполните поле",
        },
        bornDate: {
            required: "Пожалуйста заполните поле",
        },
        pasportSer: {
            required: "Пожалуйста заполните поле",
        },
        pasportNum: {
            required: "Пожалуйста заполните поле",
        },
        issued: {
            required: "Пожалуйста заполните поле",
        },
        INN: {
            required: "Пожалуйста заполните поле",
        },
        issuedDate: {
            required: "Пожалуйста заполните поле",
        },
        loanSumm: {
            required: "Пожалуйста заполните поле",
        },
        loanTerm: {
            required: "Пожалуйста заполните поле",
        },
    }
});
$('#bornDate').mask('00/00/0000', {
    placeholder: ".../.../...",
    selectOnFocus: true
})
$('#issuedDate').mask('00/00/0000', {
    placeholder: ".../.../...",
    selectOnFocus: true
})

let shadowWrapper = $('.allBlogs__wrapper')

shadowWrapper.on('scroll', function () {
    var scrollCoef = 0.0005;

    $('.allBlogs__wrapper-shadow').css({
        opacity: 1 - shadowWrapper.scrollTop() * scrollCoef
    });
    if ($('.allBlogs__wrapper-shadow').css('opacity') < 0.04) {
        $('.allBlogs__wrapper-shadow').hide()
    } else {
        $('.allBlogs__wrapper-shadow').show()
    }
});

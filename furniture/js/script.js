// burger-menu

let burgerMenu = $('.header__burger')
burgerMenu.on('click', () => {
    $('.burger__icon').toggleClass('active')
    $('.header-mobile').toggleClass('show')
})

let headerMobile = function () {
    let windowWidth = $(window).width();
    if (windowWidth < 993) {
        $('.header-mobile__container').prepend($('.header-search'))
        $('.header-search').after($('.header-bottom__menu'))
    } else {
        $('.header-main__left').after($('.header-search'))
        $('.header-bottom__container').prepend($('.header-bottom__menu'))
    }
    if (windowWidth < 768) {
        $('.header-mobile__container').append($('.header-phone'))
    } else {
        $('.header-main__right').prepend($('.header-phone'))
    }
    if (windowWidth < 569) {
        $('.header-bottom__menu').before($('.header-top__nav'))
    } else {
        $('.header-top__container').append($('.header-top__nav'))
    }
}
headerMobile()
$(window).resize(function () {
    headerMobile()
})


// burger-menu end

// slider

$('.slider-slick').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendArrows: $('.slider-slick__container'),
    prevArrow: '<div class="slider-slick__arrows slider-slick__arrows--left"></div>',
    nextArrow: '<div class="slider-slick__arrows slider-slick__arrows--right"></div>',
})
$('.catalog-slider__slick').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="catalog-slider__arrows catalog-slider__arrows--left"></div>',
    nextArrow: '<div class="catalog-slider__arrows catalog-slider__arrows--right"></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
})
// slider end

// costum select 

const select = () => {
    const costumSelectHeader = document.querySelectorAll('.costum-select__header');
    const costumSelectItem = document.querySelectorAll('.costum-select__item');
    const selectToogle = e => {
        e.currentTarget.parentElement.classList.toggle('active');
    }
    const selectChoice = e => {
        let item = e.currentTarget;
        let currentText = e.currentTarget.closest('.costum-select').querySelector('.costum-select__current');
        let costumSelect = e.currentTarget.closest('.costum-select');
        currentText.dataset.current = item.dataset.value;
        currentText.innerText = item.innerText;
        costumSelect.classList.remove('active');
    }

    costumSelectHeader.forEach(el => {
        el.addEventListener('click', selectToogle)
    })
    costumSelectItem.forEach(el => {
        el.addEventListener('click', selectChoice)
    })
}
select();

// costum select end
// range
$(".catalog-filter__input").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 100000,
    from: 8000,
    to: 50000,
    grid: false,
    onStart: function (data) {
        $('.catalog-range__min').text(data.from)
        $('.catalog-range__max').text(data.to)
    },
    onChange: function (data) {
        $('.catalog-range__min').text(data.from)
        $('.catalog-range__max').text(data.to)
    },
});
$(".big-filter__input").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 100000,
    from: 8000,
    to: 50000,
    grid: false,
});

// range end

// filter

$('.catalog-filter__title').on('click', function () {
    $(this).toggleClass('unactive')
    $(this).next().slideToggle()
})

// filter end

// map

ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
        center: [55.751574, 37.573856],
        zoom: 9
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Creating a content layout.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'This is a pretty placemark'
        }, {
            /**
             * Options.
             * You must specify this type of layout.
             */
            iconLayout: 'default#image',
            // Custom image for the placemark icon.
            iconImageHref: '../img/map-marker.png',
            // The size of the placemark.
            iconImageSize: [30, 42],
            /**
             * The offset of the upper left corner of the icon relative
             * to its "tail" (the anchor point).
             */
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'A custom placemark icon with contents',
            balloonContent: 'This one — for Christmas',
            iconContent: '12'
        }, {
            /**
             * Options.
             * You must specify this type of layout.
             */
            iconLayout: 'default#imageWithContent',
            // Custom image for the placemark icon.
            iconImageHref: 'images/ball.png',
            // The size of the placemark.
            iconImageSize: [48, 48],
            /**
             * The offset of the upper left corner of the icon relative
             * to its "tail" (the anchor point).
             */
            iconImageOffset: [-24, -24],
            // Offset of the layer with content relative to the layer with the image.
            iconContentOffset: [15, 15],
            // Content layout.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});


// map end
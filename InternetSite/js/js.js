$(".phone_menu").on("click", function () {
    $(".menu").toggleClass("active");
})
$(".menu a").on("click", function () {
    $(".menu").removeClass("active");
})

let head_menu = $(".head_menu")
let headerH = $("#header").innerHeight();
// scrolloffset выдает значение сколько мы проскролили
let scrolloffset = 0;
$(window).on("scroll", function () {

    // scrollTop(), скрол от верха страницы
    scrolloffset = $(this).scrollTop();



    if (headerH < scrolloffset) {
        head_menu.addClass("head_menu_fixed");
    } else {
        head_menu.removeClass("head_menu_fixed");
    }

})


$(".menu nav a").click(function () {
    // attr обращение к атрибуту
    let element = $(this).attr("href");
    // offset().top положение относительно верха экрана
    let dist = $(element).offset().top;

    //анимация
    $("html, body").animate({
        "scrollTop": dist,
    }, 1500);
    //предотващает обновление от нажатия на ссылку
    return flase;
})



//slider

$(".next").click(function () {
    let slideAct = $(".slider_item.slide_active");

    let indexSlideAct = slideAct.index();

    let nextSlideIndex = indexSlideAct + 1;

    let nextSlide = $(".slider_item").eq(nextSlideIndex);

    let cirle = $(".circle_item.active");
    let indexCircleAct = cirle.index();
    let NextIndexCircle = indexCircleAct + 1;
    let NextCircle = $(".circle_item").eq(NextIndexCircle);

    cirle.removeClass("active");

    if (NextIndexCircle == ($(".circle_item:last").index() + 1)) {
        $(".circle_item").eq(0).addClass("active");
    } else {

        NextCircle.addClass("active");
    }

    slideAct.fadeOut(1000);
    slideAct.removeClass("slide_active");

    if (nextSlideIndex == ($(".slider_item:last").index() + 1)) {
        $(".slider_item").eq(0).fadeIn(1000);
        $(".slider_item").eq(0).addClass("slide_active");
    } else {
        nextSlide.fadeIn(1000);
        nextSlide.addClass("slide_active");
    }
})


$(".pref").click(function () {
    let slideAct = $(".slider_item.slide_active");

    let indexSlideAct = slideAct.index();

    let prefSlideIndex = indexSlideAct - 1;

    let prefSlide = $(".slider_item").eq(prefSlideIndex);

    slideAct.fadeOut(1000);
    slideAct.removeClass("slide_active");

    prefSlide.fadeIn(1000);
    prefSlide.addClass("slide_active");


    let cirle = $(".circle_item.active");
    let indexCircleAct = cirle.index();
    let PrefIndexCircle = indexCircleAct - 1;
    let PrefCircle = $(".circle_item").eq(PrefIndexCircle);

    cirle.removeClass("active");
    PrefCircle.addClass("active");

})





// let circle = $(".circle_item");

// circle.click(function () {
//     if (!$(this).hasClass('active')) {
//         $(this).siblings().removeClass('active');
//         $(this).addClass('active');
//     }

//     let slideAct = $(".slider_item.slide_active");
//     let indexSlideAct = slideAct.index();


// })

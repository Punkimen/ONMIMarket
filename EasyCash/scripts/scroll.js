
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
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
if (jQuery(window).width() > 1020) {
    $(document).ready(function () {
        equalHeight($(".resctruction-pay__content-items"));
    });
}


let formatDate = 'December 25, 2020 00:00:00'

let toDate = new Date(formatDate).getTime();
let timer = setInterval(function () {
    let nowDate = new Date().getTime();
    let distance = toDate - nowDate;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $('.resctruction-timer__timer').text(day + 'д ' + hours + ':' + minutes + ':' + seconds);
    if (distance <= 86400000 && distance >= 3600000) {
        $('.resctruction-timer__timer').text(hours + ':' + minutes + ':' + seconds);
    } else if (distance <= 3600000 && distance >= 0) {
        $('.resctruction-timer__timer').text(minutes + ':' + seconds);
    } else if (distance < 0) {
        clearInterval(timer);
        $('.resctruction-timer__timer').text("Время истекло")
    }
}, 1000)
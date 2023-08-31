let formatDate = 'December 31, 2020 00:00:00'

let toDate = new Date(formatDate).getTime();
let timer = setInterval(function () {
    let nowDate = new Date().getTime();
    let distance = toDate - nowDate;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $('.timer').text(day + ' д ' + hours + ' ч ' + minutes + ' м ' + seconds + ' с');
    console.log(distance)
    if (distance <= 86400000 && distance >= 3600000) {
        $('.timer').text(hours + ' ч ' + minutes + ' м ' + seconds + ' с');
    } else if (distance <= 3600000 && distance >= 0) {
        $('.timer').text(minutes + ' м ' + seconds + ' с');
    } else if (distance < 0) {
        clearInterval(timer);
        $('.timer').text("Время истекло")
    }
}, 1000)
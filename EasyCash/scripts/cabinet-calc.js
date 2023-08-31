let summPlus = $('.summ_plus'),
    summMinus = $('.summ_minus'),
    termPlus = $('.term_plus'),
    termMinus = $('.term_minus'),
    term = + $('#term').val(),
    summFormat = + $('#summ').val(),
    getSumm = $('.get__sum'),
    returnSumm = $('.return__sum'),
    persent = 0.01;

summPlus.on('click', function (event) {
    if (summFormat !== 10000) {
        summFormat += 500;
        $('#summ').val(summFormat)
    };
    calc();
})
summMinus.on('click', function (event) {
    if (summFormat !== 0) {
        summFormat -= 500;
        $('#summ').val(summFormat)
        getSumm.html(summFormat)
    };
    calc();
})
termPlus.on('click', function (event) {
    if (term !== 30) {
        term += 1;
        $('#term').val(term)
    }
    calc();
})
termMinus.on('click', function (event) {
    if (term !== 10) {
        term--;
        $('#term').val(term)
    }
    calc();
})

let calc = function () {
    let summFormat = $('#summ').val(),//Сумма отформатированная
        summ = Number.parseInt( //Сумма без форматирования
            summFormat.replace(/\s/g, '')
        ),
        term = Number.parseInt($('#term').val()),//срок
        commission = 0,//Комиссия
        persent = 0.01,//думаю, можно менять в зависмости от срок займа
        cresitSumm = summ + (summ / 100 * persent) * term,//Сумма возврата без форматирования
        cresitSummFormat = +(Math.round(cresitSumm));//Сумма возврата отформатированная
    persent = +(persent);
    $('.get__term').text(term);
    $('.get__sum').text(summFormat);
    $('.return__sum').text(cresitSummFormat);
    $('.rate__sum').text(persent + '%');


    let left__pos = term * 0.7 + '%';
    let persent__block = $('.info__percent');
    let day__block = $('.quantity__center');
    let day__inp = term * 0.3;
    let day__inner = (Math.round(day__inp));
    persent__block.css({
        left: left__pos,
    })
    day__block.css({
        left: left__pos,
    })
    if (day__inner == 3 || day__inner == 4) {
        day__block.html(day__inner + ' дня');
    } else {
        day__block.html(day__inner + ' дней');
    }
}
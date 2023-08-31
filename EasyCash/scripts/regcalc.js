let regCalc = function ($) {
    'use strict';
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let termPlus = $('.date_plus'),
        termMinus = $('.date_minus'),
        summPlus = $('.sum_plus'),
        summMinus = $('.sum_minus'),
        term = + $('#term').val(),
        summFormat = + $('#summ').val(),
        getSumm = $('.get__sum'),
        returnSumm = $('.return__sum'),
        persent = 0.01;

    let handle = function () {
        summPlus.on('click', function (event) {
            if (summFormat !== 10000) {
                summFormat += 500;
                $('#summ').val(summFormat)
            }
            calc();
        })

        summMinus.on('click', function (event) {
            if (summFormat !== 0) {
                summFormat -= 500;
                $('#summ').val(summFormat)
            }
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
        $("#summ")
            .keyup(function () {
                let value = $(this).val();
                $("#summ").val(value)
                calc();
            })
            .keyup();
        $("#term")
            .keyup(function () {
                let value = $(this).val();
                $("#term").val(value)
                calc();
            })
            .keyup();
    };

    let calc = function () {
        let summFormat = $('#summ').val(),//Сумма отформатированная
            summ = Number.parseInt( //Сумма без форматирования
                summFormat.replace(/\s/g, '')
            ),
            term = Number.parseInt($('#term').val()),//срок
            commission = 0,//Комиссия
            persent = 0.01,//думаю, можно менять в зависмости от срок займа
            cresitSumm = summ + (summ / 100 * persent) * term,//Сумма возврата без форматирования
            cresitSummFormat = numberWithCommas(Math.round(cresitSumm));//Сумма возврата отформатированная
        persent = numberWithCommas(persent);

        $('.get__sum').text(summFormat);
        $('.return__sum').text(cresitSummFormat);
        $('.rate__sum').text(persent + '%');

    }

    let initialisation = function () {
        handle();
        calc();
    };
    return {
        init: function () {
            initialisation();
        },
    }
}(jQuery);
jQuery(document).ready(function ($) {
    regCalc.init();
});   
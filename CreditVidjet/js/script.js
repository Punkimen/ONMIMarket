let colorCheck = $('.color-item');
let memoryCheck = $('.memory-item');
colorCheck.on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active')
})
memoryCheck.on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active')
})

$('#credit-card').validate({
    rules: {
        numCard: {
            required: true,

        },
        dateCard: {
            required: true,
        },
        cvv: {
            required: true,
        },
        agree: {
            required: true,
        }
    },
    messages: {
        numCard: {
            required: "Error",
        },
        dateCard: {
            required: "Error",
        },
        cvv: {
            required: "Error",
        },
        agree: {
            required: "Підтвердіть угоду",
        }
    },
    highlight: function (element) {
        $(element).parent().addClass("field-error");
    },
    unhighlight: function (element) {
        $(element).parent().removeClass("field-error");
        $('#numCard').siblings('.input--numCard__type').show();
    },
})
$('#accept').on('change', () => {
    console.log($('#accept').is(':checked'));

    if ($('#accept').is(':checked')) {
        $('#card-btn').removeAttr('disabled')
    } else {
        $('#card-btn').prop('disabled', true)
    }
})

$('#agree').on('change', () => {
    console.log($('#agree').is(':checked'));

    if ($('#agree').is(':checked')) {
        $('#personalForm-btn').removeAttr('disabled')
    } else {
        $('#personalForm-btn').prop('disabled', true)
    }
})

$('#personalForm').validate({
    rules: {
        phone: {
            required: true,
        },
        date: {
            required: true,
        },
    },
    messages: {
        phone: {
            required: "Error",
        },
        date: {
            required: "Error",
        },
    },
    highlight: function (element) {
        $(element).parent().addClass("field-error");
        $('.credit__vidget-label--phone').addClass('label-error');
    },
    unhighlight: function (element) {
        $(element).parent().removeClass("field-error");
        $('.credit__vidget-label--phone').removeClass('label-error');
    },
    success: function (element) { $('#personalForm-btn').removeAttr('disabled') }
})
$('#userForm').validate({
    rules: {
        name: {
            required: true,
        },
        date: {
            required: true,
        },
        passport: {
            required: true,
        },
        dateGet: {
            required: true,
        },
        whoGet: {
            required: true,
        },
        INN: {
            required: true,
        },
        adress: {
            required: true,
        },
    },
    messages: {
        name: {
            required: "Error",
        },
        date: {
            required: "Error",
        },
        passport: {
            required: "Error",
        },
        dateGet: {
            required: "Error",
        },
        whoGet: {
            required: "Error",
        },
        INN: {
            required: "Error",
        },
    },

    highlight: function (element) {
        $(element).parent().addClass("field-error");
    },
    unhighlight: function (element) {
        $(element).parent().removeClass("field-error");
    }
})
$('#numCard').mask("0000 0000 0000 0000", {
    placeholder: "0000 0000 0000 0000",
    selectOnFocus: true
});
$('#dateCard').mask("00 / 00", {
    placeholder: "MM / РР",
    selectOnFocus: true
}); $('#cvv').mask("000", {
    placeholder: "XXX",
    selectOnFocus: true
});
$('#phone').mask("+380 ZZ ZZZ ZZ ZZ", {
    translation: {
        'Z': {
            pattern: /[0-9]/, optional: true
        },
        '0': { pattern: /\d/ },
    }
});

$('#dateBorn').mask("00.00.0000", {
    selectOnFocus: true
})
$('#userDate').mask("00.00.0000", {
    placeholder: "ДД.ММ.РРРР",
    selectOnFocus: true
})
$('#dateGet').mask("00.00.0000", {
    placeholder: "ДД.ММ.РРРР",
    selectOnFocus: true
})

let smscCodeValidate = () => {
    $('#sms-code').validate({
        rules: {
            sms: {
                required: true,
                number: true,
                maxlength: 4
            }
        },
        messages: {
            sms: {
                required: "Введите код",
                number: "Код состоит из цифр"
            }
        },
        highlight: function (element) {
            $(element).parent().addClass("field-error");
        },
        unhighlight: function (element) {
            $(element).parent().removeClass("field-error");
        }
    })
}

let smsCodeValue = $('#sms')
smsCodeValue.on('change', function (e) {
    let smsCodeValueLength = $('#sms').val().length
    console.log(smsCodeValueLength);
    if (smsCodeValueLength === 4) {
        $('#sms-code').submit()
    }
}, smscCodeValidate())
smsCodeValue.on('keydown', function (e) {
    let smsCodeValueLength = $('#sms').val().length
    console.log(smsCodeValueLength);
    if (smsCodeValueLength === 3) {
        $('#sms-code').submit()
    }
}, smscCodeValidate())
let seconds = 1 * 30 + 0, h, m, s, t;
function countDown() {
    if (seconds > 0) {
        seconds--;
        h = seconds / 3600 ^ 0,
            m = (seconds - h * 3600) / 60 ^ 0,
            s = seconds - h * 3600 - m * 60,
            time = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        $("#sms-timer").text(time);
    } else {
        $("#sms-timer").hide();
        $("#sms-btn").show();
    }
    setTimeout(function () {
        countDown();
    }, 1000);
}
countDown()


    // ````

    ; (function () {

        let smscCodeValidate_2 = () => {
            $('#sms-code_2').validate({
                rules: {
                    sms: {
                        required: true,
                        number: true,
                        maxlength: 4
                    }
                },
                messages: {
                    sms: {
                        required: "Введите код",
                        number: "Код состоит из цифр"
                    }
                },
                highlight: function (element) {
                    $(element).parent().addClass("field-error");
                },
                unhighlight: function (element) {
                    $(element).parent().removeClass("field-error");
                }
            })
        }

        let smsCodeValue_2 = $('#sms_2')
        smsCodeValue_2.on('change', function (e) {
            let smsCodeValueLength = $('#sms_2').val().length
            console.log(smsCodeValueLength);
            if (smsCodeValueLength === 4) {
                $('#sms-code_2').submit()
            }
        }, smscCodeValidate())
        smsCodeValue_2.on('keydown', function (e) {
            let smsCodeValueLength = $('#sms').val().length
            console.log(smsCodeValueLength);
            if (smsCodeValueLength === 3) {
                $('#sms-code_2').submit()
            }
        }, smscCodeValidate_2())
        let seconds = 1 * 30 + 0, h, m, s, t;
        function countDown() {
            if (seconds > 0) {
                seconds--;
                h = seconds / 3600 ^ 0,
                    m = (seconds - h * 3600) / 60 ^ 0,
                    s = seconds - h * 3600 - m * 60,
                    time = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
                $("#sms-timer_2").text(time);
            } else {
                $("#sms-timer_2").hide();
                $("#sms-btn_2").show();
            }
            setTimeout(function () {
                countDown();
            }, 1000);
        }
        countDown()
    })();
// ````

$('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    closeOnBgClick: true,
    enableEscapeKey: true,
    closeBtnInside: false
});

$('.popup__content').mCustomScrollbar({
    axis: "y",
});
$('.credit-flex__content--scroll').mCustomScrollbar({
    axis: "y",
});

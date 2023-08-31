'use strict'
function formValidate(form) {
    let error = 0;
    let formReq = form[0].querySelectorAll('.req')

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('email')) {
            if (emailTest(input)()) {
                formAddError(input);
                error++;
            }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    }
    if (error !== 0) {
        $('#message-error').show()
    }; if (error == 0) {
        $('#message-error').hide()
    }
    return error;
}
function formAddError(input) {
    input.parentElement.classList.add('inp-error');
}
function formRemoveError(input) {
    input.parentElement.classList.remove('inp-error');
}
function steps() {
    let index = 0;
    $('#step__btn-next').on('click', function (event) {
        event.preventDefault();
        let $currentStep = stepItem.eq(index);
        if (formValidate($currentStep))
            return false;

        stepItem.eq(index).fadeOut();
        if (index !== 2) {
            index += 1;
        }
        stepItem.eq(index).fadeIn();
        let inner = +$('.step__inner-num > span').html()
        if (inner !== 3) {
            inner += 1;
            $('.step__inner-num > span').html(inner);
        }
        if (inner == 3) {
            $('#newBtn').addClass('visible');
            $('#step__btn-next').hide()
        }
    })

    $('#step__btn-prev').on('click', function () {
        stepItem.eq(index).fadeOut();
        if (index !== 0) {
            index -= 1;
        }
        stepItem.eq(index).fadeIn();
        let inner = +$('.step__inner-num > span').html()
        if (inner !== 2) {
            inner -= 1;
            $('.step__inner-num > span').html(inner);

        };
        if (index == 2) {
            $('#newBtn').removeClass('visible');
            $('#step__btn-next').show()
        }
    })
    $('#newBtn').on('click', function () {
        const form = document.getElementById('form');
        form.addEventListener('submit', formSend);
        async function formSend(e) {
            e.preventDefault();
            let error = formValidate(form);
        }


    })
}
steps();

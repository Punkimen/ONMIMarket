'use strict'
let stepItem = $('.registration__step-item');
let stepDots = $('.registration__complite-step')
let index = 0;
let indexDots = 1;
stepItem.eq(0).css('display', 'block');
console.log(stepItem)
console.log(stepDots)
function formValidate(form) {
    let error = 0;
    let formReq = form[0].querySelectorAll('[required]')
    console.log(formReq)
    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('email')) {
            if (emailTest(input)()) {
                formAddError(input);
                formAddFiled(input);
                error++;
            }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            formRemoveFiled(input);
            error++;
        } else {
            if (input.value === '') {
                formAddError(input);
                formRemoveFiled(input);
                error++;
            } else {
                formAddFiled(input);
            }
        }
    }
    if (error !== 0) {
        $('#message-error').show()
    }; if (error == 0) {
        $('#message-error').hide();
    }
    console.log(error)
    return error;
}
function formAddError(input) {
    input.parentElement.classList.add('error-inp');
}
function formRemoveError(input) {
    input.parentElement.classList.remove('error-inp');
}
function formAddFiled(input) {
    input.parentElement.classList.add('filed');
}
function formRemoveFiled(input) {
    input.parentElement.classList.remove('filed');
}
function steps() {
    $('#step__btn-next').on('click', function (event) {
        event.preventDefault();
        let $currentStep = stepItem.eq(index);
        if (formValidate($currentStep))
            return false;

        stepItem.eq(index).fadeOut();
        if (index !== 3) {
            index += 1;
        }
        stepItem.eq(index).fadeIn();
        if (indexDots !== 4) {
            indexDots++;
            stepDots.eq(indexDots).addClass('active')
        }
        if (index == 3) {
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

        if (index !== 3) {
            $('#newBtn').removeClass('visible');
            $('#step__btn-next').show()
        }
        if (indexDots !== 1) {
            stepDots.eq(indexDots).removeClass('active')
            indexDots--;
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

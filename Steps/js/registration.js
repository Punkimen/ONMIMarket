"use strict";

// preventDefault click aside elem 
$('.registr__aside .benefits__tabs-elem').off('click')

const setProgressValue = () => {
  const progressItems = document.querySelectorAll('.progress-item')
  progressItems.forEach(el => {
    let val = el.getAttribute('data-val')
    el.querySelector('.progress-item__load').style.width = `${val}%`
  })
}
setProgressValue()
let countStep = 0;
const stepsName = [
  'Customer Information',
  'Banking Information',
  'Income & Employment Information',
  'Military',
  'References',
  'Login Info',
];
const countStepElem = document.querySelector('#count-step');
const nameStepElem = document.querySelector('#step-name');
const changeStepName = (text) => {
  nameStepElem.textContent = text
}
const changeStepCount = (count) => {
  countStepElem.textContent = count + 1
}
const showStep = (index) => {
  $('.registr-step__body-item').removeClass('show');
  $('.registr-step__body-item').eq(index).addClass('show');
}
const nextStep = () => {
  if (countStep != 5) {
    countStep++;
    changeStepName(stepsName[countStep])
    showStep(countStep)
    changeStepCount(countStep)
    $('.registr__aside .benefits__tabs-elem').removeClass('active')
    $('.registr__aside .benefits__tabs-elem').eq(countStep).addClass('active')
    $('.registr__aside .benefits__tabs-elem.active').prev().css({
      "border": "none"
    })
  } else if (countStep === 4) {
    $('#reg-capha').addClass('show')
  }
}
const prevStep = () => {
  if (countStep != 0) {
    countStep--;
    changeStepName(stepsName[countStep])
    changeStepCount(countStep)
    showStep(countStep)
    $('.registr__aside .benefits__tabs-elem').removeClass('active')
    $('.registr__aside .benefits__tabs-elem').eq(countStep).addClass('active')
    $('.registr__aside .benefits__tabs-elem.active').prev().css({
      "border": "none"
    })
  }
}
$('#registration-from').validate();

$('.registr-step__continue-btn').on('click', function (e) {
  e.preventDefault();
  if ($('#registration-from').valid()) {
    nextStep()
  }
})
$('.registr-step__previus-btn').on('click', function (e) {
  console.log(countStep);
  e.preventDefault();
  prevStep()
});
// datepicker init
(function () {
  $('.input-date input').daterangepicker({
    startDate: 0,
    singleDatePicker: true,
    showDropdowns: true,
    autoUpdateInput: false,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'), 10),
    autoApply: true,
    locale: {
      format: 'DD.MM.YYYY',
      cancelLabel: 'Clear',
      daysOfWeek: false,
    },
  });
  $('.input-date input').on('apply.daterangepicker', function (ev, picker) {
    $(this).val(picker.startDate.format('MM/DD/YYYY'));
  });
  $('.input-date input').on('cancel.daterangepicker', function (ev, picker) {
    $(this).val('');
  });
})();

// password show/hide

$('.password-eye').on('click', function () {
  if ($(this).siblings('input').attr('type') == 'password') {
    $(this).siblings('input').attr('type', 'text')
  } else {
    $(this).siblings('input').attr('type', 'password')
  }
})

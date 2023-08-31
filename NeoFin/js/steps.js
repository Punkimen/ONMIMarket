$('.steps__aside .benefits__tabs-elem').off('click')

let stepsCount = 0;

const nextStep = (count) => {
  $('.steps__aside .benefits__tabs-elem').removeClass('active')
  $('.steps__aside .benefits__tabs-elem').eq(count).addClass('active')
  $('.steps__aside .benefits__tabs-elem.active').prev().css({
    "border": "none"
  })
  $('.step-item__status').eq(count).addClass('active')
}
$('#step-number').on('input', function () {
  $(this).addClass('valid');
  if ($(this).hasClass('valid')) {
    nextStep(1);
    $('#step_2-photo-do').prop('disabled', false)
  }
})
$('#step_2-photo-do').on('click', function () {
  nextStep(2);
  $('#step_3-photo-do').prop('disabled', false)
})
$('#step_3-photo-do').on('click', function () {
  nextStep(3);
  $('.step-item__send').prop('disabled', false)
})


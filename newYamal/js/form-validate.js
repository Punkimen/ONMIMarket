// formValidate 
(function () {
  jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле",
  });
  $('.input-phone').mask('+7 000 000 00 00');
  $('.input-code').mask('0000');
  $('#form-ootp').validate();
})();

$('.send-js').on('click', function (e) {
  e.preventDefault()
  let form = $(this).parents('form')

  if (form.valid()) {
    console.log('work');
    closeModal()
    showPopup('#popup-sucses')
  } else {
    console.log('unwork');
  }
})
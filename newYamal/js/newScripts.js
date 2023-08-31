
jQuery.extend(jQuery.validator.messages, {
    required: "Заполните поле",
});
$('#ooptt-form').validate();

$('#ooptt-form__submit').on('click', function (e) {
    e.preventDefault();
    if ($('#ooptt-form').valid()) {
        let el = $(this).attr('data-popup')
        showPopup(el)
    }
})

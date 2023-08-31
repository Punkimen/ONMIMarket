$(".form-control").select2({
  minimumResultsForSearch: -1,
  tags: true,
  placeholder: `${this}.attr('data-placeholder')`,
});

$('.select2-selection__arrow').html(`
<svg class="">
<use xlink:href="./img/icons/icons.svg#arrow"></use>
</svg>
`);

// form validate
(function () {
  $(".form-control").select2({
    minimumResultsForSearch: -1,
    tags: true,
    placeholder: `${this}.attr('data-placeholder')`,
  });

  $('.select2-selection__arrow').html(`
  <svg class="">
  <use xlink:href="./img/icons/icons.svg#arrow"></use>
  </svg>
  `);
  const selectsElems = $('.find-tour__select .form-control')
  selectsElems.on('change', function () {
    $(this).addClass('filed');
    $(this).removeClass('error')
    $(this).next().removeClass('error')
  })
  selectsElems.each((index, el) => {
    el.nextElementSibling.setAttribute('data-error', el.getAttribute('data-error'))
  })
  const formValidate = (form) => {
    const inputsFileds = $('#find-tour .custom-select')
    const inputDate = $('#find-tour .input-date')

    selectsElems.each((index, el) => {
      if (!el.classList.contains('filed') && !el.classList.contains('custom-select__calendar')) {
        el.nextElementSibling.classList.add('error')
      } else {
        el.nextElementSibling.classList.remove('error')
      }
    })

    inputsFileds.each((index, el) => {
      if (!el.classList.contains('filed') && !el.classList.contains('custom-select__calendar')) {
        el.classList.add('error')
      } else {
        el.classList.remove('error')
      }
    })
    if (!inputDate.hasClass('filed')) {
      inputDate.addClass('error')
    }
    let error = $('#find-tour .error').length;
    if (error == 0) {
      $(form).submit()
    } else {
      return false
    }

  }
  $('#serch-btn').on('click', function () {
    formValidate('#find-tour')
  })
})();
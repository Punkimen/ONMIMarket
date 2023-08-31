
const calc = () => {
  // calc
  let $range = $("#calculation-range-summ"),
    $rangeTerm = $("#calculation-range-term"),
    $inputSumm = $("#summ"),
    $inputTerm = $("#term"),
    instanceSumm,
    instanceTerm,
    minSumm = 50,
    maxSumm = 5000,
    minTerm = 6,
    maxTerm = 36,
    plusSumm = $('.sum_plus'),
    minusSumm = $('.sum_minus'),
    plusTerm = $('.date_plus'),
    minusTerm = $('.date_minus');


  // summ
  $('#calculation-range-summ').ionRangeSlider({
    min: minSumm,
    max: maxSumm,
    step: 50,
    hide_min_max: true,
    hide_from_to: true,
    onStart: function (data) {
      $inputSumm.prop("value", data.from);
      calculation()
    },
    onChange: function (data) {
      $inputSumm.prop("value", data.from);
      calculation()
    }
  })
  instanceSumm = $range.data("ionRangeSlider");
  $inputSumm.on("input", function () {
    var val = $(this).prop("value");
    // validate
    if (val < minSumm) {
      val = minSumm;
    } else if (val > maxSumm) {
      val = maxSumm;
    }

    instanceSumm.update({
      from: val
    });
    calculation()
  });
  plusSumm.on('click', function () {
    let value = +$inputSumm.val()
    value += 50;
    if (value > maxSumm) {
      return false
    }
    $inputSumm.val(value)
    instanceSumm.update({
      from: value
    });
    calculation()
  })
  minusSumm.on('click', function () {
    let value = +$inputSumm.val()
    value -= 50;
    if (value < minSumm) {
      return false
    }
    $inputSumm.val(value)
    instanceSumm.update({
      from: value
    });
    calculation()
  })
  // summEnd

  //term

  $('#calculation-range-term').ionRangeSlider({
    min: minTerm,
    max: maxTerm,
    step: 6,
    hide_min_max: true,
    hide_from_to: true,
    onStart: function (data) {
      $inputTerm.prop("value", data.from);
      calculation()
    },
    onChange: function (data) {
      $inputTerm.prop("value", data.from);
      calculation()
    }
  })
  instanceTerm = $rangeTerm.data("ionRangeSlider");

  plusTerm.on('click', function () {
    instanceTerm.update({
      from: instanceTerm.old_from + 6
    });
    $inputTerm.val($('#calculation-range-term').val())
    calculation()
  })
  minusTerm.on('click', function () {
    instanceTerm.update({
      from: instanceTerm.old_from - 6
    });
    $inputTerm.val($('#calculation-range-term').val())
    calculation()
  })

  //term end

  function calculation() {
    let summ = +$('#summ').val();
    let term = +$('#term').val();
    let percent = 0.01;
    let creditSumm = summ / term
    let creditSummFormat = Math.round(creditSumm);
    $('#return__sum').text(summ)
    $('#quantity__num').text(term)
    $('#month-pay').text(creditSummFormat)
  }
  calculation()
}
calc()

$('.credits__calc-btn').on('click', function () {
  let creditSummFormat = Math.round(+$('#summ').val() / +$('#term').val());
  $('#contract-amount').text(`$${$('#summ').val()}`)
  $('#amount-credit').text(`$${creditSummFormat}`)
  $('#num-payments').text($('#term').val())
})
// calc
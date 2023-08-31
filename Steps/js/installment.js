(function () {
  if ($('.installment-progress__circle').length) {
    $('.installment-progress__circle').roundSlider({
      max: 3,
      value: 1,
      radius: 24,
      sliderType: "min-range",
      readOnly: true,
      handleShape: "round",
      lineCap: "round",
      startAngle: 90,
      width: "5",
      tooltipFormat: function (args) {
        return `${args.value}<span class="step-end">/3</span>`;
      },
      start: "tooltipVal",
      change: "tooltipVal"
    })
    function tooltipVal(args) {
      return args.value + "Credit already paid";
    }
  }
  const setValueSlider = (index) => {
    $('.installment-progress__circle').roundSlider(
      { value: index, }
    )
  }
  // next steps
  let countStep = 0
  const stepsName = [
    'Installment typ',
    'Credit Cart',
    'Total Information',
  ]
  const countStepElem = document.querySelector('#count-step');
  const nameStepElem = document.querySelector('#step-name');

  const changeStepName = (text) => {
    nameStepElem.textContent = text
  }
  const changeStepCount = (count) => {
    countStepElem.textContent = count + 1
  }
  const showStep = (index) => {
    $('.installment-step').removeClass('show');
    $('.installment-step').eq(index).addClass('show');
  }

  const nextStep = () => {
    if (countStep !== 2) {


      countStep++;
      changeStepName(stepsName[countStep])
      showStep(countStep)
      changeStepCount(countStep)
      $('.installment__aside .benefits__tabs-elem').removeClass('active')
      $('.installment__aside .benefits__tabs-elem').eq(countStep).addClass('active')
      $('.installment__aside .benefits__tabs-elem.active').prev().css({
        "border": "none"
      })
      setValueSlider(countStep + 1)
      console.log(countStep);
    }
    if (countStep === 2) {
      console.log('w');
      $('.installment-steps__btn').hide()
      $('.plastic-card').css('opacity', 1)
    }
  }
  const prevStep = () => {
    if (countStep != 0) {
      countStep--;
      changeStepName(stepsName[countStep])
      changeStepCount(countStep)
      showStep(countStep)
      $('.installment__aside .benefits__tabs-elem').removeClass('active')
      $('.installment__aside .benefits__tabs-elem').eq(countStep).addClass('active')
      $('.installment__aside .benefits__tabs-elem.active').prev().css({
        "border": "none"
      })
      setValueSlider(countStep + 1)
    } else if (countStep < 3) {
      $('.installment-steps__btn').css('display', "flex")
    }
  }
  $('.installment__continue-btn').on('click', function (e) {
    e.preventDefault();
    nextStep()
  })
  $('.installment__previus-btn').on('click', function (e) {
    e.preventDefault();
    prevStep()
  });
})();

(function () {
  const $inputTerm = $("#input-term");

  const calc = {
    minSumm: 1000,
    maxSumm: 100000,
    minTerm: 1,
    maxTerm: 12,
    stepSumm: 1000,
    stepTerm: 1,
    initialSumm: 60000,
    initialTerm: 3,
    price: 500000,
    calculate() {
      let commision = Math.round(this.initialSumm * 0.17)
      let allPercent = Math.round(this.initialSumm / 100 * 78.5 / this.initialTerm)
      let totalSumm = Math.round(Number(this.initialSumm) + Number(commision) + Number(allPercent))
    },
  };

  $('#calculation-range-term').ionRangeSlider({
    min: calc.minTerm,
    max: calc.maxTerm,
    step: calc.stepTerm,
    hide_min_max: true,
    from: calc.initialTerm,
    hide_from_to: true,
    onStart: function (data) {
      $inputTerm.prop("value", `${data.from} month`);
      calc.initialTerm = data.from
      calc.calculate()
    },
    onChange: function (data) {
      $inputTerm.prop("value", `${data.from} month`);
      calc.initialTerm = data.from
      calc.calculate()
    }
  });
  const $rangeTerm = $("#calculation-range-term").data("ionRangeSlider");
  const updateSlider = (el, val) => {
    el.update({
      from: val
    })
    $('.irs').addClass('green')
  }
  $inputTerm.on('input', function (e) {
    let val = +$(this).val();
    if (isNaN(parseFloat(val))) {
      console.log(isNaN(parseFloat(val)));
      $(this).val("")
    } else {
      val = val
      $(this).val(val)
    }

  })
  $inputTerm.on('change', function (e) {
    let val = parseFloat($(this).val());
    if (parseFloat(val) > calc.maxTerm) {
      val = calc.maxTerm
      $(this).val(`${val} month`)
    } else if (parseFloat(val) < calc.minTerm) {
      val = calc.minTerm
      $(this).val(`${val} month`)
    } else {
      val = val
      $(this).val(`${val} month`)
    }

    updateSlider($rangeTerm, val);
  })
})();
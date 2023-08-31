(function () {
  if ($('.already-credit__progress').length) {
    $('.already-credit__progress').roundSlider({
      max: 100,
      value: 24,
      radius: 109,
      sliderType: "min-range",
      readOnly: true,
      handleShape: "round",
      lineCap: "round",
      startAngle: 90,
      width: "11",
      tooltipFormat: function (args) {
        return `${args.value}% <div>Credit already
        paid</div>`;
      },
      start: "tooltipVal",
      change: "tooltipVal"
    })
    function tooltipVal(args) {
      return args.value + "Credit already paid";
    }
  }
})();

$('.payment__tab').on('click', function (e) {
  e.preventDefault()
  $('.payment__tab').removeClass('active')
  $(this).addClass('active')
  let el = $(this).attr('data-open')
  $('.payment__body-item').removeClass('show')
  $(el).addClass('show')
})
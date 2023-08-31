$(window).on('resize', function () {
  addRoutesInItem()
})

$('.get-map__tab').on('click', function (e) {
  e.preventDefault();
  $('.get-map__tab').removeClass('active');
  $(this).addClass('active');
})

function addRoutesInItem() {
  const windowWidth = $(window).width();
  if (windowWidth <= 768) {
    $('.get-around__text_boat').append($('.get-around__routes'))
  } else {
    $('.get-around__item_boat').after($('.get-around__routes'))
  }
}


addRoutesInItem()
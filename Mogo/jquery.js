$(function () {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop;

	/*Fixed Header*/
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	})

	function checkScroll() {


		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}



	/*Smooth scroll*/


	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this)
		blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		})
	});



	/*menu togle*/

	$("#nav_togle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})


	/*Colapse*/


	$("[data-collapse]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this)
		blockId = $this.data('collapse');

		$this.toggleClass("active")


	})


	/*Slider*/











})	
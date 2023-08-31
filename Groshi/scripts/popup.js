$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        closeOnBgClick: true,
        enableEscapeKey: true,
        closeBtnInside: false
    });
    $(document).on('click', '.popup__exit', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

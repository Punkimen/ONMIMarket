

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

$('.sms-code').on('click', function () {
    $('.login__forgot-window').show();
    const hideWindow = () => {
        $('.login__forgot-window').hide();
    }
    setTimeout(hideWindow, 5000);
    return false;
})
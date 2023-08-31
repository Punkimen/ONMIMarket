var onloadCallback = function () {
    alert("grecaptcha is ready!");
};

$('.repayCredit-inp__input').mask("+38 (000)000-00-00", {
    placeholder: "+38 ( 0 _) _ _ _ - _ _ - _ _",
    selectOnFocus: true
});

function equalHeightLine(group) {
    var tallest = 0;
    group.each(function () {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    $('.repayCredit__inne-line').height(tallest);
}
if (jQuery(window).width() > 1020) {
    $(document).ready(function () {
        equalHeight($(".repayCredit__inner-item"));
    });
}
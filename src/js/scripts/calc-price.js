$(document).ready(function () {
    var num = parseInt($('.js-info-calc-result').html());
    var price = parseInt($('.js-info-calc-price').html());

    $('.js-info-calc-decrease').click(function () {
        if (num > 1) {
            $(this).siblings('.js-info-calc-result').html(--num);
            $('.js-info-calc-price').html(price * num);
        }
        if (num < 2) {
            $('.js-info-calc-decrease').removeClass('active');
        }
    });
    
    $('.js-info-calc-increase').click(function () {
        $(this).siblings('.js-info-calc-result').html(++num);
        $('.js-info-calc-decrease').addClass('active');
        $('.js-info-calc-price').html(price * num);
    });
});

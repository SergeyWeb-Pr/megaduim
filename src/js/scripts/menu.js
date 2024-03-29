$(document).ready(function () {
    $('.menu-item').each(function () {
        if ($(this).children('.sub-menu').length === 0) {
            $(this).children('.menu-item__inner').children('.menu-icon').remove();
        }
    });
    $('.menu-item').click(function () {
        if ($(this).hasClass('active')) {
            $(this).children('.sub-menu').removeClass('show');
            $(this).children('.menu-item__inner').removeClass('active');
            $(this).children('.menu-item__inner').children('.menu-icon').removeClass('hide');
            $(this).children('.menu-item__inner').children('a').removeClass('active');
            $(this).removeClass('active');
        } else {
            $(this).children('.sub-menu').addClass('show');
            $(this).children('.menu-item__inner').addClass('active');
            $(this).children('.menu-item__inner').children('.menu-icon').addClass('hide');
            $(this).children('.menu-item__inner').children('a').addClass('active');
            $(this).addClass('active');
        }
    });
    $('.sub-menu .menu-item').click(function (e) {
        e.stopPropagation();
    });
});

$(document).ready(function () {
    $('[data-graph-path]').click(function () {
        $('.burger.burger--active').trigger('click');
    });
    $('.graph-modal').click(function () {
        if ($('.header').hasClass('active')) {
            return false;
        }
        $('.burger').removeClass('burger--active');
        $('.header__nav').removeClass('menu--active');
    });
});
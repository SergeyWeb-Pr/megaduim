$(document).ready(function () {
    //показать полный текст
    $('.js-catalog-preview-button').click(function () {
        $(this).addClass('hide');
        $(this).siblings('.js-catalog-preview-text').addClass('show');
    });

    function windowSize() {
        var windowWidth = $(window).width();
        if (windowWidth >= 1201) {
            //кнопка Каталог
            $('.js-sidebar-head').click(function () {
                $(this).toggleClass('hide');
                $(this).siblings('.js-sidebar-body').toggleClass('hide');
            });

            //Открытие пунктов по наведению в Каталоге
            $('.js-sidebar-body-item').hover(function () {
                $('.sub-menu').removeClass('show');
                $(this).find('.sub-menu').addClass('show');
            });

            // Скрыть все пункты каталога
            $('.js-sidebar-body').mouseleave(function () {
                $('.sub-menu').removeClass('show');
            });

        } else {
            //Открытие пунктов по наведению в Каталоге
            $('.js-sidebar-body-item').click(function () {
                $('.sub-menu').removeClass('show');
                $(this).find('.sub-menu').addClass('show');
            });
            // кнопка Каталог в мобилке
            $('.js-header-sidebar-head').click(function () {
                $(this).toggleClass('hide');
                $(this).siblings('.js-header-sidebar-body').toggleClass('show');
                $('body').toggleClass('dis-scroll');
            });
        }
    }
    $(window).on('load resize', windowSize);


    $('.js-catalog-filter-name').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.js-catalog-filter-content').toggleClass('show');
    });

    $(function () {
        $('#slider-price-count').slider({
            range: true,
            min: 0,
            max: 9999,
            values: ['1000', '9000'],
            slide: function (event, ui) {
                $('#slider-price-min').val(ui.values[0]);
                $('#slider-price-max').val(ui.values[1]);
            }
        });

        $("#speed").selectmenu();
    });

    // Фильтр
    $('.js-filters').click(function () {
        $('body').addClass('dis-scroll');
        $('.js-catalog-filter').addClass('active');
        // $(this).siblings('.js-catalog-filter-content').toggleClass('show');
    });
    $('.js-catalog-filter-close').click(function () {
        $('body').removeClass('dis-scroll');
        $('.js-catalog-filter').removeClass('active');
        // $(this).siblings('.js-catalog-filter-content').toggleClass('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabReviews = document.querySelectorAll('.tab-reviews__item-content');

    tabReviews.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            if (e.target.classList.contains('js-tab-reviews-button')) {
                const button = e.target;
                const textWrap = elem.getElementsByClassName('js-tab-reviews-text')[0];
                button.classList.add('hide');
                textWrap.classList.add('show');
            }
        });
    });

    const button = document.querySelector('.js-form-password-button');
    const input = document.querySelector('.js-form-input');

    button.addEventListener('click', function () {
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove("show");
        } else {
            input.type = 'password';
            this.classList.add("show");
        }
    });
});


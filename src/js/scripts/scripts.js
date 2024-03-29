$(document).ready(function () {
    $('.js-catalog-preview-button').click(function () {
        $(this).addClass('hide');
        $(this).siblings('.js-catalog-preview-text').addClass('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // const tabReviews = document.querySelectorAll('.tab-reviews__item-content');
    // tabReviews.forEach((elem) => {
    //     elem.addEventListener('click', (e) => {
    //         if (e.target.classList.contains('js-tab-reviews-button')) {
    //             const button = e.target;
    //             const textWrap = elem.children[0];
    //             button.classList.add('hide');
    //             textWrap.classList.add('show');
    //         }
    //     });
    // });

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


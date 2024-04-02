const heroSwiper = new Swiper('.hero-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.hero-swiper__swiper-pagination',
    clickable: true,
  },
});

const productsNewSwiper = new Swiper('.products-new-swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  watchSlidesProgress: true,
  navigation: {
    prevEl: ".products-swiper__swiper-button-prev",
    nextEl: ".products-swiper__swiper-button-next",
  },
  scrollbar: {
    el: ".products-swiper__swiper-scrollbar",
    hide: false,
    draggable: true,
    dragSize: 100,
  },
  breakpoints: {
    1441: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1367: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1201: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  }
});
const productsTopSwiper = new Swiper('.products-top-swiper', {
  slidesPerView: 5,
  spaceBetween: 16,
  watchSlidesProgress: true,
  navigation: {
    prevEl: ".products-swiper__swiper-button-prev",
    nextEl: ".products-swiper__swiper-button-next",
  },
  scrollbar: {
    el: ".products-swiper__swiper-scrollbar",
    hide: false,
    draggable: true,
    dragSize: 100,
  },
  breakpoints: {
    1201: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    769: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  }
});
const articleSwiper = new Swiper('.article-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    prevEl: ".article-swiper__swiper-button-prev",
    nextEl: ".article-swiper__swiper-button-next",
  },
  breakpoints: {
    1367: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1201: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  }
});

var productSingleThumbSwiper = new Swiper(".product-single-thumb-swiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  direction: 'vertical',
  freeMode: false,
  watchSlidesProgress: true,
  breakpoints: {
    769: {
      spaceBetween: 10,
      slidesPerView: 6,
    },
    320: {
      spaceBetween: 8,
      slidesPerView: 3,
    },
  }
});
var productSingleSwiper = new Swiper(".product-single-swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productSingleThumbSwiper,
  },
});

class HvrSlider {
  constructor(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      if (el.querySelectorAll('img').length > 1) {
        const hvr = document.createElement('div');
        hvr.classList.add('hvr');

        const hvrImages = document.createElement('div');
        hvrImages.classList.add('hvr__inner');
        hvr.appendChild(hvrImages);

        const hvrSectors = document.createElement('div');
        hvrSectors.classList.add('hvr__sectors');
        hvrImages.appendChild(hvrSectors);

        const hvrDots = document.createElement('div');
        hvrDots.classList.add('hvr__dots');
        hvr.appendChild(hvrDots);

        el.parentNode.insertBefore(hvr, el);
        hvrImages.prepend(el);

        const hvrImagesArray = hvr.querySelectorAll('img');
        hvrImagesArray.forEach(() => {
          hvrSectors.insertAdjacentHTML('afterbegin', '<div class="hvr__sector"></div>');
          hvrDots.insertAdjacentHTML('afterbegin', '<div class="hvr__dot"></div>');
        });
        hvrDots.firstChild.classList.add('hvr__dot--active');
        const setActiveEl = function (targetEl) {
          const index = [...hvrSectors.children].indexOf(targetEl);
          hvrImagesArray.forEach((img, idx) => {
            if (index == idx) {
              img.style.display = 'block';
            } else {
              img.style.display = 'none';
            }
          });
          hvr.querySelectorAll('.hvr__dot').forEach((dot, idx) => {
            if (index == idx) {
              dot.classList.add('hvr__dot--active');
            } else {
              dot.classList.remove('hvr__dot--active');
            }
          });
        };
        hvrSectors.addEventListener('mouseover', function (e) {
          if (e.target.matches('.hvr__sector')) {
            setActiveEl(e.target);
          }
        });
        hvrSectors.addEventListener('touchmove', function (e) {
          const position = e.changedTouches[0];
          const target = document.elementFromPoint(position.clientX, position.clientY);
          if (target.matches('.hvr__sector')) {
            setActiveEl(target);
          }
        });
      }
    });
  }
}

new HvrSlider('.hvr__images');
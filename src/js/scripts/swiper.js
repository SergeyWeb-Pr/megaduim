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
  // breakpoints: {
  //   769: {
  //     spaceBetween: 10,
  //     slidesPerView: 4,
  //   },
  //   320: {
  //     spaceBetween: 8,
  //     slidesPerView: 3,
  //   },
  // }
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
const cardPhotoSwiper = new Swiper('.card-photo-swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  watchSlidesProgress: true,
  scrollbar: {
    el: ".card-photo-swiper__swiper-scrollbar",
    hide: false,
    draggable: true,
    dragSize: 100,
  },
});
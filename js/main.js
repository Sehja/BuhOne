/////////// SWIPER-SLIDER ///////////


var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.swiper-container-2', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: '4',
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination-2',
    clickable: 'true',
    bulletClass: 'swiper-pagination-bullet-2',
    bulletActiveClass: 'swiper-pagination-bullet-active-2',

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
  }
});



/////////// SWIPER-SLIDER FINISH ///////////
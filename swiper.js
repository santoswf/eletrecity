window.onscroll = function() {
  var header = document.getElementById('header');
  if (window.scrollY > 120) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
};

var swiper2 = new Swiper(".centered-slide-carousel", {
  centeredSlides: true,
  paginationClickable: true,
  loop: true,
  spaceBetween: 30,
  slideToClickedSlide: true,
  pagination: {
    el: ".centered-slide-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1028: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    990: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
 });

 const swiper = new Swiper('.js-testimonials-slider', {
  grabCursor: true,
  spaceBetween: 30,
  pagination:{
    el: '.js-testimonials-pagination',
    clickable: true
  },
  breakpoints:{
    767:{
      slidesPerView: 2
    }
  }
});
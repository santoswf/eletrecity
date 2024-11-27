
var swiper3 = new Swiper(".swiper2", {
  initialSlide: 0,
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  speed: 900,
  grabCursor: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: -10,
    stretch: -45,
    depth: 90,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
function setupFlipCardListener(swiper2) {
  // Listener global para o botão flip
  document.addEventListener("click", (e) => {
    const button = e.target.closest(".flip-btn"); // Verifica se o botão foi clicado
    if (button) {
      const activeSlide = document.querySelector(".swiper-slide-active");
      if (activeSlide) {
        activeSlide.classList.toggle("flipped"); // Alterna o estado "flipped"
      }
    }
  });

  // Listener para resetar flips ao trocar de slide
  swiper2.on("slideChangeTransitionStart", () => {
    const slides = document.querySelectorAll(".swiper-slide2");

    // Remove a classe "flipped" de todos os slides
    slides.forEach((slide) => {
      slide.classList.remove("flipped");

      // Caso tenha animações, garanta o reset visual
      const frontFace = slide.querySelector(".front");
      const backFace = slide.querySelector(".back");
      if (frontFace && backFace) {
        frontFace.style.transform = "rotateY(0deg)";
        backFace.style.transform = "rotateY(180deg)";
      }
    });
  });
}

// Chamada inicial da função
setupFlipCardListener(swiper);


import Swiper from '../vendor/swiper';


for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
  if (mobileSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:1240px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(mobileSlider, {
          slidesPerView: 'auto',
          slidesPerColumn: 3,
          slidesPerColumnFill: "row",
          spaceBetween: 20,
          freeMode: true,
          observer: true,
          observeParents: true
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}

const swiper = new Swiper('.main-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
     // desktop >= 1240
     1024: {
      direction: 'vertical',
    },
  }
});

const tabsSlider = new Swiper('.catalog-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 50,
  observer: true,
  observeParents: true,
  loop:true,
  
  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.catalog-swiper__pagination',
  },

  breakpoints: {
    // mobile - 320-576
    320: {
      spaceBetween:40,
    },
    
     // desktop >= 1240
     1240: {
      slidesPerView: 4,
    },

    1350: {
      slidesPerView: 'auto',
      spaceBetween: 50,
    }

  }
});

// const reviewsSwiper = new Swiper('.reviews-swiper', {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   observer: true,
//   observeParents: true,
//   loop:true,
//   speed:3000,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },


//   autoplay: {
//     delay: 4000,
//   },

//   breakpoints: {
//     // mobile - 320-576
//     320: {
//       slidesPerView: 1,
//     },
//      // mobile - 576-768
//      576: {
//       slidesPerView: 2,
//     },
//     // mobile + tablet - 768-1024
//     768: {
//       slidesPerView: 3,
//       spaceBetween:20,
//     },
//     // desktop >= 1024
//     1024: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     }
//   }

// });



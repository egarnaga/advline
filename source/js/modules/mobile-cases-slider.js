const mobileCasesSlider = () => {

  let slider = document.querySelector('.cases__slider-container');

  let sliderCases;

  if (slider) {
    window.addEventListener('resize', () => {

      if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
        sliderCases = new Swiper('.cases__slider-container', {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          slideClass: 'card',
          // pagination: {
          // 	el: '.swiper-pagination',
          // 	clickable: true,
          // },
        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 600) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          sliderCases.destroy();
        }
      }

    });
  }

};

export {mobileCasesSlider};



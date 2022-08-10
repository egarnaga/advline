const mobileCasesSlider = () => {

  let slider = document.querySelector('.cases__slider-container');

  let sliderCases;

  if (slider) {
    if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
      sliderCases = new Swiper('.cases__slider-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        //loop: true,
        slideClass: 'cases__slider-card',
        pagination: {
         	el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
         },

      });

      slider.dataset.mobile = 'true';
    }
  }


  if (slider) {
    window.addEventListener('resize', () => {

      if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
        sliderCases = new Swiper('.cases__slider-container', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          //loop: true,
          slideClass: 'cases__slider-card',
           pagination: {
           	el: '.swiper-pagination',
           	clickable: true,
             renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
           },
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



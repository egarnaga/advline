const mobileProcessSlider = () => {

  let slider = document.querySelector('.process__slider-container');

  let sliderProcess;

  if (slider) {
    if (window.innerWidth <= 625 && slider.dataset.mobile == 'false') {
      sliderProcess = new Swiper('.process__slider-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slideClass: 'process__slider-card',
        pagination: {
         	el: '.process__pagination',
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

      if (window.innerWidth <= 540 && slider.dataset.mobile == 'false') {
        sliderProcess = new Swiper('.process__slider-container', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          slideClass: 'process__slider-card',
           pagination: {
           	el: '.process__pagination',
           	clickable: true,
             renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
           },
        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 540) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          sliderProcess.destroy();
        }
      }

    });
  }

};

export {mobileProcessSlider};

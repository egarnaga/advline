const mobileServicePageSlider = () => {

  let slider = document.querySelector('.service-page__slider-container');

  let sliderTools;

  if (slider) {
    if (window.innerWidth <= 625 && slider.dataset.mobile == 'false') {
      sliderServicePage = new Swiper('.service-page__slider-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slideClass: 'service-page__slider-card',
        pagination: {
         	el: '.service-page__pagination',
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

      if (window.innerWidth <= 625 && slider.dataset.mobile == 'false') {
        sliderServicePage = new Swiper('.service-page__slider-container', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          slideClass: 'service-page__slider-card',
           pagination: {
           	el: '.service-page__pagination',
           	clickable: true,
             renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
           },
        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 625) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          sliderServicePage.destroy();
        }
      }

    });
  }

};

export {mobileServicePageSlider};

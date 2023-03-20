const packagesSlider = () => {

  let slider = document.querySelector('.logotype-packages__container');

  let sliderProcess;

  if (slider) {
    if (window.innerWidth <= 730 && slider.dataset.mobile == 'false') {
      sliderProcess = new Swiper('.logotype-packages__container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slideClass: 'logotype-packages__card',
        pagination: {
         	el: '.logotype-packages__pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
          },
         },

      });

      slider.dataset.mobile = 'true';
    }
  }


  if (slider) {
    window.addEventListener('resize', () => {

      if (window.innerWidth <= 730 && slider.dataset.mobile == 'false') {
        sliderProcess = new Swiper('.logotype-packages__container', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          slideClass: 'logotype-packages__card',
           pagination: {
           	el: '.logotype-packages__pagination',
           	clickable: true,
             renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
            },
           },
        });

        slider.dataset.mobile = 'true';
      }

      if (window.innerWidth > 730) {
        slider.dataset.mobile = 'false';

        if (slider.classList.contains('swiper-container-initialized')) {
          sliderProcess.destroy();
        }
      }

    });
  }

};

export {packagesSlider};

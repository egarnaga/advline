const mobileToolsSlider = () => {

  let slider = document.querySelector('.tools__slider-container');

  let sliderTools;

  if (slider) {
    if (window.innerWidth <= 625 && slider.dataset.mobile == 'false') {
      sliderTools = new Swiper('.tools__slider-container', {
        slidesPerView: 'auto',
        //spaceBetween: 10,
        slideClass: 'tools__slider-card',
        pagination: {
         	el: '.tools__pagination',
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
        sliderTools = new Swiper('.tools__slider-container', {
          slidesPerView: 'auto',
          //spaceBetween: 10,
          slideClass: 'tools__slider-card',
           pagination: {
           	el: '.tools__pagination',
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
          sliderTools.destroy();
        }
      }

    });
  }

};

export {mobileToolsSlider};

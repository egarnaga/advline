const mobileArticleSlider = () => {

  let slider = document.querySelector('.article__slider-container');

  let sliderArticle;

  if (slider) {
    if (window.innerWidth <= 540 && slider.dataset.mobile == 'false') {
      sliderArticle = new Swiper('.article__slider-container', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slideClass: 'article__slider-card',
        pagination: {
         	el: '.article__slider-pagination',
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
        sliderArticle = new Swiper('.article__slider-container', {
          slidesPerView: 'auto',
          spaceBetween: 10,
          slideClass: 'article__slider-card',
           pagination: {
           	el: '.article__slider-pagination',
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
          sliderArticle.destroy();
        }
      }

    });
  }

};

export {mobileArticleSlider};

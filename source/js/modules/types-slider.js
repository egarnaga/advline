const typesSlider = () => {

  let slider = document.querySelector('.logotype-types__container');

  if (slider) {
    let sliderTypes = new Swiper('.logotype-types__container', {
      spaceBetween: 11,
      slidesPerView: 'auto',

      navigation: {
        prevEl: '.logotype-types__btn-prev',
        nextEl: '.logotype-types__btn-next',
      },

      pagination: {
        el: '.logotype-types__pagination',
       clickable: true,
       renderBullet: function (index, className) {
         return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
       },
      },
    });
  }

};

export {typesSlider};

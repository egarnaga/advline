const casesSlider = () => {

  let slider = document.querySelector('.logotype-our-cases__container');

  if (slider) {
    let sliderCases = new Swiper('.logotype-our-cases__container', {
      spaceBetween: 10,
      slidesPerView: 'auto',

      pagination: {
        el: '.logotype-our-cases__pagination',
       clickable: true,
       renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
       },
      },
    });
  }

};

export {casesSlider};

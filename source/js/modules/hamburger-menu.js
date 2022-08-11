import {disableScrolling, enableScrolling} from '../utils/scroll-lock';


const hamburgerMenu = () => {

  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed'
    )) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      disableScrolling();
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      enableScrolling();
    }
  });

  window.addEventListener('resize', () => {
    if (navToggle) {
      if (window.innerWidth > 768 && navMain.classList.contains('main-nav--opened')) {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
        enableScrolling();
      }
    }
  });



};

export {hamburgerMenu};

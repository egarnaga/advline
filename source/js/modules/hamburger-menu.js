import {disableScrolling, enableScrolling} from '../utils/scroll-lock';


const hamburgerMenu = () => {

  const navMain = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.main-nav__toggle');
  const darkTheme = document.querySelector('.dark-theme');
  const headerLogoDark = document.querySelector('.header__logo--dark');
  const headerLogoLight = document.querySelector('.header__logo--light');
  const btnDark = document.querySelector('.btn-dark');


  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed'
    )) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');

      if (darkTheme) {
        headerLogoDark.style.display = 'none';
        headerLogoLight.style.display = 'block';
        btnDark.style.color = '#FFFFFF';
        btnDark.style.backgroundColor = '#010302';
      }

      disableScrolling();

    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');

      if (darkTheme) {
        headerLogoDark.style.display = 'block';
        headerLogoLight.style.display = 'none';
        btnDark.style.color = '#010302';
        btnDark.style.backgroundColor = '#FFFFFF';
      }

      enableScrolling();
    }
  });

  window.addEventListener('resize', () => {
    if (navToggle) {
      if (window.innerWidth > 768 && navMain.classList.contains('main-nav--opened')) {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');

        headerLogoDark.style.display = 'block';
        headerLogoLight.style.display = 'none';

        btnDark.style.color = '#010302';
        btnDark.style.backgroundColor = '#FFFFFF';

        enableScrolling();
      }
    }
  });



};

export {hamburgerMenu};

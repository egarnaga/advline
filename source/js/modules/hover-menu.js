

const hoverMenu = () => {

  const subItems = document.querySelectorAll('.main-nav__sub-item');
  const subSubItems = document.querySelectorAll('.main-nav__sub-sub-item');

  const mainNav = document.querySelectorAll('.main-nav__list-first, .main-nav__list-second');
  const mainNavItems = document.querySelectorAll('.main-nav__item');

  if (subItems) {
    for (const item of subItems) {
      item.addEventListener('mouseover', function(event) {
        event.preventDefault();

        item.classList.add('main-nav__sub-item--active');
      });

      item.addEventListener('mouseout', function(event) {
        event.preventDefault();

        item.classList.remove('main-nav__sub-item--active');
      });
    }
  }

  if (subSubItems) {
    for (const item of subSubItems) {
      item.addEventListener('mouseover', function(event) {
        event.preventDefault();

        item.classList.add('main-nav__sub-sub-item--active');
      });

      item.addEventListener('mouseout', function(event) {
        event.preventDefault();

        item.classList.remove('main-nav__sub-sub-item--active');
      });
    }
  }



  if (mainNav) {

    for (const item of mainNav) {
      item.addEventListener('mouseover', function(event) {
        event.preventDefault();

        for (const item of mainNavItems) {
          item.classList.add('main-nav__item--opacity');
        }
      });
    }
  }

  if (mainNav) {

    for (const item of mainNav) {
      item.addEventListener('mouseout', function(event) {
        event.preventDefault();

        for (const item of mainNavItems) {
          item.classList.remove('main-nav__item--opacity');
        }
      });
    }
  }

  if (mainNav) {
    for (const item of mainNavItems) {
      item.addEventListener('mouseover', function(event) {
        event.preventDefault();

        item.classList.add('main-nav__item--active');
      });

      item.addEventListener('mouseout', function(event) {
        event.preventDefault();

        item.classList.remove('main-nav__item--active');
      });
    }
  }






};

export {hoverMenu};

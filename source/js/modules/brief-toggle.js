
const briefToggle = () => {

  const checkbox = document.querySelector('.modal__checkbox-input');
  const spanShort = document.querySelector('.modal__checkbox-short');
  const spanFull = document.querySelector('.modal__checkbox-full');
  const hiddenInputs = document.querySelectorAll('.modal__inputs--hidden');


  if (checkbox) {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        spanShort.classList.remove('modal__checkbox-short--active');
        spanFull.classList.add('modal__checkbox-full--active');

        hiddenInputs.forEach((el) => {
          el.classList.add("modal__inputs--show");
        });

        console.log("Checkbox is checked..");
      } else {
        spanShort.classList.add('modal__checkbox-short--active');
        spanFull.classList.remove('modal__checkbox-full--active');

        hiddenInputs.forEach((el) => {
          el.classList.remove("modal__inputs--show");
        });
      }
    });
  }
};

export {briefToggle};

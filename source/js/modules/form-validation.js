const formValidation = () => {
  const buttonSubmit = document.querySelector('.modal__btn');
  const form = document.querySelector('.modal__form');
  let inputs = document.querySelectorAll('.modal__inputs--show input, .modal__inputs--show textarea');
  let spans = document.querySelectorAll('.modal__inputs--show .modal__error, .modal__inputs--show textarea .modal__error');
  let inputsWrap = document.querySelectorAll('.modal__inputs--show');

  const checkbox = document.querySelector('.modal__checkbox-input');


  checkbox.addEventListener('change', function() {
    inputs = document.querySelectorAll('.modal__inputs--show input, .modal__inputs--show textarea');
    spans = document.querySelectorAll('.modal__inputs--show .modal__error, .modal__inputs--show textarea .modal__error');
    inputsWrap = document.querySelectorAll('.modal__inputs--show');
  });



  if (buttonSubmit) {
    form.addEventListener('submit', function(evt) {

      evt.preventDefault();

      const isEmpty = str => !str.trim().length;
      let validInputsTotal = 0;

      console.log(inputs);
      console.log(spans);
      console.log(inputsWrap);

      inputs.forEach((el, index) => {
        if( isEmpty(el.value) ) {

          spans[index].classList.add('modal__error--show');
          inputsWrap[index].classList.add('modal__inputs-error');

          console.log(index);
          console.log( "NAME is invalid (Empty)" );
          return
        } else {
          validInputsTotal = validInputsTotal + 1;
          console.log( `NAME value is: ${el.value}` );
        }
      });

      if (validInputsTotal === inputs.length) {
        this.submit();
      }

    });
  }

};

export {formValidation};

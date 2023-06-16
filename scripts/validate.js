
//валидация внесенных данных 

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// const enableValidation = {
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// }; 



const form = document.querySelector('.popup__form');
const popupInput = form.querySelector('.popup__input');
const popupError = form.querySelector(`.${popupInput.id}-error`);

const showError = (input) => {
  input.classList.add('popup__input_type_error');
  popupError.textContent = 'орпморпмрп';
  popupError.classList.add('popup__input-error_active'); 
};

const hideError = (input) => {
   input.classList.remove('popup__input_type_error');
};


const checkInputValidity = () => {
  if (!popupInput.validity.valid) {
    showError(popupInput, popupInput.validationMessage);
  } else {
    hideError(popupInput);
  }
};

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

popupInput.addEventListener('input', function () {
  checkInputValidity();
});






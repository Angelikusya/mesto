//валидация внесенных данных 
const enableValidation = ({
  formSelector, 
  inputSelector, 
  submitButtonSelector, 
  inactiveButtonClass, 
  inputErrorClass, 
  errorClass}) => {

  const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };

  const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${errorClass}`); 
  };
  
  const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${inputErrorClass}`);
    errorElement.classList.remove(`${errorClass}`); 
    errorElement.textContent = ''; 
  };

  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideError(formElement, inputElement);
    };
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${inactiveButtonClass}`);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(`${inactiveButtonClass}`);
      buttonElement.disabled = false;
    };
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(`.${inputSelector}`));
    const buttonElement = formElement.querySelector(`.${submitButtonSelector}`);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation ({
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}); 


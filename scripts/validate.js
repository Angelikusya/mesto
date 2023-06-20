//валидация внесенных данных 

const validationConfig = {
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}; 

  const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };

  const showError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass); 
  };
  
  const hideError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass); 
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
      buttonElement.classList.add(validationConfig.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(validationConfig.inactiveButtonClass);
      buttonElement.disabled = false;
    };
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(`.${validationConfig.inputSelector}`));
    const buttonElement = formElement.querySelector(`.${validationConfig.submitButtonSelector}`);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

const enableValidation = (config) => {

  const formList = Array.from(document.querySelectorAll(`.${config.formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation(validationConfig);


const resetValidation = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(`.${validationConfig.inputSelector}`));
  inputList.forEach((inputElement) => {
    hideError(formElement, inputElement);
  });
};
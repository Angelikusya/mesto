export class FormValidator {
  constructor(validation, formElement) {
    this._validation = validation;
    this._form = formElement;
    this._formSelector = validation.formSelector;
    this._inputSelector = validation.inputSelector;
    this._submitButtonSelector = validation.submitButtonSelector;
    this._inactiveButtonClass = validation.inactiveButtonClass;
    this._inputErrorClass = validation.inputErrorClass; 
    this._errorClass = validation.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  //показать ошибку, если форма не валидна
  _showError(inputElement, errorMessage) { 
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass); 
  };

  //убрать ошибку, если форма не валидна
  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass); 
    errorElement.textContent = ''; 
  };
  
  //проверка поля на валидность
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError( inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    };
  };

  //проверка по всем инпутам
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    });
  };

  //добавляю ошибки
  _addErrorClass() {
    const submitButton = this._form.querySelector(this._submitButtonSelector);
    submitButton.classList.add(this._inactiveButtonClass);                
    submitButton.disabled = true; 
  };

  //убираю ошибки
  _removeErrorClass() {
    const submitButton = this._form.querySelector(this._submitButtonSelector);
    submitButton.classList.remove(this._inactiveButtonClass);                
    submitButton.disabled = false; 
  };

  //блокировка кнопки в случае, если поле невалидно
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._addErrorClass(); 
    } else {
      this._removeErrorClass(); 
    };
  };
  
  //установить слушатели на все функции
  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState();
      });
   });  
  }
  
  //вызвать функцию
  enableValidation() {
    this._setEventListeners();
  };

    //сброс ошибок 
    resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
    this._addErrorClass();
  };
}

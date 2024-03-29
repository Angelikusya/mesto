import Popup from "./Popup.js"; 

//создаем форму для обновления данных на странице
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._submitButton = this._form.querySelector('.popup__button');
        this._initialSubmitButtonText = this._submitButton.textContent;
    }

    _getInputValues() {
        //создаем пустой массив
        const inputValues = {};

        this._inputList.forEach(input => {
            inputValues[input.name] = input.value; 
        });

        return inputValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();

            this._handleFormSubmit(this._getInputValues());
        });    
        super.setEventListeners();  
    }

    close() {
        super.close(); 
        this._form.reset();
    }
    
  // функция отображения лоадера
  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = this._initialSubmitButtonText;
    }
  }
}
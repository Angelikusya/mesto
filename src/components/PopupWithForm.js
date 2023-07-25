import Popup from "./Popup.js"; 

//создаем форму для обновления данных на странице
export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
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
}



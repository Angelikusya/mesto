import Popup from "./Popup.js"; 

//создаем форму для обновления данных на странице
export default class PopupConfirmation extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }

    open(cardId, card) {
        super.open();
        this._cardId = cardId;
        this._card = card;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._cardId, this._card);
        });    
        super.setEventListeners();  
    }
}
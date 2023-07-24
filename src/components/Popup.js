//открываем и закрываем popup
export default class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._closeButton = this._popup.querySelector('.popup__button-close');
      this._handleEscClose = this._handleEscClose.bind(this);
      this._handleOverlayClickClose = this._handleOverlayClickClose.bind(this);
      this.close = this.close.bind(this);
    }  

    //открыть попап и включить кнопку закрятия на ESC
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    //закрыть попап и выключить кнопку закрятия на ESC
    close() {
        this._popup.classList.remove('popup_opened');    
        document.removeEventListener('keydown', this._handleEscClose);
    }

    //закрыть popup на кнопку ESC
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    //закрыть popup на overlay
    _handleOverlayClickClose(evt) { 
        if (evt.target === this._popup) {
          this.close();      
        };
      }
    
    //установить слушатели событий для закрытия на кнопку и на Overlay
    setEventListeners() {
        this._closeButton.addEventListener('click', this.close);
        this._popup.addEventListener('click', this._handleOverlayClickClose);    
    }
}
    

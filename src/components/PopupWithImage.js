import Popup from "./Popup.js"; 

//попап большая картинка
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popup.querySelector('.popup-zoom__image');
        this._imageSubheading = this._popup.querySelector('.popup-zoom__subheading');
    }

    open(name, link) {
        this._imageSubheading.textContent = name; 
        this._image.src = link;
        this._image.alt = name;

        super.open()
    }
    
}


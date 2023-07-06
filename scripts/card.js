  export class Card {
    constructor(data, templateSelector) {
      this._data = data;
      this._templateSelector = templateSelector;
      this._name = data.name;
      this._link = data.link;
    }

    _getTemplate() {
      const newCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
      return (newCard)
    }

    _createCard (
      this._element = this._getTemplate();
      this._nameCard = this._element.querySelector('.element__subheading');
      this._imageCard = this._element.querySelector('.element__image');
      this._likeCard = this._element.querySelector('.element__vector');
      this._trashCard = this._element.querySelector('.element__trash');

      this._setEventListeners();

      this._nameCard.textContent = this._name;
      this._likeCard.src = this._link;
      return this._element;
    )
}
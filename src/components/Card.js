//создаем карточку
export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const newCard =  document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return newCard;
  }

  createCard() {
    this._element = this._getTemplate();
    this._imageCard = this._element.querySelector('.element__image');
    this._nameCard = this._element.querySelector('.element__subheading');
    this._likeCard = this._element.querySelector('.element__vector');
    this._trashCard = this._element.querySelector('.element__trash');
    this._nameCard.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _handleLikeClick() {
    this._likeCard.classList.toggle('element__vector_active');
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  handleImageClick() {
    this._handleCardClick(this._name, this._link);
   } 

  _setEventListeners() {
    this._likeCard.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._trashCard.addEventListener('click', () => {
      this._handleDeleteClick();
    });

    this._imageCard.addEventListener('click', () => {
      this.handleImageClick();
    });
  }
}
//создаем карточку
export class Card {
  constructor(data, templateSelector, handleCardClick, userId, handleDeleteCard) {
    this._templateSelector = templateSelector;
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleDeleteCard = handleDeleteCard.bind(this);
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
    this._likeCounter = this._element.querySelector('.element__like-counter'); 
    this._nameCard.textContent = this._name;
    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;

    //добавляем количество лайков из массива с сервера
    this._setLikeCounter(this._likes.length);

    //проверяем, является ли пользователь владельцем карточки
    if (this._userId !== this._ownerId) {
      this._trashCard.remove();
    }
    
    this._setEventListeners();

    return this._element;
  }

  _handleLikeClick() {
    this._likeCard.classList.toggle('element__vector_active');
  }

  removeElement() {
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

    // Исправлено: вызываем метод handleDeleteCard вместо несуществующего метода _handleDeleteClick
    this._trashCard.addEventListener("click", () => {
      this._handleDeleteCard(this._id, this);
    });

    this._imageCard.addEventListener('click', () => {
      this.handleImageClick();
    });
  }
  _setLikeCounter(likesCount) {
    this._likeCounter.textContent = likesCount;
  }
}
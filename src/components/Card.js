//создаем карточку
export class Card {
  constructor(data, templateSelector, userId, handleCardClick, handleDeleteCard, handleLikeClick) {
    this._templateSelector = templateSelector;
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleDeleteCard = handleDeleteCard.bind(this);
    this._handleLikeClick = handleLikeClick;
    this._isLiked = false;
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

    // добавляем количество лайков на сайт
    this.setLikeCounter(this._likes.length);
    //проверяем, является ли пользователь владельцем карточки
    this._checkOwner();
    //проверяем, ставил ли пользователь лайк на карточку
    this._checkLikeStatus();
    //устанавливаем слушатели
    this._setEventListeners();

    return this._element;
  }

  activateLike() {
    this._likeCard.classList.add('element__vector_active');
  }

  _checkLikeStatus() {
    this._isLiked = this._likes.some((like) => like._id === this._userId);
    if (this._isLiked) {
      this.activateLike();
    }
  }

  updateLikes(likes) {
      // добавляем количество лайков на сайт
    this.setLikeCounter(likes.length);
    this._likes = likes;
    this._likeCard.classList.toggle('element__vector_active');
    this._isLiked = !this._isLiked;
  }


  _toggleLikeState() {
    this._handleLikeClick(
      this._isLiked,
      this._id,
    );
  }

  _checkOwner() {
    if (this._userId !== this._ownerId) {
      this._trashCard.remove();
    }
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
      this._toggleLikeState();
    });

    this._trashCard.addEventListener("click", () => {
      this._handleDeleteCard(this._id, this);
    });

    this._imageCard.addEventListener('click', () => {
      this.handleImageClick();
    });
  }
  setLikeCounter(likesCount) { 
    this._likeCounter.textContent = likesCount; 
  }
}
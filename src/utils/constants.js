export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]

 //вызов селекторов попапа edit

export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const popupEditProfile = document.querySelector('.popup-edit');
export const formElementEdit = document.querySelector('.popup-edit__form'); 
export const nameInput = document.querySelector('.popup__input_type_name');
export const jobInput = document.querySelector('.popup__input_type_job');


// вызов селекторов попапа add
export const buttonAddProfile = document.querySelector('.profile__add-button');
export const formElementAdd = document.querySelector('.popup-add__form'); 

//селекторы для попапа edit avatar
export const buttonEditProfileAvatar = document.querySelector('.profile__edit-avatar');
export const popupEditAvatar = document.querySelector('.popup-edit-avatar');
export const formElementEditAvatar = document.querySelector('.popup-edit-avatar__form'); 
export const avatarInput = document.querySelector('.popup__input_type_link'); 


//вводные для валидации формы
export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};
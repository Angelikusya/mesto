//импорты функций
import { initialCards }  from './initialCards.js';
import { card } from './card.js';
import { FormValidator } from './FormValidator.js';

//вызов селекторов попапа edit
const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup-edit');
const formElementEdit = document.querySelector('.popup-edit__form'); 
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const buttonCloseEdit = document.querySelector('.popup-edit__button-close');
const popup = document.querySelector('.popup');
const submitButton = document.querySelector('.popup__button');
const form = document.querySelector('.popup__form')

// Вызов шаблона
const elementsCard = document.querySelector('.elements');
const element = document.querySelector('.element');
const elementTemplate = document.querySelector('.element-template').content; 

// вызов селекторов попапа add
const buttonAddProfile = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup-add');
const buttonCloseAdd = document.querySelector('.popup-add__button-close');
const placeInput = document.querySelector('.popup__input_type_place');
const imageInput = document.querySelector('.popup__input_type_image');
const formElementAdd = document.querySelector('.popup-add__form'); 

// вызов селекторов попапа с большой картинкой
const popupZoom = document.querySelector('.popup-zoom');
const buttonCloseZoom = document.querySelector('.popup-zoom__button-close');
const zoomImage = popupZoom.querySelector('.popup-zoom__image');
const zoomSubheading = popupZoom.querySelector('.popup-zoom__subheading');

//вводные для валидации формы
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

// РАБОТА С КАРТОЧКАМИ
//создание карточки 
function createCard(data, templateSelector) {
  const Card = new card(data, templateSelector);
  const cardItem = Card.showCard();
  return cardItem;
}

// открытие сайт с картинками из массива + поставить лайк
initialCards.forEach(function (item) {
  const newCard = createCard(item, '.element-template');
  elementsCard.append(newCard);
});

  // попап большая картинка
  export function zoomPopup (name, link) {
    zoomImage.src = link;
    zoomSubheading.alt = name;
    zoomSubheading.textContent = name;
    openPopup(popupZoom);
  }

//РАБОТА С ПОПАПАМИ
//открыть попап
const openPopup = function (item) {
  item.classList.add('popup_opened');
  document.addEventListener('click', closePopupOnOverlayClick);
  document.addEventListener('keydown', closePopupEsc);
}
 
//закрыть попап
const closePopup = function (item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('click', closePopupOnOverlayClick); // слушатель события на клик вне его области
  document.removeEventListener('keydown', closePopupEsc);//слушатель события на кнопку Esc
}

// РАБОТА С ПОПАПОМ EDIT 

//открытие попапа по клику на кнопку "редактировать/edit"
function openEditProfileForm() {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

// РАБОТА С ПОПАПОМ ADD 
formElementAdd.addEventListener('submit', function (evt) {
  evt.preventDefault(); //отмена стадартной формы обработки

  const placeValue = placeInput.value; // какая информация куда заходит
  const imageValue = imageInput.value;

  const newCard = createCard({ name: placeValue, link: imageValue }, '.element-template');

  elementsCard.prepend(newCard);

  closePopup(popupAddCard); 

  formElementAdd.reset();
});

//РАБОТА с ФИЧАМИ
//функция закрытия попапа по нажатию на Esc

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened'); // ищем открытый попап
    closePopup(openedPopup);
  }
}

//функция зарытия попапа по нажатию за пределами попапа
function closePopupOnOverlayClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

//СЛУШАТЕЛИ ФУНКЦИЙ
// открываем попап с редактирование профиля
buttonEditProfile.addEventListener('click', function() {
  openEditProfileForm();
  popupEditValidation.resetValidation();
  popupEditValidation.removeErrorClass();
});

//закрыть попап по кнопке крестик
buttonCloseEdit.addEventListener('click', function() {
  closePopup(popupEditProfile)
});
//отправляем форму загрузки 
formElementEdit.addEventListener('submit', handleEditFormSubmit);

// открываем попап с редактирование профиля
buttonAddProfile.addEventListener('click', function() {
  openPopup(popupAddCard);
  popupAddValidation.resetValidation();
  formElementAdd.reset();
  sumbitButtonValidator.removeErrorClass();
});

//закрываем попап Add по кнопке закрыть
buttonCloseAdd.addEventListener('click', function() {closePopup(popupAddCard)});

// слушатель функции для закрытия большой картинки
buttonCloseZoom.addEventListener('click', function() {closePopup(popupZoom)});

//ВАЛИДАЦИЯ форм
const popupEditValidation = new FormValidator(validationConfig, formElementEdit);
popupEditValidation.enableValidation();

const popupAddValidation = new FormValidator(validationConfig, formElementAdd);
popupAddValidation.enableValidation();
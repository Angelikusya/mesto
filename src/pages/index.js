// импорт стилей
import './index.css'; // добавьте импорт главного файла стилей 
//импорт констант
import {initialCards, 
        buttonEditProfile,
        formElementEdit, 
        nameInput, 
        jobInput,
        buttonAddProfile, 
        formElementAdd } from '../utils/constants.js';

//импорты классов
import { Card }  from '../components/Card.js';
import { validationConfig } from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js';
import Section  from '../components/Section.js';
import UserInfo  from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

//ВАЛИДАЦИЯ форм
const popupEditValidation = new FormValidator(validationConfig, formElementEdit);
popupEditValidation.enableValidation();

const popupAddValidation = new FormValidator(validationConfig, formElementAdd);
popupAddValidation.enableValidation();

// РАБОТА С КАРТОЧКАМИ
//добавление 6 карточек на страницу сайта
function generateCard(data) {
  const card = new Card(data, '.element-template', handleCardClick);

  return card.createCard(); //отобразили карточку на странице
}

//создаем экземпляр класса для отображения карточек
const cardsSection = new Section({ 
	items: initialCards, 
	renderer: (item) => { 
		const cardElement = generateCard(item); 
		cardsSection.addItem(cardElement); //добавляем карточки на страницу
	} 
}, '.elements');
  
cardsSection.renderItems()

// попап большая картинка
const newPopupZoom = new PopupWithImage('#popup-zoom');

function handleCardClick(name, link) {
  newPopupZoom.open(name, link);
}

// функции попапа EDIT 
//создали экземпляр класса
const profileInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' });

//создали экземпляр класса
const popupEditProfile = new PopupWithForm('#popup-edit', handleEditFormSubmit); 

//загрузили изменения на сайт
function handleEditFormSubmit(data) {
  profileInfo.setUserInfo(data);
  popupEditProfile.close();
}

function handleEditButtonClick() {
  popupEditProfile.open();
  const profileData = profileInfo.getUserInfo(); 
  nameInput.value = profileData.name; 
  jobInput.value = profileData.job; 

  popupEditValidation.resetValidation();
  popupEditValidation.enableButton();
}

// функции попапа ADD 
//создали экземпляр класса
const popupAddProfile = new PopupWithForm('#popup-add', handleAddFormSubmit); 

//отправка формы, чтобы карточка появилась 
function handleAddFormSubmit(data) {
  const addCart = ({
    name: data.place,
    link: data.image,
  });

  const newElement = generateCard(addCart); 
  cardsSection.addItem(newElement); //добавляем карточки на страницу
  popupAddProfile.close();
}

function handleAddButtonClick(){
  popupAddProfile.open();
  popupAddValidation.resetValidation();
}

//установили слушатели событий для EDIT
buttonEditProfile.addEventListener('click',handleEditButtonClick);

//установили слушатели событий для ADD
buttonAddProfile.addEventListener('click', handleAddButtonClick);

popupEditProfile.setEventListeners();
popupAddProfile.setEventListeners();
newPopupZoom.setEventListeners();
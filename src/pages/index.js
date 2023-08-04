// импорт стилей
import './index.css'; // добавьте импорт главного файла стилей 
//импорт констант
import {initialCards, 
        buttonEditProfile,
        formElementEdit, 
        nameInput, 
        jobInput,
        buttonAddProfile, 
        formElementAdd,
        buttonEditProfileAvatar,
        popupEditAvatar,
        formElementEditAvatar,
        avatarInput } from '../utils/constants.js';

//импорты классов
import { Card }  from '../components/Card.js';
import { validationConfig } from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js';
import Section  from '../components/Section.js';
import UserInfo  from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';

// вызов Api
const api = new Api ({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-72",
  token: "f0a7d939-ec7a-4869-a9eb-1d96ec39a9dd"
});

  //получаем информацию о пользователе и отображаем ее на странице
  api.getUserInfo()
  .then(data => {
    profileInfo.setUserInfo(data);
  })
  .catch(err => {
    console.log(err);
  });



// функции попапа EDIT 
//создали экземпляр класса
const profileInfo = new UserInfo({ 
  nameSelector: '.profile__name', 
  jobSelector: '.profile__job', 
  avatarSelector: '.profile__avatar'
});


//создали экземпляр класса
const popupEditProfile = new PopupWithForm('#popup-edit', handleEditFormSubmit); 

//загрузили изменения на сайт
function handleEditFormSubmit(data) {
  api.setUserInfo(data.name, data.job)
  .then((userInfo) => {
    profileInfo.setUserInfo({ name: userInfo.name, about: userInfo.about, avatar: userInfo.avatar });
    popupEditProfile.close();
  })
  .catch((err) => {
    console.log(err);
  });
}


   popupEditProfile.close();

//открыть попап EDIT
function handleEditButtonClick() {
  popupEditProfile.open();
  const profileData = profileInfo.getUserInfo(); 
  nameInput.value = profileData.name; 
  jobInput.value = profileData.job; 

  popupEditValidation.resetValidation();
  popupEditValidation.enableButton();
}

popupEditProfile.setEventListeners();

buttonEditProfile.addEventListener('click',handleEditButtonClick);





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


//установили слушатели событий для ADD
buttonAddProfile.addEventListener('click', handleAddButtonClick);

popupAddProfile.setEventListeners();






//РАБОТА С АВАТАРОМ
const popupEditAvatarProfile = new PopupWithForm('#popup-edit-avatar', handleEditAvatarFormSubmit);

function handleEditAvatarButtonClick() {
  popupEditAvatarProfile.open();
  popupEditAvatarValidation.resetValidation();
}

function handleEditAvatarFormSubmit(data) {
  // обновляем аватар на странице
  popupEditAvatarProfile.close();
}

//установили слушатели событий для EDIT
buttonEditProfileAvatar.addEventListener('click',handleEditAvatarButtonClick);
popupEditAvatarProfile.setEventListeners();





// попап большая картинка
const newPopupZoom = new PopupWithImage('#popup-zoom');

function handleCardClick(name, link) {
  newPopupZoom.open(name, link);
}
newPopupZoom.setEventListeners();

  //ВАЛИДАЦИЯ форм
const popupEditValidation = new FormValidator(validationConfig, formElementEdit);
popupEditValidation.enableValidation();

const popupAddValidation = new FormValidator(validationConfig, formElementAdd);
popupAddValidation.enableValidation();

const popupEditAvatarValidation = new FormValidator(validationConfig, formElementEditAvatar);
popupEditAvatarValidation.enableValidation();

//получаем данные с сервера и отображаем карточки
api.getInitialCards()
  .then(cards => {
    cardsSection.renderItems(cards); // передаем массив карточек в метод renderItems()
  })
  .catch(err => {
    console.log(err);
  }); 

// РАБОТА С КАРТОЧКАМИ
//добавление карточек на страницу сайта
function generateCard(item) {
  const card = new Card(item, '.element-template', handleCardClick);

  return card.createCard(); //отобразили карточку на странице
}

//создаем экземпляр класса для отображения карточек
const cardsSection = new Section({ 
  renderer: (item) => { 
    const cardElement = generateCard(item); 
    cardsSection.addItem(cardElement); //добавляем карточки на страницу
  } 
}, '.elements');


//получаем данные с сервера и отображаем карточки
api.getInitialCards()
  .then(cards => {
    cardsSection.renderItems(cards); // передаем массив карточек в метод renderItems()
  })
  .catch(err => {
    console.log(err);
  }); 
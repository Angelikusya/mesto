// импорт стилей
import './index.css'; // добавьте импорт главного файла стилей 

//импорт констант
import { 
        buttonEditProfile,
        formElementEdit, 
        nameInput, 
        jobInput,
        buttonAddProfile, 
        formElementAdd,
        buttonEditProfileAvatar,
        formElementEditAvatar,
        } from '../utils/constants.js';

//импорты классов
import { Card }  from '../components/Card.js';
import { validationConfig } from '../utils/constants.js'
import { FormValidator } from '../components/FormValidator.js';
import Section  from '../components/Section.js';
import UserInfo  from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';
import PopupConfirmation from '../components/PopupConfirmation';


//ВАЛИДАЦИЯ форм
const popupEditValidation = new FormValidator(validationConfig, formElementEdit);
popupEditValidation.enableValidation();

const popupAddValidation = new FormValidator(validationConfig, formElementAdd);
popupAddValidation.enableValidation();

const popupEditAvatarValidation = new FormValidator(validationConfig, formElementEditAvatar);
popupEditAvatarValidation.enableValidation();

// вызов Api
const api = new Api ({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-72",
  token: "f0a7d939-ec7a-4869-a9eb-1d96ec39a9dd"
});


// функции попапа EDIT 
//создали экземпляр класса
const profileInfo = new UserInfo({ 
  nameSelector: '.profile__name', 
  jobSelector: '.profile__job', 
  avatarSelector: '.profile__avatar'
});

let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, initialCards]) => {
    userId = userInfo._id; 
    profileInfo.setUserInfo(userInfo);
    cardsSection.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(err);
  })


//создали экземпляр класса
const popupEditProfile = new PopupWithForm('#popup-edit', handleEditFormSubmit); 

//загрузили изменения на сайт
function handleEditFormSubmit(data) {
  popupEditProfile.renderLoading(true);
  api.setUserInfo(data.name, data.job)
    .then((userInfo) => {
      profileInfo.setUserInfo({ name: userInfo.name, about: userInfo.about, avatar: userInfo.avatar });
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.renderLoading(false);
    });
}


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
  
  popupAddProfile.renderLoading(true);

  api.addCard(addCart.name, addCart.link)
    .then((data) => {
      const newElement = generateCard(data);
      cardsSection.addItem(newElement); //добавляем карточки на страницу
      popupAddProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddProfile.renderLoading(false);
    });
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
  popupEditAvatarProfile.renderLoading(true);
  api.setUserAvatar(data.link)
    .then((res) => {
      profileInfo.changeAvatar(res.avatar);
      popupEditAvatarProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatarProfile.renderLoading(false);
    });
}

//установили слушатели событий для EDIT AVATAR
buttonEditProfileAvatar.addEventListener('click',handleEditAvatarButtonClick);
popupEditAvatarProfile.setEventListeners();



// попап большая картинка
const newPopupZoom = new PopupWithImage('#popup-zoom');

function handleCardClick(name, link) {
  newPopupZoom.open(name, link);
}

newPopupZoom.setEventListeners();

const popupConfirmation = new PopupConfirmation('.popup-sure',
  (evt, cardId, card) => {
    evt.preventDefault();
    api.removeCard(cardId)
      .then(() => {
        card.removeElement(cardId);
        popupConfirmation.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

//создаем экземпляр класса для отображения карточек
const cardsSection = new Section({ 
  renderer: (item) => { 
    const cardElement = generateCard(item); 
    cardsSection.addItem(cardElement); //добавляем карточки на страницу
  } 
}, '.elements');

popupConfirmation.setEventListeners();

//добавление карточек на страницу сайта
function generateCard(item) {
  const card = new Card(item, '.element-template', userId, handleCardClick, () => {
    // коллбэк открытия попапа подтверждения удаления карточки
    popupConfirmation.open(card._id, card);
  }, 
   // коллбэк лайка
  (isLiked, imageId) => {
    (isLiked ? api.deleteLike(imageId) : api.addLike(imageId))
      .then((data) => {
        card.setLikeCounter(data.likes.length);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  );
  console.log(userId);
  return card.createCard();
}



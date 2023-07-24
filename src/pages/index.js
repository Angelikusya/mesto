//импорт констант
import { initialCards, 
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

// РАБОТА С КАРТОЧКАМИ
//добавление 6 карточек на страницу сайта
function createCard(data) {
  const card = new Card(data, '.element-template', handleCardClick);
//отобразили карточку на странице
  return card.showCard();
}

//создаем экземпляр класса для отображения карточек
const cardsList = new Section({ 
	items: initialCards, 
	renderer: (item) => { 
		const cardElement = createCard(item); 
		cardsList.addItem(cardElement); //добавляем карточки на страницу
	} 
}, '.elements', handleCardClick);
  
cardsList.renderItems()

// попап большая картинка
const newPopupZoom = new PopupWithImage('#popup-zoom');
newPopupZoom.setEventListeners();

function handleCardClick(name, link) {
  newPopupZoom.open(name, link);
}


// РАБОТА С ПОПАПОМ EDIT 
//создали экземпляр класса
const profileInfo = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' });

//создали экземпляр класса
const popupEditProfile = new PopupWithForm('#popup-edit', handleEditFormSubmit); 
popupEditProfile.setEventListeners();

//установили слушатели событий для получения информации с сайта
buttonEditProfile.addEventListener('click', () => {
popupEditProfile.open();
const profileData = profileInfo.getUserInfo(); 
nameInput.value = profileData.name; 
jobInput.value = profileData.job; 

popupEditValidation.resetValidation();
popupEditValidation.removeErrorClass();
});

//загрузили изменения на сайт
function handleEditFormSubmit(data) {
  profileInfo.setUserInfo(data);
  popupEditProfile.close();
}


// РАБОТА С ПОПАПОМ ADD 
//создали экземпляр класса
const popupAddProfile = new PopupWithForm('#popup-add', handleAddFormSubmit); 
popupAddProfile.setEventListeners();

//установили слушатели событий для получения информации с сайта
buttonAddProfile.addEventListener('click', () => {
popupAddProfile.open();

popupAddValidation.resetValidation();
});

//отправка формы, чтобы карточка появилась 
function handleAddFormSubmit(data) {
  const addCart = ({
    name: data.place,
    link: data.image,
  });

  const newElement = createCard(addCart); 
  cardsList.addItem(newElement); //добавляем карточки на страницу
  popupAddProfile.close();
}


//ВАЛИДАЦИЯ форм
const popupEditValidation = new FormValidator(validationConfig, formElementEdit);
popupEditValidation.enableValidation();

const popupAddValidation = new FormValidator(validationConfig, formElementAdd);
popupAddValidation.enableValidation();
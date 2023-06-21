//вызов селекторов попапа edit
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup-edit');
const formElementEdit = document.querySelector('.popup-edit__form'); 
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const buttonCloseEdit = document.querySelector('.popup-edit__button-close');
const popup = document.querySelector('.popup');

// Вызов шаблона
const elementsCard = document.querySelector('.elements');
const element = document.querySelector('.element');
const elementTemplate = document.querySelector('.element-template').content; 

// вызов селекторов попапа add
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const buttonCloseAdd = document.querySelector('.popup-add__button-close');
const placeInput = document.querySelector('.popup__input_type_place');
const imageInput = document.querySelector('.popup__input_type_image');
const formElementAdd = document.querySelector('.popup-add__form'); 

// вызов селекторов попапа с большой картинкой
const popupZoom = document.querySelector('.popup-zoom');
const buttonCloseZoom = document.querySelector('.popup-zoom__button-close');
const zoomImage = popupZoom.querySelector('.popup-zoom__image');
const zoomSubheading = popupZoom.querySelector('.popup-zoom__subheading');

// открытие сайт с картинками из массива + поставить лайк
initialCards.forEach(function (item) {
  const newCard = createCard(item);
  elementsCard.append(newCard);
});

function createCard(item) {
  const newCard = elementTemplate.cloneNode(true); // клонирую шаблон

  const placeName = newCard.querySelector('.element__subheading');
  placeName.textContent = item.name;

  const placeImage = newCard.querySelector('.element__image');
  placeImage.src = item.link;
  placeImage.alt = item.name;

  //поставить лайк
  const likeButton = newCard.querySelector('.element__vector');
  likeButton.addEventListener('click', function () {
    likeButton.classList.toggle('element__vector_active');
  });

  //удалить карточку
  const trashButton = newCard.querySelector('.element__trash');
  trashButton.addEventListener('click', function () {
    trashButton.closest('.element').remove();

  });

  // попап большая картинка
  // слушатель для открытия большой картина
  placeImage.addEventListener('click', function () {
  openPopup(popupZoom);
  zoomImage.src = item.link;
  zoomSubheading.alt = item.name;
  zoomSubheading.textContent = item.name;
});
  return newCard;
}

//ОБЩИЕ ФУНКЦИИ

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
function openEditProfileForm(config) {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
    //сборос кнопки добавить после отправки формы. у меня больше нет идей как это сделать. Я буду признательна, если Вы подскажите, если тут все равно ошибка. Благодарю безмерно
  const submitButtonSelector = popupEdit.querySelector('.popup__button');
  submitButtonSelector.classList.remove('popup__button_disabled');
  submitButtonSelector.removeAttribute('disabled', true);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

// РАБОТА С ПОПАПОМ ADD 
formElementAdd.addEventListener('submit', function (evt) {
  evt.preventDefault(); //отмена стадартной формы обработки
  const placeValue = placeInput.value; // какая информация куда заходит
  const imageValue = imageInput.value;

  const addCard = createCard({ name: placeValue, link: imageValue });
  elementsCard.prepend(addCard);

  closePopup(popupAdd);

  formElementAdd.reset();
  
  //сборос кнопки добавить после отправки формы
  const submitButtonSelector = popupAdd.querySelector('.popup__button');
  submitButtonSelector.classList.add('popup__button_disabled');
  submitButtonSelector.setAttribute('disabled', true);
});

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

// открываем попап с редактирование профиля
editButton.addEventListener('click', function() {
  openEditProfileForm();
  resetValidation(formElementEdit, validationConfig);
});

//закрыть попап по кнопке крестик
buttonCloseEdit.addEventListener('click', function() {
  closePopup(popupEdit)
});
//отправляем форму загрузки 
formElementEdit.addEventListener('submit', handleEditFormSubmit);

//слушатели функции попапа ADD
// открываем попап с редактирование профиля
addButton.addEventListener('click', function() {
  openPopup(popupAdd);
});

//закрываем попап Add по кнопке закрыть
buttonCloseAdd.addEventListener('click', function() {closePopup(popupAdd)});

// работа с попапом с большой картинкой
// слушатель функции для закрытия большой картинки
buttonCloseZoom.addEventListener('click', function() {closePopup(popupZoom)});
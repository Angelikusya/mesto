// пока что карточки оставила здесь, так так 
const initialCards = [
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
];

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
  const zoomImage = document.querySelector('.popup-zoom__image');
  const zoomSubheading = document.querySelector('.popup-zoom__subheading');
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
}

//закрыть попап
const closePopup = function (item) {
  item.classList.remove('popup_opened');
}


// РАБОТА С ПОПАПОМ EDIT 

//открытие попапа по клику на кнопку "редактировать/edit"
function editPopup() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}


// слушатели функций
// открываем попап с редактирование профиля
editButton.addEventListener('click', function() {editPopup()});
//закрыть попап по кнопке крестик
buttonCloseEdit.addEventListener('click', function() {closePopup(popupEdit)});
//отправляем форму загрузки 
formElementEdit.addEventListener('submit', handleEditFormSubmit);



// РАБОТА С ПОПАПОМ ADD 
//
formElementAdd.addEventListener('submit', function (evt) {
  evt.preventDefault(); //отмена стадартной формы обработки
  const placeValue = placeInput.value; // какая информация куда заходит
  const imageValue = imageInput.value;

  const addCard = createCard({ name: placeValue, link: imageValue });
  elementsCard.prepend(addCard);

  closePopup(popupAdd);
  formElementAdd.reset();
});

//слушатели функции попапа ADD
// открываем попап с редактирование профиля
addButton.addEventListener('click', function() {openPopup(popupAdd)});

//закрываем попап Add по кнопке закрыть
buttonCloseAdd.addEventListener('click', function() {closePopup(popupAdd)});


// работа с попапом с большой картинкой
// слушатель функции для закрытия большой картинки
buttonCloseZoom.addEventListener('click', function() {closePopup(popupZoom)});



















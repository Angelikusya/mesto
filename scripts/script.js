// Появление карточек при открытии сайта
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
let editButton = document.querySelector('.profile__edit-button');
let popupEdit = document.querySelector('.popup-edit');
let formElementEdit = document.querySelector('.popup-edit__form'); 
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let buttonCloseEdit = document.querySelector('.popup-edit__button-close');

// Вызов шаблона
const elementsCard = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content; 

// вызов селекторов попапа add
let addButton = document.querySelector('.profile__add-button');
let popupAdd = document.querySelector('.popup-add');
let buttonCloseAdd = document.querySelector('.popup-add__button-close');
let placeInput = document.querySelector('.popup__input_type_place');
let imageInput = document.querySelector('.popup__input_type_image');
let placeImage = document.querySelector('.element__image');
let placeName = document.querySelector('.element__subheading');
let formElementAdd = document.querySelector('.popup-add__form'); 



// открытие сайт с картинками из массива + поставить лайк

initialCards.forEach(function (element) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);  //копируем содержимое шаблона
  cardElement.querySelector('.element__subheading').textContent = element.name;
  cardElement.querySelector('.element__image').src = element.link;
  cardElement.querySelector('.element__vector').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__vector_active');
  });
  
  elementsCard.append(cardElement)
}) ;


// РАБОТА С ПОПАПОМ EDIT 

//открытие попапа по клику на кнопку "редактировать/edit"
function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// отменить отправку и добавить текущие значения в попапе edit 
function handleFormSubmit(evt) {
  evt.preventDefault(); // Отменить стандартное поведение формы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopupEdit();
}

//закрытие попапа на кнопку крестик
function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}


// слушатели функций
// открываем попап с редактирование профиля
editButton.addEventListener('click', openPopupEdit);
//закрываем попап Edit по кнопке закрыть
buttonCloseEdit.addEventListener('click', closePopupEdit);

//отправляем форму загрузки 
formElementEdit.addEventListener('submit', handleFormSubmit);



// РАБОТА С ПОПАПОМ ADD 

//открытие попапа по клику на кнопку "добавить/add"
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

// добавление новой карточки
function addPlace(placeValue, imageValue) {
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);  //копируем содержимое шаблона
  cardElement.querySelector('.element__subheading').textContent = placeValue; // обозначаем тип содержания конкретного места
  cardElement.querySelector('.element__image').src = imageValue;
  cardElement.querySelector('.element__vector').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__vector_active');
  });
  elementsCard.prepend(cardElement);
} ;

//через кнопку добавить/add добавляем информацию на страницу
addButton.addEventListener('click', function () {
  const place = document.querySelector('.popup__input_type_place');
  const image = document.querySelector('.popup__input_type_image');
});

// отменить отправку и добавить текущие значения в попапе add
function handleFormSubmit(evt) {
  evt.preventDefault(); // Отменить стандартное поведение формы
  addPlace(placeInput.value, imageInput.value);
  closePopupAdd();
}

//закрытие попапа на кнопку крестик
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

//слушатели функции ADD
//отправляем форму загрузки 
formElementAdd.addEventListener('submit', handleFormSubmit);
// открываем попап с редактирование профиля
addButton.addEventListener('click', openPopupAdd);

//закрываем попап Add по кнопке закрыть
buttonCloseAdd.addEventListener('click', closePopupAdd);



// РАБОТА С КАРТОЧКОЙ 
const trashButtons = document.querySelectorAll('.element__trash');

//функция удаления объектов
function removeElement() {
    const element = document.querySelector('.element');
    element.remove();
  };

//для каждого удаления поставить слушатель функции
  trashButtons.forEach(function(trashButton) {
    trashButton.addEventListener('click', removeElement)
  });
  



//РАБОТА С УВЕЛИЧЕНИЕМ КАРТИНКИ
let popupZoom = document.querySelector('.popup-zoom');
let buttonCloseZoom = document.querySelector('.popup-zoom__button-close');
let placeImages = document.querySelectorAll('.element__image'); //
let placePopup = document.querySelectorAll('.popup-zoom__subheading');

// открыть большую картинку с подписью
const openPopupZoom = (event) => {
  const placeImages = event.target.getAttribute('src');
  const popupZoomImage = popupZoom.querySelector('.popup-zoom__image');
  popupZoomImage.setAttribute('src', placeImages);
  
  const placeName = event.target.closest('.element').querySelector('.element__subheading').textContent;
  const placePopup = popupZoom.querySelector('.popup-zoom__subheading');
  placePopup.textContent = placeName;
  
  popupZoom.classList.add('popup_opened');
};

//слушатель функции, чтобы открыть картинку
placeImages.forEach(image => {
  image.addEventListener('click', openPopupZoom);
});

// закрыть карточку по кнопке крестик
function closePopupZoom() {
  popupZoom.classList.remove('popup_opened');
}

// слушатель функции для закрытия большой
buttonCloseZoom.addEventListener('click', closePopupZoom);
















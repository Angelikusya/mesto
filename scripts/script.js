// РАБОТА С ПОПАПОМ

//вызов селекторов для работы с редактирумой формой 
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let buttonClose = document.querySelector('.popup__button-close');


let addButton = document.querySelector('.profile__add-button'); //новое 
let popupAdd = document.querySelector('.popup-add');

//открытие попапа по клику на кнопку "редактировать/edit"
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

//открытие попапа по клику на кнопку "добавить/add"
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}


// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Отменить стандартное поведение формы
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

//закрытие попапа на кнопку крестик
function closePopup() {
    popup.classList.remove('popup_opened');
}

// слушатели функций
// открываем попап с редактирование профиля
editButton.addEventListener('click', openPopup);

// открываем попап с изменением фото в галерее
addButton.addEventListener('click', openPopupAdd);

//отправляем форму загрузки 
formElement.addEventListener('submit', handleFormSubmit);

//закрываем попап по кнопке закрыть
buttonClose.addEventListener('click', closePopup);



//поставить лайк
let vectors = document.querySelectorAll('.element__vector'); // кнопка с лайками 
vectors.forEach(function(vector) { 
vector.addEventListener('click', function() {  // добавлен слушатель в функцию
      vector.classList.add('element__vector_active'); 
}) }); 

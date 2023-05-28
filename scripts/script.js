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

//открытие попапа по клику на кнопку "редактировать/edit"
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
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
editButton.addEventListener('click', openPopup);

formElement.addEventListener('submit', handleFormSubmit);

buttonClose.addEventListener('click', closePopup);



//поставить лайк
//let vectors = document.querySelectorAll('.element__vector'); // кнопка с лайками 
//vectors.forEach(function(vector) { 
//vector.addEventListener('click', function() { 
//        vector.classList.add('element__vector_active'); 
//        vector.classList.remove('button');
//}) }); 

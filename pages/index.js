//не смогла импортировать в единый файл, скопировала код сюда

//поставить лайк
let elements = document.querySelectorAll('.elements'); 
let items = document.querySelectorAll('.element__item'); //селектор, где лежат лайки
let vectors = document.querySelectorAll('.element__vector'); // кнопка с лайками

//функция, если нет лайка, то поставить лайк. Если лайк есть, то убрать его
  vectors.forEach(function(vector) {
    vector.addEventListener('click', function() {
      if (vector.classList.contains('element__vector')) {
        vector.classList.remove('element__vector');
        vector.classList.remove('botton');
        vector.classList.add('element__vector_active');
      }
      else {
        vector.classList.add('element__vector');
        vector.classList.remove('element__vector_active');
        vector.classList.add('botton');
      }
    });
  });


// РАБОТА С ПОПАПОМ

//вызов селекторов для работы с редактирумой формой 
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let closeButton = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

//открытие попапа по клику на кнопку "редактировать"
editButton.addEventListener('click', function() {
    popup.classList.add('popup_opened');
    popup.classList.remove('popup_closed');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
})

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Отменить стандартное поведение формы
  const newName = nameInput.value;
  const newJob = jobInput.value;
  profileName.textContent = newName;
  profileJob.textContent = newJob;
  popup.classList.remove('popup_opened');
  popup.classList.add('popup_closed');
}

formElement.addEventListener('submit', handleFormSubmit);

//закрытие попапа на кнопку крестик
closeButton.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
    popup.classList.add('popup_closed');
})
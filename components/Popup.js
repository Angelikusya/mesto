let elements = document.querySelectorAll('.elements');
let items = document.querySelectorAll('.element__item');
let vectors = document.querySelectorAll('.element__vector');


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

let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');

editButton.addEventListener('click', function() {
        popup.classList.add('popup_opened');
        popup.classList.remove('popup_closed');
  })
  

// addEventListener (нажимаешь кнопку открывается блок)
// Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
//function handleFormSubmit (evt) {
    //evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
//}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', handleFormSubmit); 



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
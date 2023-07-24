//отрисовка карточек на странице
export default class Section {
    constructor( {items, renderer}, container, handleCardClick) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(container);
        this._handleCardClick = handleCardClick;
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
      this._renderedItems.forEach((item) => {
      this._renderer(item);
      });  
    }
}
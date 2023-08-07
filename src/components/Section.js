//отрисовка карточек на странице
export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }
  
    prependItem(element) {
        this._container.prepend(element);
    }
  
    renderItems(items) {
       this.clear();
        items.slice().reverse().forEach((item) => {
            const cardElement = this._renderer(item);
            this.prependItem(cardElement);
        });
    }

    clear() {
        this._container.innerHTML = '';
      }      
}
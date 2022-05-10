export default class Section {
  constructor ({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }
  
  renderItems() {
    this._items.forEach(item => this._renderer(item));
  }

  renderItem(data) {
    this._renderer(data);
  }
  
  addItem(element) {
    this._containerSelector.prepend(element)
  }
}
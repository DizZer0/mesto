export default class Section {
  constructor ({renderer}, container) {
    this._renderer = renderer;
    this._container = container;
  }
  
  renderItems(data) {
    data.forEach(item => this._renderer(item));
  }

  renderItem(data) {
    this._renderer(data);
  }
  
  addItem(element) {
    this._container.prepend(element)
  }
}
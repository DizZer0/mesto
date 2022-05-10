
export default class Popup{
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClickClose =  this._handleClickClose.bind(this);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };
  _handleClickClose(evt) {
    if (evt.target.classList.contains('popup__container') || evt.target.classList.contains('popup') || evt.target.classList.contains('popup__exit-button')) {
      this.close();
    }
  }
  _setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mouseup', this._handleClickClose);
  }
  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mouseup', this._handleClickClose);
  }
  open() {
    this._setEventListeners();
    this._popup.classList.add('popup_opened');
  };
  close() {
    this._removeEventListeners();
    this._popup.classList.remove('popup_opened');
  };
}
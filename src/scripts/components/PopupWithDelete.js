import Popup from './Popup.js';
export default class PopupWithDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.form-change');
  }
  _setEventListeners() {
    this._form.addEventListener('submit', this._submitForm);
    super._setEventListeners();
  }
  changeSubmitForm(submitFunction) {
    this._submitForm = submitFunction
  }
}
import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor({submitForm}, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._inputList = this._popup.querySelectorAll('.form-change__text');
    this._inputValues = {};
    this._form = this._popup.querySelector('.form-change');
    this._submit = this._submit.bind(this);
    this.submitBtn = this._form.querySelector('.form-change__save-button')
  }
  setInputValue(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    });
  }
  _submit(){
    this._submitForm(this._getInputValues());
  }
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((item) => {
      this._inputValues[item.name] = item.value;
    });
    return this._inputValues;
  }
  _setEventListeners() {
    this._form.addEventListener('submit', this._submit);
    super._setEventListeners();
  }
  _removeEventListeners() {
    this._form.removeEventListener('submit', this._submit);
    super._removeEventListeners();
  }

  close() {
    this._form.reset()
    super.close();
  }
  loadingWait() {
    this.submitBtn.textContent = "Сохранение..."
    // нашёл баг. при сохранении новой карточки, если кликать по кнопке "сохранение...", то карточка создаться несколько раз.
    // для этого я меняю тип кнопки на button. а когда придет любой ответ от сервера, меняю обратно на submit при помощи reset в formvalidator.
    this.submitBtn.setAttribute('type', 'button')
  }
}
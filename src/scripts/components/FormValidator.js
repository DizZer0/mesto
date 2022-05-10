export default class FormValidator {
  constructor (data, formElement){
    this._selector = data;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._selector.inputSelector));
  }
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        this._hideInputError(inputElement, errorElement);
    });
  }
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._selector.inactiveButtonClass);
      this._submitButton.setAttribute('type', 'button');
    } else {
      this._submitButton.classList.remove(this._selector.inactiveButtonClass);
      this._submitButton.setAttribute('type', 'submit');
    }
  }
  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._selector.inputErrorClass);
    errorElement.classList.remove(this._selector.errorClass);
  }
  _showInputError(inputElement, errorElement) {
    inputElement.classList.add(this._selector.inputErrorClass);
    errorElement.classList.add(this._selector.errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  _checkInputValibity(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement, errorElement)
    } else {
      this._showInputError(inputElement, errorElement)
    }
  }
  _setEventListener() {
    this._submitButton = this._formElement.querySelector(this._selector.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValibity(inputElement);
        this._toggleButtonState();
      });
    });
  }
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListener();
  }
}

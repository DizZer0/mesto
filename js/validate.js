export default class Validate {
  constructor (data, formElement){
    this._selector = data;
    this._formElement = formElement;
  }
  _hasInvalidInput() {
    return Array.from(this._formElement.querySelectorAll(this._selector.inputSelector)).some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  _buttonStatus(submitButton) {
    if (this._hasInvalidInput()) {
      submitButton.classList.add(this._selector.inactiveButtonClass);
      submitButton.setAttribute('type', 'button');
    } else {
      submitButton.classList.remove(this._selector.inactiveButtonClass);
      submitButton.setAttribute('type', 'submit');
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
    const submitButton = this._formElement.querySelector(this._selector.submitButtonSelector);
    this._buttonStatus(submitButton);
    Array.from(this._formElement.querySelectorAll(this._selector.inputSelector)).forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValibity(inputElement);
        this._buttonStatus(submitButton);
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

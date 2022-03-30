// проверяет все инпуты в форме на валидность. возвращет true, если хоть один инпут не прошёл проверку. и false если всё ок
function hasInvalidInput (inputList)  {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
};
// в зависимости от результатов функции hasInvalidInput. изменяет активность кнопки 
function buttonStatus(inputList, buttonElement, arr) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(arr.inactiveButtonClass);
    buttonElement.setAttribute('type', 'button')
  } else {
    buttonElement.classList.remove(arr.inactiveButtonClass);
    buttonElement.setAttribute('type', 'submit')
  }
};
// срабатывает, если инпут не прошел валидацию. присваивает спану текст ошибки, показывает её и меняет цвет полоски
function showInputError(formElement, inputElement, errorMessage, arr) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(arr.inputErrorClass);
  errorElement.classList.add(arr.errorClass);
  errorElement.textContent = errorMessage;
};
// срабатывает, если инпут прошел валидацию. скрывает спан и меняет цвет полоски
function hideInputError(formElement, inputElement, arr) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(arr.inputErrorClass);
  errorElement.classList.remove(arr.errorClass);
};
// проверяет input на валидность, после чего вызывает одну из функций
function checkInputValibity(formElement, inputElement, arr) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, arr);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage, arr);
  }
};
// принимает форму, записывая все input, которые находяться в ней в массив. после чего перебирает его и вешает на каждый input обработчик событий
// который при каждом вводе символов вызывает функцию checkInputValibity и buttonStatus
function setEventListeners(formElement, arr) {
  const inputList = Array.from(formElement.querySelectorAll(arr.inputSelector));
  const buttonElement = formElement.querySelector(arr.submitButtonSelector);
  buttonStatus(inputList, buttonElement, arr);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValibity(formElement, inputElement, arr);
      buttonStatus(inputList, buttonElement, arr);
    });
  });
};
// ищет все формы и делает из них массив, после перебирает его
// и  для каждой формы отменяет перезагрузку при сабмите, и вызывает функцию setEventListeners
function enableValidation(arr) {
  const formList = Array.from(document.querySelectorAll(arr.formSelector));
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, arr);
  });
}
enableValidation({
  formSelector: '.form-change',
  inputSelector: '.form-change__text',
  submitButtonSelector: '.form-change__save-button',
  inactiveButtonClass: 'form-change__save-button_inactive',
  inputErrorClass: 'form-change__text_type_error',
  errorClass: 'form-change__input-error_active'
});
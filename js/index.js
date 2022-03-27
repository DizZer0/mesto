const editProfileOpenButton = document.querySelector('.profile__edit-button');
const addPhotoOpenButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__status');
const popupAddPhoto = document.querySelector('.popup_add-photo');
const closeButtonAddPhoto = popupAddPhoto.querySelector('.popup__exit-button');
const addPhotoForm = popupAddPhoto.querySelector('.add-photo');
const editPhotoName = popupAddPhoto.querySelector('.add-photo__text-title');
const editPhotoLink = popupAddPhoto.querySelector('.add-photo__text-link');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const closeButtonEditProfile = popupEditProfile.querySelector('.popup__exit-button');
const editForm = popupEditProfile.querySelector('.edit-profile');
const editName = popupEditProfile.querySelector('.edit-profile__text-name');
const editJob = popupEditProfile.querySelector('.edit-profile__text-job');
const popupViewPhoto = document.querySelector('.popup_view-photo');
const closeButtonViewPhoto = popupViewPhoto.querySelector('.popup__exit-button');
const viewPhotoImg = popupViewPhoto.querySelector('.view-photo__img');
const viewPhotoTitle = popupViewPhoto.querySelector('.view-photo__title')
const template = document.querySelector('#template').content;
const photoGrid = document.querySelector('.photo-grid');
editName.value = profileName.textContent;
editJob.value = profileJob.textContent;

// когда закончил работу на валидацией, я вспомнил про плагиат. по сути, код связанный с валидацией получился копией кода из тренажера,
// с небольшой разницей в названиях переменных и классов. можно конечно ещё поменять именования аргументов у функций...
// в общем, я оставил эти комментарии на всякий случай. чтобы показать, что я разобрался в коде. писал его сам, иногда поглядывая в тренажер


// проверяет все инпуты в форме на валидность. возвращет true, если хоть один инпут не прошёл проверку. и false если всё ок
function hasInvalidInput (inputList)  {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
};
// в зависимости от результатов функции hasInvalidInput. изменяет активность кнопки 
function buttonStatus(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('form-change__save-button_inactive');
    buttonElement.setAttribute('type', 'button')
  } else {
    buttonElement.classList.remove('form-change__save-button_inactive');
    buttonElement.setAttribute('type', 'submit')
  }
};
// срабатывает, если инпут не прошел валидацию. присваивает спану текст ошибки, показывает её и меняет цвет полоски
function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form-change__text_type_error');
  errorElement.classList.add('form-change__input-error_active');
  errorElement.textContent = errorMessage;
};
// срабатывает, если инпут прошел валидацию. скрывает спан и меняет цвет полоски
function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form-change__text_type_error');
  errorElement.classList.remove('form-change__input-error_active')
};
// проверяет input на валидность, после чего вызывает одну из функций
function checkInputValibity(formElement, inputElement) {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement);
  } else {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  }
};
// принимает форму, записывая все input, которые находяться в ней в массив. после чего перебирает его и вешает на каждый input обработчик событий
// который при каждом вводе символов вызывает функцию checkInputValibity и buttonStatus
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.form-change__text'));
  const buttonElement = formElement.querySelector('.form-change__save-button');
  buttonStatus(inputList, buttonElement);
  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      checkInputValibity(formElement, inputElement);
      buttonStatus(inputList, buttonElement);
    });
  });
};
// ищет все формы и делает из них массив, после перебирает его
// и  для каждой формы отменяет перезагрузку при сабмите, и вызывает функцию setEventListeners
function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.form-change'));
  formList.forEach(function (formElement) {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}
enableValidation();


function createCard(data) {
  const photoCard = template.querySelector('.photo-grid__item').cloneNode(true);
  const photoCardImage = photoCard.querySelector('.photo-grid__image');
  photoCardImage.src = data.link;
  photoCardImage.alt = data.name;
  photoCard.querySelector('.photo-grid__title').textContent = data.name;
  photoCardImage.addEventListener('click', function (evt) {
    viewPhotoImg.src = data.link;
    viewPhotoImg.alt = data.name;
    viewPhotoTitle.textContent = data.name;
    openPopup (popupViewPhoto);
  })
  return photoCard
}
function renderCard(cardValue) {
  photoGrid.prepend(cardValue);
}
function addPhotoCard() {
  for (let i = 0; i <initialCards.length; i++) {
    renderCard(createCard(initialCards[i]));
  }
}
addPhotoCard();
function openPopup(name) {
  name.classList.remove('popup_disabled');
};
function closePopup (name) {
  name.classList.add('popup_disabled');
};
function savePopupAddPhoto () {
  renderCard(createCard({name: editPhotoName.value, link: editPhotoLink.value}));
  closePopup(popupAddPhoto);
};
function openPopupEditProfile() {
  openPopup(popupEditProfile);
};
function savePopupEditProfile() {
  profileName.textContent = editName.value;
  profileJob.textContent = editJob.value;
  closePopup(popupEditProfile);
};
editProfileOpenButton.addEventListener('click', openPopupEditProfile);
closeButtonEditProfile.addEventListener('click', function (){
  closePopup(popupEditProfile);
});
editForm.addEventListener('submit', savePopupEditProfile);
addPhotoOpenButton.addEventListener('click', function() {
  editPhotoName.value = '';
  editPhotoLink.value = '';
  setEventListeners(addPhotoForm);
  openPopup(popupAddPhoto);
});
closeButtonAddPhoto.addEventListener('click', function () {
  closePopup(popupAddPhoto);
});
addPhotoForm.addEventListener('submit', savePopupAddPhoto);
closeButtonViewPhoto.addEventListener('click', function () {
  closePopup(popupViewPhoto);
});
photoGrid.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('photo-grid__like-button')) {
    evt.target.classList.toggle('photo-grid__like-button_active');
  }
});
photoGrid.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('photo-grid__delete-button')) {
    evt.target.closest('.photo-grid__item').remove();
  }
});
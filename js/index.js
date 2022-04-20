import FormValidator from './FormValidator.js';
import {initialCards} from './dataCards.js';
import Card from './Card.js';
const buttonOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenAddPhoto = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__status');
const popupAddPhoto = document.querySelector('.popup_add-photo');
const buttonCloseAddPhoto = popupAddPhoto.querySelector('.popup__exit-button');
const formAddPhoto = popupAddPhoto.querySelector('.add-photo');
const nameEditPhoto = popupAddPhoto.querySelector('.add-photo__text-title');
const linkEditPhoto = popupAddPhoto.querySelector('.add-photo__text-link');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__exit-button');
const formEdit = popupEditProfile.querySelector('.edit-profile');
const nameEdit = popupEditProfile.querySelector('.edit-profile__text-name');
const jobEdit = popupEditProfile.querySelector('.edit-profile__text-job');
const popupViewPhoto = document.querySelector('.popup_view-photo');
const buttonCloseViewPhoto = popupViewPhoto.querySelector('.popup__exit-button');
const viewPhotoImg = document.querySelector('.view-photo__img');
const viewPhotoTitle = document.querySelector('.view-photo__title')
const cardSelector = document.querySelector('#template').content.querySelector('.photo-grid__item');
const photoGrid = document.querySelector('.photo-grid');
const popupList = Array.from(document.querySelectorAll('.popup'));
export {viewPhotoImg, viewPhotoTitle, popupViewPhoto};
export function openPopup(name) {
  name.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};
function closePopup (name) {
  name.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};
function createCard (item) {
  const cardElement = new Card(item, cardSelector);
  return cardElement.generateCard();
}
function savePopupAddPhoto () {
  const card = createCard({name: nameEditPhoto.value, link: linkEditPhoto.value})
  photoGrid.prepend(card);
  closePopup(popupAddPhoto);
};
function openPopupEditProfile() {
  nameEdit.value = profileName.textContent;
  jobEdit.value = profileJob.textContent;
  formValidators['edit-profile'].resetValidation()
  openPopup(popupEditProfile);
};
function savePopupEditProfile() {
  profileName.textContent = nameEdit.value;
  profileJob.textContent = jobEdit.value;
  closePopup(popupEditProfile);
};
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};
function handleCardClick(name, link) {
  viewPhotoImg.src = name;
  viewPhotoImg.alt = name;
  viewPhotoTitle.textContent = name;
  openPopup (popupViewPhoto);
}
buttonOpenEditProfile.addEventListener('click', openPopupEditProfile);
buttonCloseEditProfile.addEventListener('click', function (){
  closePopup(popupEditProfile);
});
formEdit.addEventListener('submit', savePopupEditProfile);
// метод ресет пытается удалить класс, которого нет
buttonOpenAddPhoto.addEventListener('click', function() {
  nameEditPhoto.value = '';
  linkEditPhoto.value = '';
  formValidators['add-photo'].resetValidation();
  openPopup(popupAddPhoto);
});
buttonCloseAddPhoto.addEventListener('click', function () {
  closePopup(popupAddPhoto);
  
});
formAddPhoto.addEventListener('submit', savePopupAddPhoto);
buttonCloseViewPhoto.addEventListener('click', function () {
  closePopup(popupViewPhoto);
});
popupList.forEach(function (popupElement) {
  popupElement.addEventListener('mousedown', function (evt) {
    if (evt.target.classList.contains('popup__container') || evt.target.classList.contains('popup')) {
      closePopup(popupElement);
    }
  });
})
const formValidators = {}
// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation({
  formSelector: '.form-change',
  inputSelector: '.form-change__text',
  submitButtonSelector: '.form-change__save-button',
  inactiveButtonClass: 'form-change__save-button_inactive',
  inputErrorClass: 'form-change__text_type_error',
  errorClass: 'form-change__input-error_active'});
// создание экземпляров класса Card
initialCards.forEach(item => {
  const card = createCard(item);
  photoGrid.prepend(card);
});
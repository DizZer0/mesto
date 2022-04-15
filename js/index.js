import Validate from './validate.js';
import {initialCards} from './dataCards.js';
import Card from './card.js';
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
const template = document.querySelector('#template').content;
const photoGrid = document.querySelector('.photo-grid');
const popupContainer = document.querySelectorAll('.popup__container');
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
function savePopupAddPhoto () {
  const card = new Card({name: nameEditPhoto.value, link: linkEditPhoto.value})
  photoGrid.prepend(card.generateCard());
  closePopup(popupAddPhoto);
};
function openPopupEditProfile() {
  nameEdit.value = profileName.textContent;
  jobEdit.value = profileJob.textContent;
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
buttonOpenEditProfile.addEventListener('click', openPopupEditProfile);
buttonCloseEditProfile.addEventListener('click', function (){
  closePopup(popupEditProfile);
});
formEdit.addEventListener('submit', savePopupEditProfile);
buttonOpenAddPhoto.addEventListener('click', function() {
  nameEditPhoto.value = '';
  linkEditPhoto.value = '';
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
// создание экземпляров класса Validate
const formList = Array.from(document.querySelectorAll('.form-change'));
formList.forEach((formElement) => {
  const validate = new Validate({
  inputSelector: '.form-change__text',
  submitButtonSelector: '.form-change__save-button',
  inactiveButtonClass: 'form-change__save-button_inactive',
  inputErrorClass: 'form-change__text_type_error',
  errorClass: 'form-change__input-error_active'}, formElement);
  validate.enableValidation();
});
// создание экземпляров класса Card
initialCards.forEach(item => {
  const card = new Card(item);
  photoGrid.prepend(card.generateCard());
});
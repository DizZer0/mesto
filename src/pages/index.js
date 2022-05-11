import '../pages/index.css';
import FormValidator from '../scripts/components/FormValidator.js';
import {initialCards} from '../scripts/utils/dataCards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {settings} from '../scripts/utils/constants.js'

const buttonOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenAddPhoto = document.querySelector('.profile__add-button');
const cardTemplate = document.querySelector('#template').content.querySelector('.photo-grid__item');
const photoGrid = document.querySelector('.photo-grid');

buttonOpenAddPhoto.addEventListener('click', function() {
  formValidators['add-photo'].resetValidation();
  addPhotoForm.open();
});

buttonOpenEditProfile.addEventListener('click', () => {
  editProfileForm.open();
  editProfileForm.setInputValue(userInfo.getUserInfo());
  formValidators['edit-profile'].resetValidation();
});

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
enableValidation(settings);

const cardList = new Section({items: initialCards, 
renderer: (item) => {
  const card = new Card({data: item,
  handleCardClick: (data) => {
    popupWithImage.open(data.link, data.name)
  }}, cardTemplate)
  cardList.addItem(card.generateCard())
}}, photoGrid)

cardList.renderItems();

// создание экземпляров класса Card
const addPhotoForm = new PopupWithForm({submitForm: (data) => {
  cardList.renderItem(data)
  addPhotoForm.close();
}}, '.popup_add-photo')

const popupWithImage = new PopupWithImage('.popup_view-photo')

const userInfo = new UserInfo({name: '.profile__name', status: ".profile__status"});

const editProfileForm = new PopupWithForm({submitForm: (data) => {
  userInfo.setUserInfo(data);
  editProfileForm.close();
}}, '.popup_edit-profile')

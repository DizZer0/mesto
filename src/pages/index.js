import '../pages/index.css';
import FormValidator from '../scripts/components/FormValidator.js';
import {initialCards} from '../scripts/utils/dataCards.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {settings} from '../scripts/utils/constants.js'
import Api from '../scripts/components/Api';
import PopupWithDelete from '../scripts/components/PopupWithDelete';
const buttonOpenEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenAddPhoto = document.querySelector('.profile__add-button');
const profileAvatarBtn = document.querySelector('.profile__avatar-btn')
const profileAvatar = document.querySelector('.profile__avatar');
const cardTemplate = document.querySelector('#template').content.querySelector('.photo-grid__item');
const photoGrid = document.querySelector('.photo-grid');

const api = new Api('c1a589da-429d-4699-9d64-f3a0cf6bde14', 'https://mesto.nomoreparties.co/v1/cohort-41/')

Promise.all([api.getCardItems(), api.getUserInfo()])
  .then(([cardData, userData]) => {
    cardList.renderItems(cardData.reverse());
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
  })
  .catch((error) => {
    console.log(`Ошибка ${error}`)
  })

buttonOpenAddPhoto.addEventListener('click', function() {
  formValidators['add-photo'].resetValidation();
  addPhotoForm.open();
});

buttonOpenEditProfile.addEventListener('click', () => {
  editProfileForm.open();
  editProfileForm.setInputValue(userInfo.getUserInfo());
  formValidators['edit-profile'].resetValidation();
});
profileAvatarBtn.addEventListener('click', () => {
  editAvatarForm.open()
  formValidators['edit-avatar'].resetValidation();
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
enableValidation(settings);

const cardList = new Section({ 
renderer: (item) => {
  const card = new Card({data: item,
  handleCardClick: (data) => {
    popupWithImage.open(data.link, data.name)
  },
  subCardLike: (data) => {
    api.subCardLike(data)
      .then((res) => card.setLike(res))
      .catch((err) => console.log(`Ошибка: ${err}`))
  },
  delCardLike: (data) => {
    api.delCardLike(data)
      .then((res) => card.setLike(res))
      .catch((err) => console.log(`Ошибка: ${err}`))
  },
  delCardItem: (evt, data) => {
    const cardElement = evt.target.closest('.photo-grid__item')
    deleteCardForm.changeSubmitForm((evt) => {
      api.delСardItem(data)
      .then(() => {
        cardElement.remove()
        deleteCardForm.close()
      })
      .catch((err) => console.log(`Ошибка: ${err}`))
    })
    deleteCardForm.open()
  },
  openPopupDel: (evt) => {
    deleteCardForm.open()
    deleteCardForm.getElement(evt)
  }}, cardTemplate)
  cardList.addItem(card.generateCard())
}}, photoGrid)


// создание экземпляров класса Card
const addPhotoForm = new PopupWithForm({submitForm: (data) => {
  addPhotoForm.loadingWait()
  api.subCardItem(data)
    .then((res) => {
      cardList.renderItem(res)
      addPhotoForm.close()
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => {
      addPhotoForm.submitBtn.textContent = 'Создать'
    })
}}, '.popup_add-photo')

const popupWithImage = new PopupWithImage('.popup_view-photo')

const userInfo = new UserInfo({name: '.profile__name', status: ".profile__status", avatar: '.profile__avatar'});

const editProfileForm = new PopupWithForm({submitForm: (data) => {
  editProfileForm.loadingWait()
  api.subUserInfo(data)
    .then(() => {
      userInfo.setUserInfo(data);
      editProfileForm.close();
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      editProfileForm.submitBtn.textContent = 'Сохранить'
    })
}}, '.popup_edit-profile')

const editAvatarForm = new PopupWithForm({submitForm: (data) => {
  editAvatarForm.loadingWait()
  api.subAvatarPhoto(data)
    .then(() => {
      editAvatarForm.close()
      editAvatarForm.setUserAvatar(data)
    })
    .catch((err) => console.log(`Ошибка: ${err}`))
    .finally(() => {
      editAvatarForm.submitBtn.textContent = 'Сохранить'
    })
}}, '.popup_edit-avatar')

const deleteCardForm = new PopupWithDelete('.popup_delete-photo')
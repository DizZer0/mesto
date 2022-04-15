import {viewPhotoImg, viewPhotoTitle, popupViewPhoto, openPopup} from './index.js';
export default class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
  }
  _getTemplate() {
    const cardElement = document.querySelector('#template').content.querySelector('.photo-grid__item').cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListener();
    this._element.querySelector('.photo-grid__image').src = this._link;
    this._element.querySelector('.photo-grid__image').alt = this._name;
    this._element.querySelector('.photo-grid__title').textContent = this._name;
    return this._element;
  }
  _setEventListener() {
    this._element.querySelector('.photo-grid__image').addEventListener('click', () => {
      this._handleImageClick();
    });
    this._element.querySelector('.photo-grid__like-button').addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.photo-grid__delete-button').addEventListener('click', () => {
      this._handleDeleteClick();
    });
  }
  _handleImageClick() {
    viewPhotoImg.src = this._link;
    viewPhotoImg.alt = this._name;
    viewPhotoTitle.textContent = this._name;
    openPopup (popupViewPhoto);
  }
  _handleLikeClick() {
    this._element.querySelector('.photo-grid__like-button').classList.toggle('photo-grid__like-button_active');
  };
  _handleDeleteClick() {
    this._element.remove();
  }
}
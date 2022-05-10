export default class Card {
  constructor({data, handleCardClick}, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = this._cardTemplate.cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._buttonLike = this._element.querySelector('.photo-grid__like-button');
    this._setEventListener();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.photo-grid__title').textContent = this._name;
    return this._element;
  }
  _setEventListener() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({name:  this._name, link: this._link});
    });
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.photo-grid__delete-button').addEventListener('click', () => {
      this._handleDeleteClick();
    });
  }
  _handleLikeClick() {
    this._buttonLike.classList.toggle('photo-grid__like-button_active');
  };
  _handleDeleteClick() {
    this._element.remove();
  }
}
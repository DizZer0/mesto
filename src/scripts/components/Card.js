export default class Card {
  constructor({data, handleCardClick, subCardLike, delCardLike, getCardLikes, delCardItem, openPopupDel}, cardTemplate) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes.length;
    
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._subCardLike = subCardLike;
    this._delCardLike = delCardLike;
    this._getCardLikes = getCardLikes;
    this._delCardItem = delCardItem;
    this._openPopupDel = openPopupDel;

    this._element = this._getTemplate();
    this._likesElement = this._element.querySelector('.photo-grid__like-number')
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._buttonLike = this._element.querySelector('.photo-grid__like-button');
    this._buttonDelete = this._element.querySelector('.photo-grid__delete-button')
  }
  _getTemplate() {
    const cardElement = this._cardTemplate.cloneNode(true);
    return cardElement;
  }

  _setLikeLoad() {
    if(this._data.likes.some(function (item) {
      return item._id === "08afbd239cd7b8d6c09e1132"
    })) {
      this._buttonLike.classList.add('photo-grid__like-button_active');
    }
  }
  _removeDelButton() {
    if(this._data.owner._id != "08afbd239cd7b8d6c09e1132") {
      this._buttonDelete.remove()
    }
  }
  generateCard() {
    this._setLikeLoad()
    this._removeDelButton()
    this._setEventListener();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likesElement.textContent = this._likes;
    this._element.querySelector('.photo-grid__title').textContent = this._name;
    return this._element;
  }
  _setEventListener() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({name:  this._name, link: this._link});
    });
    this._buttonLike.addEventListener('click', () => {
      if(!this._buttonLike.classList.contains('photo-grid__like-button_active')) {
        this._subCardLike(this._data)
        console.log('sub')
      } else {
        this._delCardLike(this._data)
        console.log('del')
      }
    });
    this._buttonDelete.addEventListener('click', (evt) => {
      console.log(evt.target.closest('.photo-grid__item'))
      this._delCardItem(evt, this._data)
    });
  }
  setLike(data) {
    this._buttonLike.classList.toggle('photo-grid__like-button_active');
    this._likesElement.textContent = data.likes.length
    
  };
  handleDeleteClick() {
    this._delCardItem(this._data)
    this._element.remove();
  }
}
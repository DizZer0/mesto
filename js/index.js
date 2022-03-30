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
const viewPhotoImg = popupViewPhoto.querySelector('.view-photo__img');
const viewPhotoTitle = popupViewPhoto.querySelector('.view-photo__title')
const template = document.querySelector('#template').content;
const photoGrid = document.querySelector('.photo-grid');
const popupContainer = document.querySelectorAll('.popup__container');
const popupList = Array.from(document.querySelectorAll('.popup'));
function createCard(data) {
  const photoCard = template.querySelector('.photo-grid__item').cloneNode(true);
  const photoCardImage = photoCard.querySelector('.photo-grid__image');
  const photoCardLikeButton = photoCard.querySelector('.photo-grid__like-button');
  const photoCardDeleteButton = photoCard.querySelector('.photo-grid__delete-button');
  photoCardImage.src = data.link;
  photoCardImage.alt = data.name;
  photoCard.querySelector('.photo-grid__title').textContent = data.name;
  photoCardImage.addEventListener('click', function (evt) {
    viewPhotoImg.src = data.link;
    viewPhotoImg.alt = data.name;
    viewPhotoTitle.textContent = data.name;
    openPopup (popupViewPhoto);
  });
  // с ревью всё впорядке. просто после прочтения темы в тренажёре "Всплытие и делегирование событий". я подумал, что повесить слушатели на photo-grid
  // будет более лучшим решением. ведь же хорошо, когда независимо от количества карточек, слушатель  останется один
  photoCardLikeButton.addEventListener('click', function() {
    photoCardLikeButton.classList.toggle('photo-grid__like-button_active');
  });
  photoCardDeleteButton.addEventListener('click', function() {
    photoCard.remove();
  });
  return photoCard;
}
function renderCard(cardValue) {
  photoGrid.prepend(cardValue);
};
function addPhotoCard() {
  initialCards.forEach(function (cardElement) {
    renderCard(createCard(cardElement));
  });
};
addPhotoCard();
function openPopup(name) {
  name.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
};
function closePopup (name) {
  name.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
};
function savePopupAddPhoto () {
  renderCard(createCard({name: nameEditPhoto.value, link: linkEditPhoto.value}));
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
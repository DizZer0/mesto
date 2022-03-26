const editProfileOpenButton = document.querySelector('.profile__edit-button');
const addPhotoOpenButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__status');
const popupAddPhoto = document.querySelector('.popup_add-photo');
const closeButtonAddPhoto = popupAddPhoto.querySelector('.popup__exit-button');
const addPhotoForm = popupAddPhoto.querySelector('.add-photo');
const editPhotoName = popupAddPhoto.querySelector('.add-photo__text-name');
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
function createCard(data) {
  const photoCard = template.querySelector('.photo-grid__item').cloneNode(true);
  const photoCardImage = photoCard.querySelector('.photo-grid__image');
  photoCardImage.src = data.link;
  photoCardImage.alt = data.name;
  photoCard.querySelector('.photo-grid__title').textContent = data.name;
  photoCard.querySelector('.photo-grid__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__like-button_active');
  });
  photoCard.querySelector('.photo-grid__delete-button').addEventListener('click', function () {
    photoCard.remove();
  });
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
function savePopupAddPhoto (e) {
  e.preventDefault();
  renderCard(createCard({name: editPhotoName.value, link: editPhotoLink.value}));
  closePopup(popupAddPhoto);
};
function openPopupEditProfile() {
  editName.value = profileName.textContent;
  editJob.value = profileJob.textContent;
  openPopup(popupEditProfile);
};
function savePopupEditProfile(e) {
  e.preventDefault();
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
  openPopup(popupAddPhoto);
});
closeButtonAddPhoto.addEventListener('click', function () {
  closePopup(popupAddPhoto);
});
addPhotoForm.addEventListener('submit', savePopupAddPhoto);
closeButtonViewPhoto.addEventListener('click', function () {
  closePopup(popupViewPhoto);
});
const editProfileOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const addPhotoOpenButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__status');
const popupAddPhoto = document.querySelector('.popup_add-photo');
const closeButtonAddPhoto = popupAddPhoto.querySelector('.popup__exit-button');
const addPhotoForm = popupAddPhoto.querySelector('.add-photo');
const editPhotoName = popupAddPhoto.querySelector('.add-photo__text-name');
const editPhotoLink = popupAddPhoto.querySelector('.add-photo__text-link');
const savePhotoButton = popupAddPhoto.querySelector('.add-photo__save-button');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const closeButtonEditProfile = popupEditProfile.querySelector('.popup__exit-button');
const editForm = popupEditProfile.querySelector('.edit-profile');
const editName = popupEditProfile.querySelector('.edit-profile__text-name');
const editJob = popupEditProfile.querySelector('.edit-profile__text-job');
const saveButton = popupEditProfile.querySelector('.edit-profile__save-button');
const popupViewPhoto = document.querySelector('.popup_view-photo');
const closeButtonViewPhoto = popupViewPhoto.querySelector('.popup__exit-button');
const viewPhoto = popupViewPhoto.querySelector('.view-photo');
const viewPhotoImg = popupViewPhoto.querySelector('.view-photo__img');
const viewPhotoTitle = popupViewPhoto.querySelector('.view-photo__title')
const template = document.querySelector('#template').content;
const photoGrid = document.querySelector('.photo-grid');
function createCard(i) {
  const photoCard = template.querySelector('.photo-grid__item').cloneNode(true);
  photoCard.querySelector('.photo-grid__image').src = initialCards[i].link;
  photoCard.querySelector('.photo-grid__image').alt = initialCards[i].name;
  photoCard.querySelector('.photo-grid__title').textContent = initialCards[i].name;
  photoGrid.prepend(photoCard);
  photoCard.querySelector('.photo-grid__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__like-button_active');
  });
  photoCard.querySelector('.photo-grid__delete-button').addEventListener('click', function () {
    photoCard.remove();
  });
  photoCard.querySelector('.photo-grid__image').addEventListener('click', function (evt) {
    viewPhotoImg.setAttribute('src', evt.target.getAttribute('src'));
    viewPhotoTitle.textContent = evt.target.parentNode.querySelector('.photo-grid__title').textContent;
    openPopup (popupViewPhoto);
  })
}
function addPhotoCard() {
  for (let i = 0; i <initialCards.length; i++) {
    createCard(i);
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
  initialCards.push(
  {
    name: editPhotoName.value,
    link: editPhotoLink.value
  })
  createCard(initialCards.length - 1);
  closePopup(popupAddPhoto);
};
function openPopupEditProfile() {
  editName.value = profileName.textContent;
  editJob.value = profileJob.textContent;
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
  openPopup(popupAddPhoto);
});
closeButtonAddPhoto.addEventListener('click', function () {
  closePopup(popupAddPhoto);
});
addPhotoForm.addEventListener('submit', savePopupAddPhoto);
closeButtonViewPhoto.addEventListener('click', function () {
  closePopup(popupViewPhoto);
});
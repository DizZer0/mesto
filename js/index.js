let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
<<<<<<< HEAD
let exitButton = popup.querySelector('.popup__exit-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__status');
let editName = popup.querySelector('.edit-profile__text_input_name');
let editJob = popup.querySelector('.edit-profile__text_input_job');
let saveButton = popup.querySelector('.edit-profile__save-button');
let editForm = popup.querySelector('.edit-profile');
=======
<<<<<<< Updated upstream
editButton.addEventListener('click', openEditForm);
let exitButton = editForm.querySelector('.edit-profile__exit-button');
exitButton.addEventListener('click', closeEditForm);
>>>>>>> develop
function closeEditForm() {
  popup.classList.add('popup_disabled');
}
function openEditForm() {
<<<<<<< HEAD
  popup.classList.remove('popup_disabled');
=======
  editForm.classList.remove('edit-form_disabled');
=======
let exitButton = popup.querySelector('.popup__exit-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__status');
let editName = popup.querySelector('.edit-profile__text_input_name');
let editJob = popup.querySelector('.edit-profile__text_input_job');
let saveButton = popup.querySelector('.edit-profile__save-button');
let editForm = popup.querySelector('.edit-profile');
let addPhotoForm = popup.querySelector('.add-photo');
let editPhotoName = popup.querySelector('.add-photo__text_input_name');
let editPhotoLink = popup.querySelector('.add-photo__text_input_link');
let savePhotoButton = popup.querySelector('.add-photo__save-button');
let addPhotoButton = document.querySelector('.profile__add-button');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const template = document.querySelector('#template').content;
const photoGrid = document.querySelector('.photo-grid')
let photoCard;
let viewPhoto = popup.querySelector('.view-photo');
let viewPhotoImg = viewPhoto.querySelector('.view-photo__img');
let viewPhotoTitle = viewPhoto.querySelector('.view-photo__title')

function addPhotoCard() {
  for (let i = 0; i <initialCards.length; i++) {
    photoCard = template.querySelector('.photo-grid__item').cloneNode(true);
    photoCard.querySelector('.photo-grid__image').src = initialCards[i].link;
    photoCard.querySelector('.photo-grid__title').textContent = initialCards[i].name;
    photoGrid.prepend(photoCard);
    eventElements();
  }
}
function eventElements() {
  let photoLikeButton = document.querySelector('.photo-grid__like-button');
  photoLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__like-button_active');
  });
  const photoDeleteButton = document.querySelector('.photo-grid__delete-button');
  photoDeleteButton.addEventListener('click', function () {
    const photoItem = photoDeleteButton.closest('.photo-grid__item');
    photoItem.remove();
  });
  const photoCardImage = document.querySelector('.photo-grid__image');
  photoCardImage.addEventListener('click', function (evt) {
    viewPhotoImg.setAttribute('src', evt.target.getAttribute('src'));
    viewPhotoTitle.textContent = evt.target.parentNode.children[2].children[0].textContent;
    openViewPhoto ();
  })
}
addPhotoCard();
function closeEditForm() {
  popup.classList.add('disabled');
  editForm.classList.add('disabled');
  addPhotoForm.classList.add('disabled');
  viewPhoto.classList.add('disabled');
  setTimeout(removeAttributeViewPhoto, 450);
}
function removeAttributeViewPhoto () {
  viewPhotoImg.setAttribute('src', '');
  viewPhotoTitle.textContent = '';
}
function openEditForm() {
  popup.classList.remove('disabled');
  editForm.classList.remove('disabled');
>>>>>>> Stashed changes
>>>>>>> develop
  editName.value = profileName.textContent;
  editJob.value = profileJob.textContent;
}
function saveEditForm() {
<<<<<<< HEAD
  popup.classList.add('popup_disabled');
  profileName.textContent = editName.value;
  profileJob.textContent = editJob.value;
}
editForm.addEventListener('submit', saveEditForm);
exitButton.addEventListener('click', closeEditForm);
editButton.addEventListener('click', openEditForm);
=======
<<<<<<< Updated upstream
  editForm.classList.add('edit-form_disabled');
  profileName.textContent = editName.value;
  profileJob.textContent = editJob.value;
}
=======
  popup.classList.add('disabled');
  editForm.classList.add('disabled');
  profileName.textContent = editName.value;
  profileJob.textContent = editJob.value;
}
function openAddPhotoForm () {
  popup.classList.remove('disabled');
  addPhotoForm.classList.remove('disabled');
}
function saveAddPhotoForm () {
  photoCard = template.querySelector('.photo-grid__item').cloneNode(true);
  photoCard.querySelector('.photo-grid__image').src = editPhotoLink.value;
  photoCard.querySelector('.photo-grid__title').textContent = editPhotoName.value;
  editPhotoName.value = '';
  editPhotoLink.value = '';
  photoGrid.prepend(photoCard);
  eventElements();
  closeEditForm();
}
function openViewPhoto () {
  popup.classList.remove('disabled');
  viewPhoto.classList.remove('disabled');
}
editForm.addEventListener('submit', saveEditForm);
exitButton.addEventListener('click', closeEditForm);
editButton.addEventListener('click', openEditForm);
addPhotoButton.addEventListener('click', openAddPhotoForm);
addPhotoForm.addEventListener('submit', saveAddPhotoForm);
>>>>>>> Stashed changes
>>>>>>> develop

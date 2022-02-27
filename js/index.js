let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let exitButton = popup.querySelector('.popup__exit-button');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__status');
let editName = popup.querySelector('.edit-profile__text_input_name');
let editJob = popup.querySelector('.edit-profile__text_input_job');
let saveButton = popup.querySelector('.edit-profile__save-button');
let editForm = popup.querySelector('.edit-profile');
function closeEditForm() {
  popup.classList.add('popup_disabled');
}
function openEditForm() {
  popup.classList.remove('popup_disabled');
  editName.value = profileName.textContent;
  editJob.value = profileJob.textContent;
}
function saveEditForm() {
  popup.classList.add('popup_disabled');
  profileName.textContent = editName.value;
  profileJob.textContent = editJob.value;
}
editForm.addEventListener('submit', saveEditForm);
exitButton.addEventListener('click', closeEditForm);
editButton.addEventListener('click', openEditForm);
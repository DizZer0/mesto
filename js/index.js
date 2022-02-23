let editForm = document.querySelector('.edit-form');
let editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', openEditForm);
let exitButton = editForm.querySelector('.edit-profile__exit-button');
exitButton.addEventListener('click', closeEditForm);
function closeEditForm() {
  editForm.classList.add('edit-form_disabled');
}
function openEditForm() {
  editForm.classList.remove('edit-form_disabled');
  editName.value = profileName.textContent;
  editJob.value = profileJob.textContent;
}
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__status');
let editName = editForm.querySelector('.edit-profile__name-text');

let editJob = editForm.querySelector('.edit-profile__job-text');
let saveButton = editForm.querySelector('.edit-profile__save-button');
saveButton.addEventListener('click', saveEditForm);
function saveEditForm() {
  editForm.classList.add('edit-form_disabled');
  profileName.textContent = editName.value;
  profileJob.textContent = editJob.value;
}
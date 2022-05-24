let popup = document.querySelector('.popup');
let popupNameInpt = document.querySelector('.popup__input');
let popupProfInpt = document.querySelector('.popup__input_mod_value');
let popupEditBtn = document.querySelector('.profile__edit');
let popupSaveBtn = document.querySelector('.popup__save');
let popupExitBtn = document.querySelector('.popup__exit');
let author = document.querySelector('.profile__title');
let authorProf = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__content');

function openForm() {
  popup.classList.add('popup_open');
  popupNameInpt.value = author.textContent;
  popupProfInpt.value = authorProf.textContent;
};
popupEditBtn.addEventListener('click', openForm);

function closeForm() {
  popup.classList.remove('popup_open');
};
popupExitBtn.addEventListener('click', closeForm);

function formSubmitHandler(evt) {
  evt.preventDefault();
  author.textContent = popupNameInpt.value;
  authorProf.textContent = popupProfInpt.value;
  popup.classList.remove('popup_open');
};
formElement.addEventListener('submit', formSubmitHandler);

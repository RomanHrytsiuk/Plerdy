import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    1024: {
      slidesPerView: 4.25,
      spaceBetween: 17,
    },
  },

  navigation: {
    nextEl: '.reasons__arrow2',
    prevEl: '.reasons__arrow1',
  },
});

const headerMenuButton = document.querySelector('.header__button');
const headerContactButton = document.querySelector('.header__buttons--contact');
const formPopup = document.querySelector('.form-popup');
const closeButton = document.querySelector('.form-popup__close-button');
const contactSales = document.querySelector('.form-popup__contact');


const inputName = document.querySelector('.form-popup__form--name-text');
const inputTel = document.querySelector('.form-popup__form--label-text');
const inputNameErrorMessage = document.querySelector('.form-popup__form--name-error');
const inputTelErrorMessage = document.querySelector('.form-popup__form--tel-error');
const inputLengthErrorMessage = document.querySelector('.form-popup__form--length-error');
const checkBoxErrorMessage = document.querySelector('.form-popup__form--submit-error');

const conditions = document.querySelector('.form-popup__conditions');
const checkBox = document.querySelector('.form-popup__conditions--check');

const popupSMS = document.querySelector('.form-popup__SMS');
const smsCloseButton = document.querySelector('.form-popup__SMS--close-button');

smsCloseButton.addEventListener('click', () => {
  popupSMS.style.display = 'none';
})

headerMenuButton.addEventListener('click', () => {
  formPopup.classList.toggle('show');
  inputName.focus();
})

headerContactButton.addEventListener('click', () => {
  formPopup.classList.toggle('show');
  inputName.focus();
})

closeButton.addEventListener('click', () => {
  formPopup.classList.remove('show');
})

function popupSmsVisibility() {
  formPopup.classList.remove('show');
  popupSMS.style.display = 'flex';

  setTimeout(() => {
    popupSMS.style.display = 'none';
  }, 5000);
}

function submit(event) {
  event.preventDefault();

  const nameIsValid = [...inputName.value].some(item => {
    return item.toUpperCase() !== item.toLowerCase();
  });

  const isNumber = [...inputTel.value].every(item => '0123456789'.includes(item));

  const telIsValid = isNumber;

  const lengthIsValid = isNumber ? inputTel.value.length === 9 : inputTel.value.length !== 9;

  if (!nameIsValid) {
    inputNameErrorMessage.style.display = 'block';
    inputName.focus();
  }

  if (!telIsValid) {
    inputTelErrorMessage.style.display = 'block';
    inputTel.focus();
  }

  if (!lengthIsValid) {
    inputLengthErrorMessage.style.display = 'block';
    inputTel.focus();
  }

  if (!checkBox.checked) {
    checkBoxErrorMessage.style.display = 'block';
    conditions.style.paddingBottom = 0;
  }

  if (!nameIsValid && !telIsValid) {
    inputName.focus();
  }

  if (nameIsValid && telIsValid && lengthIsValid) {
    popupSmsVisibility();
    inputName.value = '';
    inputTel.value = '';
    inputName.focus();
    checkBox.checked = false;
  }
}

contactSales.addEventListener('click', submit);

inputName.addEventListener('input', () => {
  if (inputName.value) {
    inputNameErrorMessage.style.display = 'none';
  }
});

inputTel.addEventListener('input', () => {
  if (inputTel.value) {
    inputTelErrorMessage.style.display = 'none';
    inputLengthErrorMessage.style.display = 'none';
  }
});

checkBox.addEventListener('input', () => {
  if (checkBox.checked) {
    checkBoxErrorMessage.style.display = 'none';
    conditions.style.paddingBottom = '13px';
  }
});

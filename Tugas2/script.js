const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');

const usernameError = document.getElementById('username-error');
const passwordError = document.getElementById('password-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const addressError = document.getElementById('address-error');

const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,12}$/;
const addressRegex = /^[a-zA-Z0-9\s,'-]*$/;

function validateUsername() {
  if (usernameRegex.test(usernameInput.value)) {
    usernameError.classList.add('hidden');
  } else {
    usernameError.classList.remove('hidden');
  }
}

function validatePassword() {
  if (passwordRegex.test(passwordInput.value)) {
    passwordError.classList.add('hidden');
  } else {
    passwordError.classList.remove('hidden');
  }
}

function validateEmail() {
  if (emailRegex.test(emailInput.value)) {
    emailError.classList.add('hidden');
  } else {
    emailError.classList.remove('hidden');
  }
}

function validatePhone() {
  if (phoneRegex.test(phoneInput.value)) {
    phoneError.classList.add('hidden');
  } else {
    phoneError.classList.remove('hidden');
  }
}

function validateAddress() {
  if (addressRegex.test(addressInput.value)) {
    addressError.classList.add('hidden');
  } else {
    addressError.classList.remove('hidden');
  }
}

usernameInput.addEventListener('input', validateUsername);
passwordInput.addEventListener('input', validatePassword);
emailInput.addEventListener('input', validateEmail);
phoneInput.addEventListener('input', validatePhone);
addressInput.addEventListener('input', validateAddress);

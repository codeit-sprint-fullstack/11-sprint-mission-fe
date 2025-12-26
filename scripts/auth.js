const emailInput = document.querySelector('#email');

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateEmail() {
  const value = emailInput.value.trim();
  const inputItem = emailInput.closest('.input-item');
  const errorMsg = inputItem.querySelector('.error-message');

  inputItem.classList.remove('error');
  emailInput.classList.remove('input-error');

  if (!value) {
    errorMsg.textContent = '이메일을 입력해주세요.';
    inputItem.classList.add('error');
    emailInput.classList.add('input-error');
  } else if (!isValidEmail(value)) {
    errorMsg.textContent = '잘못된 이메일 형식입니다.';
    inputItem.classList.add('error');
    emailInput.classList.add('input-error');
  }
}

emailInput.addEventListener('focusout', validateEmail);

const passwordInput = document.querySelector('#password');

function validatePassword() {
  const value = passwordInput.value;
  const inputItem = passwordInput.closest('.input-item');
  const errorMsg = inputItem.querySelector('.error-message');

  inputItem.classList.remove('error');
  passwordInput.classList.remove('input-error');

  if (!value) {
    errorMsg.textContent = '비밀번호를 입력해주세요.';
    inputItem.classList.add('error');
    passwordInput.classList.add('input-error');
  } else if (value.length < 8) {
    errorMsg.textContent = '비밀번호를 8자 이상 입력해주세요.';
    inputItem.classList.add('error');
    passwordInput.classList.add('input-error');
  }
}

passwordInput.addEventListener('focusout', validatePassword);

const loginButton = document.querySelector('.button.pill-button');

function checkButtonState() {
  const isEmailValid = isValidEmail(emailInput.value);
  const isPasswordValid = passwordInput.value.length >= 8;

  if (isEmailValid && isPasswordValid) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

emailInput.addEventListener('input', checkButtonState);
passwordInput.addEventListener('input', checkButtonState);

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!loginButton.disabled) {
    window.location.href = 'items.html';
  }
});

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
  
  // 기본적으로는 이메일과 비밀번호만 체크 (로그인 페이지 기준)
  let isAllValid = isEmailValid && isPasswordValid;

  // 만약 회원가입 페이지라면(비밀번호 확인창이 있다면) 일치 여부도 체크
  if (passwordConfirmInput) {
    const isPasswordMatch = passwordInput.value === passwordConfirmInput.value && passwordConfirmInput.value !== '';
    isAllValid = isAllValid && isPasswordMatch;
  }

  loginButton.disabled = !isAllValid;
}

emailInput.addEventListener('input', checkButtonState);
passwordInput.addEventListener('input', checkButtonState);

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (!loginButton.disabled) {
    window.location.href = 'items.html';
  }
});

//sighup page
const passwordConfirmInput = document.querySelector('#passwordConfirmation'); 


function validatePasswordConfirm() {
  if (!passwordConfirmInput) return;

  const value = passwordConfirmInput.value;
  const passwordValue = passwordInput.value;
  const inputItem = passwordConfirmInput.closest('.input-item');
  const errorMsg = inputItem.querySelector('.error-message');

  inputItem.classList.remove('error');
  passwordConfirmInput.classList.remove('input-error');

  if (value !== passwordValue) {
    errorMsg.textContent = '비밀번호가 일치하지 않습니다.';
    inputItem.classList.add('error');
    passwordConfirmInput.classList.add('input-error');
  } else {
    errorMsg.textContent = '';
  }
}


if (passwordConfirmInput) {
  passwordConfirmInput.addEventListener('focusout', validatePasswordConfirm);
  passwordConfirmInput.addEventListener('input', checkButtonState);
}
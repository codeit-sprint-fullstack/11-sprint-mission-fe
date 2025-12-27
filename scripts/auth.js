const USER_DATA = [
  { email: 'codeit1@codeit.com', password: 'codeit101!' },
  { email: 'codeit2@codeit.com', password: 'codeit202!' },
  { email: 'codeit3@codeit.com', password: 'codeit303!' },
  { email: 'codeit4@codeit.com', password: 'codeit404!' },
  { email: 'codeit5@codeit.com', password: 'codeit505!' },
  { email: 'codeit6@codeit.com', password: 'codeit606!' },
];

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
    const isPasswordMatch =
      passwordInput.value === passwordConfirmInput.value &&
      passwordConfirmInput.value !== '';
    isAllValid = isAllValid && isPasswordMatch;
  }

  loginButton.disabled = !isAllValid;
}

emailInput.addEventListener('input', checkButtonState);
passwordInput.addEventListener('input', checkButtonState);

//USER_DATA 확인하는 조건문
loginButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (loginButton.disabled) return; // 버튼이 비활성 상태면 아무것도 안 함

  // 1. 페이지 구분 (비밀번호 확인창이 없으면 로그인 페이지로 판단)
  const isLoginPage = !document.querySelector('#passwordConfirmation');

  if (isLoginPage) {
    // 2. 로그인 페이지일 때: 데이터 대조 작업
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;

    // USER_DATA에서 일치하는 유저가 있는지 확인
    const user = USER_DATA.find(
      (u) => u.email === emailValue && u.password === passwordValue
    );

    if (user) {
      window.location.href = 'items.html'; // 성공 시 이동
    } else {
      alert('비밀번호가 일치하지 않습니다.'); // 실패 시 알림
    }
  } else {
    // 3. 회원가입 페이지일 때: 바로 이동 혹은 회원가입 완료 처리
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

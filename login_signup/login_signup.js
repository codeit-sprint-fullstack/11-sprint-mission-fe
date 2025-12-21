const emailInput = document.getElementById('useremail');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password-confirm');
const loginButton = document.querySelector('.login-button');
const sighupButton = document.querySelector('.signup-button');
const passwordToggleButton = document.querySelectorAll('.btn-password-toggle');

// 유효성 검사 함수
function validEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email); 
}

function validPassword(password) {
  return password.length >= 8;
}

function passwordConfirmed(password, confirm) {
  return confirm.length > 0 && password === confirm; 
}

// 에러 표시
function showError(input, message) {
  const errorContainer = input.parentElement.querySelector('.error_message');

  if (message) {
    input.classList.add('input-error');
    errorContainer.textContent = message;
  } else {
    input.classList.remove('input-error');
    errorContainer.textContent = '';
  }
}

// 검사 후 에러 처리
function checkEmail() {
  const value = emailInput.value.trim(); // 앞뒤 공백 있을 가능성
  if (value === '') {
    showError(emailInput, '이메일을 입력해주세요');
    return false;
  } else if (!validEmail(value)) {
    showError(emailInput, '잘못된 이메일 형식입니다.');
    return false;
  } else {
    showError(emailInput, '');
    return true;
  }
}

function checkPassword() {
  const value = passwordInput.value.trim(); // 앞뒤 공백 있을 가능성
  if (value === '') {
    showError(passwordInput, '비밀번호을 입력해주세요');
    return false;
  } else if (!validPassword(value)) {
    showError(passwordInput, '비밀번호를 8자 이상 입력해주세요.');
    return false;
  } else {
    showError(passwordInput, '');
    return true;
  }
}

function checkPasswordConfirm() {
  if (!passwordConfirmInput) return true; // 로그인 페이지에 없는 기능
  const value = passwordConfirmInput.value.trim(); // 앞뒤 공백 있을 가능성
  if (value === '') {
    showError(passwordConfirmInput, '비밀번호를 다시 한 번 입력해주세요');
    return false;
  } else if (!passwordConfirmed(passwordInput.value.trim(), value)) {
    showError(passwordConfirmInput, '비밀번호가 일치하지 않습니다.');
    return false;
  } else {
    showError(passwordConfirmInput, '');
    return true;
  }
}

// 버튼 상태 변화





// 비밀번호 보안 토글
passwordToggleButton.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.parentElement.querySelector("input");
    if (input.type === "password") {
      input.type = "text";
      button.src = "/login_signup/images/btn_visibility_on.png";
    } else {
      input.type = "password";
      button.src = "/login_signup/images/btn_visibility_off.png";
    }
  });
});

// 버튼 클릭 시 이동


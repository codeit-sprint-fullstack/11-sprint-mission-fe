const emailInput = document.getElementById("useremail");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const loginButton = document.querySelector(".login-button");
const signupButton = document.querySelector(".signup-button");
const passwordToggleButton = document.querySelectorAll(".btn-password-toggle");

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
  const errorContainer = input
    .closest(".containers")
    .querySelector(".error-message"); // input 기준 container -> span으로 갈 수 있도록

  if (message) {
    input.classList.add("input-error");
    errorContainer.textContent = message;
    errorContainer.style.display = "block";
  } else {
    input.classList.remove("input-error");
    errorContainer.textContent = "";
    errorContainer.style.display = "none";
  }
}

// 검사 후 에러 처리
function checkEmail() {
  const value = emailInput.value.trim(); // 앞뒤 공백 있을 가능성
  if (value === "") {
    showError(emailInput, "이메일을 입력해주세요");
    return false;
  } else if (!validEmail(value)) {
    showError(emailInput, "잘못된 이메일 형식입니다.");
    return false;
  }

  showError(emailInput, "");
  return true;
}

function checkPassword() {
  const value = passwordInput.value.trim(); // 앞뒤 공백 있을 가능성
  if (value === "") {
    showError(passwordInput, "비밀번호을 입력해주세요");
    return false;
  } else if (!validPassword(value)) {
    showError(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
    return false;
  }

  showError(passwordInput, "");
  return true;
}

function checkPasswordConfirm() {
  if (!passwordConfirmInput) return true; // 로그인 페이지에는 없으니까 항상 true 만들어주기
  const value = passwordConfirmInput.value.trim(); // 앞뒤 공백 있을 가능성
  if (value === "") {
    showError(passwordConfirmInput, "비밀번호를 다시 한 번 입력해주세요");
    return false;
  } else if (!passwordConfirmed(passwordInput.value.trim(), value)) {
    showError(passwordConfirmInput, "비밀번호가 일치하지 않습니다.");
    return false;
  }

  showError(passwordConfirmInput, "");
  return true;
}

// 버튼 상태 변화
function changeButtonState() {
  const isEmailValid = validEmail(emailInput.value.trim());
  const isPasswordValid = validPassword(passwordInput.value.trim());

  if (loginButton) {
    loginButton.disabled = !(isEmailValid && isPasswordValid);
  }
  if (signupButton) {
    const isConfirmValid = passwordConfirmed(
      passwordInput.value.trim(),
      passwordConfirmInput.value.trim()
    );

    signupButton.disabled = !(
      isEmailValid &&
      isPasswordValid &&
      isConfirmValid
    );
  }
}

// focus out 설정
emailInput.addEventListener("focusout", () => {
  checkEmail();
  changeButtonState();
});

passwordInput.addEventListener("focusout", () => {
  checkPassword();
  changeButtonState();
});

if (passwordConfirmInput) {
  passwordConfirmInput.addEventListener("focusout", () => {
    checkPasswordConfirm();
    changeButtonState();
  });
}

// input 실시간 반영
emailInput.addEventListener("input", () => {
  checkEmail();
  changeButtonState();
});

passwordInput.addEventListener("input", () => {
  checkPassword();
  changeButtonState();
});

if (passwordConfirmInput)
  passwordConfirmInput.addEventListener("input", () => {
    checkPasswordConfirm();
    changeButtonState();
  });

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
if (loginButton) {
  loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!loginButton.disabled) location.href = "../main/items.html";
  });
}

if (signupButton) {
  signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!signupButton.disabled) location.href = "../main/items.html";
  });
}

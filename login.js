const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];
// =====================
// DOM
// =====================
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginBtn = document.getElementById("loginBtn");

// =====================
// 형식 검증 (blur용)
// =====================
function validateEmail(value) {
  if (!value) return "이메일을 입력해주세요.";
  // type="email" 이지만, 메시지 통제를 위해 직접 체크
  if (!emailInput.checkValidity())
    return "잘못된 이메일 형식입니다";
  return "";
}

function validatePassword(value) {
  if (!value) return "비밀번호를 입력해주세요.";
  if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
  return "";
}

// =====================
// USER_DATA 기반 검증 ⭐⭐⭐
// =====================
function isUserValid(email, password) {
  return USER_DATA.some(
    (user) => user.email === email && user.password === password
  );
}

// =====================
// UI 처리
// =====================
function showError(input, errorEl, message) {
  errorEl.textContent = message;
  input.classList.toggle("error", Boolean(message));
}

// =====================
// 버튼 활성화
// =====================
function updateButtonState() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const isEmailValid =
    email && emailInput.checkValidity();

  const isPasswordValid =
    password && password.length >= 8;

  loginBtn.disabled = !(isEmailValid && isPasswordValid);
}

// =====================
// blur 이벤트
// =====================
emailInput.addEventListener("blur", () => {
  const msg = validateEmail(emailInput.value.trim());
  showError(emailInput, emailError, msg);
  updateButtonState();
});

passwordInput.addEventListener("blur", () => {
  const msg = validatePassword(passwordInput.value.trim());
  showError(passwordInput, passwordError, msg);
  updateButtonState();
});

// =====================
// submit → USER_DATA 검증 ⭐⭐⭐
// =====================
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // 최종 형식 검증
  const emailMsg = validateEmail(email);
  const passwordMsg = validatePassword(password);

  showError(emailInput, emailError, emailMsg);
  showError(passwordInput, passwordError, passwordMsg);

  if (emailMsg || passwordMsg) return;

  // USER_DATA 기준 인증 검증
  const isValidUser = isUserValid(email, password);

  if (!isValidUser) {
    showError(
      passwordInput,
      passwordError,
      "이메일 또는 비밀번호가 일치하지 않습니다."
    );
    return;
  }
  // 성공
  window.location.href="items.html" ;
}); 

function clearError(input, errorEl) {
  errorEl.textContent = "";
  input.classList.remove("error");
}
emailInput.addEventListener("input", () => {
  const msg = validateEmail(emailInput.value.trim());
  showError(emailInput, emailError, msg);
  updateButtonState();
});

passwordInput.addEventListener("input", () => {
  const msg = validatePassword(passwordInput.value.trim());
  showError(passwordInput, passwordError, msg);
  updateButtonState();
});
updateButtonState();
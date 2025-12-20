const emailInput = document.getElementById("useremail");
const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const loginButton = document.querySelector(".login-button");
const sighupButton = document.querySelector(".signup-button");
const passwordToggleButton = document.querySelector(".btn-password-toggle");

// 유효성 검사
function validEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") return "이메일을 입력해주세요.";
  if (!emailRegex.test(email)) return "잘못된 이메일 형식입니다.";
  return "";
}

/* 이렇게 적어도 되나요?
  return email === ""
  ? "이메일을 입력해주세요."
  : !emailRegex.test(email)
  ? "잘못된 이메일 형식입니다."
  : ""; */

function validPassword(password) {
  if (password === "") return "비밀번호를 입력해주세요.";
  if (password.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
  return "";
}

function passwordConfirmed(password, confirm) {
  if (confirm === "") return "비밀번호를 다시 한 번 입력해주세요";
  if (password !== confirm) return "비밀번호가 일치하지 않습니다.";
  return "";
}


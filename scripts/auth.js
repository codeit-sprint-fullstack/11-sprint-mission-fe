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

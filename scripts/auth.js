const emailInput = document.querySelector('#email');

function validateEmail() {
  const value = emailInput.value;

  if (!value) {
    console.log('이메일을 입력해주세요.');
  }
}

emailInput.addEventListener('focusout', validateEmail);

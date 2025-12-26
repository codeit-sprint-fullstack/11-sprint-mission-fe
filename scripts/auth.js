const emailInput = document.querySelector('#email');

function validateEmail() {
  const value = emailInput.value.trim();
  const inputItem = emailInput.closest('.input-item');

  if (!value) {
    inputItem.classList.add('error');
    emailInput.classList.add('input-error');
  } else {
    inputItem.classList.remove('error');
    emailInput.classList.remove('input-error');
  }
}

emailInput.addEventListener('focusout', validateEmail);

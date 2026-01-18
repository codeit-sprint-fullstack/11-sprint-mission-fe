export function useFormValidation(form, tags) {
  const { productName, productDescription, productPrice } = form;

  const errors = {};
  let isNotError = true;

  if (productName && productName.length > 10) {
    errors.productName = '10자 이내로 입력해주세요';
    isNotError = false;
  }

  if (
    productDescription &&
    (productDescription.length < 10 || productDescription.length > 100)
  ) {
    errors.productDescription = '10자 이상 입력해주세요';
    isNotError = false;
  }

  if (productPrice && isNaN(Number(productPrice))) {
    errors.productPrice = '숫자로 입력해주세요';
    isNotError = false;
  }

  for (const tag of tags) {
    if (tag && tag.length > 5) {
      errors.productTag = '5글자 이내로 입력해주세요';
      isNotError = false;
      break;
    }
  }

  return { errors, isNotError };
}

import { useMemo } from 'react';

const validators = {
  productName: (value) =>
    value.length >= 1 && value.length <= 10 ? '' : '10자 이내로 입력해주세요',

  productDescription: (value) =>
    value.length >= 10 && value.length <= 100 ? '' : '10자 이상 입력해주세요',

  productPrice: (value) => (/^\d+$/.test(value) ? '' : '숫자로 입력해주세요'),
};

export const useProductValidation = (values) => {
  return useMemo(() => {
    const errors = {};
    const isValid = {};

    for (const key in validators) {
      const value = values[key] ?? '';
      const errorMessage = validators[key](value);

      errors[key] = errorMessage;
      isValid[key] = errorMessage === '';
    }

    return { errors, isValid };
  }, [values]);
};

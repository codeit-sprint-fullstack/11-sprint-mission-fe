import { useState } from 'react';

export const useProductValidation = () => {
  const [errors, setErrors] = useState({
    name: '',
    description: '',
    price: '',
    tag: '',
  });

  const validate = (type, value) => {
    const getErrorMessage = () => {
      if (type === 'name') {
        if (value.trim().length < 1) return '상품명은 1자 이상 입력해주세요';
        if (value.length > 10) return '10자 이내로 입력해주세요.';
      }

      if (type === 'description') {
        if (value.trim().length < 10)
          return '상품 소개는 10자 이상 입력해주세요';
        if (value.length > 100) return '100자 이내로 입력해주세요.';
      }

      if (type === 'price') {
        if (value.length < 1) return '가격을 입력해주세요';
        if (isNaN(value)) return '숫자로 입력해주세요.';
      }

      if (type === 'tag') {
        if (value.length > 5) return '5글자 이내로 입력해주세요.';
      }

      return '';
    };

    const errorMessage = getErrorMessage();

    setErrors((prev) => ({
      ...prev,
      [type]: errorMessage,
    }));

    return errorMessage === '';
  };
  return { errors, validate };
};

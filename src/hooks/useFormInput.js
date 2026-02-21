'use client';
import { useState } from 'react';

/**
 * 인풋창의 값(Value)과 에러(Error)를 관리하는 커스텀 훅
 * @param {string} initialValue - 초기값 (보통 빈 문자열 '')
 * @param {Function} validateFn - 유효성 검사 함수 (규칙)
 */

const useFormInput = (initialValue, validateFn) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  // 1. 입력값이 바뀔 때 실행 (onChange)
  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // 값이 변할 때마다 즉시 규칙 검사
    if (validateFn) {
      setError(validateFn(newValue));
    }
  };

  // 2. 입력창에서 포커스가 나갈 때 실행 (onBlur)
  const handleBlur = () => {
    if (validateFn) {
      setError(validateFn(value));
    }
  };

  return {
    value,
    error,
    handleChange,
    handleBlur,
    setValue,
  };
};

export default useFormInput;

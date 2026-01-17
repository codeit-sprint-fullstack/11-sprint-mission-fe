import React, { useState } from 'react';
export const useInputValid = (valid) => {
  //input 값, 터치 유무, 유효성검사,
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const error = isTouched ? valid(value) : null;

  return {
    value,
    error,
    onChange: (e) => {
      setValue(e.target.value);
    },
    onTouched: () => {
      setIsTouched(true);
    },
  };
};

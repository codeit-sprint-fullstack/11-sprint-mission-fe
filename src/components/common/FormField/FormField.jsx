'use client';

import { useState } from 'react';
import Image from 'next/image.js';
import clsx from 'clsx';
import eyeOff from '@/assets/images/button/btn_visibility_off.svg';
import eyeOn from '@/assets/images/button/btn_visibility_on.svg';
import * as styles from './FormField.css.js';

export default function FormField({
  label,
  isRequired = false,
  isTextArea = false, // 기본 input으로 설정
  variant = 'default',
  type = 'text',
  error,
  ref,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && isPasswordVisible ? 'text' : type;

  const eyeIcon = isPasswordVisible ? eyeOn : eyeOff;

  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className={styles.inputSection}>
      <label className={styles.label}>
        {isRequired && '* '}
        {label}
      </label>

      <div className={styles.inputWrapper}>
        <InputComponent
          ref={ref}
          type={inputType}
          className={clsx(
            styles.inputVariants[variant],
            error && styles.errorInput,
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Image
              src={eyeIcon}
              width={24}
              height={24}
              alt={isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
            />
          </button>
        )}
      </div>

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logoImg from '@/assets/logo/logo_lg.svg';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';
import SocialLogin from '@/components/auth/SocialLogin';
import * as styles from './Login.css.js';

// 구조만 작성, 기능은 다음 과제에서 구현
export default function Login() {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = values.email.trim() !== '' && values.password.trim() !== '';

  return (
    <div className={styles.container}>
      <div className={styles.logoLink}>
        <Link href="/">
          <Image src={logoImg} alt="판다마켓 로고" className={styles.logoImg} />
        </Link>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <FormField
            name="email"
            type="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            value={values.email}
            onChange={handleChange}
          />

          <FormField
            name="password"
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            value={values.password}
            onChange={handleChange}
          />

          <Button
            shape="round"
            size="xl"
            color={isValid ? 'primary' : 'inactive'}
            disabled={!isValid}
            className={styles.loginButton}
          >
            로그인
          </Button>
        </form>

        <SocialLogin />

        <div className={styles.footerLink}>
          <span>판다마켓이 처음이신가요?</span>
          <Link href="/signup" className={styles.link}>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

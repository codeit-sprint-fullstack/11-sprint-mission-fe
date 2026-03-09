'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSignUpForm } from '@/hooks/auth/useSignUpForm.js';
import logoImg from '@/assets/logo/logo_lg.svg';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';
import SocialLogin from '@/components/auth/SocialLogin';
import * as styles from './Signup.css.js';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation.js';
import { useUser } from '@/hooks/auth/useUser.js';

export default function Signup() {
  const { register, handleSubmit, errors, isValid, isLoading } = useSignUpForm();
  const { isLoggedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/items');
    }
  }, [isLoggedIn, router]);

  return (
    <div className={styles.container}>
      <div className={styles.logoLink}>
        <Link href="/">
          <Image src={logoImg} alt="판다마켓 로고" className={styles.logoImg} />
        </Link>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <FormField
            type="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            error={errors.email?.message}
            {...register('email')}
          />

          <FormField
            type="text"
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            error={errors.nickname?.message}
            {...register('nickname')}
          />

          <FormField
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            error={errors.password?.message}
            {...register('password')}
          />

          <FormField
            type="password"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            error={errors.passwordConfirmation?.message}
            {...register('passwordConfirmation')}
          />

          <Button
            shape="round"
            size="xl"
            color={isValid && !isLoading ? 'primary' : 'inactive'}
            disabled={!isValid || isLoading}
            className={styles.loginButton}
          >
            {isLoading ? '가입 처리 중...' : '회원가입'}
          </Button>
        </form>

        <SocialLogin />

        <div className={styles.footerLink}>
          <span>이미 회원이신가요?</span>
          <Link href="/login" className={styles.link}>
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

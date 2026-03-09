'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLoginForm } from '@/hooks/auth/useLoginForm.js';
import logoImg from '@/assets/logo/logo_lg.svg';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';
import SocialLogin from '@/components/auth/SocialLogin';
import * as styles from './Login.css.js';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation.js';
import { useUser } from '@/hooks/auth/useUser.js';

export default function Login() {
  const { register, handleSubmit, errors, isValid, isLoading } = useLoginForm();
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
            type="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            error={errors.password?.message}
            {...register('password')}
          />

          <Button
            shape="round"
            size="xl"
            color={isValid && !isLoading ? 'primary' : 'inactive'}
            disabled={!isValid || isLoading}
            className={styles.loginButton}
          >
            {isLoading ? '로그인 중...' : '로그인'}
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

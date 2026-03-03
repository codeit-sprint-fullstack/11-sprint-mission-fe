'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/utils/schemas/authSchema.js';
import logoImg from '@/assets/logo/logo_lg.svg';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';
import SocialLogin from '@/components/auth/SocialLogin';
import * as styles from './Login.css.js';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema), // zod 검사
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('로그인 시도 데이터:', data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoLink}>
        <Link href="/">
          <Image src={logoImg} alt="판다마켓 로고" className={styles.logoImg} />
        </Link>
      </div>

      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/utils/schemas/authSchema.js';
import logoImg from '@/assets/logo/logo_lg.svg';
import FormField from '@/components/common/FormField';
import Button from '@/components/common/Button';
import SocialLogin from '@/components/auth/SocialLogin';
import * as styles from './Signup.css.js';

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signupSchema), // zod 검사
    mode: 'onChange',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (data) => {
    const { passwordConfirm, ...signupData } = data;
    console.log('회원가입 데이터:', signupData);
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
            error={errors.passwordConfirm?.message}
            {...register('passwordConfirm')}
          />

          <Button
            shape="round"
            size="xl"
            color={isValid ? 'primary' : 'inactive'}
            disabled={!isValid}
            className={styles.loginButton}
          >
            회원가입
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

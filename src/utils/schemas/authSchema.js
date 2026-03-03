import z from 'zod';

const emailField = z
  .email('유효한 이메일 형식이 아닙니다.')
  .min(1, '이메일을 입력해 주세요.');

const passwordField = z
  .string()
  .min(1, '비밀번호를 입력해 주세요.')
  .min(8, '비밀번호는 8자 이상이어야 합니다.');

export const loginSchema = z.object({
  email: emailField,
  password: passwordField,
});

export const signupSchema = z
  .object({
    nickname: z.string().min(1, '닉네임을 입력해 주세요.'),
    email: emailField,
    password: passwordField,
    passwordConfirm: z.string().min(1, '비밀번호를 다시 한 번 입력해 주세요.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: '비밀번호가 일치하지 않습니다.',
  });

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/utils/schemas/authSchema';
import { useAuthMutations } from './useAuthMutations';
import { useModalStore } from '@/stores/modal.store';

export const useSignUpForm = () => {
  const { signUpMutation } = useAuthMutations();
  const { openModal } = useModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    if (data.password !== data.passwordConfirmation) {
      openModal('비밀번호가 일치하지 않습니다.');
      return;
    }

    signUpMutation.mutate(data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
    isLoading: signUpMutation.isPending,
  };
};

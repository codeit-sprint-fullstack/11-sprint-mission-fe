import { queryKeys } from '@/lib/queryKeys';
import { authApi } from '@/services/authApi';
import { useModalStore } from '@/stores/modal.store';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useAuthMutations = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { openModal } = useModalStore();

  const loginMutation = useMutation({
    mutationFn: (payload) => authApi.logIn(payload),
    onSuccess: (data) => {
      if (data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
      }

      queryClient.invalidateQueries({ queryKey: queryKeys.auth.me() });
      
      router.push('/items');
    },
  });

  const signUpMutation = useMutation({
    mutationFn: (payload) => authApi.signUp(payload),
    onSuccess: () => {
      openModal('가입 완료되었습니다.');
      router.push('/items');
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        openModal('사용 중인 이메일입니다.');
      }
    },
  });

  return {
    loginMutation,
    signUpMutation,
  };
};

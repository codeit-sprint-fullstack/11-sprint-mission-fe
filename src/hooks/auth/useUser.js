import { queryKeys } from '@/lib/queryKeys';
import { authApi } from '@/services/authApi';
import { HOUR_MS } from '@/utils/constants';
import { useQuery } from '@tanstack/react-query';

export const useUser = () => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: authApi.getMe,
    staleTime: HOUR_MS,
    retry: false,
    enabled: !!token,
  });

  return {
    user,
    isLoading,
    isLoggedIn: !!user,
    isError,
  };
};

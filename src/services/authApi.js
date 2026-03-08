import { api, publicApi } from '@/lib/axios';

export const authApi = {
  // 회원가입
  signUp: async (payload) => {
    const { data } = await publicApi.post('/auth/signUp', payload);
    return data;
  },

  // 로그인
  logIn: async (payload) => {
    const { data } = await publicApi.post('/auth/signIn', payload);
    return data;
  },

  // 로그아웃 -> 토큰 삭제
  logout: () => {
    localStorage.removeItem('accessToken');
  },

  // 내 정보
  getMe: async () => {
    const { data } = await api.get('/users/me');
    return data;
  },

  // 정보 수정
  updateMe: async (payload) => {
    const { data } = await api.patch('/users/me', payload);
    return data;
  },
};

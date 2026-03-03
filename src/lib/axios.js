import { SECOND_MS } from '@/utils/constants';
import axios from 'axios';


const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const publicApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5 * SECOND_MS,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5 * SECOND_MS,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,

  (error) => {
    return Promise.reject(error);
  },
);

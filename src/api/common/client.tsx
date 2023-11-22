import { Env } from '@env';
import axios from 'axios';

import { useAuth } from '@/core';

export const client = axios.create({
  baseURL: Env.API_URL,
});

axios.interceptors.request.use((config) => {
  const token = useAuth.use.token();

  if (token) {
    config.headers.Authorization = `Bearer ${token.access}`;
  }

  return config;
});

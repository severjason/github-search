import axios, { type AxiosRequestConfig } from 'axios';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  validateStatus: (status) => status < 400,
};

export const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

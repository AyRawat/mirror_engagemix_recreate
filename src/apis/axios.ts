// src/axiosInstance.ts
import { TokenManager } from "@/contexts/auth/TokenManager";
import axios from "axios";
import apiUrl from "@/config";


const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

console.log(apiUrl);


axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenManager.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;

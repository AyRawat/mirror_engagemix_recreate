// src/axiosInstance.ts
import { TokenManager } from "@/contexts/auth/TokenManager";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://em-apidev.ap-south-1.elasticbeanstalk.com",
  withCredentials: true,
});

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

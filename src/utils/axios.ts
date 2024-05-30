// const api_url = import.meta.env.VITE_API_URL as string || "http://localhost:3000/api";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    (import.meta.env.VITE_API_URL as string) || "http://localhost:3000/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response.data;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;

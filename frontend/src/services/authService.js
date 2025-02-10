import { axiosWithCredentials } from "../utils/axiosMods.js";

const apiUrl = import.meta.env.VITE_API_URL;

export const userLogin = (email, password) => {
  return axiosWithCredentials.post(`${apiUrl}/auth/login`, { email, password });
};

export const userLogout = () => {
  return axiosWithCredentials.post(`${apiUrl}/auth/logout`, {});
};

export const getCurrentUser = () => {
  return axiosWithCredentials.get(`${apiUrl}/auth/check-session`);
};

export const removeSession = () => {
  return axiosWithCredentials.get(`${apiUrl}/auth/destroy-session`);
}

export const registerUser = (userData) => {
  return axiosWithCredentials.post(`${apiUrl}/user`, userData);
}
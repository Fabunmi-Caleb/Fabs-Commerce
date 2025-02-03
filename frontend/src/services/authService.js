import { axiosWithCredentials, axiosHandle401 } from "../utils/axiosMods.js";

const apiUrl = import.meta.env.VITE_API_URL;

export const userLogin = (email, password) => {
  return axiosWithCredentials.post(`${apiUrl}/auth/login`, { email, password });
};

export const userLogout = () => {
  return axiosWithCredentials.post(`${apiUrl}/auth/logout`, {});
};

export const getCurrentUser = () => {
  return axiosHandle401.get(`${apiUrl}/auth/check-session`);
};

export const registerUser = (userData) => {
  return axiosWithCredentials.post(`${apiUrl}/user`, userData);
}
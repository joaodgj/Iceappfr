import { mockLoginData, mockProfilePicture } from "../mock";
import apiClient from "./api";

const USE_MOCK = true;

const apiLogin = (username, password) => {
  apiClient
    .post(`${API_BASE_URL}/login`, {
      username,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      alert("Não foi possível realizar o login");
    });
};

const login = async (username, password) => {
  return USE_MOCK ? mockLoginData() : apiLogin(username, password);
};

const getProfilePicture = () => {
  return USE_MOCK ? mockProfilePicture() : null;
};

export { login, getProfilePicture };

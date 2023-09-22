import { mockLoginData, mockProfilePicture } from "../mock";
import apiClient from "./api";

const USE_MOCK = true;
const API_BASE_URL = "http://54.233.79.141:3333";

const apiLogin = async (username, password) => {
  const response = await apiClient
    .post(`${API_BASE_URL}/login`, {
      username,
      password,
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
      alert("Não foi possível realizar o login");
    });
  return response;
};

const login = async (username, password) => {
  const returnData = USE_MOCK
    ? mockLoginData()
    : await apiLogin(username, password);
  return returnData;
};

const getProfilePicture = () => {
  return USE_MOCK ? mockProfilePicture() : null;
};

export { login, getProfilePicture };

import { mockLoginData, mockProfilePicture } from "../mock";
import apiClient from "./api";

const USE_MOCK = false;
const API_BASE_URL = "http://15.228.248.72:3333";

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

const sendNewPost = async (idUser, idGroup, description) => {
  const response = await apiClient
    .post(`${API_BASE_URL}/post`, {
      idUser,
      idGroup,
      description
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
      alert("Não foi possível realizar a postagem");
    });
  return response;
};

const getPostsByGroups = async (groupIds) => {
  const response = await apiClient
    .get(`${API_BASE_URL}/post/posts` , {
      groupIds
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
      alert("Não foi possível receber as mensagens desse grupo!");
    });
  return response;
};

const login = async (username, password) => {
  const returnData = USE_MOCK
    ? mockLoginData()
    : await apiLogin(username, password);
  return returnData;
};

const getCommentsByPost = async (postId) => {
  const response = await apiClient
  .get(`${API_BASE_URL}/comment`)
  .catch((err) => {
    console.error("ops! ocorreu um erro: " + err);
    alert("Não foi possível receber as mensagens desse grupo!");
  });
  return response;
};

export { login, sendNewPost, getPostsByGroups, getCommentsByPost };

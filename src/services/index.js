import apiClient from "./api";

const API_BASE_URL = "http://15.228.248.72:3333";

const apiLogin = async (username, password) => {
  return await apiClient
    .post(`${API_BASE_URL}/login`, {
      username,
      password,
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
};

const sendNewComment = async (idPost, description) => {
  const response = await apiClient
    .post(`${API_BASE_URL}/comment`, {
      idPost,
      description
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
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
    });
  return response;
};

const getPostsByGroups = async (groupIds, page) => {
  const take = 10;
  const skip = page * take; // Calcula o número correto de posts a pular

  const response = await apiClient
    .post(`${API_BASE_URL}/post/array`, {
        groupIds: [groupIds],
        skip,
        take
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
  return response;
};

const getCommentsByPost = async (postId) => {
  const response = await apiClient
  .get(`${API_BASE_URL}/comment/post`, { params: { postId } })
  .catch((err) => {
    console.error("ops! ocorreu um erro: " + err);
  });
  return response;
};

const likePost = async (postId) => {
  const response = await apiClient
    .post(`${API_BASE_URL}/like`, {
      postId
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
  return response;
};

const unlikePost = async (postId) => {
  const response = await apiClient
    .delete(`${API_BASE_URL}/like`, {
      data: { postId }
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
  return response;
};

const getLikesCountByPost = async (postId) => {
  const response = await apiClient
    .post(`${API_BASE_URL}/like`, {
      postId
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
  return response;
};

const forgotPassword = async (username) => {
  const response = await apiClient
    .post(`${API_BASE_URL}/forgot-password`, {
      username
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
  return response;
};

const forgotUserName = async (email) => {
  const response = await apiClient
    .post(`${API_BASE_URL}/submit-username`, {
      email
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
  return response;
};

const passwordReset = async (resetToken, newPassword) => {
  const response = await apiClient
    .post(`${API_BASE_URL}/reset-password`, {
      resetToken,
      newPassword
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro: " + err);
    });
  return response;
};

export { apiLogin, sendNewPost, getPostsByGroups, getCommentsByPost, likePost, unlikePost, getLikesCountByPost, forgotPassword, forgotUserName, passwordReset, sendNewComment };

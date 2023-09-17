import { useContext } from 'react';
import axios from "axios";

const API_BASE_URL = 'http://54.233.79.141:3333'; 

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(async config => {
  const { token } = useContext(AuthContext);

  if (token)
    api.defaults.headers.authorization = `Bearer ${token}`;

  return config;
});

export default apiClient;
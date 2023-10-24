import { useContext } from 'react';
import axios from "axios";

const API_BASE_URL = "http://15.228.248.72:3333";

const apiClient = axios.create({
  baseURL: API_BASE_URL
});

export default apiClient;
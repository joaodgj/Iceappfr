import axios from "axios";

const API_BASE_URL = "http://15.229.26.160:3333";

const apiClient = axios.create({
  baseURL: API_BASE_URL
});

export default apiClient;
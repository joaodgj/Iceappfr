import { useContext } from 'react';
import axios from "axios";

const API_BASE_URL = 'http://54.233.79.141:3333'; 

const apiClient = axios.create({
  baseURL: API_BASE_URL
});

export default apiClient;
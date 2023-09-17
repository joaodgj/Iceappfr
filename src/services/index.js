import { mockProfilePicture } from '../mock'
import axios from 'axios';

const API_BASE_URL = 'http://18.228.23.193:3333'; 

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });

    return response.data; 
  } catch (error) {
    throw error; 
  }
};

const useMock = true

// const login = () => {
//     return useMock ? mockLoginData() : null
// }

const getProfilePicture = () => {
    return useMock ? mockProfilePicture() : null
}

export { login, getProfilePicture }
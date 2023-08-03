import { axiosInstance } from '../utils/axiosConfig';

const handleLogin = async (username, password) => {
  try {
    const response = await axiosInstance.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('loginError');
  }
};

const handleRegister = async (username, password) => {
  try {
    const response = await axiosInstance.post('/register', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('registerError');
  }
};

export { handleLogin, handleRegister };
import axios from 'redaxios';
const API_URL = 'https://api.jikan.moe/v4/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

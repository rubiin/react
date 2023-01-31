import axios from 'axios';
const API_URL = 'https://api.consumet.org/meta/anilist/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },

});

export default axiosInstance;

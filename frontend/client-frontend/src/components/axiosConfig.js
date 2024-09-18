// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8085', // Replace with your Spring Boot backend port
});

export default axiosInstance;

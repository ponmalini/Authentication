// src/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3500/api/auth';

//export const register = (userData) => axios.post(`${API_URL}/`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const getHome = (token) => axios.get(`${API_URL}/home`, { headers: { Authorization: token } });


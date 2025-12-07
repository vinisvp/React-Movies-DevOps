import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080'
});

export const register = (userData) => api.post('/customer', userData);
export const login = (credentials) => api.post('/auth/log-in', credentials);
export const getMovies = (token) => api.get('/movies', {
  headers: { Authorization: `Bearer ${token}` }
});

export default api;

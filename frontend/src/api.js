import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Auth APIs
export const sendOTP = (email) => API.post('/auth/send-otp', { email });
export const verifyOTP = (email, otp) => API.post('/auth/verify-otp', { email, otp });
export const signup = (userData) => API.post('/auth/signup', userData);
export const login = (email, password) => API.post('/auth/login', { email, password });

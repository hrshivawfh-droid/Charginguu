// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api/auth",
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true // మీరు cookies/credentials వాడితే అవసరం
});

export default api;

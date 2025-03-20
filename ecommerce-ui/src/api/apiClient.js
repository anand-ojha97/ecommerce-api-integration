import axios from 'axios';

// Create an Axios instance with default settings like base URL and timeout.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Access environment variable in Vite
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

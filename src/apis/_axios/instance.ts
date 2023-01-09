import axios from 'axios';

const URL = 'http://localhost:8080';

const instance = axios.create({
  baseURL: URL,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    const updatedConfig = { ...config };
    if (token) {
      updatedConfig.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    return updatedConfig;
  },
  async (error) => {},
);

instance.interceptors.response.use(
  async (config) => {
    const updatedConfig = { ...config };

    return updatedConfig;
  },
  async (error) => {},
);

export default instance;

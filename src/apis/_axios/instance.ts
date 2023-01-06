import axios from 'axios';

const URL = 'http://localhost:8080';

const instance = axios.create({
  baseURL: URL,
  timeout: 3000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  async (req) => {
    const updatedReq = { ...req };
    return updatedReq;
  },
  async (error) => {},
);

instance.interceptors.response.use(
  async (res) => {
    const updatedRes = { ...res };
    console.log('interceptors res', res);
    return updatedRes;
  },
  async (error) => {},
);

export default instance;

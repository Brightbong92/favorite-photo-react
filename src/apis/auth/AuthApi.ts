import { AxiosInstance, AxiosResponse } from 'axios';
import instance from '../_axios/instance';
import { UserInput } from './AuthApi.type';

class AuthApi {
  axios: AxiosInstance = instance;

  constructor(axios?: AxiosInstance) {
    if (axios) this.axios = axios;
  }

  createUser = async (req: UserInput) => {
    const { data } = await instance({
      method: 'POST',
      url: `/users/create`,
      data: req,
    });
    return data;
  };

  loginUser = async (req: UserInput) => {
    console.log('req', req);
    const { data } = await instance({
      method: 'POST',
      url: `/users/login`,
      data: req,
    });

    return data;
  };
}

const authApi = new AuthApi();

export default authApi;

import { useMutation } from 'react-query';
import authApi from './AuthApi';

export const useLoginUserMutation = () => {
  const loginUser = authApi.loginUser;
  return useMutation('loginUser', loginUser);
};

export const useCreateUserMutation = () => {
  const createUser = authApi.createUser;
  return useMutation('createUser', createUser);
};

import { useMutation } from 'react-query';
import authApi from './AuthApi';

const KEYS = {
  loginUser: 'loginUser' as const,
  createUser: 'createUser' as const,
};

export const useLoginUserMutation = () => {
  const loginUser = authApi.loginUser;
  return useMutation(KEYS.loginUser, loginUser);
};

export const useCreateUserMutation = () => {
  const createUser = authApi.createUser;
  return useMutation(KEYS.createUser, createUser);
};

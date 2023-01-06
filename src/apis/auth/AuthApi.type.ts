export type User = {
  id: string;
  email: string;
  password: string;
  createdAt: string;
};

export type UserInput = Pick<User, 'email' | 'password'>;

export type AuthResponseType = {
  message: string;
  token: string;
};

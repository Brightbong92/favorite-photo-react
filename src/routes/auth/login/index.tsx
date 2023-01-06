import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useLoginUserMutation } from '../../../apis/auth/AuthApi.mutation';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../../components/auth/AuthForm';

const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLoginUserMutation();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
    const { email, password } = data;
    loginMutate(
      { email, password },
      {
        onSuccess: (res) => {
          navigate(`/`);
        },
        onError: (err) => {
          alert(err);
        },
      },
    );
  };

  return <AuthForm {...{ onSubmit, title: 'Login' }} />;
};

export default LoginPage;

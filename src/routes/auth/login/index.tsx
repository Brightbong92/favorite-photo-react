import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useLoginUserMutation } from '../../../apis/auth/AuthApi.mutation';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../../components/auth/AuthForm';

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLoginUserMutation();

  const onSubmit: SubmitHandler<AuthFormType> = (data) => {
    const { email, password } = data;
    loginMutate(
      { email, password },
      {
        onSuccess: (res) => {
          const token = localStorage.getItem('token');
          if (token) navigate(`/`);
          else {
            localStorage.setItem('token', res.token);
            navigate(`/`);
          }
        },
        onError: (err) => {
          alert(err);
        },
      },
    );
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    } else setLoading(true);
  }, []);

  return loading ? <AuthForm {...{ onSubmit, title: 'Login' }} /> : <></>;
};

export default LoginPage;

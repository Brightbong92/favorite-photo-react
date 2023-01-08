import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useCreateUserMutation } from '../../../apis/auth/AuthApi.mutation';
import AuthForm from '../../../components/auth/AuthForm';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const { mutate: createUserMutate } = useCreateUserMutation();

  const onSubmit: SubmitHandler<AuthFormType> = (data) => {
    const { email, password } = data;

    createUserMutate(
      { email, password },
      {
        onSuccess: (res) => {
          if (res.token) {
            alert('signup complete');
            navigate('/auth/login');
          }
        },
        onError: (err) => {
          alert(err);
        },
      },
    );
  };

  return <AuthForm {...{ onSubmit, title: 'Signup' }} />;
};

export default SignUpPage;

import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useCreateUserMutation } from '../../../apis/auth/AuthApi.mutation';
import AuthForm from '../../../components/auth/AuthForm';

const SignUpPage = () => {
  const { mutate: createUserMutate } = useCreateUserMutation();

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log('signup data', data);

    const { email, password } = data;

    createUserMutate(
      { email, password },
      {
        onSuccess: (res) => {
          console.log(res);
        },
        onError: (err) => {
          console.log(err);
          alert(err);
        },
      },
    );
  };

  return <AuthForm {...{ onSubmit, title: 'Signup' }} />;
};

export default SignUpPage;

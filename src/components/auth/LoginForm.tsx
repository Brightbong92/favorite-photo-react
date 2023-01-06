import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <p>
        <input
          type="text"
          placeholder="id"
          {...register('id', {
            required: true,
            pattern: /^[0-9a-zA-Z]+@+[a-z]+[.]+[a-z]{2,3}/g,
            // ^: 시작
            // [0-9a-zA-Z]: 숫자, 대소문자
            // +@: @앞에 입력된 문자가 [0-9a-zA-Z]
            // +[a-z]: [a-z]앞에 입력된게 @이면서 소문자만
            // +[.]: [.] 앞에 [a-z] 소문자만
            // +[a-z]: [a-z] 앞에 .만
            // {2,3}: 2~3자리
            // g: 전체를 찾는다
          })}
        />
      </p>

      <p>
        <input
          type="text"
          placeholder="password"
          {...register('password', {
            required: true,
            minLength: 8,
            // pattern: /[0-9a-z!@#$%^&*()_+=-]{8}/i,
          })}
        />
      </p>

      <button type="submit" disabled={isSubmitting}>
        login
      </button>
    </form>
  );
};

export default LoginForm;

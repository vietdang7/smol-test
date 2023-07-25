import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { handleServerCommunication } from '../utils/handleServerCommunication';
import { hashPassword } from '../utils/hashPassword';
import { handleErrors } from '../utils/handleErrors';
import { useAuth } from '../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [serverError, setServerError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const hashedPassword = await hashPassword(data.password);
      const response = await handleServerCommunication('login', {
        email: data.email,
        password: hashedPassword,
      });

      if (response.status === 200) {
        login(response.data.token);
        router.push('/');
      } else {
        setServerError(handleErrors(response));
      }
    } catch (error) {
      setServerError(handleErrors(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login-email">Email</label>
      <input
        id="login-email"
        name="email"
        type="email"
        ref={register({ required: true })}
      />
      {errors.email && <p>Email is required</p>}

      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        name="password"
        type="password"
        ref={register({ required: true })}
      />
      {errors.password && <p>Password is required</p>}

      <button type="submit">Login</button>

      {serverError && <p>{serverError}</p>}
    </form>
  );
};

export default LoginForm;
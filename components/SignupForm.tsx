import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { handleServerCommunication } from '../utils/handleServerCommunication';
import { validateInputs } from '../utils/validateInputs';
import { hashPassword } from '../utils/hashPassword';
import { handleErrors } from '../utils/handleErrors';
import { useAuth } from '../contexts/AuthContext';

const SignupForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [serverError, setServerError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: { email: string; password: string; username: string }) => {
    try {
      const isValid = validateInputs(data);
      if (!isValid) throw new Error('Invalid inputs');

      const hashedPassword = await hashPassword(data.password);
      const response = await handleServerCommunication('signup', { ...data, password: hashedPassword });

      if (response.error) {
        throw new Error(response.error);
      }

      signup(response.token);
      router.push('/');
    } catch (error) {
      setServerError(handleErrors(error));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" ref={register({ required: true })} placeholder="Username" />
      {errors.username && <span>This field is required</span>}

      <input name="email" ref={register({ required: true })} placeholder="Email" />
      {errors.email && <span>This field is required</span>}

      <input name="password" ref={register({ required: true })} placeholder="Password" type="password" />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
      {serverError && <div>{serverError}</div>}
    </form>
  );
};

export default SignupForm;
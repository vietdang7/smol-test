import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { SignupForm } from '../components/SignupForm';
import { Error } from '../components/Error';
import { validateInputs } from '../utils/validateInputs';
import { handleServerCommunication } from '../utils/handleServerCommunication';
import { hashPassword } from '../utils/hashPassword';
import { handleErrors } from '../utils/handleErrors';
import { AuthContext } from '../contexts/AuthContext';

const Signup: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [serverError, setServerError] = useState('');
  const router = useRouter();
  const { setAuth } = React.useContext(AuthContext);

  const onSubmit = async (data: any) => {
    const { email, password, username } = data;
    const isValid = validateInputs(email, password, username);
    if (!isValid) {
      setServerError('Invalid input data');
      return;
    }
    const hashedPassword = hashPassword(password);
    try {
      const response = await handleServerCommunication('signup', { email, password: hashedPassword, username });
      if (response.status === 200) {
        setAuth(true);
        router.push('/');
      } else {
        const error = await response.json();
        setServerError(handleErrors(error));
      }
    } catch (error) {
      setServerError('Server error');
    }
  };

  return (
    <div>
      <SignupForm register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} />
      {serverError && <Error message={serverError} />}
    </div>
  );
};

export default Signup;
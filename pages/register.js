import React, { useState } from 'react';
import { useRouter } from 'next/router';
import RegisterForm from '../src/components/RegisterForm';
import { registerUser } from '../src/utils/api';

const RegisterPage = () => {
  const router = useRouter();
  const [registerError, setRegisterError] = useState(null);

  const handleRegister = async (username, password) => {
    try {
      await registerUser(username, password);
      router.push('/home');
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onRegister={handleRegister} />
      {registerError && <p>{registerError}</p>}
    </div>
  );
};

export default RegisterPage;
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import Error from '../components/Error';
import { useAuth } from '../contexts/AuthContext';
import { handleServerCommunication } from '../utils/handleServerCommunication';
import { handleErrors } from '../utils/handleErrors';

const LoginPage: React.FC = () => {
  const [error, setError] = useState(null);
  const { setAuth } = useAuth();
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await handleServerCommunication('login', { email, password });
      if (response.error) {
        setError(handleErrors(response.error));
      } else {
        setAuth(response.data);
        router.push('/');
      }
    } catch (err) {
      setError(handleErrors(err.message));
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
      {error && <Error message={error} />}
    </div>
  );
};

export default LoginPage;
```javascript
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../src/components/LoginForm';
import { handleLogin } from '../src/utils/auth';

const LoginPage = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (username, password) => {
    try {
      await handleLogin(username, password);
      router.push('/home');
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={onSubmit} error={loginError} />
      <p>
        Don't have an account?{' '}
        <a href="/register" style={{ color: 'blue' }}>
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginPage;
```
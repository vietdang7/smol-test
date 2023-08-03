import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { handleLogin } from '../api/auth';

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({ username, password });
      router.push('/');
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            id="login-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button id="login-button" type="submit">Log In</button>
        <button id="register-button" onClick={() => router.push('/register')}>Register</button>
      </form>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default LoginForm;
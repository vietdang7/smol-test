import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { handleLogin } from '../utils/auth';

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({ username, password });
      router.push('/home');
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      {loginError && <p>{loginError}</p>}
      <input
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button id="login-button" type="submit">Login</button>
      <button id="register-button" type="button" onClick={() => router.push('/register')}>Register</button>
    </form>
  );
};

export default LoginForm;
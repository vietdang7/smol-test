import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { handleRegister } from '../api/auth';
import '../styles/register.css';

const RegisterForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleRegister({ username, password });
      router.push('/');
    } catch (error) {
      setRegisterError(error.message);
    }
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="register-username">Username:</label>
        <input
          id="register-username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="register-password">Password:</label>
        <input
          id="register-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button id="submit-button" type="submit">
          Register
        </button>
      </form>
      {registerError && <p>{registerError}</p>}
    </div>
  );
};

export default RegisterForm;
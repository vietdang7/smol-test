import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerError, setRegisterError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/register', { username, password });

      if (response.data.success) {
        // Redirect to home page or login page
      } else {
        setRegisterError(response.data.message);
      }
    } catch (error) {
      setRegisterError('An error occurred during registration.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
      </label>
      {registerError && <p>{registerError}</p>}
      <button type="submit" id="register-button">Register</button>
    </form>
  );
};

export default RegisterForm;
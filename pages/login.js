import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>
      <LoginForm />
      <p>Don't have an account? <a href="/register">Sign up</a></p>
    </div>
  );
};

export default LoginPage;
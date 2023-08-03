import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../styles/register.css';

const Register = () => {
  return (
    <div className="register-page">
      <h1>Register</h1>
      <RegisterForm />
    </div>
  );
};

export default Register;
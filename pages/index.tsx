import { NextPage } from 'next';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { AuthContext } from '../contexts/AuthContext';

const HomePage: NextPage = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  }

  return (
    <div>
      <h1>Welcome to our Next.js App</h1>
      <h2>Sign Up</h2>
      <SignupForm />
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default HomePage;
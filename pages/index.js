import React from 'react';
import { useRouter } from 'next/router';
import HomePage from '../components/HomePage';

const Index = () => {
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Index;
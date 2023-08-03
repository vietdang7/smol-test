import React from 'react';

const HomePage = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <p>This is your homepage. You can add any features you want here.</p>
    </div>
  );
};

export default HomePage;
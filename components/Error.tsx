import React from 'react';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div id="error-message">
      <p>{message}</p>
    </div>
  );
};

export default Error;
import jwt from 'jsonwebtoken';

interface User {
  email: string;
  password: string;
}

export const authenticateUser = async (user: User) => {
  try {
    const response = await fetch('/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Authentication failed');
    }

    const data = await response.json();

    const token = jwt.sign(
      { userId: data.userId, email: data.email },
      'your_jwt_secret',
      { expiresIn: '1h' }
    );

    return { token, userId: data.userId };
  } catch (error) {
    throw error;
  }
};
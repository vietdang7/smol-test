```javascript
import axios from 'axios';

const handleLogin = async (username, password) => {
  try {
    const response = await axios.post('/api/login', { username, password });
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: 'Invalid login credentials' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

const handleRegister = async (username, password) => {
  try {
    const response = await axios.post('/api/register', { username, password });
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: 'Registration failed' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export { handleLogin, handleRegister };
```
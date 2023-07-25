```typescript
import axios from 'axios';

const handleServerCommunication = async (url: string, data: any) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default handleServerCommunication;
```
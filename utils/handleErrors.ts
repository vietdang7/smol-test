```typescript
// utils/handleErrors.ts

export const handleErrors = (error: any) => {
  let errorMessage = '';

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    errorMessage = error.response.data.message;
  } else if (error.request) {
    // The request was made but no response was received
    errorMessage = 'Server did not respond. Please try again later.';
  } else {
    // Something happened in setting up the request that triggered an Error
    errorMessage = 'Something went wrong. Please try again later.';
  }

  return errorMessage;
};
```
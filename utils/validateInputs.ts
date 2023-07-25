```typescript
type UserInput = {
  email: string;
  password: string;
  username?: string;
};

const validateInputs = (inputs: UserInput) => {
  const errors: Partial<UserInput> = {};

  // Validate email
  if (!inputs.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    errors.email = "Email address is invalid";
  }

  // Validate password
  if (!inputs.password) {
    errors.password = "Password is required";
  } else if (inputs.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  // Validate username for signup form
  if (inputs.username !== undefined && inputs.username.trim() === "") {
    errors.username = "Username is required";
  }

  return errors;
};

export default validateInputs;
```
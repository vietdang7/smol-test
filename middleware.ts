```typescript
import { NextApiRequest, NextApiResponse } from 'next';

export default function middleware(req: NextApiRequest, res: NextApiResponse, next: Function) {
  // Add your middleware logic here
  // For example, you can check if the user is authenticated, if not, you can redirect to login page

  // if (!req.session.user) {
  //   res.redirect('/login');
  //   return;
  // }

  next();
}
```
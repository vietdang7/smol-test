```typescript
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export async function handleOAuth(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  try {
    const tokenResponse = await axios({
      url: "https://oauth2.googleapis.com/token",
      method: "post",
      data: {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: "authorization_code",
        code,
      },
    });

    const { access_token } = tokenResponse.data;

    const userResponse = await axios({
      url: "https://www.googleapis.com/oauth2/v2/userinfo",
      method: "get",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const user = userResponse.data;

    // Here you should handle the user data as per your application's requirement
    // You can create a new user or update an existing one in your database

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "OAuth failed" });
  }
}
```
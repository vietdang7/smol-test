import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';

export default function Page() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!(session || loading)) {
      router.push('/login');
    } else if (session) {
      router.push('/home');
    }
  }, [session, loading, router]);

  return null;
}
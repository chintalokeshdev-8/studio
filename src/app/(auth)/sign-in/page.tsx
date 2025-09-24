
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function SignInRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main dashboard, as the user is now mocked as logged in.
    router.replace('/');
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin" />
      <p className="ml-4">Redirecting to dashboard...</p>
    </div>
  );
}

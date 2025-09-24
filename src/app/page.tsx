import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to the sign-in page by default.
  // The app layout will handle redirecting to the dashboard if already logged in.
  redirect('/sign-in');
}

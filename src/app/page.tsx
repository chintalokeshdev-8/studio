
import { redirect } from 'next/navigation';

export default function RootPage() {
  // By default, redirect to the main application dashboard.
  // The layout for the (app) group at /src/app/(app)/layout.tsx
  // contains the authentication guard that will redirect to /sign-in if the user is not logged in.
  redirect('/');
}

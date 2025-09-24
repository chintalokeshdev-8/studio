
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';
import { AuthProvider } from '@/contexts/auth-context';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '800'],
  variable: '--font-poppins' 
});

export const metadata: Metadata = {
  title: 'MedBridgee',
  description: 'MedBridgee - Your Health Friend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
            <Toaster />
        </ThemeProvider>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js" defer></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js" defer></Script>
      </body>
    </html>
  );
}
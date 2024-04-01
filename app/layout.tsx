import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/utils/helpers';
import { fontSans } from '@/lib/fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tadakir.net Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <html lang="en">
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 container">{children}</main>
            <footer className="container">footer</footer>
            <Toaster />
          </div>
        </body>
      </html>
    </UserProvider>
  );
}
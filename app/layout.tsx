import './globals.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Company dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} text-main antialiased min-h-screen flex flex-col`}>
        <Header />
        
        <div className="flex flex-1">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}

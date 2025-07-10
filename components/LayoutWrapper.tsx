'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import MainFooter from './MainFooter';
import SecondaryFooter from './SecondaryFooter';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <MainFooter />
      <SecondaryFooter />
    </div>
  );
} 
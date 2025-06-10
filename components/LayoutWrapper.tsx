'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import MainFooter from './MainFooter';
import SecondaryFooter from './SecondaryFooter';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {isMainPage ? <MainFooter /> : <SecondaryFooter />}
    </div>
  );
};

export default LayoutWrapper; 
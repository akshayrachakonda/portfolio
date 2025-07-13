'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/'; // ❌ No Navbar/Footer on home

  return (
    <>
      {!isHome && <Navbar />}
      {children}
      {!isHome && <Footer/>}
    </>
  );
}

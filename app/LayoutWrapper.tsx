'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showLayout, setShowLayout] = useState(false);

  useEffect(() => {
    // Check if pathname is home AND there's no hash — then hide layout
    const isInitialHome = pathname === '/' && !window.location.hash;
    setShowLayout(!isInitialHome);
  }, [pathname]);

  return (
    <>
      {showLayout && <Navbar />}
      {children}
      {showLayout && <Footer />}
    </>
  );
}

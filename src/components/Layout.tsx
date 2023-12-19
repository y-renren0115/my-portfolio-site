import React from 'react';
import ContactPage from './ContactPage';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ナビゲーションリンク */}
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      {/* <ContactPage /> */}
      <Footer />
    </div>
  );
};

export default Layout;
import React from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const getBackgroundImage = () => {
    const path = router.pathname;

    if (path === '/') {
      return "bg-homepage-image";
    } else {
      return "bg-background-image"
    }
  };

  const backgroundImageClass = getBackgroundImage();

  debugger;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`${backgroundImageClass} bg-cover bg-center bg-no-repeat flex-grow`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
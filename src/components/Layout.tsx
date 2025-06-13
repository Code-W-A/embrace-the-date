
import React from 'react';
import Navigation from './Navigation';
import BottomNavigation from './BottomNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation />
      <main className="md:pt-20 pb-20 md:pb-8">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;

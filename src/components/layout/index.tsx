import React from 'react';

import { Footer } from 'src/components/footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <div className={'flex flex-1 max-w-screen-xl m-auto w-full'}>
      <main className={'relative flex flex-col flex-1 w-full'}>{children}</main>
    </div>
    <Footer />
  </div>
);

export default AppLayout;

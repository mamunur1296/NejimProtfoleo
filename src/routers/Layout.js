
import Sidebar from '../components/Sidebar';

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';


const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="grid grid-cols-12 h-screen">
      <aside className="col-span-2 bg-gray-800 text-white">
        <Sidebar activeSection={currentPath} />
      </aside>
      <main className="col-span-10 bg-gray-100 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar, Drawer } from './Sidebar';
import { useProgress } from '../../hooks/ProgressContext';

export function Layout() {
  const [drawer, setDrawer] = useState(false);
  const { state } = useProgress();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  useEffect(() => {
    setDrawer(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app">
      <Header onMenu={() => setDrawer(true)} />
      <div className="body-row">
        <Sidebar />
        <main className="main">
          <Outlet />
        </main>
      </div>
      <Drawer open={drawer} onClose={() => setDrawer(false)} />
    </div>
  );
}

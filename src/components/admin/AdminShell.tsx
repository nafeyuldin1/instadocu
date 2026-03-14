'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import styles from '@/styles/admin-layout.module.css';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  
  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const getTitle = () => {
    if (pathname.includes('/admin/dashboard')) return 'Dashboard';
    if (pathname.includes('/admin/projects')) return 'Projects Management';
    if (pathname.includes('/admin/documents')) return 'Documents';
    if (pathname.includes('/admin/clients')) return 'Clients Management';
    if (pathname.includes('/admin/qr-codes')) return 'QR Codes';
    if (pathname.includes('/admin/reports')) return 'Reports';
    if (pathname.includes('/admin/settings')) return 'Settings';
    return 'Admin Panel';
  };

  return (
    <div className={styles.adminTheme}>
      <div className={styles.shell}>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className={styles.mainWrapper}>
          <Topbar 
            title={getTitle()} 
            onMenuClick={() => setIsSidebarOpen(true)} 
          />
          <div className={styles.contentArea}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

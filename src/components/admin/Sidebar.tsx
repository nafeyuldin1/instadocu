'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/admin-layout.module.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { label: 'Dashboard', icon: '⊞', href: '/admin/dashboard' },
    { label: 'Projects', icon: '📁', href: '/admin/projects', badge: '45' },
    { label: 'Documents', icon: '📄', href: '/admin/documents', badge: '156' },
  ];

  const managementItems = [
    { label: 'Clients', icon: '👥', href: '/admin/clients', badge: '6' },
    { label: 'QR Codes', icon: '📷', href: '/admin/qr-codes' },
    { label: 'Reports', icon: '📊', href: '/admin/reports' },
    { label: 'Settings', icon: '⚙️', href: '/admin/settings' },
  ];

  return (
    <>
      <div 
        className={`${styles.sidebarOverlay} ${isOpen ? styles.sidebarOverlayShow : ''}`} 
        onClick={onClose}
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.sideStripe}></div>
        <div className={styles.sideLogo}>
          <div className={styles.sideLogoIcon}>🏗</div>
          <div>
            <div className={styles.sideLogoText}>Installatie dosier</div>
            <div className={styles.sideLogoSub}>Installation Management</div>
          </div>
        </div>
        
        <div className={styles.navLbl}>Main Menu</div>
        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                onClick={() => {
                  if (window.innerWidth <= 1024) onClose();
                }}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {item.label}
                {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
              </Link>
            );
          })}

          <div className={styles.navSep}></div>
          <div className={styles.navLbl} style={{ padding: '0 0 6px' }}>Management</div>
          
          {managementItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                onClick={() => {
                  if (window.innerWidth <= 1024) onClose();
                }}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                {item.label}
                {item.badge && <span className={styles.navBadge}>{item.badge}</span>}
              </Link>
            );
          })}
        </nav>

        <div className={styles.storageCard}>
          <div style={{ fontSize: '22px', marginBottom: '10px' }}>☁️</div>
          <div className={styles.storageSize}>1.2 GB</div>
          <div className={styles.storageLabel}>of 2 GB used</div>
          <div className={styles.storageBarBg}>
            <div className={styles.storageBarFill}></div>
          </div>
          <div className={styles.storageLeft}><span>800 MB</span> storage left</div>
          <button className={styles.btnUpgrade}>Upgrade Storage</button>
          <div className={styles.sideBottomBtns}>
            <button className={styles.sideSmBtn}>❓ Help</button>
            <button className={styles.sideSmBtn}>📱 Open App</button>
          </div>
        </div>
      </aside>
    </>
  );
}

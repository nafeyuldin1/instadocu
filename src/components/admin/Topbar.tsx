'use client';

import React from 'react';
import styles from '@/styles/admin-layout.module.css';

interface TopbarProps {
  onMenuClick: () => void;
  title?: string;
}

export default function Topbar({ onMenuClick, title = 'Dashboard' }: TopbarProps) {
  return (
    <header className={styles.topbar}>
      <button className={styles.hamburger} onClick={onMenuClick}>
        ☰
      </button>
      <div className={styles.topbarTitle}>{title}</div>
      <div className={styles.searchWrap}>
        <span className={styles.sIcon}>🔍</span>
        <input 
          type="text" 
          className={styles.sInput} 
          placeholder="Search projects, clients..." 
        />
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.langBtn}>🇺🇸 Eng (US) ▾</div>
        <div className={styles.notifBtn}>
          🔔
          <div className={styles.notifBadge}>3</div>
        </div>
        <div className={styles.userArea}>
          <div className={styles.userAvatar}>JV</div>
          <div>
            <div className={styles.userName}>Jan de Vries</div>
            <div className={styles.userRole}>Admin</div>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--gray-lt)' }}>▾</span>
        </div>
      </div>
    </header>
  );
}

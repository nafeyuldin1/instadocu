'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import s from '@/styles/login.module.css';

export default function EmployeeQRLoginPage() {
  useEffect(() => {
    // Generate QR grid dots dynamically similar to HTML
    const grid = document.getElementById('qgrid');
    if (grid) {
      grid.innerHTML = '';
      for (let i = 0; i < 36; i++) {
        const d = document.createElement('div');
        d.className = s.qrD;
        d.style.opacity = Math.random() > 0.35 ? '1' : '0';
        grid.appendChild(d);
      }
    }
  }, []);

  return (
    <div className={s.page}>
      {/* ─── LEFT HERO (BLUE per screenshot) ─── */}
      <div className={s.hero}>
        <div className={s.heroOrangeBar}></div>
        <div className={s.heroCircleBottom}></div>

        <div className={s.heroBrand}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div className={s.brandLogo}>
              <div className={s.brandDot}></div>
              <div className={s.brandName}>Installatie dosier</div>
            </div>
          </Link>
          <div className={s.heroTag} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
            QR Authentication
          </div>
          <h1 className={s.heroHeading}>
            Scan &<br /><em>Login</em><br />Instantly
          </h1>
          <p className={s.heroBody}>
            Hold your QR code in front of the camera for instant, secure authentication — no typing required.
          </p>
        </div>

        <div className={s.qrShowcase}>
          <div className={s.qrList}>
            <div className={s.qrListItem}>
              <div className={s.qrListNum}>✓</div>
              <div>
                <div className={s.qrListTitle}>Open Camera</div>
                <div className={s.qrListDesc}>Camera is now active and ready</div>
              </div>
            </div>
            <div className={s.qrListItem}>
              <div className={s.qrListNum}>2</div>
              <div>
                <div className={s.qrListTitle}>Hold QR Code</div>
                <div className={s.qrListDesc}>Point camera at your personal QR code</div>
              </div>
            </div>
            <div className={s.qrListItem}>
              <div className={s.qrListNum} style={{background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>3</div>
              <div>
                <div className={s.qrListTitle} style={{color: 'rgba(255,255,255,0.8)'}}>Auto Login</div>
                <div className={s.qrListDesc} style={{color: 'rgba(255,255,255,0.5)'}}>System detects and logs you in automatically</div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.heroStats}>
          <div className={s.stat}>
            <div className={s.statNum}>5<span>s</span></div>
            <div className={s.statLabel}>AVG. LOGIN</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>256<span>-bit</span></div>
            <div className={s.statLabel}>ENCRYPTED</div>
          </div>
        </div>
      </div>

      {/* ─── RIGHT LOGIN PANEL ─── */}
      <div className={s.loginPanel}>
        <div className={s.formWrapper}>
          <div className={s.formEyebrow}>
            <div className={s.formEyebrowLine}></div>
            <div className={s.formEyebrowText} style={{ color: 'var(--blue)' }}>Employee Quick Access</div>
          </div>

          <h2 className={s.formTitle}>Scan<br />QR Code</h2>
          <p className={s.formSubtitleQr}>Scan QR code to log in instantly</p>

          <div className={s.tabRow}>
            <Link href="/login/employee/passcode" className={s.tabBtn}>
              🔢 Passcode
            </Link>
            <Link href="/login/employee/qr" className={`${s.tabBtn} ${s.active}`}>
              📷 QR Code
            </Link>
          </div>

          <div className={s.qrSection}>
            <div className={s.qrIconBig}>📱</div>
            <div className={s.qrTitle}>Scan QR Code</div>
            <div className={s.qrDesc}>Use your unique QR code for instant authentication without entering a passcode.</div>
            
            <button className={s.btnPrimary}>📷 &nbsp;Open Camera</button>
            <div className={s.orRow}>
              <div className={s.orLine}></div>
              <span className={s.orText}>OR</span>
              <div className={s.orLine}></div>
            </div>
            <Link href="/login/employee/passcode" style={{textDecoration: 'none'}}>
              <button className={s.btnGhost}>Use Passcode</button>
            </Link>
          </div>

          <div className={s.formFooterQr}>
            Need help? <a href="#">Contact us</a> &nbsp;·&nbsp; © 2026 Installatie dosier
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import s from '@/styles/login.module.css';

export default function AdminLoginPage() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className={s.page}>
      {/* ─── LEFT HERO ─── */}
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
          <div className={s.heroTag}>Admin Portal</div>
          <h1 className={s.heroHeading}>
            Admin<br /><em>Control</em><br />Center
          </h1>
          <p className={s.heroBody}>
            Full system access for administrators. Manage users, projects, and installation logs from one secure place.
          </p>
        </div>

        <div className={s.heroMiddle}>
          <div className={s.avatarCard}>
            <div className={s.avatarIcon}>👔</div>
            <div>
              <div className={s.avatarRole}>Administrator</div>
              <div className={s.avatarName}>Full System Access</div>
            </div>
          </div>
        </div>

        <div className={s.heroStats}>
          <div className={s.stat}>
            <div className={s.statNum}>48<span>+</span></div>
            <div className={s.statLabel}>Users</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>2.4<span>K</span></div>
            <div className={s.statLabel}>Projects</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>99<span>%</span></div>
            <div className={s.statLabel}>Uptime</div>
          </div>
        </div>
      </div>

      {/* ─── RIGHT LOGIN PANEL ─── */}
      <div className={s.loginPanel}>
        <div className={s.formWrapper}>
          <div className={s.formEyebrow}>
            <div className={s.formEyebrowLine}></div>
            <div className={s.formEyebrowText}>Installation Management System</div>
          </div>

          <h2 className={s.formTitle}>System<br />Access</h2>
          <p className={s.formSubtitle}>Authenticate to enter the control panel</p>

          <div className={s.fieldGroup}>
            <label className={s.fieldLabel}>Email Address</label>
            <input type="email" className={s.fieldInput} placeholder="your.email@company.nl" />
          </div>

          <div className={s.fieldGroup}>
            <label className={s.fieldLabel}>Password</label>
            <input type="password" className={s.fieldInput} placeholder="Enter your password" />
          </div>

          <div className={s.bottomRow}>
            <div className={s.remember} onClick={() => setRememberMe(!rememberMe)}>
              <div className={`${s.chk} ${rememberMe ? s.on : ''}`}>
                {rememberMe ? '✓' : ''}
              </div>
              <span className={s.rememberText}>Remember me</span>
            </div>
            <a href="#" className={s.forgotLink}>Forgot password?</a>
          </div>

          <button className={s.btnPrimary}>Sign In</button>

          <div className={s.formFooter}>© 2026 Installatie dosier. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

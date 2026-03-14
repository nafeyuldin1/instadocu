'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import s from '@/styles/login.module.css';

const MAX_PASSCODE = 6;

export default function EmployeePasscodeLoginPage() {
  const [code, setCode] = useState('');
  const [litIdx, setLitIdx] = useState(4);

  // Animate hero numpad
  useEffect(() => {
    const interval = setInterval(() => {
      setLitIdx((prev) => (prev + Math.floor(Math.random() * 3 + 1)) % 12);
    }, 700);
    return () => clearInterval(interval);
  }, []);

  const handlePress = (num: string) => {
    if (code.length >= MAX_PASSCODE) return;
    const newCode = code + num;
    setCode(newCode);
    if (newCode.length === MAX_PASSCODE) {
      setTimeout(() => submitCode(newCode), 400);
    }
  };

  const handleClear = () => {
    setCode((prev) => prev.slice(0, -1));
  };

  const submitCode = (currentCode: string) => {
    if (currentCode.length < MAX_PASSCODE) return;
    // Simulate submit...
    setTimeout(() => {
      setCode('');
    }, 1000);
  };

  const digits = Array.from({ length: MAX_PASSCODE }).map((_, i) => {
    const isFilled = i < code.length;
    const isActive = i === code.length;
    return (
      <div 
        key={i} 
        className={`${s.dbox} ${isFilled ? s.filled : ''} ${isActive ? s.active : ''}`}
        style={isFilled ? { fontSize: '20px' } : {}}
      >
        {isFilled ? '●' : <div className={s.cur} style={{ display: isActive ? 'block' : 'none' }}></div>}
      </div>
    );
  });

  return (
    <div className={s.page}>
      {/* ─── LEFT HERO (BLUE per screenshot) ─── */}
      <div className={s.hero}>
        <div className={s.heroOrangeBar}></div>

        <div className={s.heroBrand}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div className={s.brandLogo}>
              <div className={s.brandDot}></div>
              <div className={s.brandName}>Installatie dosier</div>
            </div>
          </Link>
          <div className={s.heroTag} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>
            Quick Access
          </div>
          <h1 className={s.heroHeading}>
            Fast &<br /><em>Secure</em><br />Access
          </h1>
          <p className={s.heroBody}>
            Enter your 6-digit passcode or scan your QR code for instant, secure access to your work dashboard.
          </p>
        </div>

        <div className={s.heroNumpadPreview}>
          <div className={s.numpadCard}>
            <div className={s.npLabel}>Your Passcode</div>
            <div className={s.npGrid}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '✓'].map((k, i) => (
                <div key={i} className={`${s.npKey} ${litIdx === i ? s.lit : ''}`}>
                  {k}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={s.heroStats}>
          <div className={s.stat}>
            <div className={s.statNum}>6<span>-digit</span></div>
            <div className={s.statLabel}>PASSCODE</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>2<span>s</span></div>
            <div className={s.statLabel}>LOGIN TIME</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>100<span>%</span></div>
            <div className={s.statLabel}>SECURE</div>
          </div>
        </div>
      </div>

      {/* ─── RIGHT LOGIN PANEL ─── */}
      <div className={s.loginPanel}>
        <div className={s.formWrapper}>
          <div className={s.formEyebrow}>
            <div className={s.formEyebrowLine}></div>
            <div className={s.formEyebrowText} style={{ color: 'var(--orange)' }}>Employee Quick Access</div>
          </div>

          <h2 className={s.formTitle}>Enter<br />Passcode</h2>
          <p className={s.formSubtitle}>Use your 6-digit code to log in instantly</p>

          <div className={s.tabRow}>
            <Link href="/login/employee/passcode" className={`${s.tabBtn} ${s.active}`}>
              🔢 Passcode
            </Link>
            <Link href="/login/employee/qr" className={s.tabBtn}>
              📷 QR Code
            </Link>
          </div>

          <div className={s.digitRow}>
             {digits}
          </div>
          <div className={s.digitHint}>Enter your 6-digit passcode</div>

          <div className={s.fieldGroup} style={{ marginBottom: '20px' }}>
            <label className={s.fieldLabel}>
              Project ID <span className={s.fieldLabelOpt}>(optional)</span>
            </label>
            <input type="text" className={s.fieldInput} placeholder="Enter project ID" />
            <div className={s.projHint}>Leave blank if you have access to multiple projects</div>
          </div>

          <div className={s.numpad}>
            <div className={s.key} onClick={() => handlePress('1')}><div className={s.kn}>1</div></div>
            <div className={s.key} onClick={() => handlePress('2')}><div className={s.kn}>2</div><div className={s.ks}>ABC</div></div>
            <div className={s.key} onClick={() => handlePress('3')}><div className={s.kn}>3</div><div className={s.ks}>DEF</div></div>
            <div className={s.key} onClick={() => handlePress('4')}><div className={s.kn}>4</div><div className={s.ks}>GHI</div></div>
            <div className={s.key} onClick={() => handlePress('5')}><div className={s.kn}>5</div><div className={s.ks}>JKL</div></div>
            <div className={s.key} onClick={() => handlePress('6')}><div className={s.kn}>6</div><div className={s.ks}>MNO</div></div>
            <div className={s.key} onClick={() => handlePress('7')}><div className={s.kn}>7</div><div className={s.ks}>PQRS</div></div>
            <div className={s.key} onClick={() => handlePress('8')}><div className={s.kn}>8</div><div className={s.ks}>TUV</div></div>
            <div className={s.key} onClick={() => handlePress('9')}><div className={s.kn}>9</div><div className={s.ks}>WXYZ</div></div>
            <div className={`${s.key} ${s.special}`} onClick={handleClear}>⌫</div>
            <div className={s.key} onClick={() => handlePress('0')}><div className={s.kn}>0</div></div>
            <div className={`${s.key} ${s.submit}`} onClick={() => submitCode(code)}>✓</div>
          </div>

          <div className={s.formFooter}>
            Need help? <a href="#">Contact us</a> &nbsp;·&nbsp; © 2026 Installatie dosier
          </div>
        </div>
      </div>
    </div>
  );
}

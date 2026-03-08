'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from '@/styles/marketing.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  return (
    <>
      {showAnnouncement && (
        <div className={s.announcementBar}>
          <span className={s.announcementEmoji}>🚀</span>
          <span>
            Introducing Instadocu — Manage all your installation documents in one place.{' '}
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('#pricing'); }}>Start your free trial →</a>
          </span>
          <button className={s.announcementClose} onClick={() => setShowAnnouncement(false)} aria-label="Close announcement">✕</button>
        </div>
      )}

      <nav className={`${s.nav} ${scrolled ? s.navScrolled : ''}`} id="navbar" style={{ top: scrolled ? 0 : (showAnnouncement ? 'var(--announcement-height, 40px)' : 0) }}>
        <div className={s.navInner}>
          <Link href="/" className={s.logo}>
            <Image src="/images/logo.png" alt="Instadocu" width={160} height={40} className={s.logoImg} priority />
          </Link>
          <div className={s.navLinks}>
            <button className={s.nl} onClick={() => scrollToSection('#features')}>Features</button>
            <button className={s.nl} onClick={() => scrollToSection('#how')}>How It Works</button>
            <button className={s.nl} onClick={() => scrollToSection('#pricing')}>Pricing</button>
            <button className={s.nl} onClick={() => scrollToSection('#testimonials')}>Reviews</button>
            <button className={s.nl} onClick={() => scrollToSection('#faq')}>FAQ</button>
          </div>
          <div className={s.navCtaRow}>
            <Link href="/login"><button className={s.btnNavGhost}>Log In</button></Link>
            <button className={s.btnNavPrimary} onClick={() => scrollToSection('#pricing')}>Start Free Trial</button>
          </div>
          <button className={s.hamburger} onClick={toggleMenu} aria-label="Toggle menu">☰</button>
        </div>
      </nav>

      <div className={`${s.mobMenu} ${menuOpen ? s.mobMenuOpen : ''}`} id="mobMenu">
        <div className={s.mobHeader}>
          <div className={s.logo}>
            <Image src="/images/logo.png" alt="Instadocu" width={160} height={40} className={s.logoImg} />
          </div>
          <button className={s.mobCloseBtn} onClick={toggleMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className={s.mobScrollContent}>
          <a href="#features" onClick={() => scrollToSection('#features')}>Features</a>
          <a href="#how" onClick={() => scrollToSection('#how')}>How It Works</a>
          <a href="#pricing" onClick={() => scrollToSection('#pricing')}>Pricing</a>
          <a href="#testimonials" onClick={() => scrollToSection('#testimonials')}>Reviews</a>
          <a href="#faq" onClick={() => scrollToSection('#faq')}>FAQ</a>
          
          <div className={s.mobBtns}>
            <Link href="/login" className={s.mobLoginBtn} style={{ textAlign: 'center' }}>Log In</Link>
            <button className={s.mobTrialBtn} onClick={() => scrollToSection('#pricing')}>Start Free Trial →</button>
          </div>
        </div>
      </div>
    </>
  );
}

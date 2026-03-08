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

      <nav className={`${s.nav} ${scrolled ? s.navScrolled : ''}`} id="navbar" style={{ top: showAnnouncement ? 'var(--announcement-height, 40px)' : 0 }}>
        <div className={s.navInner}>
          <Link href="/" className={s.logo}>
            <Image src="/images/logo.png" alt="Instadocu" width={200} height={50} className={s.logoImg} priority />
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
        <button className={s.mobCloseBtn} onClick={toggleMenu} aria-label="Close menu">✕</button>
        <a href="#features" onClick={() => scrollToSection('#features')}>Features</a>
        <a href="#how" onClick={() => scrollToSection('#how')}>How It Works</a>
        <a href="#pricing" onClick={() => scrollToSection('#pricing')}>Pricing</a>
        <a href="#testimonials" onClick={() => scrollToSection('#testimonials')}>Reviews</a>
        <div className={s.mobBtns}>
          <Link href="/login"><button className={s.mobLoginBtn}>Log In</button></Link>
          <button className={s.mobTrialBtn} onClick={() => scrollToSection('#pricing')}>Start Free Trial →</button>
        </div>
      </div>
    </>
  );
}

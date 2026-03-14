import Link from 'next/link';
import Image from 'next/image';
import s from '@/styles/marketing.module.css';

const PRODUCT_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Client Portal', href: '/login/customer' },
  { label: 'Employee Portal', href: '/login/employee/qr' },
  { label: 'API Docs', href: '#' },
  { label: 'Changelog', href: '#' },
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '#' },
  { label: 'Press & Media', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blogs' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'GDPR Compliance', href: '#' },
  { label: 'Security', href: '#' },
  { label: 'Help Center', href: '/faqs' },
  { label: 'System Status', href: '#' },
];

const ADMIN_LINKS = [
  { label: 'Admin Dashboard', href: '/admin/dashboard' },
  { label: 'Projects Management', href: '/admin/projects' },
  { label: 'Clients Management', href: '/admin/clients' },
  { label: 'Documents Management', href: '/admin/documents' },
  { label: 'QR Codes', href: '/admin/qr-codes' },
  { label: 'Reports', href: '/admin/reports' },
  { label: 'Settings', href: '/admin/settings' },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="wrap">
        <div className={s.footerGrid}>
          <div className={s.footerBrand}>
            <Link href="/" className={s.logo} style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '14px', height: '14px', background: '#E8692C', borderRadius: '50%' }}></div>
                <div className={s.logoText}>Installatie dosier</div>
              </div>
            </Link>
            <p className={s.footerDesc}>
              The complete document management platform for installation and construction professionals in the Netherlands.
            </p>
            <div className={s.footerSocials}>
              <div className={s.socialIc}>𝕏</div>
              <div className={s.socialIc}>in</div>
              <div className={s.socialIc}>f</div>
              <div className={s.socialIc}>▶</div>
            </div>
          </div>

          <div>
            <div className={s.ftColTitle}>Admin Panel</div>
            <ul className={s.ftLinks}>
              {ADMIN_LINKS.map((link, i) => (
                <li key={i}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className={s.ftColTitle}>Product</div>
            <ul className={s.ftLinks}>
              {PRODUCT_LINKS.map((link, i) => (
                <li key={i}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className={s.ftColTitle}>Company</div>
            <ul className={s.ftLinks}>
              {COMPANY_LINKS.map((link, i) => (
                <li key={i}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className={s.ftColTitle}>Legal &amp; Support</div>
            <ul className={s.ftLinks}>
              {LEGAL_LINKS.map((link, i) => (
                <li key={i}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.footerBottom}>
          <div className={s.footerCopy}>
            © 2026 Installatie dosier B.V. — Registered in Amsterdam, Netherlands. All rights reserved.
          </div>
          <div className={s.footerBadges}>
            <div className={s.ftBadge}>🔒 GDPR</div>
            <div className={s.ftBadge}>🇳🇱 Dutch Hosted</div>
            <div className={s.ftBadge}>ISO 27001</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

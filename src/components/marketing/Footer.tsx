import Link from 'next/link';
import Image from 'next/image';
import s from '@/styles/marketing.module.css';

const PRODUCT_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Client Portal', href: '#' },
  { label: 'Employee Portal', href: '#' },
  { label: 'API Docs', href: '#' },
  { label: 'Changelog', href: '#' },
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Press & Media', href: '#' },
  { label: 'Partners', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Blog', href: '#' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'GDPR Compliance', href: '#' },
  { label: 'Security', href: '#' },
  { label: 'Help Center', href: '#' },
  { label: 'System Status', href: '#' },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="wrap">
        <div className={s.footerGrid}>
          <div className={s.footerBrand}>
            <Link href="/" className={s.logo}>
              <Image src="/images/favicon.png" alt="Instadocu" width={36} height={36} style={{borderRadius: 8}} />
              <div className={s.logoWordmark} style={{ color: '#fff' }}>
                Instadocu<span className={s.dot}>.</span>
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
            © 2026 Instadocu B.V. — Registered in Amsterdam, Netherlands. All rights reserved.
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

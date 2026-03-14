
'use client';

import { useEffect } from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import Head from 'next/head';

export default function FaqsPage() {
  useEffect(() => {
    // Run original page scripts once mounted
    const obs = new IntersectionObserver((e) => {
      e.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.rev').forEach((el) => {
      obs.observe(el);
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('in');
      }
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <style dangerouslySetInnerHTML={{ __html: `
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
:root{
  --blue:#2A5CBA;--blue-dk:#1a3e8c;--blue-lt:#EBF0FA;
  --orange:#E8692C;--orange-dk:#c9541c;--orange-lt:#FFF0E8;
  --cream:#F7F4F0;--cream2:#EDE9E3;
  --dark:#0D0F1A;--dark2:#131626;
  --white:#FFFFFF;--black:#0C0E1A;
  --gray:#6B7280;--gray-lt:#9CA3AF;--border:#E5E7EB;
  --ann-h:44px;--nav-h:72px;
}
.page-wrapper-html {font-size:16px;scroll-behavior:smooth;}
.page-wrapper {font-family:'Satoshi',system-ui,sans-serif;color:var(--black);background:var(--white);overflow-x:hidden;-webkit-font-smoothing:antialiased;}
a{text-decoration:none;color:inherit;}
button{font-family:'Satoshi',system-ui,sans-serif;cursor:pointer;border:none;background:none;}

.wrap{max-width:1440px;margin:0 auto;padding:0 72px;}
@media(max-width:1280px){.wrap{padding:0 48px;}}
@media(max-width:1024px){.wrap{padding:0 32px;}}
@media(max-width:640px){.wrap{padding:0 20px;}}

/* ANN BAR */
.ann{position:fixed;top:0;left:0;right:0;z-index:1001;height:var(--ann-h);background:linear-gradient(90deg,var(--blue-dk),var(--blue) 40%,var(--blue-dk));display:flex;align-items:center;justify-content:center;gap:12px;}
.ann-chip{background:var(--orange);color:#fff;font-size:10px;font-weight:800;padding:3px 10px;border-radius:100px;letter-spacing:.5px;}
.ann-txt{font-size:13px;font-weight:600;color:#fff;}
.ann-link{color:#fff;font-weight:700;text-decoration:underline;text-underline-offset:3px;opacity:.85;}
.ann-link:hover{opacity:1;}
.ann-close{position:absolute;right:16px;width:26px;height:26px;border-radius:6px;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;cursor:pointer;}
.ann-close svg{width:12px;height:12px;stroke:#fff;fill:none;}

/* NAV */
.nav{position:fixed;top:var(--ann-h);left:0;right:0;z-index:1000;height:var(--nav-h);transition:background .35s,box-shadow .35s;}
.nav-wrap{max-width:1440px;margin:0 auto;padding:0 72px;height:100%;display:flex;align-items:center;gap:32px;}
.nav.glass{background:rgba(255,255,255,.82);backdrop-filter:blur(28px) saturate(180%);-webkit-backdrop-filter:blur(28px) saturate(180%);box-shadow:0 1px 0 rgba(0,0,0,.06),0 8px 40px rgba(0,0,0,.06);}
.logo{display:flex;align-items:center;gap:10px;}
.logo-box{width:38px;height:38px;background:var(--orange);border-radius:10px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(232,105,44,.35);}
.logo-word{font-size:16px;font-weight:900;color:var(--black);letter-spacing:-.4px;}
.logo-word .dot{color:var(--orange);}
.nav-links{display:flex;gap:26px;margin-left:32px;}
.n-link{font-size:13.5px;font-weight:500;color:var(--gray);transition:color .2s;}
.n-link:hover,.n-link.active{color:var(--blue);}
.nav-right{margin-left:auto;display:flex;gap:10px;}
.btn-out{padding:8px 18px;border-radius:9px;font-size:13px;font-weight:600;color:var(--black);border:1.5px solid var(--border);transition:all .2s;}
.btn-out:hover{border-color:var(--blue);color:var(--blue);}
.btn-fill{padding:8px 18px;border-radius:9px;font-size:13px;font-weight:800;color:#fff;background:var(--orange);box-shadow:0 4px 14px rgba(232,105,44,.3);transition:all .2s;}
.btn-fill:hover{background:var(--orange-dk);}
.ham{display:none;width:36px;height:36px;align-items:center;justify-content:center;border-radius:8px;background:var(--cream);margin-left:auto;}
.ham svg{width:20px;height:20px;stroke:var(--black);fill:none;}
.mob-menu{display:none;position:fixed;inset:0;top:calc(var(--ann-h)+var(--nav-h));background:#fff;z-index:999;flex-direction:column;padding:28px 28px 40px;border-top:1px solid var(--border);}
.mob-menu.open{display:flex;}
.mob-link{font-size:17px;font-weight:700;color:var(--black);padding:14px 0;border-bottom:1px solid var(--border);}
.mob-btns{display:flex;flex-direction:column;gap:10px;margin-top:24px;}

/* HERO */
.faq-hero{background:var(--dark);position:relative;overflow:hidden;padding:96px 0 80px;}
.fh-photo{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80&auto=format&fit=crop') center/cover no-repeat;opacity:.1;}
.fh-ov{position:absolute;inset:0;background:linear-gradient(135deg,rgba(13,15,26,.97),rgba(42,92,186,.2));}
.fh-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:56px 56px;}
.fh-stripe{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--orange),rgba(232,105,44,.2),transparent);}
.fh-inner{position:relative;z-index:2;text-align:center;}
.fh-tag{display:inline-flex;align-items:center;gap:7px;background:rgba(232,105,44,.12);border:1px solid rgba(232,105,44,.26);border-radius:100px;padding:6px 14px;margin-bottom:22px;}
.fh-tag svg{width:13px;height:13px;stroke:var(--orange);fill:none;}
.fh-tag span{font-size:11.5px;font-weight:700;color:var(--orange);}
.fh-h1{font-size:clamp(34px,4vw,60px);font-weight:900;color:#fff;letter-spacing:-2px;line-height:1.1;margin-bottom:18px;}
.fh-h1 span{color:var(--orange);}
.fh-p{font-size:clamp(14px,1.1vw,17px);color:rgba(255,255,255,.45);line-height:1.8;max-width:560px;margin:0 auto 36px;}
/* Search box */
.fh-search{max-width:540px;margin:0 auto;position:relative;}
.fh-search input{width:100%;padding:15px 20px 15px 50px;border-radius:14px;border:1.5px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);font-family:'Satoshi',system-ui,sans-serif;font-size:14.5px;color:#fff;outline:none;transition:all .2s;backdrop-filter:blur(10px);}
.fh-search input::placeholder{color:rgba(255,255,255,.3);}
.fh-search input:focus{border-color:rgba(232,105,44,.5);background:rgba(255,255,255,.09);}
.fh-search-ic{position:absolute;left:17px;top:50%;transform:translateY(-50%);}
.fh-search-ic svg{width:18px;height:18px;stroke:rgba(255,255,255,.35);fill:none;}

/* STATS ROW */
.faq-stats{background:var(--blue);padding:0;}
.fs-grid{display:grid;grid-template-columns:repeat(4,1fr);}
.fs-item{padding:24px 28px;text-align:center;position:relative;}
.fs-item:not(:last-child)::after{content:'';position:absolute;right:0;top:20%;bottom:20%;width:1px;background:rgba(255,255,255,.12);}
.fs-n{font-size:26px;font-weight:900;color:#fff;letter-spacing:-1px;}
.fs-n span{color:var(--orange);}
.fs-l{font-size:11.5px;color:rgba(255,255,255,.5);margin-top:2px;font-weight:500;}

/* BODY */
.faq-body{padding:88px 0;}
.faq-layout{display:grid;grid-template-columns:280px 1fr;gap:56px;align-items:start;}

/* CATEGORY NAV */
.cat-nav{position:sticky;top:calc(var(--ann-h)+var(--nav-h)+24px);}
.cat-nav-title{font-size:10.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--gray-lt);margin-bottom:14px;}
.cat-list{display:flex;flex-direction:column;gap:4px;}
.cat-btn{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;font-size:13.5px;font-weight:600;color:var(--gray);transition:all .2s;text-align:left;cursor:pointer;width:100%;}
.cat-btn:hover{background:var(--cream);color:var(--black);}
.cat-btn.active{background:var(--blue-lt);color:var(--blue);}
.cat-btn svg{width:16px;height:16px;stroke:currentColor;fill:none;flex-shrink:0;}
.cat-count{margin-left:auto;font-size:11px;font-weight:700;background:var(--cream2);color:var(--gray);padding:2px 8px;border-radius:100px;}
.cat-btn.active .cat-count{background:rgba(42,92,186,.15);color:var(--blue);}
.cat-cta{margin-top:28px;padding:20px;background:var(--dark);border-radius:16px;text-align:center;}
.cat-cta-icon{width:40px;height:40px;background:rgba(232,105,44,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;}
.cat-cta-icon svg{width:20px;height:20px;stroke:var(--orange);fill:none;}
.cat-cta h4{font-size:14px;font-weight:800;color:#fff;margin-bottom:6px;}
.cat-cta p{font-size:12px;color:rgba(255,255,255,.38);line-height:1.6;margin-bottom:14px;}
.cat-cta-btn{display:block;padding:10px;background:var(--orange);color:#fff;border-radius:9px;font-size:12.5px;font-weight:800;transition:background .2s;}
.cat-cta-btn:hover{background:var(--orange-dk);}

/* FAQ SECTIONS */
.faq-sections{display:flex;flex-direction:column;gap:48px;}
.faq-section{scroll-margin-top:calc(var(--ann-h)+var(--nav-h)+32px);}
.faq-sec-header{display:flex;align-items:center;gap:12px;margin-bottom:22px;}
.faq-sec-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.faq-sec-icon svg{width:20px;height:20px;stroke:#fff;fill:none;stroke-width:2;}
.faq-sec-title{font-size:20px;font-weight:900;color:var(--black);letter-spacing:-.4px;}
.faq-sec-count{font-size:12px;font-weight:700;background:var(--cream2);color:var(--gray);padding:3px 10px;border-radius:100px;margin-left:auto;}

/* ACCORDION */
.acc-item{border:1px solid var(--border);border-radius:14px;overflow:hidden;margin-bottom:10px;transition:border-color .2s;}
.acc-item.open{border-color:var(--blue);}
.acc-q{display:flex;align-items:center;gap:14px;padding:18px 20px;cursor:pointer;user-select:none;transition:background .2s;}
.acc-q:hover{background:var(--cream);}
.acc-item.open .acc-q{background:var(--blue-lt);}
.acc-qtext{font-size:15px;font-weight:700;color:var(--black);flex:1;line-height:1.45;}
.acc-item.open .acc-qtext{color:var(--blue);}
.acc-icon{width:28px;height:28px;border-radius:7px;background:var(--cream2);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .3s;}
.acc-item.open .acc-icon{background:var(--blue);transform:rotate(45deg);}
.acc-icon svg{width:13px;height:13px;stroke:var(--gray);fill:none;stroke-width:2.5;}
.acc-item.open .acc-icon svg{stroke:#fff;}
.acc-body{max-height:0;overflow:hidden;transition:max-height .38s cubic-bezier(.4,0,.2,1);}
.acc-body-inner{padding:0 20px 20px;border-top:1px solid rgba(42,92,186,.1);}
.acc-body-inner p{font-size:14px;font-weight:400;color:var(--gray);line-height:1.82;margin-top:16px;}
.acc-body-inner p+p{margin-top:10px;}
.acc-body-inner a{color:var(--blue);font-weight:600;}
.acc-tip{display:flex;align-items:flex-start;gap:10px;margin-top:14px;padding:12px 14px;background:var(--blue-lt);border-radius:9px;border-left:3px solid var(--blue);}
.acc-tip svg{width:15px;height:15px;stroke:var(--blue);fill:none;flex-shrink:0;margin-top:1px;}
.acc-tip span{font-size:12.5px;color:var(--blue);font-weight:500;line-height:1.6;}

/* STILL QUESTIONS */
.still-q{background:var(--dark);padding:80px 0;position:relative;overflow:hidden;}
.sq-bg{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80') center/cover no-repeat;opacity:.06;}
.sq-ov{position:absolute;inset:0;background:radial-gradient(ellipse 60% 80% at 50% 50%,rgba(42,92,186,.25),transparent 70%);}
.sq-inner{position:relative;z-index:2;text-align:center;}
.sq-inner h2{font-size:clamp(26px,2.8vw,42px);font-weight:900;color:#fff;letter-spacing:-1.2px;margin-bottom:14px;}
.sq-inner p{font-size:15px;color:rgba(255,255,255,.42);line-height:1.8;max-width:480px;margin:0 auto 36px;}
.sq-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:860px;margin:0 auto;}
.sq-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:24px;text-align:center;transition:all .25s;cursor:pointer;}
.sq-card:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16);transform:translateY(-3px);}
.sq-card-ic{width:44px;height:44px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin:0 auto 14px;}
.sq-card-ic svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:1.8;}
.sq-card h3{font-size:14.5px;font-weight:800;color:#fff;margin-bottom:6px;}
.sq-card p{font-size:12.5px;color:rgba(255,255,255,.38);line-height:1.6;}

/* FOOTER */
.footer{background:#080A14;padding:64px 0 28px;}
.footer-top{display:grid;grid-template-columns:250px repeat(3,1fr);gap:48px;margin-bottom:48px;}
.ft-brand{display:flex;flex-direction:column;gap:13px;}
.ft-desc{font-size:12.5px;color:rgba(255,255,255,.28);line-height:1.82;max-width:210px;}
.ft-socials{display:flex;gap:8px;}
.ft-soc{width:32px;height:32px;border-radius:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;}
.ft-soc:hover{background:var(--blue);border-color:var(--blue);}
.ft-soc svg{width:13px;height:13px;stroke:rgba(255,255,255,.55);fill:none;}
.ft-col-h{font-size:10px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.55);margin-bottom:15px;}
.ft-links{display:flex;flex-direction:column;gap:9px;}
.ft-links a{font-size:12.5px;color:rgba(255,255,255,.3);transition:color .2s;}
.ft-links a:hover{color:rgba(255,255,255,.75);}
.footer-bot{border-top:1px solid rgba(255,255,255,.05);padding-top:24px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
.ft-copy{font-size:11.5px;color:rgba(255,255,255,.2);}
.ft-badges{display:flex;gap:7px;}
.ft-badge{font-size:10.5px;font-weight:600;color:rgba(255,255,255,.22);border:1px solid rgba(255,255,255,.07);padding:3px 10px;border-radius:100px;}

/* REVEAL */
.rev{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease;}
.rev.in{opacity:1;transform:none;}
.d1{transition-delay:.08s;}.d2{transition-delay:.16s;}.d3{transition-delay:.24s;}

/* RESPONSIVE */
@media(max-width:1024px){.faq-layout{grid-template-columns:1fr;}.cat-nav{position:relative;top:0;display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start;}.cat-nav-title{width:100%;}.cat-list{flex-direction:row;flex-wrap:wrap;}.cat-cta{display:none;}.footer-top{grid-template-columns:1fr 1fr;gap:36px;}}
@media(max-width:768px){.sq-cards{grid-template-columns:1fr;}.fs-grid{grid-template-columns:repeat(2,1fr);}.nav-links,.nav-right{display:none;}.ham{display:flex;}}
@media(max-width:640px){:root{--ann-h:40px;--nav-h:62px;}.footer-top{grid-template-columns:1fr;}}
` }} />
      <div className="page-wrapper" dangerouslySetInnerHTML={{ __html: `<!-- HERO -->
<section class="faq-hero">
  <div class="fh-photo"></div>
  <div class="fh-ov"></div>
  <div class="fh-grid"></div>
  <div class="fh-stripe"></div>
  <div class="wrap">
    <div class="fh-inner rev">
      <div class="fh-tag"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span>Help Center</span></div>
      <h1 class="fh-h1">Frequently Asked <span>Questions</span></h1>
      <p class="fh-p">Find answers to the most common questions about Installatie dosier. Can't find what you're looking for? Contact our support team.</p>
      <div class="fh-search">
        <div class="fh-search-ic"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
        <input type="text" placeholder="Search questions..." id="searchInput" oninput="filterFAQ(this.value)"/>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="faq-stats">
  <div class="wrap">
    <div class="fs-grid">
      <div class="fs-item"><div class="fs-n">48<span>+</span></div><div class="fs-l">FAQ Articles</div></div>
      <div class="fs-item"><div class="fs-n">6</div><div class="fs-l">Categories</div></div>
      <div class="fs-item"><div class="fs-n">98<span>%</span></div><div class="fs-l">Questions Resolved</div></div>
      <div class="fs-item"><div class="fs-n">&lt;2<span>h</span></div><div class="fs-l">Avg. Support Response</div></div>
    </div>
  </div>
</div>

<!-- FAQ BODY -->
<section class="faq-body">
  <div class="wrap">
    <div class="faq-layout">

      <!-- CATEGORY NAV -->
      <div class="cat-nav rev">
        <div class="cat-nav-title">Categories</div>
        <div class="cat-list">
          <button class="cat-btn active" onclick="scrollSec('general')"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>General<span class="cat-count">6</span></button>
          <button class="cat-btn" onclick="scrollSec('pricing')"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>Pricing & Plans<span class="cat-count">5</span></button>
          <button class="cat-btn" onclick="scrollSec('documents')"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Documents<span class="cat-count">6</span></button>
          <button class="cat-btn" onclick="scrollSec('portals')"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>Portals & Access<span class="cat-count">5</span></button>
          <button class="cat-btn" onclick="scrollSec('security')"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Security & Privacy<span class="cat-count">5</span></button>
          <button class="cat-btn" onclick="scrollSec('technical')"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Technical & API<span class="cat-count">5</span></button>
        </div>
        <div class="cat-cta">
          <div class="cat-cta-icon"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
          <h4>Still have questions?</h4>
          <p>Our support team responds within 2 hours on business days.</p>
          <a class="cat-cta-btn" href="#">Contact Support</a>
        </div>
      </div>

      <!-- FAQ CONTENT -->
      <div class="faq-sections" id="faqContent">

        <!-- GENERAL -->
        <div class="faq-section rev" id="general">
          <div class="faq-sec-header">
            <div class="faq-sec-icon" style="background:var(--blue);"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
            <span class="faq-sec-title">General Questions</span>
            <span class="faq-sec-count">6 questions</span>
          </div>
          <div class="acc-item open" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">What is Installatie dosier and who is it for?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Installatie dosier is a professional document management platform built specifically for installation and construction companies in the Netherlands. It's designed for electricians, plumbers, HVAC installers, and general construction contractors.</p><p>Whether you're a solo electrician or run a 50-person installation company, Installatie dosier centralizes all your project documentation — from technical drawings and certificates to inspection reports and client approvals.</p><div class="acc-tip"><svg viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg><span>Installatie dosier is used daily by 1,200+ professionals across the Netherlands, Belgium and Germany.</span></div></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">How does Installatie dosier differ from regular cloud storage like Google Drive?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Google Drive and Dropbox are generic file storage tools. Installatie dosier is built specifically for the installation and construction workflow. Key differences include structured project management, client portals with approval workflows, auto-generated logbooks, QR codes for equipment, and compliance-ready audit trails.</p><p>Unlike generic storage, Installatie dosier understands construction file types (DWG, PDF, XLSX), provides role-based access for clients and field workers, and generates professional installation reports automatically.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Is Installatie dosier available in languages other than Dutch?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes! Installatie dosier currently supports Dutch, English, German, and French. The platform automatically detects your browser language or you can manually set your preference in account settings. Client portals can be configured in a different language than the admin portal.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Can I import my existing documents and project data?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Absolutely. Installatie dosier supports bulk import from Google Drive, Dropbox, local folders, and most common cloud storage providers. Our onboarding team assists Enterprise customers with migrating years of existing documentation at no extra cost.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Does Installatie dosier work offline?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>The mobile app supports offline mode for viewing previously downloaded documents, logging work notes, and capturing photos. All offline changes sync automatically when you reconnect to the internet. Core admin and client portal features require an active connection.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">How long does onboarding take for a new company?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Most teams are fully operational within 1 hour. The guided setup wizard walks you through creating your company profile, adding team members, setting up your first project, and configuring client portals. Enterprise customers receive a dedicated onboarding session with our implementation team.</p></div></div>
          </div>
        </div>

        <!-- PRICING -->
        <div class="faq-section rev" id="pricing">
          <div class="faq-sec-header">
            <div class="faq-sec-icon" style="background:var(--orange);"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
            <span class="faq-sec-title">Pricing & Plans</span>
            <span class="faq-sec-count">5 questions</span>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Is there a free trial? Do I need a credit card?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes — every plan starts with a 14-day free trial. No credit card required to start. You get full access to all features during the trial period. We'll send you a reminder 3 days before the trial ends.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Can I switch plans or cancel anytime?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes, you can upgrade, downgrade, or cancel your subscription at any time from your account settings. Cancellations take effect at the end of your current billing period. We don't charge cancellation fees and you keep access until the billing period ends.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">What happens to my data if I cancel?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>After cancellation, your account enters a 30-day grace period where you can export all your data. After 30 days, data is permanently deleted per GDPR requirements. We recommend exporting your documents before cancelling.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Do you offer discounts for annual billing?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes — annual billing saves you 20% compared to monthly billing. This is applied automatically when you select "Annual" during checkout. The discount is calculated upfront and you're billed once per year.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Are there discounts for non-profits or educational institutions?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>We offer special pricing for registered non-profit organizations, educational institutions, and vocational training centers. Contact our sales team with your organization details and we'll provide a custom quote.</p></div></div>
          </div>
        </div>

        <!-- DOCUMENTS -->
        <div class="faq-section rev" id="documents">
          <div class="faq-sec-header">
            <div class="faq-sec-icon" style="background:#7c3aed;"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
            <span class="faq-sec-title">Documents & Storage</span>
            <span class="faq-sec-count">6 questions</span>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">What file types are supported?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Installatie dosier supports 50+ file types including PDF, DWG, DXF, XLSX, DOCX, JPG, PNG, MP4, and more. Technical drawing formats (AutoCAD, Revit) are fully supported with in-browser preview. Maximum file size is 500MB per file.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">How does version control work?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Every time you upload a new version of a document, the previous version is automatically archived with a timestamp and the name of who uploaded it. You can restore any previous version with one click. Version history is kept indefinitely on Business and Enterprise plans.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Can clients digitally sign and approve documents?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes. Clients can digitally approve documents directly in their portal by clicking "Approve" — this creates a timestamped audit record. For legally binding e-signatures, Business and Enterprise plans include integration with DocuSign and iDIN verification.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Is there full-text search across all documents?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes — Installatie dosier indexes the full text of PDFs and Office documents. You can search by document content, filename, project name, tags, upload date, or client name. Results appear in under a second even across thousands of documents.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">What happens if I exceed my storage limit?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>You'll receive email notifications at 80% and 95% of your storage limit. When you reach 100%, you can still view and download existing documents but cannot upload new ones until you upgrade your plan or free up space by archiving old projects.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Are documents backed up?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>All documents are automatically backed up to three geographically separate data centers in the Netherlands and Germany. Backups run every 4 hours. In the unlikely event of data loss, we can restore your data to within a 4-hour window.</p></div></div>
          </div>
        </div>

        <!-- PORTALS -->
        <div class="faq-section rev" id="portals">
          <div class="faq-sec-header">
            <div class="faq-sec-icon" style="background:#0d9488;"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <span class="faq-sec-title">Portals & Access</span>
            <span class="faq-sec-count">5 questions</span>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Do clients need to create an account to view their portal?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>No — clients access their portal via a secure unique link you share with them. No account creation required. Optionally, for added security, you can require clients to set a password or verify via email OTP before accessing their portal.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Can I white-label the client portal with my own branding?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes, on Business and Enterprise plans. You can upload your company logo, set brand colors, customize the portal URL (e.g., portal.yourcompany.nl), and add a custom welcome message. The client sees your branding — Installatie dosier is invisible.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">How many client portals can I create?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Starter plan: 1 client portal. Pro, Business, and Enterprise plans: unlimited client portals. Each portal is isolated — clients only see documents you explicitly share with them. Portals can be archived when a project is complete.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Can I track when clients view or download documents?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes — every document view, download, and approval in a client portal is logged with a timestamp and IP address. You can view this activity log per document or per client portal. Receive instant notifications when clients take action on shared documents.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">What's the difference between admin, employee, and client portals?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p><strong>Admin Portal:</strong> Full access to all projects, employees, documents, clients, reports, and settings. <strong>Employee Portal:</strong> Field workers see only their assigned projects and documents. Can upload photos, log work, and fill in reports from mobile. <strong>Client Portal:</strong> Clients see only their specific project documents — a clean read-only view with approval capabilities.</p></div></div>
          </div>
        </div>

        <!-- SECURITY -->
        <div class="faq-section rev" id="security">
          <div class="faq-sec-header">
            <div class="faq-sec-icon" style="background:#b45309;"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
            <span class="faq-sec-title">Security & Privacy</span>
            <span class="faq-sec-count">5 questions</span>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Is Installatie dosier GDPR compliant?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes, fully. Installatie dosier B.V. is a Dutch company and all data is stored on servers within the EU (Netherlands and Germany). We provide a Data Processing Agreement (DPA) for all customers and comply with all GDPR requirements including data deletion requests, data portability, and breach notifications.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">How is my data encrypted?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Documents are stored in encrypted object storage. Database backups are also encrypted. We hold ISO 27001 certification and undergo annual third-party security audits.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Can I enable two-factor authentication?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes — 2FA is available for all plans via authenticator app (TOTP), SMS, or email OTP. Enterprise plans support SSO via SAML 2.0 and Active Directory, removing the need for individual account passwords entirely.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Does Installatie dosier sell or share my data?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Never. Your documents and project data are your property. We do not sell, share, or use your data for any purpose other than providing the Installatie dosier service. We do not mine your documents or share data with third parties for advertising.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">What is Installatie dosier's uptime guarantee?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>We guarantee 99.9% uptime on all paid plans, backed by our SLA. This means less than 8.7 hours of unplanned downtime per year. Enterprise customers receive a 99.99% uptime SLA. You can monitor our live system status at status.bouwlogboek.nl.</p></div></div>
          </div>
        </div>

        <!-- TECHNICAL -->
        <div class="faq-section rev" id="technical">
          <div class="faq-sec-header">
            <div class="faq-sec-icon" style="background:var(--dark);"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
            <span class="faq-sec-title">Technical & API</span>
            <span class="faq-sec-count">5 questions</span>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Does Installatie dosier have a REST API?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes — Business and Enterprise plans include full REST API access. You can automate document uploads, create projects, manage users, and retrieve audit logs programmatically. Full API documentation is available at <a href="#">docs.bouwlogboek.nl</a>. We also offer webhook support for real-time event notifications.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Can Installatie dosier integrate with our existing software?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Installatie dosier integrates with popular construction software including Snelstart, Exact Online, Microsoft 365, Google Workspace, and Autodesk. Enterprise customers can request custom integrations with their existing ERP or project management systems.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Is there a native mobile app?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Yes — native iOS and Android apps are available for free. The mobile app is optimized for field workers and supports camera upload, document preview, offline access, QR code scanning, and digital work log submission. The admin interface is also fully responsive for mobile browsers.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">What browsers are supported?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>Installatie dosier works on all modern browsers: Chrome, Firefox, Safari, Edge (latest 2 major versions). Internet Explorer is not supported. For the best experience, we recommend Chrome or Edge on desktop and Safari on iOS devices.</p></div></div>
          </div>
          <div class="acc-item" onclick="toggleAcc(this)">
            <div class="acc-q"><span class="acc-qtext">Do you offer an on-premise deployment option?</span><div class="acc-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div></div>
            <div class="acc-body"><div class="acc-body-inner"><p>On-premise deployment is available exclusively for Enterprise customers with specific data residency requirements. Contact our enterprise sales team to discuss requirements, licensing, and implementation timelines for self-hosted deployments.</p></div></div>
          </div>
        </div>

      </div><!-- end faqContent -->
    </div>
  </div>
</section>

<!-- STILL QUESTIONS -->
<div class="still-q">
  <div class="sq-bg"></div>
  <div class="sq-ov"></div>
  <div class="wrap">
    <div class="sq-inner rev">
      <h2>Still Have Questions?</h2>
      <p>Our team of construction software specialists is ready to help. Choose the best way to reach us.</p>
      <div class="sq-cards">
        <div class="sq-card">
          <div class="sq-card-ic" style="background:rgba(42,92,186,.25);"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
          <h3>Live Chat</h3>
          <p>Chat with our team in real time during business hours — Mon to Fri, 8am–6pm</p>
        </div>
        <div class="sq-card">
          <div class="sq-card-ic" style="background:rgba(232,105,44,.2);"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
          <h3>Email Support</h3>
          <p>Send us an email and we'll respond within 2 hours on business days. support@bouwlogboek.nl</p>
        </div>
        <div class="sq-card">
          <div class="sq-card-ic" style="background:rgba(21,128,61,.2);"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg></div>
          <h3>Book a Call</h3>
          <p>Schedule a 30-minute call with one of our implementation specialists. Free for all plans.</p>
        </div>
      </div>
    </div>
  </div>
</div>

` }} />
      <Footer />
    </>
  );
}

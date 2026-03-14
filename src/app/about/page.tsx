
'use client';

import { useEffect } from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import Head from 'next/head';

export default function AboutPage() {
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
img{display:block;width:100%;object-fit:cover;}

.wrap{max-width:1440px;margin:0 auto;padding:0 72px;}
@media(max-width:1280px){.wrap{padding:0 48px;}}
@media(max-width:1024px){.wrap{padding:0 32px;}}
@media(max-width:640px){.wrap{padding:0 20px;}}

/* ANN + NAV (shared) */
.ann{position:fixed;top:0;left:0;right:0;z-index:1001;height:var(--ann-h);background:linear-gradient(90deg,var(--blue-dk),var(--blue) 40%,var(--blue-dk));display:flex;align-items:center;justify-content:center;gap:12px;}
.ann-chip{background:var(--orange);color:#fff;font-size:10px;font-weight:800;padding:3px 10px;border-radius:100px;}
.ann-txt{font-size:13px;font-weight:600;color:#fff;}
.ann-link{color:#fff;font-weight:700;text-decoration:underline;text-underline-offset:3px;opacity:.85;}
.ann-close{position:absolute;right:16px;width:26px;height:26px;border-radius:6px;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;cursor:pointer;}
.ann-close svg{width:12px;height:12px;stroke:#fff;fill:none;}
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
.mob-menu{display:none;position:fixed;inset:0;top:calc(var(--ann-h)+var(--nav-h));background:#fff;z-index:999;flex-direction:column;padding:28px;border-top:1px solid var(--border);}
.mob-menu.open{display:flex;}
.mob-link{font-size:17px;font-weight:700;padding:14px 0;border-bottom:1px solid var(--border);}
.mob-btns{display:flex;flex-direction:column;gap:10px;margin-top:24px;}

/* HERO */
.about-hero{background:var(--dark);position:relative;overflow:hidden;padding:96px 0 0;}
.ah-photo{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1800&q=80&auto=format&fit=crop') center/cover no-repeat;opacity:.12;}
.ah-ov{position:absolute;inset:0;background:linear-gradient(135deg,rgba(13,15,26,.97) 0%,rgba(13,15,26,.7) 60%,rgba(42,92,186,.22) 100%);}
.ah-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:56px 56px;}
.ah-stripe{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--orange),rgba(232,105,44,.2),transparent);}
.ah-inner{position:relative;z-index:2;}
.ah-text{text-align:center;padding-bottom:72px;}
.ah-tag{display:inline-flex;align-items:center;gap:7px;background:rgba(232,105,44,.12);border:1px solid rgba(232,105,44,.26);border-radius:100px;padding:6px 14px;margin-bottom:22px;}
.ah-tag svg{width:13px;height:13px;stroke:var(--orange);fill:none;}
.ah-tag span{font-size:11.5px;font-weight:700;color:var(--orange);}
.ah-h1{font-size:clamp(34px,4vw,62px);font-weight:900;color:#fff;letter-spacing:-2px;line-height:1.08;margin-bottom:20px;}
.ah-h1 span{color:var(--orange);}
.ah-p{font-size:clamp(14px,1.1vw,17.5px);color:rgba(255,255,255,.45);line-height:1.82;max-width:600px;margin:0 auto 40px;}
.ah-btns{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;}
.btn-w{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:11px;font-size:14px;font-weight:800;background:#fff;color:var(--blue);transition:all .2s;}
.btn-w:hover{background:var(--blue-lt);}
.btn-gw{display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:11px;font-size:14px;font-weight:600;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.15);color:rgba(255,255,255,.85);transition:all .2s;}
.btn-gw:hover{background:rgba(255,255,255,.15);color:#fff;}
/* Photo strip at bottom of hero */
.ah-photo-strip{display:grid;grid-template-columns:1fr 1.5fr 1fr;gap:12px;height:300px;position:relative;z-index:2;}
.ahps-item{overflow:hidden;border-radius:16px 16px 0 0;position:relative;}
.ahps-item img{height:100%;width:100%;}
.ahps-item::after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(13,15,26,.7),transparent 50%);}

/* MISSION */
.mission{background:var(--white);padding:96px 0;}
.mission-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;}
.mis-tag{display:inline-flex;align-items:center;gap:6px;background:var(--orange-lt);color:var(--orange);border:1px solid rgba(232,105,44,.2);border-radius:100px;padding:5px 13px;font-size:10.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;margin-bottom:16px;}
.mis-h2{font-size:clamp(26px,2.8vw,42px);font-weight:900;color:var(--black);letter-spacing:-1.5px;line-height:1.12;margin-bottom:18px;}
.mis-h2 span{color:var(--blue);}
.mis-p{font-size:15px;color:var(--gray);line-height:1.82;margin-bottom:14px;}
.mis-quote{border-left:4px solid var(--orange);padding:18px 22px;background:var(--orange-lt);border-radius:0 12px 12px 0;margin:24px 0;}
.mis-quote p{font-size:16px;font-weight:700;color:var(--black);line-height:1.6;font-style:italic;}
.mis-quote cite{font-size:12px;color:var(--gray);font-style:normal;font-weight:600;display:block;margin-top:8px;}
/* Stat boxes on right */
.mis-visual{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
.mis-stat{padding:28px;border-radius:18px;display:flex;flex-direction:column;gap:8px;}
.ms-n{font-size:36px;font-weight:900;letter-spacing:-1.5px;line-height:1;}
.ms-l{font-size:13px;font-weight:500;line-height:1.5;}
.mis-img{border-radius:18px;overflow:hidden;height:200px;position:relative;grid-column:1/-1;}
.mis-img img{width:100%;height:100%;}
.mis-img::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(42,92,186,.3),transparent 60%);}

/* VALUES */
.values{background:var(--cream);padding:96px 0;}
.val-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px;}
.val-card{background:#fff;border:1px solid var(--border);border-radius:20px;padding:32px;transition:all .3s;}
.val-card:hover{transform:translateY(-5px);box-shadow:0 20px 56px rgba(42,92,186,.1);}
.val-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;}
.val-icon svg{width:24px;height:24px;stroke:#fff;fill:none;stroke-width:1.8;}
.val-h3{font-size:18px;font-weight:900;color:var(--black);margin-bottom:10px;letter-spacing:-.3px;}
.val-p{font-size:13.5px;color:var(--gray);line-height:1.75;}

/* STORY TIMELINE */
.story{background:var(--white);padding:96px 0;}
.story-layout{display:grid;grid-template-columns:360px 1fr;gap:64px;align-items:start;}
.story-sticky{position:sticky;top:calc(var(--ann-h)+var(--nav-h)+32px);}
.story-h2{font-size:clamp(26px,2.5vw,38px);font-weight:900;color:var(--black);letter-spacing:-1.2px;line-height:1.15;margin-bottom:14px;}
.story-h2 span{color:var(--blue);}
.story-p{font-size:14.5px;color:var(--gray);line-height:1.8;margin-bottom:22px;}
.story-img{border-radius:18px;overflow:hidden;height:240px;}
.story-img img{width:100%;height:100%;}
/* Timeline */
.timeline{position:relative;padding-left:32px;}
.timeline::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--blue),var(--orange));}
.tl-item{position:relative;margin-bottom:44px;}
.tl-item:last-child{margin-bottom:0;}
.tl-dot{position:absolute;left:-40px;top:4px;width:18px;height:18px;border-radius:50%;border:3px solid var(--white);box-shadow:0 0 0 2px var(--blue);}
.tl-year{font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;}
.tl-h{font-size:17px;font-weight:900;color:var(--black);margin-bottom:8px;letter-spacing:-.3px;}
.tl-p{font-size:13.5px;color:var(--gray);line-height:1.75;}
.tl-chip{display:inline-flex;align-items:center;gap:5px;background:var(--cream);border-radius:100px;padding:4px 10px;font-size:11px;font-weight:600;color:var(--gray);margin-top:8px;}

/* TEAM */
.team{background:var(--dark2);padding:96px 0;position:relative;overflow:hidden;}
.team-bg{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80') center/cover no-repeat;opacity:.05;}
.team-rad{position:absolute;inset:0;background:radial-gradient(ellipse 60% 60% at 80% 50%,rgba(42,92,186,.2),transparent 65%);}
.team .wrap{position:relative;z-index:2;}
.team-h2{font-size:clamp(26px,2.8vw,42px);font-weight:900;color:#fff;letter-spacing:-1.5px;margin-bottom:14px;}
.team-h2 span{color:var(--orange);}
.team-p{font-size:15px;color:rgba(255,255,255,.42);line-height:1.8;max-width:520px;}
.team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:52px;}
.team-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;overflow:hidden;transition:all .3s;}
.team-card:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.16);transform:translateY(-4px);}
.team-photo{height:200px;position:relative;overflow:hidden;}
.team-photo img{width:100%;height:100%;}
.team-photo-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:900;color:#fff;}
.team-info{padding:20px;}
.team-name{font-size:15.5px;font-weight:900;color:#fff;margin-bottom:3px;}
.team-role{font-size:12px;color:rgba(255,255,255,.45);margin-bottom:12px;font-weight:500;}
.team-bio{font-size:12px;color:rgba(255,255,255,.3);line-height:1.7;}
.team-socials{display:flex;gap:6px;margin-top:12px;}
.ts{width:28px;height:28px;border-radius:7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;}
.ts:hover{background:var(--blue);border-color:var(--blue);}
.ts svg{width:12px;height:12px;stroke:rgba(255,255,255,.55);fill:none;}

/* STATS DARK */
.about-stats{background:var(--blue);padding:64px 0;position:relative;overflow:hidden;}
.about-stats::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 40% 80% at 20% 50%,rgba(232,105,44,.2),transparent 55%);}
.as-grid{display:grid;grid-template-columns:repeat(4,1fr);position:relative;z-index:1;}
.as-item{text-align:center;padding:12px;position:relative;}
.as-item:not(:last-child)::after{content:'';position:absolute;right:0;top:15%;bottom:15%;width:1px;background:rgba(255,255,255,.12);}
.as-n{font-size:clamp(30px,3.5vw,50px);font-weight:900;color:#fff;letter-spacing:-2px;line-height:1;margin-bottom:5px;}
.as-n span{color:var(--orange);}
.as-l{font-size:12px;font-weight:500;color:rgba(255,255,255,.5);}

/* PARTNERS */
.partners{background:var(--cream);padding:80px 0;}
.par-logos{display:flex;align-items:center;justify-content:center;gap:40px;flex-wrap:wrap;margin-top:44px;}
.par-item{display:flex;align-items:center;gap:9px;padding:14px 22px;background:#fff;border:1px solid var(--border);border-radius:12px;opacity:.65;transition:all .2s;cursor:default;}
.par-item:hover{opacity:1;box-shadow:0 6px 20px rgba(42,92,186,.08);}
.par-icon{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;}
.par-icon svg{width:18px;height:18px;stroke:var(--blue);fill:none;}
.par-name{font-size:14px;font-weight:900;color:var(--black);}

/* PRESS */
.press{background:var(--white);padding:80px 0;}
.press-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:44px;}
.press-card{border:1px solid var(--border);border-radius:16px;padding:28px;transition:all .25s;}
.press-card:hover{box-shadow:0 12px 36px rgba(42,92,186,.08);transform:translateY(-3px);}
.press-pub{display:flex;align-items:center;gap:8px;margin-bottom:16px;}
.press-pub-ic{width:32px;height:32px;border-radius:8px;background:var(--cream);display:flex;align-items:center;justify-content:center;}
.press-pub-ic svg{width:16px;height:16px;stroke:var(--gray);fill:none;}
.press-pub-name{font-size:12px;font-weight:700;color:var(--gray);}
.press-date{font-size:11px;color:var(--gray-lt);margin-left:auto;}
.press-title{font-size:15.5px;font-weight:800;color:var(--black);line-height:1.45;margin-bottom:10px;}
.press-excerpt{font-size:13px;color:var(--gray);line-height:1.7;}
.press-link{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;font-weight:700;color:var(--blue);margin-top:14px;}
.press-link svg{width:12px;height:12px;stroke:currentColor;fill:none;}

/* CTA */
.about-cta{background:var(--dark);padding:96px 0;position:relative;overflow:hidden;}
.ac-bg{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80') center/cover;opacity:.08;}
.ac-ov{position:absolute;inset:0;background:linear-gradient(135deg,rgba(13,15,26,.96),rgba(42,92,186,.22));}
.ac-g{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:48px 48px;}
.ac-inner{position:relative;z-index:2;text-align:center;}
.ac-inner h2{font-size:clamp(26px,3vw,44px);font-weight:900;color:#fff;letter-spacing:-1.5px;margin-bottom:14px;}
.ac-inner h2 span{color:var(--orange);}
.ac-inner p{font-size:15px;color:rgba(255,255,255,.4);line-height:1.8;max-width:480px;margin:0 auto 36px;}
.ac-btns{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;}
.btn-o{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:11px;font-size:14px;font-weight:800;background:var(--orange);color:#fff;box-shadow:0 6px 22px rgba(232,105,44,.26);transition:all .2s;}
.btn-o:hover{background:var(--orange-dk);}

/* FOOTER (same as faq) */
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
.d1{transition-delay:.08s;}.d2{transition-delay:.16s;}.d3{transition-delay:.24s;}.d4{transition-delay:.32s;}

/* RESPONSIVE */
@media(max-width:1100px){.team-grid{grid-template-columns:repeat(2,1fr);}.story-layout{grid-template-columns:1fr;}.story-sticky{position:relative;top:0;}.footer-top{grid-template-columns:1fr 1fr;gap:36px;}}
@media(max-width:900px){.mission-grid{grid-template-columns:1fr;gap:44px;}.val-grid{grid-template-columns:1fr 1fr;}.ah-photo-strip{height:200px;grid-template-columns:1fr 1fr;}.nav-links,.nav-right{display:none;}.ham{display:flex;}.as-grid{grid-template-columns:repeat(2,1fr);}.as-item:nth-child(2)::after,.as-item:nth-child(4)::after{display:none;}}
@media(max-width:640px){:root{--ann-h:40px;--nav-h:62px;}.val-grid,.team-grid,.press-grid{grid-template-columns:1fr;}.ah-photo-strip{display:none;}.footer-top{grid-template-columns:1fr;}.ah-btns{flex-direction:column;align-items:center;}}
` }} />
      <div className="page-wrapper" dangerouslySetInnerHTML={{ __html: `<!-- HERO -->
<section class="about-hero">
  <div class="ah-photo"></div>
  <div class="ah-ov"></div>
  <div class="ah-grid"></div>
  <div class="ah-stripe"></div>
  <div class="wrap">
    <div class="ah-inner">
      <div class="ah-text rev">
        <div class="ah-tag"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg><span>Our Story</span></div>
        <h1 class="ah-h1">Built by Builders,<br/><span>For Builders</span></h1>
        <p class="ah-p">Installatie dosier was born on a construction site in Amsterdam in 2014. We were tired of losing documents, chasing email approvals, and explaining to clients why their project folder was a mess. So we built the tool we always needed.</p>
        <div class="ah-btns">
          <button class="btn-w"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M13 2l-2 6h6l-5 8 2-6H8l5-8z"/></svg>Start Free Trial</button>
          <button class="btn-gw"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Meet the Team</button>
        </div>
      </div>
      <div class="ah-photo-strip rev d2">
        <div class="ahps-item"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop" alt="Construction"/></div>
        <div class="ahps-item"><img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&auto=format&fit=crop" alt="Electrician"/></div>
        <div class="ahps-item"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop" alt="Installation"/></div>
      </div>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="about-stats">
  <div class="wrap">
    <div class="as-grid">
      <div class="as-item rev"><div class="as-n">2014</div><div class="as-l">Founded in Amsterdam</div></div>
      <div class="as-item rev d1"><div class="as-n">1.2<span>K+</span></div><div class="as-l">Active Companies</div></div>
      <div class="as-item rev d2"><div class="as-n">48<span>+</span></div><div class="as-l">Team Members</div></div>
      <div class="as-item rev d3"><div class="as-n">3</div><div class="as-l">Countries: NL · BE · DE</div></div>
    </div>
  </div>
</div>

<!-- MISSION -->
<section class="mission">
  <div class="wrap">
    <div class="mission-grid">
      <div class="rev">
        <div class="mis-tag"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Our Mission</div>
        <h2 class="mis-h2">To End <span>Document Chaos</span> in Construction</h2>
        <p class="mis-p">The construction industry loses billions of euros every year to inefficient documentation — lost certificates, email approval chains, version confusion, and miscommunication between contractors and clients.</p>
        <p class="mis-p">We believe that every installation professional deserves a system that's as professional as the work they do on-site. Installatie dosier exists to make that a reality — not just for large construction firms, but for every solo electrician, small plumber, and growing installation company.</p>
        <div class="mis-quote">
          <p>"We don't build software. We build the digital backbone that lets construction professionals focus on what they do best — building."</p>
          <cite>— Lars van den Berg, CEO & Co-Founder</cite>
        </div>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <button style="display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:11px;font-size:14px;font-weight:800;background:var(--blue);color:#fff;box-shadow:0 6px 22px rgba(42,92,186,.22);cursor:pointer;border:none;transition:all .2s;" onmouseover="this.style.background='var(--blue-dk)'" onmouseout="this.style.background='var(--blue)'">Read Our Story <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
        </div>
      </div>
      <div class="mis-visual rev d1">
        <div class="mis-stat" style="background:var(--blue);">
          <div class="ms-n" style="color:#fff;">€2.4B</div>
          <div class="ms-l" style="color:rgba(255,255,255,.6);">Lost annually in NL construction due to poor documentation</div>
        </div>
        <div class="mis-stat" style="background:var(--orange-lt);">
          <div class="ms-n" style="color:var(--orange);">6h</div>
          <div class="ms-l" style="color:var(--orange-dk);">Per week saved on average by Installatie dosier customers</div>
        </div>
        <div class="mis-stat" style="background:var(--cream);">
          <div class="ms-n" style="color:var(--black);">98%</div>
          <div class="ms-l" style="color:var(--gray);">Customer satisfaction score across all plans and company sizes</div>
        </div>
        <div class="mis-stat" style="background:var(--blue-lt);">
          <div class="ms-n" style="color:var(--blue);">3 min</div>
          <div class="ms-l" style="color:var(--blue-dk);">Average time to share a complete project portal with a new client</div>
        </div>
        <div class="mis-img">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop" alt="Construction architecture"/>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VALUES -->
<section class="values">
  <div class="wrap">
    <div class="tc rev" style="text-align:center;">
      <div style="width:40px;height:4px;background:var(--orange);border-radius:100px;margin:0 auto 16px;"></div>
      <div style="display:inline-flex;align-items:center;gap:6px;background:var(--blue-lt);color:var(--blue);border:1px solid rgba(42,92,186,.17);border-radius:100px;padding:5px 13px;font-size:10.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;margin-bottom:16px;">Our Values</div>
      <h2 style="font-size:clamp(26px,2.8vw,42px);font-weight:900;letter-spacing:-1.5px;margin-bottom:14px;">What We <span style="color:var(--blue);">Stand For</span></h2>
      <p style="font-size:15px;color:var(--gray);max-width:520px;margin:0 auto;line-height:1.8;">Our values aren't a wall poster. They're the principles that guide every product decision, every support interaction, and every line of code we write.</p>
    </div>
    <div class="val-grid">
      <div class="val-card rev"><div class="val-icon" style="background:var(--blue);"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><h3 class="val-h3">Built for Builders</h3><p class="val-p">Every feature starts with a real problem from a real construction site. We interview installers, electricians, and project managers before writing a single line of code.</p></div>
      <div class="val-card rev d1"><div class="val-icon" style="background:var(--orange);"><svg viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg></div><h3 class="val-h3">Radical Simplicity</h3><p class="val-p">Construction professionals don't have time for complex software. If a feature takes more than 3 clicks to use, we redesign it. Simplicity is our hardest engineering challenge.</p></div>
      <div class="val-card rev d2"><div class="val-icon" style="background:#7c3aed;"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><h3 class="val-h3">Privacy First</h3><p class="val-p">Your installation documents are your business. We are 100% Dutch-hosted, GDPR-compliant, and we will never sell your data. Your documents belong to you — always.</p></div>
      <div class="val-card rev"><div class="val-icon" style="background:#0d9488;"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3 class="val-h3">Customer Obsession</h3><p class="val-p">Our support team responds in under 2 hours. Our NPS score is 72. We send a physical thank-you card to every customer who refers a colleague. People come first.</p></div>
      <div class="val-card rev d1"><div class="val-icon" style="background:#b45309;"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><h3 class="val-h3">Continuous Improvement</h3><p class="val-p">We ship product updates every two weeks. We read every support ticket personally. If something isn't perfect, we don't rest until it is. Good enough is never good enough.</p></div>
      <div class="val-card rev d2"><div class="val-icon" style="background:#15803d;"><svg viewBox="0 0 24 24"><path d="M12 22V12M12 12C12 12 7 9 7 4.5a5 5 0 0 1 10 0C17 9 12 12 12 12z"/><path d="M12 12C12 12 17 9 17 4.5"/></svg></div><h3 class="val-h3">Sustainable Growth</h3><p class="val-p">We're bootstrapped and profitable. No VC pressure, no growth-at-all-costs mentality. We grow at the pace that lets us serve each customer well and maintain our values.</p></div>
    </div>
  </div>
</section>

<!-- STORY TIMELINE -->
<section class="story">
  <div class="wrap">
    <div class="story-layout">
      <div class="story-sticky rev">
        <div style="width:40px;height:4px;background:var(--orange);border-radius:100px;margin-bottom:16px;"></div>
        <div style="display:inline-flex;align-items:center;gap:6px;background:var(--cream2);color:var(--gray);border-radius:100px;padding:5px 13px;font-size:10.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;margin-bottom:16px;">Our Journey</div>
        <h2 class="story-h2">From a Dutch Construction Site to <span>1,200+ Companies</span></h2>
        <p class="story-p">A decade of building the platform that the construction industry never knew it needed — one installation company at a time.</p>
        <div class="story-img"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop" alt="Construction site 2014"/></div>
      </div>
      <div class="timeline rev d1">
        <div class="tl-item">
          <div class="tl-dot" style="background:var(--orange);box-shadow:0 0 0 2px var(--orange);"></div>
          <div class="tl-year" style="color:var(--orange);">2014 — The Beginning</div>
          <h3 class="tl-h">Built the First Version in a Site Cabin</h3>
          <p class="tl-p">Lars van den Berg and Pieter Jansen, two electricians frustrated by lost documents on a large Amsterdam residential project, built the first version of Installatie dosier over three weekends using a borrowed laptop in a site cabin.</p>
          <span class="tl-chip"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>Amsterdam, Netherlands</span>
        </div>
        <div class="tl-item">
          <div class="tl-dot" style="background:var(--blue);box-shadow:0 0 0 2px var(--blue);"></div>
          <div class="tl-year" style="color:var(--blue);">2016 — First 100 Customers</div>
          <h3 class="tl-h">Word Spread Across the Construction Community</h3>
          <p class="tl-p">Without any marketing budget, Installatie dosier grew purely through word of mouth in the Dutch electrical installation community. Reached 100 paying customers and hired our first two team members. Moved out of the living room and into a proper office in Amsterdam-Noord.</p>
          <span class="tl-chip">🎉 100 customers milestone</span>
        </div>
        <div class="tl-item">
          <div class="tl-dot" style="background:#7c3aed;box-shadow:0 0 0 2px #7c3aed;"></div>
          <div class="tl-year" style="color:#7c3aed;">2018 — Client Portals Launch</div>
          <h3 class="tl-h">Transforming How Contractors Share with Clients</h3>
          <p class="tl-p">The launch of white-label client portals was our biggest product milestone. For the first time, installation companies could give their clients a professional branded portal — without any technical knowledge. Grew to 25 team members.</p>
          <span class="tl-chip">🚀 Product breakthrough</span>
        </div>
        <div class="tl-item">
          <div class="tl-dot" style="background:#0d9488;box-shadow:0 0 0 2px #0d9488;"></div>
          <div class="tl-year" style="color:#0d9488;">2020 — International Expansion</div>
          <h3 class="tl-h">Belgium and Germany Join the Platform</h3>
          <p class="tl-p">Expanding beyond the Netherlands to Belgium and Germany, with full localization, local compliance features, and dedicated support in Dutch, French, German, and English. Crossed €1M ARR.</p>
          <span class="tl-chip">🌍 3 countries</span>
        </div>
        <div class="tl-item">
          <div class="tl-dot" style="background:#b45309;box-shadow:0 0 0 2px #b45309;"></div>
          <div class="tl-year" style="color:#b45309;">2022 — Mobile App & QR Codes</div>
          <h3 class="tl-h">Field-First Features for On-Site Teams</h3>
          <p class="tl-p">Launched native iOS and Android apps with offline access, QR code scanning for equipment management, and photo logging. Field workers could finally go completely paperless. Grew to 800+ companies.</p>
          <span class="tl-chip">📱 Mobile-first pivot</span>
        </div>
        <div class="tl-item">
          <div class="tl-dot" style="background:var(--orange);box-shadow:0 0 0 2px var(--orange);"></div>
          <div class="tl-year" style="color:var(--orange);">2024 — Today & Beyond</div>
          <h3 class="tl-h">1,200+ Companies, 250,000+ Documents Monthly</h3>
          <p class="tl-p">A decade after being built in a site cabin, Installatie dosier is the leading document management platform for the Benelux installation industry. We're a team of 48 and still growing — but the mission remains exactly the same as it was in 2014.</p>
          <span class="tl-chip">🏆 Market leader</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TEAM -->
<section class="team">
  <div class="team-bg"></div>
  <div class="team-rad"></div>
  <div class="wrap">
    <div class="rev">
      <div style="width:40px;height:4px;background:var(--orange);border-radius:100px;margin-bottom:16px;"></div>
      <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.07);color:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.1);border-radius:100px;padding:5px 13px;font-size:10.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;margin-bottom:16px;">The People</div>
      <h2 class="team-h2">Meet the <span>Leadership</span> Team</h2>
      <p class="team-p">Former electricians, construction managers, and software engineers united by a single mission — to eliminate document chaos from the construction industry.</p>
    </div>
    <div class="team-grid">
      <div class="team-card rev">
        <div class="team-photo" style="background:linear-gradient(135deg,var(--blue),var(--blue-dk));"><div class="team-photo-placeholder">LvB</div></div>
        <div class="team-info">
          <div class="team-name">Lars van den Berg</div>
          <div class="team-role">CEO & Co-Founder</div>
          <div class="team-bio">Former master electrician with 12 years on construction sites. Built the first version of Installatie dosier in a site cabin in 2014.</div>
          <div class="team-socials">
            <div class="ts"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
            <div class="ts"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></div>
          </div>
        </div>
      </div>
      <div class="team-card rev d1">
        <div class="team-photo" style="background:linear-gradient(135deg,var(--orange),var(--orange-dk));"><div class="team-photo-placeholder">PJ</div></div>
        <div class="team-info">
          <div class="team-name">Pieter Jansen</div>
          <div class="team-role">CTO & Co-Founder</div>
          <div class="team-bio">Software engineer turned construction technologist. Wrote the first 10,000 lines of Installatie dosier code. Expert in secure document infrastructure.</div>
          <div class="team-socials">
            <div class="ts"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
            <div class="ts"><svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></div>
          </div>
        </div>
      </div>
      <div class="team-card rev d2">
        <div class="team-photo" style="background:linear-gradient(135deg,#7c3aed,#5b21b6);"><div class="team-photo-placeholder">SV</div></div>
        <div class="team-info">
          <div class="team-name">Sophie Vermeer</div>
          <div class="team-role">Head of Product</div>
          <div class="team-bio">UX designer with a background in construction project management. Leads product strategy with obsessive focus on user simplicity.</div>
          <div class="team-socials">
            <div class="ts"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
          </div>
        </div>
      </div>
      <div class="team-card rev d3">
        <div class="team-photo" style="background:linear-gradient(135deg,#0d9488,#0f766e);"><div class="team-photo-placeholder">MK</div></div>
        <div class="team-info">
          <div class="team-name">Mark Koolen</div>
          <div class="team-role">Head of Customer Success</div>
          <div class="team-bio">Former construction project manager. Personally onboards every new Enterprise customer and maintains our 98% satisfaction score.</div>
          <div class="team-socials">
            <div class="ts"><svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





<!-- CTA -->
<section class="about-cta">
  <div class="ac-bg"></div>
  <div class="ac-ov"></div>
  <div class="ac-g"></div>
  <div class="wrap">
    <div class="ac-inner rev">
      <div style="display:inline-flex;align-items:center;gap:7px;background:rgba(232,105,44,.12);border:1px solid rgba(232,105,44,.26);border-radius:100px;padding:5px 14px;margin-bottom:20px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2.2" stroke-linecap="round"><path d="M13 2l-2 6h6l-5 8 2-6H8l5-8z"/></svg><span style="font-size:11.5px;font-weight:700;color:var(--orange);">Join 1,200+ Companies</span></div>
      <h2>Ready to <span>Transform</span> Your<br/>Documentation Process?</h2>
      <p>Start your 14-day free trial today. No credit card, no complicated setup. Be fully operational in under an hour.</p>
      <div class="ac-btns">
        <button class="btn-o"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M13 2l-2 6h6l-5 8 2-6H8l5-8z"/></svg>Start Free Trial</button>
        <button class="btn-gw"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/></svg>Book a Demo</button>
      </div>
    </div>
  </div>
</section>

` }} />
      <Footer />
    </>
  );
}


'use client';

import { useEffect } from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import Head from 'next/head';

export default function BlogsPage() {
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
img{display:block;width:100%;height:100%;object-fit:cover;}

.wrap{max-width:1440px;margin:0 auto;padding:0 72px;}
@media(max-width:1280px){.wrap{padding:0 48px;}}
@media(max-width:1024px){.wrap{padding:0 32px;}}
@media(max-width:640px){.wrap{padding:0 20px;}}

/* ANN + NAV */
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
.blog-hero{background:var(--dark);position:relative;overflow:hidden;padding:80px 0 72px;}
.bh-photo{position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80&auto=format&fit=crop') center/cover no-repeat;opacity:.1;}
.bh-ov{position:absolute;inset:0;background:linear-gradient(110deg,rgba(13,15,26,.97),rgba(42,92,186,.2));}
.bh-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:56px 56px;}
.bh-stripe{position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--orange),rgba(232,105,44,.2),transparent);}
.bh-inner{position:relative;z-index:2;text-align:center;}
.bh-tag{display:inline-flex;align-items:center;gap:7px;background:rgba(232,105,44,.12);border:1px solid rgba(232,105,44,.26);border-radius:100px;padding:6px 14px;margin-bottom:20px;}
.bh-tag svg{width:13px;height:13px;stroke:var(--orange);fill:none;}
.bh-tag span{font-size:11.5px;font-weight:700;color:var(--orange);}
.bh-h1{font-size:clamp(32px,4vw,58px);font-weight:900;color:#fff;letter-spacing:-2px;line-height:1.08;margin-bottom:16px;}
.bh-h1 span{color:var(--orange);}
.bh-p{font-size:clamp(14px,1.1vw,17px);color:rgba(255,255,255,.45);line-height:1.8;max-width:520px;margin:0 auto 32px;}
/* Category pills in hero */
.bh-cats{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;}
.bh-cat{padding:7px 16px;border-radius:100px;font-size:12.5px;font-weight:700;cursor:pointer;transition:all .2s;border:1.5px solid rgba(255,255,255,.14);color:rgba(255,255,255,.55);background:rgba(255,255,255,.05);}
.bh-cat:hover,.bh-cat.active{background:var(--orange);border-color:var(--orange);color:#fff;}

/* FEATURED ARTICLE */
.blog-featured{padding:72px 0 0;}
.feat-label{font-size:10.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:var(--orange);margin-bottom:20px;display:flex;align-items:center;gap:8px;}
.feat-label::after{content:'';flex:1;height:1px;background:var(--border);}
.feat-card{display:grid;grid-template-columns:1fr 1fr;gap:0;border-radius:22px;overflow:hidden;background:var(--dark);box-shadow:0 24px 72px rgba(0,0,0,.14);cursor:pointer;transition:transform .3s,box-shadow .3s;}
.feat-card:hover{transform:translateY(-4px);box-shadow:0 32px 88px rgba(0,0,0,.18);}
.feat-img{height:420px;position:relative;overflow:hidden;}
.feat-img img{transition:transform .6s ease;}
.feat-card:hover .feat-img img{transform:scale(1.04);}
.feat-img-ov{position:absolute;inset:0;background:linear-gradient(to right,transparent,rgba(13,15,26,.6));}
.feat-cat-pill{position:absolute;top:20px;left:20px;background:var(--orange);color:#fff;font-size:10.5px;font-weight:800;padding:5px 12px;border-radius:100px;letter-spacing:.4px;}
.feat-body{padding:48px;display:flex;flex-direction:column;justify-content:center;background:var(--dark);}
.feat-meta{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
.feat-meta-av{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900;color:#fff;flex-shrink:0;}
.feat-meta-name{font-size:12.5px;font-weight:700;color:rgba(255,255,255,.55);}
.feat-meta-date{font-size:12px;color:rgba(255,255,255,.3);margin-left:auto;}
.feat-h2{font-size:clamp(20px,2.2vw,30px);font-weight:900;color:#fff;line-height:1.25;letter-spacing:-.6px;margin-bottom:14px;}
.feat-excerpt{font-size:14px;color:rgba(255,255,255,.45);line-height:1.8;margin-bottom:24px;}
.feat-read{display:inline-flex;align-items:center;gap:7px;font-size:13.5px;font-weight:800;color:var(--orange);}
.feat-read svg{width:14px;height:14px;stroke:currentColor;fill:none;transition:transform .2s;}
.feat-card:hover .feat-read svg{transform:translateX(4px);}
.feat-tags{display:flex;gap:7px;flex-wrap:wrap;margin-top:20px;}
.feat-tag{font-size:11px;font-weight:600;color:rgba(255,255,255,.35);background:rgba(255,255,255,.06);padding:4px 10px;border-radius:100px;}

/* BLOG GRID */
.blog-grid-section{padding:64px 0 96px;}
.blog-layout{display:grid;grid-template-columns:1fr 320px;gap:52px;align-items:start;}
.blog-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;}
.b-card{border:1px solid var(--border);border-radius:18px;overflow:hidden;transition:all .3s;cursor:pointer;background:#fff;}
.b-card:hover{transform:translateY(-5px);box-shadow:0 20px 56px rgba(42,92,186,.1);border-color:transparent;}
.b-card-img{height:196px;position:relative;overflow:hidden;}
.b-card-img img{transition:transform .5s ease;}
.b-card:hover .b-card-img img{transform:scale(1.05);}
.b-card-cat{position:absolute;top:14px;left:14px;font-size:10px;font-weight:800;padding:4px 10px;border-radius:100px;letter-spacing:.3px;}
.b-body{padding:22px;}
.b-meta{display:flex;align-items:center;gap:8px;margin-bottom:10px;}
.b-av{width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:900;color:#fff;flex-shrink:0;}
.b-author{font-size:11.5px;font-weight:600;color:var(--gray);}
.b-date{font-size:11px;color:var(--gray-lt);margin-left:auto;}
.b-title{font-size:16px;font-weight:900;color:var(--black);line-height:1.38;letter-spacing:-.3px;margin-bottom:8px;}
.b-excerpt{font-size:12.5px;color:var(--gray);line-height:1.72;margin-bottom:16px;}
.b-footer{display:flex;align-items:center;justify-content:space-between;}
.b-read-more{font-size:12.5px;font-weight:800;color:var(--blue);display:flex;align-items:center;gap:5px;}
.b-read-more svg{width:12px;height:12px;stroke:currentColor;fill:none;transition:transform .2s;}
.b-card:hover .b-read-more svg{transform:translateX(3px);}
.b-read-time{font-size:11px;color:var(--gray-lt);display:flex;align-items:center;gap:4px;}
.b-read-time svg{width:11px;height:11px;stroke:currentColor;fill:none;}

/* LOAD MORE */
.load-more{text-align:center;margin-top:36px;}
.btn-load{display:inline-flex;align-items:center;gap:9px;padding:13px 28px;border-radius:11px;font-size:14px;font-weight:800;background:var(--cream);color:var(--black);border:1.5px solid var(--border);transition:all .2s;cursor:pointer;}
.btn-load:hover{background:var(--blue-lt);border-color:var(--blue);color:var(--blue);}

/* SIDEBAR */
.blog-sidebar{position:sticky;top:calc(var(--ann-h)+var(--nav-h)+24px);display:flex;flex-direction:column;gap:22px;}
.sb-card{background:var(--cream);border-radius:16px;padding:22px;}
.sb-title{font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--gray-lt);margin-bottom:16px;}
/* Newsletter in sidebar */
.sb-nl input{width:100%;padding:10px 14px;border-radius:9px;border:1.5px solid var(--border);background:#fff;font-family:'Satoshi',system-ui,sans-serif;font-size:13px;color:var(--black);outline:none;margin-bottom:9px;}
.sb-nl input:focus{border-color:var(--blue);}
.sb-nl button{width:100%;padding:10px;border-radius:9px;background:var(--orange);color:#fff;font-size:13px;font-weight:800;transition:background .2s;}
.sb-nl button:hover{background:var(--orange-dk);}
/* Popular topics */
.topic-list{display:flex;flex-wrap:wrap;gap:7px;}
.topic-pill{padding:6px 13px;border-radius:100px;background:#fff;border:1.5px solid var(--border);font-size:12px;font-weight:600;color:var(--gray);cursor:pointer;transition:all .2s;}
.topic-pill:hover{border-color:var(--blue);color:var(--blue);background:var(--blue-lt);}
/* Popular posts */
.pop-post{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--cream2);}
.pop-post:last-child{border-bottom:none;padding-bottom:0;}
.pop-num{font-size:22px;font-weight:900;color:var(--cream2);flex-shrink:0;line-height:1;margin-top:2px;}
.pop-info{flex:1;}
.pop-title{font-size:13px;font-weight:700;color:var(--black);line-height:1.4;margin-bottom:4px;}
.pop-meta{font-size:11px;color:var(--gray-lt);}
/* Author spotlight */
.auth-card{background:var(--dark);border-radius:14px;padding:18px;}
.auth-top{display:flex;align-items:center;gap:12px;margin-bottom:12px;}
.auth-av{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#fff;flex-shrink:0;}
.auth-name{font-size:14px;font-weight:900;color:#fff;}
.auth-role{font-size:11px;color:rgba(255,255,255,.4);margin-top:2px;}
.auth-bio{font-size:12px;color:rgba(255,255,255,.38);line-height:1.72;}

/* CATEGORIES SECTION */
.cat-section{background:var(--cream);padding:72px 0;}
.cat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:40px;}
.cat-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:24px;transition:all .25s;cursor:pointer;}
.cat-card:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(42,92,186,.09);border-color:var(--blue);}
.cat-icon{width:44px;height:44px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;}
.cat-icon svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:1.8;}
.cat-name{font-size:14.5px;font-weight:900;color:var(--black);margin-bottom:5px;}
.cat-count{font-size:12px;color:var(--gray);}

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
@media(max-width:1100px){.blog-layout{grid-template-columns:1fr;}.blog-sidebar{position:relative;top:0;}.cat-grid{grid-template-columns:repeat(2,1fr);}.footer-top{grid-template-columns:1fr 1fr;gap:36px;}}
@media(max-width:900px){.feat-card{grid-template-columns:1fr;}.feat-img{height:250px;}.nav-links,.nav-right{display:none;}.ham{display:flex;}}
@media(max-width:640px){:root{--ann-h:40px;--nav-h:62px;}.blog-grid{grid-template-columns:1fr;}.cat-grid{grid-template-columns:1fr 1fr;}.footer-top{grid-template-columns:1fr;}}
` }} />
      <div className="page-wrapper" dangerouslySetInnerHTML={{ __html: `<!-- HERO -->
<section class="blog-hero">
  <div class="bh-photo"></div>
  <div class="bh-ov"></div>
  <div class="bh-grid"></div>
  <div class="bh-stripe"></div>
  <div class="wrap">
    <div class="bh-inner rev">
      <div class="bh-tag"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span>The Installatie dosier Blog</span></div>
      <h1 class="bh-h1">Insights for the <span>Modern</span><br/>Installation Professional</h1>
      <p class="bh-p">Tips, guides, and industry insights to help construction and installation companies work smarter. Published twice a week by our team of experts.</p>
      <div class="bh-cats">
        <button class="bh-cat active" onclick="setCat(this,'all')">All Articles</button>
        <button class="bh-cat" onclick="setCat(this,'documents')">Document Management</button>
        <button class="bh-cat" onclick="setCat(this,'client')">Client Relations</button>
        <button class="bh-cat" onclick="setCat(this,'field')">Field Work</button>
        <button class="bh-cat" onclick="setCat(this,'compliance')">Compliance & Legal</button>
        <button class="bh-cat" onclick="setCat(this,'software')">Software & Tools</button>
      </div>
    </div>
  </div>
</section>

<!-- FEATURED -->
<section class="blog-featured">
  <div class="wrap">
    <div class="feat-label rev">Featured Article</div>
    <a href="/blog-detail" class="feat-card rev d1">
      <div class="feat-img">
        <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80&auto=format&fit=crop" alt="Electrician working"/>
        <div class="feat-img-ov"></div>
        <div class="feat-cat-pill">Document Management</div>
      </div>
      <div class="feat-body">
        <div class="feat-meta">
          <div class="feat-meta-av" style="background:var(--blue);">LvB</div>
          <span class="feat-meta-name">Lars van den Berg</span>
          <span class="feat-meta-date">Feb 18, 2026 · 8 min read</span>
        </div>
        <h2 class="feat-h2">Why Dutch Electricians Lose €12,000 Per Year to Poor Documentation — And How to Fix It</h2>
        <p class="feat-excerpt">A new study from the Dutch Electrical Contractors Association reveals that the average electrician loses over 6 hours per week to documentation problems. Here's exactly what to do about it, with real numbers from real companies that fixed it.</p>
        <div class="feat-read">Read full article <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
        <div class="feat-tags">
          <span class="feat-tag">Documentation</span>
          <span class="feat-tag">Productivity</span>
          <span class="feat-tag">Electricians</span>
          <span class="feat-tag">Netherlands</span>
        </div>
      </div>
    </a>
  </div>
</section>

<!-- BLOG GRID + SIDEBAR -->
<section class="blog-grid-section">
  <div class="wrap">
    <div class="blog-layout">
      <!-- GRID -->
      <div>
        <div class="blog-grid" id="blogGrid">
          <a href="/blog-detail" class="b-card rev">
            <div class="b-card-img"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop" alt=""/><div class="b-card-cat" style="background:var(--orange);color:#fff;">Field Work</div></div>
            <div class="b-body">
              <div class="b-meta"><div class="b-av" style="background:var(--orange);">PJ</div><span class="b-author">Pieter Jansen</span><span class="b-date">Feb 14</span></div>
              <h3 class="b-title">Going Paperless on the Job Site: A Step-by-Step Guide for Installation Teams</h3>
              <p class="b-excerpt">Eliminate the clipboard. Here's the exact process 380 installation companies used to go fully paperless without losing a single document or client approval.</p>
              <div class="b-footer"><div class="b-read-more">Read more <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div><div class="b-read-time"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 6 min</div></div>
            </div>
          </a>
          <a href="/blog-detail" class="b-card rev d1">
            <div class="b-card-img"><img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&auto=format&fit=crop" alt=""/><div class="b-card-cat" style="background:var(--blue);color:#fff;">Client Relations</div></div>
            <div class="b-body">
              <div class="b-meta"><div class="b-av" style="background:#7c3aed;">SV</div><span class="b-author">Sophie Vermeer</span><span class="b-date">Feb 10</span></div>
              <h3 class="b-title">How to Give Clients Real-Time Project Visibility Without Extra Work</h3>
              <p class="b-excerpt">Clients who can see project progress in real time ask fewer questions, approve faster, and pay on time. Here's how to set it up in under 30 minutes.</p>
              <div class="b-footer"><div class="b-read-more">Read more <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div><div class="b-read-time"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 5 min</div></div>
            </div>
          </a>
          <a href="/blog-detail" class="b-card rev">
            <div class="b-card-img"><img src="https://images.unsplash.com/photo-1565636291267-7d4a9c7e3ef5?w=600&q=80&auto=format&fit=crop" alt=""/><div class="b-card-cat" style="background:#7c3aed;color:#fff;">Compliance & Legal</div></div>
            <div class="b-body">
              <div class="b-meta"><div class="b-av" style="background:#0d9488;">MK</div><span class="b-author">Mark Koolen</span><span class="b-date">Feb 6</span></div>
              <h3 class="b-title">NEN 1010 Documentation Requirements: What Every Dutch Electrician Must Know in 2026</h3>
              <p class="b-excerpt">The NEN 1010 standard has specific documentation requirements that inspectors check. Here's the complete checklist to make sure you're fully compliant.</p>
              <div class="b-footer"><div class="b-read-more">Read more <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div><div class="b-read-time"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 9 min</div></div>
            </div>
          </a>
          <a href="/blog-detail" class="b-card rev d1">
            <div class="b-card-img"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop" alt=""/><div class="b-card-cat" style="background:#15803d;color:#fff;">Software & Tools</div></div>
            <div class="b-body">
              <div class="b-meta"><div class="b-av" style="background:#b45309);">LvB</div><span class="b-author">Lars van den Berg</span><span class="b-date">Jan 30</span></div>
              <h3 class="b-title">Installatie dosier vs Google Drive: A Brutally Honest Comparison for Installation Companies</h3>
              <p class="b-excerpt">We compared both tools across 12 real-world scenarios that installation companies face every day. The results might surprise you — and they'll definitely save you time.</p>
              <div class="b-footer"><div class="b-read-more">Read more <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div><div class="b-read-time"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 7 min</div></div>
            </div>
          </a>
          <a href="/blog-detail" class="b-card rev">
            <div class="b-card-img"><img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&auto=format&fit=crop" alt=""/><div class="b-card-cat" style="background:var(--orange);color:#fff;">Document Management</div></div>
            <div class="b-body">
              <div class="b-meta"><div class="b-av" style="background:#7c3aed;">SV</div><span class="b-author">Sophie Vermeer</span><span class="b-date">Jan 24</span></div>
              <h3 class="b-title">The 5 Document Management Mistakes That Are Costing Your Installation Company Money</h3>
              <p class="b-excerpt">After analyzing 1,200 installation companies, we identified the five most common documentation mistakes — and exactly how to fix each one.</p>
              <div class="b-footer"><div class="b-read-more">Read more <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div><div class="b-read-time"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 5 min</div></div>
            </div>
          </a>
          <a href="/blog-detail" class="b-card rev d1">
            <div class="b-card-img"><img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop" alt=""/><div class="b-card-cat" style="background:var(--blue);color:#fff;">Field Work</div></div>
            <div class="b-body">
              <div class="b-meta"><div class="b-av" style="background:var(--orange);">PJ</div><span class="b-author">Pieter Jansen</span><span class="b-date">Jan 18</span></div>
              <h3 class="b-title">QR Codes for Equipment Tracking: The Smarter Way to Manage Your Installation Fleet</h3>
              <p class="b-excerpt">Attach a QR code to any piece of equipment and access its full maintenance history, manual, and warranty information in seconds. Here's exactly how to set it up.</p>
              <div class="b-footer"><div class="b-read-more">Read more <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div><div class="b-read-time"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 4 min</div></div>
            </div>
          </a>
        </div>
        <div class="load-more rev">
          <button class="btn-load"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>Load More Articles</button>
        </div>
      </div>

      <!-- SIDEBAR -->
      <div class="blog-sidebar">
        <!-- Newsletter -->
        <div class="sb-card">
          <div class="sb-title">Newsletter</div>
          <h4 style="font-size:16px;font-weight:900;color:var(--black);margin-bottom:8px;">Get Articles in Your Inbox</h4>
          <p style="font-size:12.5px;color:var(--gray);line-height:1.7;margin-bottom:14px;">New guides every Tuesday and Friday. No spam, unsubscribe anytime.</p>
          <div class="sb-nl">
            <input type="email" placeholder="your@email.com"/>
            <button onclick="alert('Subscribed! Check your inbox.')">Subscribe →</button>
          </div>
          <p style="font-size:11px;color:var(--gray-lt);margin-top:8px;text-align:center;">Join 4,200+ subscribers</p>
        </div>

        <!-- Popular topics -->
        <div class="sb-card">
          <div class="sb-title">Popular Topics</div>
          <div class="topic-list">
            <button class="topic-pill">Document Management</button>
            <button class="topic-pill">Client Portals</button>
            <button class="topic-pill">NEN 1010</button>
            <button class="topic-pill">Paperless</button>
            <button class="topic-pill">Electricians</button>
            <button class="topic-pill">Compliance</button>
            <button class="topic-pill">QR Codes</button>
            <button class="topic-pill">Field Work</button>
            <button class="topic-pill">Templates</button>
            <button class="topic-pill">GDPR</button>
          </div>
        </div>

        <!-- Popular posts -->
        <div class="sb-card">
          <div class="sb-title">Most Read</div>
          <div>
            <div class="pop-post"><div class="pop-num">01</div><div class="pop-info"><div class="pop-title">Why Electricians Lose €12,000/Year to Poor Documentation</div><div class="pop-meta">8 min · 4,201 views</div></div></div>
            <div class="pop-post"><div class="pop-num">02</div><div class="pop-info"><div class="pop-title">NEN 1010 Documentation Requirements 2026</div><div class="pop-meta">9 min · 3,842 views</div></div></div>
            <div class="pop-post"><div class="pop-num">03</div><div class="pop-info"><div class="pop-title">Going Paperless: Step-by-Step Guide</div><div class="pop-meta">6 min · 2,915 views</div></div></div>
            <div class="pop-post"><div class="pop-num">04</div><div class="pop-info"><div class="pop-title">Installatie dosier vs Google Drive Comparison</div><div class="pop-meta">7 min · 2,440 views</div></div></div>
          </div>
        </div>

        <!-- Author -->
        <div class="sb-card" style="padding:0;overflow:hidden;">
          <div class="auth-card" style="border-radius:16px;">
            <div class="auth-top">
              <div class="auth-av" style="background:linear-gradient(135deg,var(--blue),var(--blue-dk));">LvB</div>
              <div><div class="auth-name">Lars van den Berg</div><div class="auth-role">CEO & Co-Founder · Most Popular Author</div></div>
            </div>
            <div class="auth-bio">Former master electrician. Writes about construction documentation, industry digitization, and the future of the installation sector. 12 years on construction sites, 10 years building Installatie dosier.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



` }} />
      <Footer />
    </>
  );
}

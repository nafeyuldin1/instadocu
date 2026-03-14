const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const appDir = path.join(__dirname, 'src', 'app');

const pages = [
  { name: 'about', file: 'about.html' },
  { name: 'blogs', file: 'blogs.html' },
  { name: 'contact', file: 'contact.html' },
  { name: 'faqs', file: 'faqs.html' }
];

pages.forEach(page => {
  const filePath = path.join(publicDir, page.file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${filePath}, not found.`);
    return;
  }

  let htmlOrig = fs.readFileSync(filePath, 'utf8');

  // Extract <style> block
  const styleMatch = htmlOrig.match(/<style>([\s\S]*?)<\/style>/i);
  let styleContent = styleMatch ? styleMatch[1] : '';

  // Remove `body { padding-top: calc(...) }` or adjust it so it doesn't break everything globally.
  // We'll wrap the page content in a div with a specific class/id if needed, but for now we'll just inject the raw style.
  // Let's comment out styling of *, ::before, ::after, html, body in the extracted CSS if possible, OR just leave it as it might naturally override.
  // Actually, let's keep it but remove the custom font imports if next.js already has fonts, but keeping it is safer for exact replication.
  // We will rename body to `.page-wrapper` to prevent global pollution.
  styleContent = styleContent.replace(/^body\s*\{/gm, '.page-wrapper {');
  styleContent = styleContent.replace(/^html\s*\{/gm, '.page-wrapper-html {');

  // Find start of content
  // Most pages have <!-- HERO --> or similar directly after <nav> or mob-menu
  let contentStartIdx = htmlOrig.indexOf('<!-- HERO -->');
  if (contentStartIdx === -1) {
    if (page.name === 'contact') contentStartIdx = htmlOrig.indexOf('<!-- CONTACT HERO -->');
    if (page.name === 'blogs') contentStartIdx = htmlOrig.indexOf('<!-- BLOG HERO -->');
    if (page.name === 'faqs') contentStartIdx = htmlOrig.indexOf('<!-- FAQ HERO -->');
  }
  if (contentStartIdx === -1) {
    // fallback, find </nav> and mob-menu closing
    const mobMenuIdx = htmlOrig.indexOf('class="mob-menu"');
    if (mobMenuIdx !== -1) {
      const mobCloseIdx = htmlOrig.indexOf('</div>', mobMenuIdx + 100);
      contentStartIdx = htmlOrig.indexOf('<section', mobCloseIdx);
      if(contentStartIdx === -1) contentStartIdx = htmlOrig.indexOf('<div', mobCloseIdx);
    }
  }

  // Find the start of FOOTER
  let contentEndIdx = htmlOrig.indexOf('<!-- FOOTER -->');
  if (contentEndIdx === -1) {
    contentEndIdx = htmlOrig.indexOf('<footer');
  }

  let bodyContent = '';
  if (contentStartIdx !== -1 && contentEndIdx !== -1) {
    bodyContent = htmlOrig.slice(contentStartIdx, contentEndIdx);
  } else {
    console.log("Could not find start/end for", page.name);
    return;
  }

  // Extract <script> execution logic
  // The pages have an intersection observer. Let's write a unified one.
  const scriptContent = htmlOrig.match(/<script>([\s\S]*?)<\/script>/i);
  let scriptLogic = '';
  if (scriptContent) {
    scriptLogic = scriptContent[1];
  }

  const reactCode = `
'use client';

import { useEffect } from 'react';
import Navbar from '@/components/marketing/Navbar';
import Footer from '@/components/marketing/Footer';
import Head from 'next/head';

export default function ${page.name.charAt(0).toUpperCase() + page.name.slice(1)}Page() {
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
      <style dangerouslySetInnerHTML={{ __html: \`${styleContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      <div className="page-wrapper" dangerouslySetInnerHTML={{ __html: \`${bodyContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
      <Footer />
    </>
  );
}
`;

  const routeDir = path.join(appDir, page.name);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'page.tsx'), reactCode);
  console.log('Created Next.js page for', page.name);

  // We should also delete the static file from public later to avoid confusion? 
  // Maybe leave it or rename it. Let's rename it to .bak
  fs.renameSync(filePath, filePath + '.bak');
});

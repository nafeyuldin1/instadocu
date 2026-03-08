'use client';
import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function useSmoothScroll() {
  useEffect(() => {
    const handler = (e: Event) => {
      const t = e.target as HTMLAnchorElement;
      if (t.hash) { e.preventDefault(); document.querySelector(t.hash)?.scrollIntoView({ behavior: 'smooth' }); }
    };
    document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener('click', handler));
  }, []);
}

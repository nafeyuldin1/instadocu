'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/marketing/Navbar';
import Hero from '@/components/marketing/Hero';
import LogoTicker from '@/components/marketing/LogoTicker';
import Features from '@/components/marketing/Features';
import HowItWorks from '@/components/marketing/HowItWorks';
import StatsBand from '@/components/marketing/StatsBand';
import Showcase from '@/components/marketing/Showcase';
import PhotoStrip from '@/components/marketing/PhotoStrip';
import Pricing from '@/components/marketing/Pricing';
import Testimonials from '@/components/marketing/Testimonials';
import Newsletter from '@/components/marketing/Newsletter';
import CallToAction from '@/components/marketing/CallToAction';
import Footer from '@/components/marketing/Footer';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <HowItWorks />
      <StatsBand />
      <Showcase />
      <PhotoStrip />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <CallToAction />
      <Footer />
    </>
  );
}

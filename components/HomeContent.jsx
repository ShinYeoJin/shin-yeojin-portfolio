'use client';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import SectionSkills from '@/components/SectionSkills';
import Footer from '@/components/Footer';

export default function HomeContent() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#section2') {
      const el = document.getElementById('section2');
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <SectionSkills />
      <Footer />
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import SectionSkills from '@/components/SectionSkills';
import Footer from '@/components/Footer';

export default function HomeContent() {
  const [rocketDone, setRocketDone] = useState(false);
  const [noAnim, setNoAnim] = useState(false);

  // 클라이언트 사이드에서만 URL 파라미터 읽기 (useSearchParams 대신)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const noAnimParam = params.get("noAnim");
      if (noAnimParam === "true") {
        setNoAnim(true);
        setRocketDone(true);
      }
    }
  }, []);

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
      {/* Header는 Section1 위에 겹치도록 absolute */}
      <Header setRocketDone={setRocketDone} />

      {/* Sections */}
      <Section1 rocketDone={rocketDone} setRocketDone={setRocketDone} />
      <Section2 />
      <Section3 />
      <SectionSkills />
      <Footer />

      {/* 로켓 애니메이션 오버레이 (초기 진입 시만) */}
      {!rocketDone && !noAnim && (
        <div className="fixed top-0 left-0 w-full h-full z-[999] flex justify-center items-center overflow-hidden bg-black">
          <Section1 rocketDone={rocketDone} setRocketDone={setRocketDone} />
        </div>
      )}
    </div>
  );
}


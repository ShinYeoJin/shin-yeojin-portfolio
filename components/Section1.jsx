'use client';
import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const STAR_COUNT = 80;

export default function Section1({ rocketDone, setRocketDone }) {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        setViewport({ width: window.innerWidth, height: window.innerHeight });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const stars = useMemo(() => (
    Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 4}s`,
    }))
  ), []);

  const rocketAnimate =
    viewport.width && viewport.height
      ? { x: -viewport.width * 1.2, y: -viewport.height * 0.9, opacity: 1, rotate: 135, scale: 1.5 }
      : { x: -500, y: -400, opacity: 1, rotate: 135, scale: 1.5 };

  return (
    <div
      id="section1"
      className="relative w-full h-screen flex justify-center items-center overflow-hidden pt-16 sm:pt-14"
      style={{ background: 'linear-gradient(180deg, #020510 0%, #050816 60%, #0a0f2e 100%)' }}
    >
      {/* 별 파티클 */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="star absolute rounded-full bg-white"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            '--duration': s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* 아래로 이어지는 그라디언트 페이드 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#050816] pointer-events-none z-10" />

      {/* 로켓 애니메이션 */}
      {!rocketDone && (
        <motion.span
          className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 text-4xl sm:text-6xl md:text-[6rem] z-20"
          initial={{ x: 0, y: 0, opacity: 0, rotate: 360, scale: 1 }}
          animate={rocketAnimate}
          transition={{ duration: 4, ease: 'easeInOut' }}
          onAnimationComplete={() => setRocketDone(true)}
        >
          🛸
        </motion.span>
      )}

      {/* 메인 텍스트 */}
      {rocketDone && (
        <motion.div
          className="relative z-20 flex flex-col justify-center items-center text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-white drop-shadow-[0_0_24px_rgba(147,197,253,0.5)]">
            Shin Yeo Jin
          </h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-white drop-shadow-[0_0_24px_rgba(147,197,253,0.5)]">
            Portfolio
          </h1>
          <span className="text-lg sm:text-2xl md:text-3xl mt-4 font-light tracking-[0.2em] bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
        </motion.div>
      )}
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState, useMemo } from 'react';

const STAR_COUNT = 50;

const projects = [
  {
    id: 1,
    path: '/projects/geomonitor',
    gradient: 'linear-gradient(135deg, #1d4ed8, #0891b2)',
    glow: 'rgba(6,182,212,0.5)',
    label: 'GeoMonitor',
    size: 'lg',
  },
  {
    id: 2,
    path: '/projects/jline',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    glow: 'rgba(236,72,153,0.5)',
    label: 'J-Line',
    size: 'lg',
  },
  {
    id: 3,
    path: null,
    gradient: 'linear-gradient(135deg, rgba(15,118,110,0.4), rgba(30,64,175,0.3))',
    glow: 'rgba(20,184,166,0.2)',
    label: '🚀 Coming Soon',
    size: 'sm',
  },
];

export default function Section2() {
  const sectionRef = useRef(null);
  const [sectionSize, setSectionSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionSize({ w: rect.width, h: rect.height });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const stars = useMemo(() => (
    Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 4}s`,
    }))
  ), []);

  const initialAngles = projects.map((_, i) => (i / projects.length) * 360);

  return (
    <section
      id="section2"
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050816 0%, #080d24 50%, #050816 100%)' }}
    >
      {/* 별 파티클 */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="star absolute rounded-full bg-white pointer-events-none"
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

      {/* 섹션 제목 */}
      <div className="absolute top-10 left-0 right-0 flex justify-center z-10 pointer-events-none">
        <span className="text-xs sm:text-sm tracking-[0.4em] uppercase text-cyan-300/70 font-light">
          ✦ Projects ✦
        </span>
      </div>

      {/* 상단/하단 페이드 */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#050816] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none z-10" />

      {/* 궤도 원들 */}
      {sectionSize.w > 0 && projects.map((p, i) => {
        const isLg = p.size === 'lg';
        const baseSize = sectionSize.w < 640 ? (isLg ? 100 : 55) : sectionSize.w < 1024 ? (isLg ? 130 : 65) : (isLg ? 160 : 80);
        const radiusX = isLg
          ? sectionSize.w * 0.22
          : sectionSize.w * 0.28 + i * sectionSize.w * 0.06;
        const radiusY = isLg
          ? sectionSize.h * 0.28
          : sectionSize.h * 0.32 + i * sectionSize.h * 0.04;
        const duration = isLg ? 28 : 38 + i * 8;

        return (
          <OrbitingPlanet
            key={p.id}
            project={p}
            radiusX={radiusX}
            radiusY={radiusY}
            duration={duration}
            sectionWidth={sectionSize.w}
            sectionHeight={sectionSize.h}
            initialAngle={initialAngles[i]}
            size={baseSize}
          />
        );
      })}
    </section>
  );
}

function OrbitingPlanet({ project, radiusX, radiusY, duration, sectionWidth, sectionHeight, initialAngle, size }) {
  const centerX = sectionWidth / 2 - size / 2;
  const centerY = sectionHeight / 2 - size / 2;
  const steps = 400;
  const xKeyframes = [];
  const yKeyframes = [];

  for (let i = 0; i <= steps; i++) {
    const angle = ((initialAngle + (360 * i) / steps) * Math.PI) / 180;
    xKeyframes.push(centerX + radiusX * Math.cos(angle));
    yKeyframes.push(centerY + radiusY * Math.sin(angle));
  }

  const isComingSoon = !project.path;

  const planet = (
    <motion.div
      className="absolute rounded-full cursor-pointer flex justify-center items-center text-white font-bold text-center"
      style={{
        width: size,
        height: size,
        background: project.gradient,
        boxShadow: `0 0 ${size * 0.4}px ${project.glow}, 0 0 ${size * 0.15}px rgba(255,255,255,0.1)`,
        border: isComingSoon ? '1px solid rgba(255,255,255,0.1)' : '1.5px solid rgba(255,255,255,0.2)',
        backdropFilter: isComingSoon ? 'blur(4px)' : 'none',
        opacity: isComingSoon ? 0.55 : 1,
      }}
      animate={{ x: xKeyframes, y: yKeyframes, rotate: [0, 360] }}
      transition={{ duration, ease: 'linear', repeat: Infinity }}
      whileHover={!isComingSoon ? { scale: 1.2, boxShadow: `0 0 ${size * 0.6}px ${project.glow}` } : {}}
    >
      <span
        className="font-bold leading-tight text-center px-1"
        style={{ fontSize: Math.max(size * 0.13, 10) }}
      >
        {project.label}
      </span>
    </motion.div>
  );

  if (isComingSoon) return planet;
  return <Link href={project.path}>{planet}</Link>;
}

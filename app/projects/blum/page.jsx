'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const techStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vercel'];

const features = [
  { icon: 'ri-layout-3-line',       text: '3가지 디자인 버전 (미니멀 / 볼드 / 시네마틱)' },
  { icon: 'ri-stack-line',          text: 'Sticky 스크롤 기반 3D flip 카드 애니메이션' },
  { icon: 'ri-layers-line',         text: '스택 구조 서비스 섹션 (전체화면 슬라이드)' },
  { icon: 'ri-counter-2-line',      text: '숫자 카운트업 애니메이션' },
  { icon: 'ri-smartphone-line',     text: '반응형 디자인 (모바일 / 태블릿 / 데스크탑)' },
];

const versions = [
  {
    label: 'V1 — 미니멀',
    desc: '화이트 베이스, 절제된 타이포그래피, 인터섹션 옵저버 애니메이션',
    href: 'https://blum-landing.vercel.app/v1',
    gradient: 'linear-gradient(135deg, #e5e7eb, #d1d5db)',
    color: '#111827',
  },
  {
    label: 'V2 — 볼드',
    desc: '블랙 + 레드 포인트, 임팩트 있는 타이틀, 서비스 섹션 3D 플립',
    href: 'https://blum-landing.vercel.app/v2',
    gradient: 'linear-gradient(135deg, #1f2937, #dc2626)',
    color: '#f9fafb',
  },
  {
    label: 'V3 — 시네마틱',
    desc: '딥 네이비 + 골드, GSAP ScrollTrigger, 전체화면 섹션 슬라이드',
    href: 'https://blum-landing.vercel.app/v3',
    gradient: 'linear-gradient(135deg, #0D1117, #D4AF37)',
    color: '#F5F0E8',
  },
];

export default function BlumPage() {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-start items-center text-white py-20 px-4"
      style={{ background: 'linear-gradient(180deg, #020510 0%, #050816 40%, #080d24 100%)' }}
    >
      <div
        className="max-w-7xl w-full p-6 rounded-2xl flex flex-col gap-8"
        style={{
          background: 'rgba(13,20,50,0.85)',
          border: '1px solid rgba(212,175,55,0.2)',
          boxShadow: '0 0 40px rgba(212,175,55,0.08)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* 제목 */}
        <h2
          className="text-4xl md:text-6xl font-extrabold text-left tracking-wide bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(to right, #D4AF37, #f5d97d, #D4AF37)' }}
        >
          BLUM Landing Page
        </h2>

        {/* 설명 */}
        <p className="text-lg md:text-xl border-2 border-white rounded-xl p-4 bg-white/10 backdrop-blur-sm shadow-inner leading-relaxed">
          오스트리아 프리미엄 가구 피팅 브랜드 blum의 랜딩 페이지.
          동일한 브랜드를 3가지 디자인 컨셉으로 구현한 멀티 버전 프로젝트로, 각 버전은 서로 다른 비주얼 언어와 인터랙션을 사용합니다.
        </p>

        {/* 3가지 버전 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {versions.map((v) => (
            <motion.a
              key={v.label}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-5 flex flex-col gap-3 border border-white/10 hover:border-white/30 transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.04)' }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="w-full h-24 rounded-lg"
                style={{ background: v.gradient }}
              />
              <p className="font-bold text-base" style={{ color: '#D4AF37' }}>{v.label}</p>
              <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
              <span className="text-xs text-white/40 underline underline-offset-2">바로가기 →</span>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 주요 기능 */}
          <motion.div
            className="flex-1 bg-white/5 rounded-xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase">주요 기능</h3>
            <ul className="flex flex-col gap-3">
              {features.map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-white/90 text-base md:text-lg">
                  <i className={`${icon} text-xl`} style={{ color: '#D4AF37' }} />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 기술 스택 */}
          <motion.div
            className="flex-1 bg-white/5 rounded-xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: 'rgba(212,175,55,0.15)',
                    border: '1px solid rgba(212,175,55,0.3)',
                    color: '#f5d97d',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex flex-row flex-wrap gap-4 mt-2">
          <motion.a
            href="https://blum-landing.vercel.app/v1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-6 py-2 rounded-2xl text-2xl font-bold transition-all duration-300 shadow-lg min-w-[160px]"
            style={{ background: '#D4AF37', color: '#0D1117' }}
            whileHover={{ scale: 1.1 }}
          >
            Visit Site 🔎
          </motion.a>

          <motion.a
            href="https://github.com/ShinYeoJin/blum-landing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-gray-600 transition-all duration-300 shadow-lg min-w-[160px] border border-white/20"
            whileHover={{ scale: 1.1 }}
          >
            GitHub 🐙
          </motion.a>

          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 120 }}>
            <Link
              href="/?noAnim=true#section2"
              className="flex justify-center items-center bg-gray-200 text-black px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-lg min-w-[160px]"
            >
              ⬅ Back
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

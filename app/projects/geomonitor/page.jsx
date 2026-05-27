'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const techStack = [
  'Next.js', 'TypeScript', 'Node.js', 'Express.js',
  'PostgreSQL', 'AWS RDS', 'Vercel', 'Render', '카카오맵 API',
];

const features = [
  { icon: 'ri-pulse-line', text: '실시간 센서 모니터링 대시보드' },
  { icon: 'ri-map-pin-2-line', text: '카카오맵 현장 위치 표시' },
  { icon: 'ri-file-download-line', text: '엑셀 / PDF 보고서 출력' },
  { icon: 'ri-qr-code-line', text: 'QR 코드 현장 조회' },
  { icon: 'ri-database-2-line', text: '에이전트 기반 데이터 자동 수집' },
];

const screenshots = ['/screenshot1.png', '/screenshot2.png', '/screenshot3.png'];

export default function GeoMonitorPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrent((c) => (c + 1) % screenshots.length);

  return (
    <section className="w-full min-h-screen flex flex-col justify-start items-center text-white py-20 px-4" style={{ background: 'linear-gradient(180deg, #020510 0%, #050816 40%, #080d24 100%)' }}>
      <div className="max-w-7xl w-full p-6 rounded-2xl flex flex-col gap-8" style={{ background: 'rgba(13,20,50,0.85)', border: '1px solid rgba(147,197,253,0.15)', boxShadow: '0 0 40px rgba(6,182,212,0.08)', backdropFilter: 'blur(12px)' }}>

        {/* 제목 */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-left tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
          GeoMonitor 계측 모니터링 시스템
        </h2>

        {/* 설명 */}
        <p className="text-lg md:text-xl border-2 border-white rounded-xl p-4 bg-white/10 backdrop-blur-sm shadow-inner leading-relaxed">
          지반 계측 센서 데이터를 실시간으로 수집·저장·시각화하는 웹 기반 모니터링 시스템.
          실제 의뢰 클라이언트 프로젝트로 현장 엔지니어가 언제 어디서든 계측 데이터를 확인하고 분석할 수 있습니다.
        </p>

        {/* 이미지 슬라이더 */}
        <div className="relative w-full flex justify-center items-center">
          <motion.div
            className="relative w-full max-w-3xl h-[240px] sm:h-[360px] md:h-[460px] bg-gray-800 border-2 border-white rounded-2xl shadow-xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Image
              key={current}
              src={screenshots[current]}
              alt={`스크린샷 ${current + 1}`}
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          {/* 이전 버튼 */}
          <button
            onClick={prev}
            className="absolute left-0 sm:left-2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-xl transition-all"
            aria-label="이전 이미지"
          >
            ‹
          </button>

          {/* 다음 버튼 */}
          <button
            onClick={next}
            className="absolute right-0 sm:right-2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-xl transition-all"
            aria-label="다음 이미지"
          >
            ›
          </button>

          {/* 인디케이터 */}
          <div className="absolute bottom-3 flex gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`이미지 ${i + 1}`}
              />
            ))}
          </div>
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
                  <i className={`${icon} text-xl text-cyan-400`} />
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
                  className="px-3 py-1 rounded-full bg-blue-700/50 border border-blue-400/30 text-sm font-semibold text-white/90"
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
            href="https://yuhyun-sensor-monitoring-front.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center bg-white text-black px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white transition-all duration-300 shadow-lg min-w-[160px]"
            whileHover={{ scale: 1.1 }}
          >
            Visit Site 🔎
          </motion.a>

          <motion.a
            href="https://github.com/ShinYeoJin/yuhyun-sensor-monitoring-front"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-gray-600 transition-all duration-300 shadow-lg min-w-[160px] border border-white/20"
            whileHover={{ scale: 1.1 }}
          >
            GitHub 🐙
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
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

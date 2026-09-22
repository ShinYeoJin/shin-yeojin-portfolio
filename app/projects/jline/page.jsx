'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const techStack = [
  'Next.js', 'TypeScript', 'React', 'Tailwind CSS', '네이버 지도 API', 'Vercel',
];

const features = [
  { icon: 'ri-smartphone-line', text: '반응형 디자인 (모바일/태블릿/데스크탑 최적화)' },
  { icon: 'ri-image-2-line', text: '자동 슬라이드 이미지 갤러리 (터치 스와이프 지원)' },
  { icon: 'ri-scissors-cut-line', text: '시술 안내 및 가격 정보' },
  { icon: 'ri-chat-quote-line', text: '고객 후기 (네이버 리뷰 연동)' },
  { icon: 'ri-map-pin-2-line', text: '네이버 지도 API 위치 안내' },
  { icon: 'ri-calendar-check-line', text: '네이버 예약 시스템 연동' },
];

const screenshots = ['/jline1.jpg', '/jline2.png', '/jline3.png'];

export default function JLinePage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length);
  const next = () => setCurrent((c) => (c + 1) % screenshots.length);

  return (
    <section
      className="w-full min-h-screen flex flex-col justify-start items-center text-white py-20 px-4"
      style={{ background: 'linear-gradient(180deg, #020510 0%, #050816 40%, #080d24 100%)' }}
    >
      <div
        className="max-w-7xl w-full p-6 rounded-2xl flex flex-col gap-8"
        style={{
          background: 'rgba(13,20,50,0.85)',
          border: '1px solid rgba(236,72,153,0.2)',
          boxShadow: '0 0 40px rgba(236,72,153,0.06)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* 제목 */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-left tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400">
          제이라인 속눈썹 전문 스튜디오
        </h2>

        {/* 설명 */}
        <p className="text-lg md:text-xl border rounded-xl p-4 bg-white/5 backdrop-blur-sm shadow-inner leading-relaxed" style={{ borderColor: 'rgba(236,72,153,0.2)' }}>
          실제 운영 중인 속눈썹 전문 스튜디오의 홈페이지. 네이버에 등록되어 실제 고객이 이용 중인 서비스입니다.
        </p>

        {/* 이미지 슬라이더 */}
        <div className="relative w-full flex justify-center items-center">
          <motion.div
            className="relative w-full max-w-3xl h-[240px] sm:h-[360px] md:h-[460px] bg-gray-800 border rounded-2xl shadow-xl overflow-hidden"
            style={{ borderColor: 'rgba(236,72,153,0.2)' }}
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

          <button
            onClick={prev}
            className="absolute left-0 sm:left-2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-xl transition-all"
            aria-label="이전 이미지"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 sm:right-2 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-xl transition-all"
            aria-label="다음 이미지"
          >
            ›
          </button>

          <div className="absolute bottom-3 flex gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-pink-400' : 'bg-white/30'}`}
                aria-label={`이미지 ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 문제 해결 섹션 */}
        <motion.div
          className="flex flex-col gap-6 rounded-xl p-6 border"
          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(236,72,153,0.12)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-xl font-bold tracking-wide uppercase" style={{ color: 'rgba(236,72,153,1)' }}>문제 해결 과정</h3>

          {/* 플로우 다이어그램 */}
          <div className="flex items-center gap-2 flex-wrap">
            {['문제', '접근', '해결'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-mono text-xs tracking-widest uppercase border rounded px-3 py-1" style={{ color: 'rgba(236,72,153,0.7)', borderColor: 'rgba(236,72,153,0.25)', background: 'rgba(236,72,153,0.05)' }}>
                  {label}
                </span>
                {i < 2 && <span className="font-mono text-sm" style={{ color: 'rgba(236,72,153,0.3)' }}>→</span>}
              </div>
            ))}
          </div>

          {/* 사례 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: '문제', text: '클라이언트가 이미 네이버 예약·톡톡·플레이스 후기로 고객을 응대하고 있었습니다.' },
              { label: '접근', text: '별도 예약 시스템을 새로 구축하는 대신, 기존 서비스와 연동하는 방식을 검토했습니다.' },
              { label: '해결', text: '예약 문의는 네이버 톡톡으로, 즉시 예약은 네이버 예약 페이지로, 후기 보기는 네이버 플레이스 후기로 각각 연결되도록 구현했습니다.' },
            ].map(({ label, text }) => (
              <div key={label} className="flex flex-col gap-1.5 rounded-lg p-3" style={{ background: 'rgba(236,72,153,0.04)', border: '1px solid rgba(236,72,153,0.15)' }}>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(236,72,153,0.6)' }}>{label}</span>
                <p className="text-sm text-white/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* 배운 점 */}
          <p className="font-mono text-xs text-white/40 leading-relaxed border-t pt-4" style={{ borderColor: 'rgba(236,72,153,0.1)' }}>
            → 기술적으로 새로운 걸 만드는 것보다, 이미 있는 걸 잘 연결하는 게 더 나은 해결책일 수 있다는 걸 배웠습니다.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 주요 기능 */}
          <motion.div
            className="flex-1 rounded-xl p-6 border"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(236,72,153,0.12)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase">주요 기능</h3>
            <ul className="flex flex-col gap-3">
              {features.map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-white/90 text-base md:text-lg">
                  <i className={`${icon} text-xl text-pink-400`} />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 기술 스택 */}
          <motion.div
            className="flex-1 rounded-xl p-6 border"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(236,72,153,0.12)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-4 tracking-wide uppercase">기술 스택</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-semibold text-white/90"
                  style={{ background: 'rgba(236,72,153,0.2)', border: '1px solid rgba(236,72,153,0.3)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 버튼 영역 */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-2">
          <motion.a
            href="https://jline.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center items-center bg-white text-black px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-gradient-to-r hover:from-pink-400 hover:to-violet-500 hover:text-white transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            사이트 방문
          </motion.a>

          <motion.a
            href="https://github.com/ShinYeoJin/jline"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-gray-600 transition-all duration-300 shadow-lg border border-white/20"
            whileHover={{ scale: 1.1 }}
          >
            GitHub
          </motion.a>

          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <Link
              href="/?noAnim=true#section2"
              className="w-full flex justify-center items-center bg-gray-200 text-black px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-lg"
            >
              ← 뒤로가기
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

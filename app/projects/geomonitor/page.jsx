'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg px-3 py-2" style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)' }}>
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-xs text-white/40 shrink-0">{label}</span>
        <span className="font-mono text-sm text-white/90 truncate">{value}</span>
      </div>
      <button
        onClick={handleCopy}
        className="shrink-0 rounded px-2 py-0.5 text-xs font-semibold transition-all duration-200"
        style={{ background: copied ? 'rgba(34,197,94,0.2)' : 'rgba(6,182,212,0.15)', color: copied ? '#4ade80' : '#67e8f9', border: `1px solid ${copied ? 'rgba(34,197,94,0.4)' : 'rgba(6,182,212,0.3)'}` }}
      >
        {copied ? '✓ 복사됨' : '복사'}
      </button>
    </div>
  );
}

const techStack = [
  'Next.js', 'TypeScript', 'Node.js', 'Express.js',
  'PostgreSQL', 'Supabase', 'recharts', 'Vercel', 'Render', '카카오맵 API',
];

const features = [
  { icon: 'ri-pulse-line', text: '실시간 센서 모니터링 대시보드' },
  { icon: 'ri-map-pin-2-line', text: '카카오맵 현장 위치 표시' },
  { icon: 'ri-file-download-line', text: 'Excel / PDF 리포트 출력 (exceljs, jsPDF)' },
  { icon: 'ri-qr-code-line', text: 'QR코드 현장 조회 (qrcode)' },
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
              sizes="(max-width: 768px) 100vw, 768px"
              priority={current === 0}
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

        {/* 문제 해결 섹션 */}
        <motion.div
          className="flex flex-col gap-6 bg-white/5 rounded-xl p-6 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-xl font-bold text-cyan-400 tracking-wide uppercase">문제 해결 과정</h3>

          {/* 플로우 다이어그램 */}
          <div className="flex items-center gap-2 flex-wrap">
            {['문제', '접근', '해결'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-mono text-xs tracking-widest uppercase text-white/50 border border-white/20 rounded px-3 py-1 bg-white/5">
                  {label}
                </span>
                {i < 2 && <span className="font-mono text-white/30 text-sm">→</span>}
              </div>
            ))}
          </div>

          {/* 사례 1 */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] tracking-widest uppercase text-cyan-400/70">CASE 01 — 날짜 범위 선택 UX</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { label: '문제', text: '클라이언트 요청은 시작일·종료일 입력 후 조회하는 수준이었지만, 종료일을 시작일보다 이전으로 선택해도 막히지 않는 걸 발견했습니다.' },
                { label: '접근', text: '날짜 선택 UI가 브라우저 네이티브 input과 직접 구현한 커스텀 캘린더 두 가지로 나뉘어 있었습니다. 클릭 자체를 막기보다, 잘못된 날짜를 새 시작일로 재해석하는 방식을 택했습니다.' },
                { label: '해결', text: '네이티브 입력에는 min 속성을 적용하고, 커스텀 캘린더는 클릭한 날짜가 시작일보다 이전이면 시작일과 종료일을 스왑하도록 구현했습니다.' },
              ].map(({ label, text }) => (
                <div key={label} className="flex flex-col gap-1.5 rounded-lg p-3" style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.15)' }}>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-400/60">{label}</span>
                  <p className="text-sm text-white/75 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 사례 2 */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] tracking-widest uppercase text-cyan-400/70">CASE 02 — 센서 데이터 누락</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { label: '문제', text: '정상 수집되던 센서 데이터가 갑자기 전부 누락되고, 서버 로그에 타입 추론 오류가 반복됐습니다.' },
                { label: '접근', text: '"어제는 됐는데 왜 오늘부터 안 됐는가"를 파고들자, DB가 비어있을 때는 중복 검사 쿼리가 타입 추론을 유발하지 않았지만, 데이터가 쌓인 뒤부터 PostgreSQL이 파라미터 타입을 잘못 추론한다는 걸 발견했습니다.' },
                { label: '해결', text: '타입 캐스팅으로 우회하는 대신, 중복 확인 쿼리 방식을 DB의 UNIQUE 제약조건을 활용하는 ON CONFLICT DO NOTHING 구조로 교체했습니다.' },
              ].map(({ label, text }) => (
                <div key={label} className="flex flex-col gap-1.5 rounded-lg p-3" style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.15)' }}>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-cyan-400/60">{label}</span>
                  <p className="text-sm text-white/75 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 배운 점 */}
          <p className="font-mono text-xs text-white/40 leading-relaxed border-t border-white/10 pt-4">
            → 요구사항에 없는 부분도 실제 사용 맥락을 먼저 상상하고, 에러 메시지 이면의 근본 원인을 끝까지 좁혀가는 습관을 갖게 되었습니다.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 주요 기능 */}
          <motion.div
            className="flex-1 bg-white/5 rounded-xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

        {/* 테스트 계정 안내 */}
        <motion.div
          className="rounded-xl p-5 flex flex-col gap-3"
          style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.25)', boxShadow: '0 0 20px rgba(6,182,212,0.05)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-lg">🔑</span>
            <h3 className="text-base font-bold text-white/90">테스트 계정으로 직접 체험해보세요</h3>
          </div>
          <div className="flex flex-col gap-2">
            <CopyField label="이메일" value="qwer4321@qwer4321.com" />
            <CopyField label="비밀번호" value="qwer4321" />
          </div>
          <p className="text-xs text-white/40 leading-relaxed">
            읽기 전용 계정입니다. 데이터 조회 및 리포트 출력은 가능하나 데이터 변경·삭제는 불가합니다.
          </p>
          <motion.a
            href="https://yuhyun-sensor-monitoring-front.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all duration-300"
            style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.4)', color: '#67e8f9' }}
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(6,182,212,0.25)' }}
          >
            테스트 계정으로 로그인하기 →
          </motion.a>
        </motion.div>

        {/* 버튼 영역 */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-2">
          <motion.a
            href="https://yuhyun-sensor-monitoring-front.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center items-center bg-white text-black px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 hover:text-white transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            사이트 방문
          </motion.a>

          <motion.a
            href="https://github.com/ShinYeoJin/yuhyun-sensor-monitoring-front"
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

'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const techStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vercel'];

const features = [
  { icon: 'ri-layout-3-line',       text: '3가지 디자인 버전 (미니멀 / 볼드 / 시네마틱)' },
  { icon: 'ri-stack-line',          text: 'Sticky 스크롤 기반 통계 전환 애니메이션 (v2)' },
  { icon: 'ri-slideshow-2-line',     text: '드래그 제품 캐러셀과 풀스크린 섹션 (v3)' },
  { icon: 'ri-bar-chart-line',      text: '숫자 카운트업 애니메이션 (v3)' },
  { icon: 'ri-smartphone-line',     text: '반응형 디자인 (모바일 / 태블릿 / 데스크탑)' },
];

const versions = [
  {
    label: 'V1 — 미니멀',
    desc: '화이트 베이스, 절제된 타이포그래피, GSAP ScrollTrigger 스크롤 전환과 스냅',
    href: 'https://blum-landing.vercel.app/v1',
    gradient: 'linear-gradient(135deg, #e5e7eb, #d1d5db)',
    color: '#111827',
  },
  {
    label: 'V2 — 볼드',
    desc: '블랙 + 레드 포인트, 임팩트 있는 타이틀, sticky 스크롤 통계와 등장 애니메이션',
    href: 'https://blum-landing.vercel.app/v2',
    gradient: 'linear-gradient(135deg, #1f2937, #dc2626)',
    color: '#f9fafb',
  },
  {
    label: 'V3 — 시네마틱',
    desc: '딥 네이비 + 골드, GSAP ScrollTrigger, 풀스크린 섹션과 드래그 제품 캐러셀',
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
          클라이언트에게 처음 보여주기 위한 제안용 시안으로, 세 가지 디자인 컨셉과 스크롤 애니메이션을 구현했습니다. blum 공식 사이트의 콘텐츠를 참고해 제작했으며 blum의 공식 사이트가 아닙니다. 이후 프로젝트가 중단되어 시안 단계에서 마무리되었습니다.
        </p>
        <p className="text-base md:text-lg border-2 border-white rounded-xl p-4 bg-white/10 backdrop-blur-sm shadow-inner leading-relaxed">
          <strong>역할:</strong> 강사님의 요청(애니메이션을 많이 넣은 세 가지 컨셉)에 따라 시작했고, 구현은 전부 1인으로 진행했습니다.
        </p>
        <p className="text-base md:text-lg border-2 border-white rounded-xl p-4 bg-white/10 backdrop-blur-sm shadow-inner leading-relaxed">
          <strong>AI 활용:</strong> Claude Code로 코드를 작성했습니다. 버전 번호를 재정렬한 뒤 v2 메뉴가 v3 페이지로 이동하는 증상을 직접 확인했고, Claude Code로 원인(v2 레이아웃이 v3 내비게이션·푸터 컴포넌트를 참조)을 추적해 v2 전용 컴포넌트로 교체했습니다.
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

        {/* 문제 해결 섹션 */}
        <motion.div
          className="flex flex-col gap-6 rounded-xl p-6 border"
          style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.15)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-xl font-bold tracking-wide uppercase" style={{ color: '#D4AF37' }}>문제 해결 과정</h3>

          {/* 플로우 다이어그램 */}
          <div className="flex items-center gap-2 flex-wrap">
            {['문제', '접근', '해결'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-mono text-xs tracking-widest uppercase border rounded px-3 py-1" style={{ color: 'rgba(212,175,55,0.7)', borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.06)' }}>
                  {label}
                </span>
                {i < 2 && <span className="font-mono text-sm" style={{ color: 'rgba(212,175,55,0.3)' }}>→</span>}
              </div>
            ))}
          </div>

          {/* 사례 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: '문제', text: '스크롤 시 콘텐츠가 순차 전환되는 애니메이션을 구현하려 했지만, 애니메이션이 끝나기 전에 다음 콘텐츠가 나오거나, 스크롤 한 번에 여러 콘텐츠가 지나가거나, 이전 콘텐츠가 겹쳐 보이는 문제가 반복됐습니다.' },
              { label: '접근', text: '원하는 화면과 실제 화면을 녹화해 비교하며 정확히 어느 지점이 다른지 짚어냈고, 여러 차례 구조를 재설계하며 안정적으로 동작하는 방식(CSS scroll-snap, Intersection Observer)을 찾아냈습니다.' },
              { label: '해결', text: '스크롤 단위를 고정하고, 각 섹션의 진입·이탈을 감지해 스크롤을 올릴 때는 애니메이션이 역순으로 진행되는 구조를 구현했습니다.' },
            ].map(({ label, text }) => (
              <div key={label} className="flex flex-col gap-1.5 rounded-lg p-3" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(212,175,55,0.6)' }}>{label}</span>
                <p className="text-sm text-white/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* 배운 점 */}
          <p className="font-mono text-xs text-white/40 leading-relaxed border-t pt-4" style={{ borderColor: 'rgba(212,175,55,0.1)' }}>
            → 원하는 결과를 막연히 설명하기보다 실제 화면과 비교해 구체적으로 짚어내는 소통이 더 정확하다는 걸 배웠고, 사용한 애니메이션 기법과 구현 방식을 별도로 정리해뒀습니다.
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 mt-2">
          <motion.a
            href="https://blum-landing.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center items-center px-6 py-2 rounded-2xl text-2xl font-bold transition-all duration-300 shadow-lg"
            style={{ background: '#D4AF37', color: '#0D1117' }}
            whileHover={{ scale: 1.1 }}
          >
            사이트 방문
          </motion.a>

          <motion.a
            href="https://github.com/ShinYeoJin/blum-landing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex justify-center items-center gap-2 bg-gray-800 text-white px-6 py-2 rounded-2xl text-2xl font-bold hover:bg-gray-600 transition-all duration-300 shadow-lg border border-white/20"
            whileHover={{ scale: 1.1 }}
          >
            GitHub
          </motion.a>

          <motion.div className="w-full sm:w-auto" whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 120 }}>
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

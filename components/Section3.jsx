'use client';
import { motion } from 'framer-motion';
import Introduce1 from "@/components/Introduce1";
import Introduce2 from "@/components/Introduce2";
import Introduce3 from "@/components/Introduce3";

const introLines = [
  {
    text: "제 이름 '여진(如辰)'은 '별과 같이 되라'는 뜻입니다.",
    className: "text-sm text-white/40 font-light tracking-wide",
    delay: 0,
  },
  {
    text: "별은 고요해 보이지만, 그 안에서는 끊임없는 반응으로 빛을 만들어냅니다.",
    className: "text-sm sm:text-base text-white/55 font-light tracking-wide",
    delay: 0.2,
  },
  {
    text: "제 이름의 뜻처럼, 빛이 사용자에게 닿을 때까지 답을 놓지 않습니다.",
    className: "text-base sm:text-lg text-white/85 font-medium tracking-wide",
    delay: 0.4,
  },
];

export default function Section3() {
  return (
    <div
      id="section3"
      className="relative w-full min-h-[500px] flex flex-col justify-center items-center gap-10 py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #050816 0%, #080d24 50%, #050816 100%)' }}
    >
      {/* 상단/하단 페이드 */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#050816] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />

      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-cyan-300/70">✦</span>
        <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
          INTRODUCE
        </span>
        <span className="text-cyan-300/70">✦</span>
      </motion.h1>

      {/* 도입 문장 — 위계 있는 3줄 */}
      <div className="flex flex-col items-center gap-2 max-w-xl text-center break-keep">
        {introLines.map((line, i) => (
          <motion.p
            key={i}
            className={line.className}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: line.delay }}
            viewport={{ once: true }}
          >
            {line.text}
          </motion.p>
        ))}
      </div>

      {/* 카드 3개 */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-px md:gap-0 w-full max-w-5xl border border-white/10 rounded-sm overflow-hidden">
        {[Introduce1, Introduce2, Introduce3].map((Introduce, i) => (
          <motion.div
            key={i}
            className="flex-1 md:border-l border-white/10 first:border-l-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Introduce />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import Introduce1 from "@/components/Introduce1";
import Introduce2 from "@/components/Introduce2";
import Introduce3 from "@/components/Introduce3";

export default function Section3() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.4, ease: "easeOut" },
    }),
  };

  return (
    <div
      id="section3"
      className="relative w-full min-h-[500px] flex flex-col justify-center items-center gap-8 py-16 px-4"
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

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-10 lg:gap-14 w-full max-w-7xl">
        {[Introduce1, Introduce2, Introduce3].map((Introduce, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 min-h-[420px]"
          >
            <Introduce />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

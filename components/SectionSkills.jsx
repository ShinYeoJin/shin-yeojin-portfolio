'use client';
import { motion } from 'framer-motion';

const categories = [
  {
    label: 'Frontend',
    icon: 'ri-layout-4-line',
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    dotColor: '#60a5fa',
    skills: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'Backend',
    icon: 'ri-server-line',
    gradient: 'linear-gradient(135deg, #06b6d4, #14b8a6)',
    dotColor: '#2dd4bf',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'NestJS', 'REST API', 'MySQL'],
  },
  {
    label: 'DevOps',
    icon: 'ri-cloud-line',
    gradient: 'linear-gradient(135deg, #a78bfa, #ec4899)',
    dotColor: '#c084fc',
    skills: ['AWS RDS', 'Vercel', 'Render', 'Git', 'GitHub'],
  },
];

export default function SectionSkills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 px-4"
      style={{ background: 'linear-gradient(180deg, #050816 0%, #080d24 60%, #050816 100%)' }}
    >
      {/* 상단/하단 페이드 */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#050816] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-14">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-300/70">✦</span>
          <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            SKILLS
          </span>
          <span className="text-cyan-300/70">✦</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 w-full">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="flex-1 rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-6 text-white"
              style={{
                background: 'linear-gradient(145deg, rgba(13,20,50,0.9), rgba(8,13,36,0.95))',
                border: '1px solid rgba(147,197,253,0.12)',
                boxShadow: '0 0 40px rgba(6,182,212,0.05)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* 아이콘 */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: cat.gradient, boxShadow: `0 0 20px ${cat.dotColor}55` }}
              >
                <i className={`${cat.icon} text-white`} />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-widest text-white/90 uppercase">
                {cat.label}
              </h3>

              <ul className="flex flex-col gap-3 w-full">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: cat.dotColor, boxShadow: `0 0 6px ${cat.dotColor}` }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

export default function Header({ setRocketDone }) {
  return (
    <header className="w-full flex flex-row justify-between items-center gap-2 p-2 sm:p-4 fixed top-0 left-0 z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/5">
      <button
        onClick={() => setRocketDone(false)}
        className="hover:scale-105 transition-transform text-cyan-300/70 hover:text-cyan-300 text-lg leading-none px-1"
        aria-label="메인으로"
      >
        ✦
      </button>
      <nav className="flex flex-wrap gap-3 sm:gap-6 text-white/80 text-xs sm:text-sm tracking-widest uppercase">
        <a href="#section1" className="hover:text-cyan-300 transition-colors">Main</a>
        <a href="#section2" className="hover:text-cyan-300 transition-colors">Projects</a>
        <a href="#section3" className="hover:text-cyan-300 transition-colors">Introduce</a>
        <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
      </nav>
    </header>
  );
}

const Footer = () => {
  return (
    <footer
      className="w-full text-white py-8 px-4"
      style={{
        background: 'linear-gradient(180deg, #050816 0%, #020510 100%)',
        borderTop: '1px solid rgba(147,197,253,0.08)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-widest text-white/90">SHIN YEO JIN</h3>
          <span className="text-sm tracking-[0.2em] text-cyan-300/60 uppercase">Full-Stack Developer</span>
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center gap-8 text-sm">
          <a
            href="https://github.com/ShinYeoJin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-white/50 hover:text-cyan-300 transition-colors duration-300"
          >
            <i className="ri-github-fill text-2xl" />
            <span className="tracking-widest text-xs uppercase">GitHub</span>
          </a>

          <div className="flex flex-col items-center gap-1 text-white/50">
            <i className="ri-mail-line text-2xl" />
            <span className="text-xs">syj3072@naver.com</span>
          </div>
        </div>
      </div>

      <p className="text-center text-white/20 text-xs mt-8 tracking-widest">
        © 2025 Shin Yeo Jin · Built with Next.js
      </p>
    </footer>
  );
};

export default Footer;

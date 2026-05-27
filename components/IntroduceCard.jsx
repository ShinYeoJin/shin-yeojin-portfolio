const IntroduceCard = ({ icon, title, subtitle }) => {
  return (
    <article
      className="w-full h-full flex flex-col justify-start items-center text-white gap-6 text-center p-6 rounded-2xl shadow-xl"
      style={{
        background: 'linear-gradient(145deg, rgba(13,20,50,0.9), rgba(8,13,36,0.95))',
        border: '1px solid rgba(147,197,253,0.15)',
        boxShadow: '0 0 30px rgba(6,182,212,0.07), inset 0 0 20px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <i className={`${icon} mt-6 text-7xl bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent`}></i>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-white/95">{title}</h3>
        <p className="text-base sm:text-lg text-white/65 leading-relaxed">{subtitle}</p>
      </div>
    </article>
  );
};

export default IntroduceCard;

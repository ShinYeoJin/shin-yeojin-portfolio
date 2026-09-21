'use client';

const IntroduceCard = ({ label, dotColor, title, subtitle, featured = false }) => {
  return (
    <article
      className="w-full h-full flex flex-col text-white rounded-sm"
      style={{
        background: featured ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.10)',
      }}
    >
      {/* 상단 라벨 */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: dotColor }}
        />
        <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
          {label}
        </span>
      </div>

      {/* 본문 */}
      <div className="flex flex-col gap-4 px-5 py-6">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide text-white/95 break-keep">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed break-keep">
          {subtitle}
        </p>
      </div>
    </article>
  );
};

export default IntroduceCard;

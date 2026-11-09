'use client';

import { motion } from 'framer-motion';

const TONES = {
  gray: {
    fill: 'rgba(255,255,255,0.06)',
    stroke: 'rgba(255,255,255,0.35)',
    title: '#f9fafb',
    sub: '#cbd5e1',
  },
  teal: {
    fill: 'rgba(6,182,212,0.12)',
    stroke: 'rgba(34,211,238,0.6)',
    title: '#ecfeff',
    sub: '#a5f3fc',
  },
};

const LINE = 'rgba(255,255,255,0.7)';
const FRAME = 'rgba(255,255,255,0.25)';
const LABEL = '#cbd5e1';

function Marker({ id }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </marker>
  );
}

function Box({ x, y, w = 160, h = 64, title, sub, tone }) {
  const c = TONES[tone];
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={c.fill} stroke={c.stroke} strokeWidth="1" />
      <text x={x + w / 2} y={y + 22} textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="600" fill={c.title}>{title}</text>
      <text x={x + w / 2} y={y + 44} textAnchor="middle" dominantBaseline="central" fontSize="12" fill={c.sub}>{sub}</text>
    </g>
  );
}

function Frame({ x, y, w, h, label }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="12" fill="none" stroke={FRAME} strokeWidth="1" strokeDasharray="4 4" />
      <text x={x + 16} y={y + 20} fontSize="12" fill={LABEL}>{label}</text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, marker, both = false }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={LINE}
      strokeWidth="1.5"
      markerEnd={`url(#${marker})`}
      markerStart={both ? `url(#${marker})` : undefined}
    />
  );
}

export default function GeoMonitorFlow() {
  return (
    <motion.div
      className="flex flex-col gap-6 bg-white/5 rounded-xl p-6 border border-white/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <h3 className="text-xl font-bold text-cyan-400 tracking-wide uppercase">데이터 흐름</h3>

      <div className="flex flex-col gap-3">
        <h4 className="text-base font-bold text-white/90">수집부터 화면까지</h4>
        <svg
          viewBox="0 0 680 560"
          className="w-full h-auto"
          role="img"
          aria-label="GeoMonitor 데이터 흐름: 계측 장비, 지오링크 프로그램, 수집 에이전트, 백엔드 API와 PostgreSQL, 웹 대시보드"
        >
          <title>GeoMonitor 데이터 흐름</title>
          <desc>계측 장비의 값이 지오링크 프로그램, 수집 에이전트, 백엔드 API, 데이터베이스를 거쳐 웹 대시보드에 표시되는 흐름</desc>
          <defs>
            <Marker id="gm-flow-arrow-a" />
          </defs>

          <Frame x={40} y={30} w={600} h={130} label="현장 (회사 PC)" />
          <Box x={64} y={70} title="계측 장비" sub="1시간 단위로 측정" tone="gray" />
          <Box x={260} y={70} title="지오링크 프로그램" sub="txt 파일에 누적" tone="gray" />
          <Box x={456} y={70} title="수집 에이전트" sub="1시간마다 전송" tone="teal" />
          <Arrow x1={224} y1={102} x2={258} y2={102} marker="gm-flow-arrow-a" />
          <Arrow x1={420} y1={102} x2={454} y2={102} marker="gm-flow-arrow-a" />

          <Frame x={200} y={200} w={440} h={130} label="서버 (Render)" />
          <Box x={220} y={240} w={190} title="PostgreSQL" sub="운영 RDS · 데모 Supabase" tone="gray" />
          <Box x={456} y={240} title="백엔드 API" sub="수신·저장·알람 생성" tone="teal" />
          <Arrow x1={454} y1={272} x2={412} y2={272} marker="gm-flow-arrow-a" />
          <Arrow x1={536} y1={134} x2={536} y2={238} marker="gm-flow-arrow-a" />
          <text x={526} y={182} textAnchor="end" fontSize="12" fill={LABEL}>POST /api/ingest</text>

          <Frame x={240} y={370} w={400} h={130} label="웹 (Vercel)" />
          <Box x={456} y={410} title="웹 대시보드" sub="60초마다 조회" tone="teal" />
          <Arrow x1={536} y1={304} x2={536} y2={408} marker="gm-flow-arrow-a" />
          <text x={526} y={352} textAnchor="end" fontSize="12" fill={LABEL}>데이터 조회</text>

          <rect x={40} y={520} width={14} height={14} rx={3} fill={TONES.gray.fill} stroke={TONES.gray.stroke} strokeWidth="1" />
          <text x={62} y={528} dominantBaseline="central" fontSize="12" fill={LABEL}>외부 장비·프로그램·DB</text>
          <rect x={230} y={520} width={14} height={14} rx={3} fill={TONES.teal.fill} stroke={TONES.teal.stroke} strokeWidth="1" />
          <text x={252} y={528} dominantBaseline="central" fontSize="12" fill={LABEL}>직접 개발한 부분</text>
        </svg>
        <p className="text-sm md:text-base text-white/80 leading-relaxed">
          수집 에이전트는 1시간마다 센서 txt 파일을 읽어 새 데이터만 최대 50건씩 묶어 서버로 보냅니다. 서버는 이를 PostgreSQL에 저장하고, 임계값을 넘으면 알람을 만듭니다. 대시보드는 60초마다 데이터를 다시 불러옵니다.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-base font-bold text-white/90">운영 중 상태 확인과 재수집</h4>
        <svg
          viewBox="0 0 680 96"
          className="w-full h-auto"
          role="img"
          aria-label="에이전트, 백엔드 API, 웹 화면이 상태 신호와 재수집 요청을 주고받는 흐름"
        >
          <title>GeoMonitor 운영 보조 흐름</title>
          <desc>수집 에이전트와 백엔드 API가 상태 신호와 재수집 요청을 주고받고, 웹 화면이 에이전트 상태와 수신 지연을 보여주는 흐름</desc>
          <defs>
            <Marker id="gm-flow-arrow-b" />
          </defs>
          <Box x={50} y={16} w={150} title="수집 에이전트" sub="상태 신호·재수집" tone="teal" />
          <Box x={270} y={16} w={150} title="백엔드 API" sub="신호·요청 저장" tone="teal" />
          <Box x={490} y={16} w={150} title="웹 화면" sub="상태·지연 표시" tone="teal" />
          <Arrow x1={202} y1={48} x2={268} y2={48} marker="gm-flow-arrow-b" both />
          <Arrow x1={422} y1={48} x2={488} y2={48} marker="gm-flow-arrow-b" both />
        </svg>
        <p className="text-sm md:text-base text-white/80 leading-relaxed">
          에이전트가 5분마다 상태 신호를 보내면 센서 페이지의 에이전트 상태에 반영되고, 마지막 신호가 90분 이내면 온라인으로 표시됩니다. 대시보드는 마지막 측정 후 2시간이 지난 센서를 수신 지연 배너로 알려줍니다. 빠진 구간은 센서 페이지에서 재수집을 요청하면 에이전트가 수집 주기마다 요청을 확인해 다시 보냅니다.
        </p>
      </div>
    </motion.div>
  );
}

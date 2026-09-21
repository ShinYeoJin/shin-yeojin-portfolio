import IntroduceCard from "./IntroduceCard";

export default function Introduce1() {
  return (
    <IntroduceCard
      label="STATUS · INFRA"
      dotColor="#67E8F9"
      title={<>익숙하지 않은 인프라도<br />직접 부딪혀 배웁니다</>}
      subtitle="센서 데이터가 24시간 끊기지 않아야 한다는 요구사항 앞에서, 수업 때 써본 적 없는 관리형 데이터베이스를 직접 선택하고 구축했습니다. 익숙한 도구보다 문제에 맞는 도구를 택하는 쪽을 고릅니다."
    />
  );
}

import IntroduceCard from "./IntroduceCard";

export default function Introduce2() {
  return (
    <IntroduceCard
      icon="ri-line-chart-fill"
      title={<>요청받지 않은 부분까지<br />사용자 입장에서 생각합니다</>}
      subtitle="날짜 범위를 조회하는 기능을 만들 때, 클라이언트가 요청하지 않았지만 사용자가 실수로 잘못된 범위를 선택할 수 있다는 걸 먼저 떠올려 방지 로직을 직접 설계했습니다."
    />
  );
} 
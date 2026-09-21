import IntroduceCard from "./IntroduceCard";

export default function Introduce3() {
  return (
    <IntroduceCard
      label="STATUS · QA"
      dotColor="#67E8F9"
      title={<>AI가 만든 결과물도<br />검증하는 습관을 지킵니다</>}
      subtitle="Claude Code로 리팩토링하던 중, 두 페이지의 비슷한 컴포넌트를 비교하다 상태 색상 표시 로직이 한쪽에서만 빠진 버그를 발견해 수정했습니다. 결과를 그대로 믿지 않고 대조하며 확인합니다."
    />
  );
}

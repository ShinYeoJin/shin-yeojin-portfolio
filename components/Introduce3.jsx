import IntroduceCard from "./IntroduceCard";

export default function Introduce3() {
  return (
    <IntroduceCard
      icon="ri-repeat-fill"
      title={<>문제의 근본 원인을<br />분석하고 해결합니다</>}
      subtitle={<>개발 과정에서 마주치는<br />오류나 복잡한 요구사항을<br />단순히 넘어가지 않고,<br />원인부터 해결책까지 철저히 분석합니다.</>}
    />
  );
}
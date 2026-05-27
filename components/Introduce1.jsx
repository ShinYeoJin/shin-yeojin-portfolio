import IntroduceCard from "./IntroduceCard";

export default function Introduce1() {
  return (
    <IntroduceCard
      icon="ri-question-mark"
      title={<>빠른 학습과<br />실전 적용</>}
      subtitle={<>새로운 프레임워크나 라이브러리도<br />주저하지 않고 탐구하며,<br />실제 프로젝트에 빠르게 적용합니다.</>}
    />
  );
}
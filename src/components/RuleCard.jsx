import React, { useState } from 'react';
import * as R from '@/styles/RuleStyle';
import Ruel_1 from '@/assets/Rule_1.png';
import Rule_2 from '@/assets/Rule_2.png';
import Rule_3 from '@/assets/Rule_3.png';
import Rule_4 from '@/assets/Rule_4.png';
import Rule_5 from '@/assets/Rule_5.png';

const ruleData = [
  {
    img: Ruel_1,
    title: '1. 제시어 선정',
    description: 'AI가 제시어를 하나 정합니다. (주제: 모임, 문화, 낭만)',
  },
  {
    img: Rule_2,
    title: '2. 게임 설명',
    description: '각 플레이어는 제시어와 관련된 이야기를 돌아가며 말합니다.',
  },
  {
    img: Rule_3,
    title: '3. 시간 제한',
    description: '각 플레이어는 제한 시간 안에 이야기를 끝내야 합니다.',
  },
  {
    img: Rule_4,
    title: '4. 점수 부여',
    description: '이야기의 창의성과 재미에 따라 점수가 부여됩니다.',
  },
  {
    img: Rule_5,
    title: '5. 우승자 결정',
    description: '모든 라운드가 끝나고 총점이 가장 높은 사람이 우승합니다.',
  },
];

const RuleCard = () => {
  const [currentRule, setCurrentRule] = useState(0);
  
  const handleNext = () => {
    setCurrentRule((prevRule) => (prevRule + 1) % ruleData.length);
  };
  console.log(currentRule);

  const handlePrev = () => {
    setCurrentRule((prevRule) =>
      prevRule === 0 ? ruleData.length - 1 : prevRule - 1
    );
  };
  currentRule(currentRule

  const { img, title, description } = ruleData[currentRule];

  return (
    <R.RuleCard>
      <h2>플레이 방법</h2>
      <img src={img} alt={`Rule ${currentRule + 1}`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <button onClick={handlePrev}>이전</button>
        현재 룰북 /{ruleData.length}
        <button onClick={handleNext}>다음</button>
      </div>
    </R.RuleCard>
  );
};

export default RuleCard;

import { CircleChart } from '../FoodChart';
import {
  ChartWrapper,
  ChartElement,
  InfoWrapper,
  ElementsTitle,
  ValueWrap,
  GoalWrap,
  Value,
  Percentage,
} from './FoodCard.styled';

export const FoodCard = (props) => {
  const { title, chartBcg, elementGoal, elementValue } = props;

  let left = elementGoal - elementValue;
  if (left < 0) {
    left = 0;
  }
  let elementPercentage = Math.round((elementValue * 100) / elementGoal);

  if (elementPercentage === Infinity || isNaN(elementPercentage)) {
    elementPercentage = 0;
  }

  if (elementPercentage > 100) {
    elementPercentage = 100;
  }

  return (
    <>
      <ChartWrapper>
        <ChartElement>
          <CircleChart
            dailyCalories={elementGoal}
            inputValue={elementValue}
            chartBcg={chartBcg}
          />
          <Percentage>
            <p>{`${elementPercentage}%`}</p>
          </Percentage>
        </ChartElement>
        <InfoWrapper>
          <ElementsTitle>{title}</ElementsTitle>
          <ValueWrap>
            <GoalWrap>
              Goal: <Value>{elementGoal}</Value>
            </GoalWrap>
            <p>
              left: <Value>{left}</Value>
            </p>
          </ValueWrap>
        </InfoWrapper>
      </ChartWrapper>
    </>
  );
};

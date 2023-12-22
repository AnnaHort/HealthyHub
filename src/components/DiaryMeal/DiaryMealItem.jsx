import {
  MealTitle,
  MealImageWrapper,
  MealStatistic,
  StatisticItem,
  StatisticValue,
} from './DiaryMealItem.styled';

import { ReactComponent as BreakfastImg } from '../../img/Diary/breakfast.svg';

const DiaryMealItem = () => {
  return (
    <div>
      <MealImageWrapper>
        <BreakfastImg />
        <MealTitle>Breakfast</MealTitle>
      </MealImageWrapper>
      <MealStatistic>
        <StatisticItem>
          Carbonohidrates:
          <StatisticValue>20</StatisticValue>
        </StatisticItem>
        <StatisticItem>
          Protein:<StatisticValue>40</StatisticValue>
        </StatisticItem>
        <StatisticItem>
          Fat:<StatisticValue>40</StatisticValue>
        </StatisticItem>
      </MealStatistic>
    </div>
  );
};

export default DiaryMealItem;

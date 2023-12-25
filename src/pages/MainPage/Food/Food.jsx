import { useSelector } from 'react-redux';
import { CircleChart } from '../../../components/MainPage/Food/FoodChart';
import { FoodCard } from '../../../components/MainPage/Food/FoodCard';
import {
  CaloriesChart,
  ChartInfoWrap,
  ChartValue,
  ChartValueInfo,
  FoodInfoCard,
  InfoWrap,
  Title,
} from './Food.styled';

import { 
  getCarbonohidratesAmount,
  getCarbonohidratesLeft,
  getFatAmount,
  getFatLeft,
  getProteinAmount,
  getProteinLeft
} from "../../../redux/userStatsDay/selectors";


const carbBcg = 'rgba(255, 196, 247, 1)';
const proteinBcg = 'rgba(255, 243, 183, 1)';
const fatBcg = 'rgba(182, 182, 182, 1)';
const caloriesChartBcg = '#45FFBC';

export const FoodInfo = ({ dailyCalories, amountCalories }) => {
  const carbs = useSelector(getCarbonohidratesLeft);
  const carbsAmount = useSelector(getCarbonohidratesAmount);
  const protein = useSelector(getFatLeft);
  const proteinAmount = useSelector(getFatAmount);
  const fat = useSelector(getProteinLeft);
  const fatAmount = useSelector(getProteinAmount);
  
  return (
    <div>
      <Title>Food</Title>
      <FoodInfoCard>
        <CaloriesChart>
          <CircleChart
            dailyCalories={dailyCalories}
            amountCalories={amountCalories}
            chartBcg={caloriesChartBcg}
          />
          <ChartInfoWrap>
            <ChartValue>{amountCalories}</ChartValue>
            <ChartValueInfo>calories</ChartValueInfo>
          </ChartInfoWrap>
        </CaloriesChart>
        <InfoWrap>
          <FoodCard
            title={'Carbonohidrates'}
            chartBcg={carbBcg}
            elementGoal={carbs}
            elementValue={carbsAmount}
          />
          <FoodCard
            title={'Protein'}
            chartBcg={proteinBcg}
            elementGoal={protein}
            elementValue={proteinAmount}
          />
          <FoodCard
            title={'Fat'}
            chartBcg={fatBcg}
            elementGoal={fat}
            elementValue={fatAmount}
          />
        </InfoWrap>
      </FoodInfoCard>
    </div>
  );
};

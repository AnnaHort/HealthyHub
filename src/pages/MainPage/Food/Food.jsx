import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
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
  getFatAmount,
  getProteinAmount,
} from '../../../redux/userStatsDay/selectors';

import { selectUserMacroelements } from '../../../redux/auth/authSelectors';

const carbBcg = '#FFC4F7';
const proteinBcg = '#FFF3B7';
const fatBcg = '#B6B6B6';
const caloriesChartBcg = '#45FFBC';

export const FoodInfo = ({ dailyCalories, amountCalories }) => {
  const [macroelements, setMacroelements] = useState({
    carbonohidrates: 0,
    protein: 0,
    fat: 0,
  });

  const carbsAmount = useSelector(getCarbonohidratesAmount);
  const proteinAmount = useSelector(getProteinAmount);
  const fatAmount = useSelector(getFatAmount);
  const userMacroelements = useSelector(selectUserMacroelements);


  useEffect(() => {
    if (userMacroelements !== undefined) {
      setMacroelements(userMacroelements);
    }
  }, [userMacroelements]);

  const { carbonohidrates, protein, fat } = macroelements;

  return (
    <div>
      <Title>Food</Title>
      <FoodInfoCard>
        <CaloriesChart>
          <CircleChart
            dailyCalories={dailyCalories}
            inputValue={amountCalories}
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
            elementGoal={carbonohidrates}
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

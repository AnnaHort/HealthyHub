import {
  RecommendedFoodContainer,
  RecommendedFoodFrame,
  RecommendedFoodWeight,
  RecommendedFoodCalories,
  RecommendedFoodName,
  RecommendedFoodUnitName,
  RecommendedFoodImg,
  TextContainer,
  RecomendedFoodButton,
  ButtonPointer,
} from './RecommendedFood.styled';

import RecommendedFoodPointer from '../../img/recommendedFoodPointer/arrow-right.png';

import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

// для создания состояния и управления им.
const RecommendedFoodMain = () => {
  const [recommendedFood, setRecommendedFood] = useState([]);

  // выполняет запрос к серверу с библиотекой axios.
  useEffect(() => {
    const fetchRecommendedFood = async () => {
      try {
        // віполняет запрос и отображает только 4 картинки
        const response = await axios.get('/api/recommended-food');
        setRecommendedFood(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching food:', error);
        if (error.response) {
          console.error('Error response:', error.response.data);
        }
      }
    };

    // асинхронная функция вызываемая внутри useEffect
    fetchRecommendedFood();
  }, []);

  return (
    <div>
      <RecommendedFoodUnitName>Recommended Food</RecommendedFoodUnitName>
      <RecommendedFoodContainer>
        {recommendedFood.map((foodItem, id) => {
          console.log(foodItem.icon);
          return (
            <RecommendedFoodFrame key={id}>
              <RecommendedFoodImg src={foodItem.img} alt={foodItem.name} />
              <RecommendedFoodName>{foodItem.name}</RecommendedFoodName>
              <TextContainer>
                <RecommendedFoodWeight>{foodItem.amount}</RecommendedFoodWeight>
                <RecommendedFoodCalories>
                  {foodItem.calories} calories
                </RecommendedFoodCalories>
              </TextContainer>
            </RecommendedFoodFrame>
          );
        })}
        <RecomendedFoodButton href="/recommended-food">
          See more
          <ButtonPointer
            src={RecommendedFoodPointer}
            alt="#"
            width="16"
            height="16"
          />
        </RecomendedFoodButton>
      </RecommendedFoodContainer>
    </div>
  );
};
export default RecommendedFoodMain;

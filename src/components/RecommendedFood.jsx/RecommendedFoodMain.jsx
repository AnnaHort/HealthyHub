import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

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

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

// для создания состояния и управления им.
const RecommendedFoodMain = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 833 });
  const isTablet = useMediaQuery({ minWidth: 834 });

  const [recommendedFood, setRecommendedFood] = useState([]);

  useEffect(() => {
    // делаем запрос на сервер
    const fetchRecommendedFood = async () => {
      try {
        const response = await axios.get('/api/recommended-food');
        setRecommendedFood(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRecommendedFood();
  }, []);

  const getCardCount = () => {
    if (isMobile) {
      return 2;
    } else if (isTablet) {
      return 4;
    } else {
      return recommendedFood.length;
    }
  };

  const handleSeeMoreClick = () => {
  };

  return (
    <div>
      <RecommendedFoodUnitName>Recommended Food</RecommendedFoodUnitName>
      <RecommendedFoodContainer>
        {recommendedFood.slice(0, getCardCount()).map((foodItem, id) => {
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
        <Link to="/recommended-food">
          <RecomendedFoodButton onClick={handleSeeMoreClick}>
            See more
            <ButtonPointer
              src={RecommendedFoodPointer}
              alt="#"
              width="16"
              height="16"
            />
          </RecomendedFoodButton>
        </Link>
      </RecommendedFoodContainer>
    </div>
  );
};

export default RecommendedFoodMain;

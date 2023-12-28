import {
  DiaryTop,
  DiaryTitle,
  DiaryContainer,
  RecordContainer,
  DiaryText,
  DiaryImg,
  DearyButton,
  DiaryBox,
  DiarySendBack,
  DishNameStyle,
  FoodInfoContainer,
  FoodNumberStyle,
  AboutDishContainer,
  MobileSpan,
  DishDetails,
  DishListContainer,
  DishNameContainer,
  DiaryBoxContainer,
} from './DiaryPage.styled';

import BreakfastImg from '../../img/Diary/breakfast.svg';
import LunchImg from '../../img/Diary/lunch.svg';
import DiaryBack from '../../img/Diary/arrow-back.svg';
import DinnerImg from '../../img/Diary/dinner.svg';
import SnackImg from '../../img/Diary/snack.svg';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserStatsDay } from '/src/redux/userStatsDay/operations.js';
import { useState } from 'react';

const getMealTypeImage = (mealType) => {
  switch (mealType) {
    case 'breakfast':
      return BreakfastImg;
    case 'lunch':
      return LunchImg;
    case 'dinner':
      return DinnerImg;
    case 'snack':
      return SnackImg;
    default:
      return '';
  }
};

const getSumByField = (data, field) => {
  return data.reduce((sum, item) => sum + item[field], 0);
};

const DiaryPage = () => {
  const [foodData, setFoodData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(fetchUserStatsDay());
      setFoodData(response.payload.food.foodServings);
    };
    fetchData();
  }, [dispatch]);

  // Перевіряємо, чи є дані перед використанням
  if (!foodData) {
    return null; // вставити лоадер
  }

  // Функція, яка групує дані за типом прийому їжі
  const groupByMealType = (data) => {
    return data.reduce((acc, item) => {
      const mealType = item.mealType.toLowerCase();
      if (!acc[mealType]) {
        acc[mealType] = [];
      }
      acc[mealType].push(item);
      return acc;
    }, {});
  };

  // Групуємо дані за типом прийому їжі
  const groupedData = groupByMealType(foodData);

  const allMealTypes = ['snack', 'dinner', 'lunch', 'breakfast'];

  return (
    <>
      <DiarySendBack to="/main">
        <DiaryTop>
          <DiaryImg src={DiaryBack} alt="#" />
          Diary
        </DiaryTop>
      </DiarySendBack>

      <DiaryContainer>
        {allMealTypes.map((mealType) => (
          <div key={mealType}>
            <DiaryBoxContainer>
              <DiaryTitle>
                <DiaryImg src={getMealTypeImage(mealType)} alt="#" />
                {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
              </DiaryTitle>

              <DiaryBox>
                {groupedData[mealType] && groupedData[mealType].length > 0 ? (
                  <>
                    <DiaryText>
                      Carbonohidrates:
                      {getSumByField(groupedData[mealType], 'carbonohidrates')}
                    </DiaryText>
                    <DiaryText>
                      Protein:{getSumByField(groupedData[mealType], 'protein')}
                    </DiaryText>
                    <DiaryText>
                      Fat:{getSumByField(groupedData[mealType], 'fat')}
                    </DiaryText>
                  </>
                ) : (
                  <>
                    <DiaryText>Carbonohidrates: 0</DiaryText>
                    <DiaryText>Protein: 0</DiaryText>
                    <DiaryText>Fat: 0</DiaryText>
                  </>
                )}
              </DiaryBox>
            </DiaryBoxContainer>

            <RecordContainer>
              <DishListContainer>
                {groupedData[mealType] && groupedData[mealType].length > 0
                  ? groupedData[mealType].map((item, index) => (
                      <FoodInfoContainer key={item._id}>
                        <DishNameContainer>
                          <FoodNumberStyle>{index + 1}</FoodNumberStyle>
                          <DishNameStyle>{item.dishName}</DishNameStyle>
                        </DishNameContainer>
                        <AboutDishContainer>
                          <DishDetails>
                            <MobileSpan>Carb.</MobileSpan>
                            {item.carbonohidrates}
                          </DishDetails>
                          <DishDetails>
                            <MobileSpan>Prot.</MobileSpan>
                            {item.protein}
                          </DishDetails>
                          <DishDetails>
                            <MobileSpan>Fat.</MobileSpan>
                            {item.fat}
                          </DishDetails>
                        </AboutDishContainer>
                      </FoodInfoContainer>
                    ))
                  : null}
              </DishListContainer>

              <DearyButton>+ Record your meal</DearyButton>
            </RecordContainer>
          </div>
        ))}
      </DiaryContainer>
    </>
  );
};

export default DiaryPage;

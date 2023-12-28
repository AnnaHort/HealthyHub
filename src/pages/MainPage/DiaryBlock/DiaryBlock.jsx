import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserStatsFoodSevising } from '../../../redux/userStatsDay/selectors';
import { delFood } from '../../../redux/userStatsDay/operations';
import { fetchUserStatsDay } from '../../../redux/userStatsDay/operations';

import {
  DiaryBlockContainer,
  DiaryBlockTitleWrapper,
  DiaryBlockTitle,
  SeeMoreButton,
  DiaryBlockList,
  DiaryBlockItem,
  NutrientName,
  NutrientValue,
  MealTitleWrapper,
  MealTitle,
  NutrientList,
  NutrientItem,
  AddMealButton,
  DeleteButton,
} from './DiaryBlock.styled';

import RecordDiaryModal from '../../../components/RecordDiaryModal/RecordDiaryModal';

import { ReactComponent as BreakfastImg } from '../../../img/Diary/breakfast.svg';
import { ReactComponent as LunchImg } from '../../../img/Diary/lunch.svg';
import { ReactComponent as DinnerImg } from '../../../img/Diary/dinner.svg';
import { ReactComponent as SnackImg } from '../../../img/Diary/snack.svg';
import { ReactComponent as PlusIcon } from '../../../img/Diary/plus.svg';
import { ReactComponent as BasketIcon } from '../../../img/Diary/basket.svg';
import { fetchCurentUser } from '../../../redux/auth/authOperations';

const DiaryBlock = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState('');
  const [foodSetvisingForMealType, setFoodSetvisingForMealType] = useState([]);

  const initialMeals = {
    Breakfast: {
      carbohydrates: null,
      protein: null,
      fat: null,
      image: <BreakfastImg />,
      type: 'breakfast',
    },
    Lunch: {
      carbohydrates: null,
      protein: null,
      fat: null,
      image: <LunchImg />,
      type: 'lunch',
    },
    Dinner: {
      carbohydrates: null,
      protein: null,
      fat: null,
      image: <DinnerImg />,
      type: 'dinner',
    },
    Snack: {
      carbohydrates: null,
      protein: null,
      fat: null,
      image: <SnackImg />,
      type: 'snack',
    },
  };

  const openModal = (mealTitle) => {
    setIsModalOpen(true);
    setSelectedMeal(mealTitle);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const userStatsFoodSevising = useSelector(getUserStatsFoodSevising);
  const foodSetvising =
    userStatsFoodSevising !== undefined ? userStatsFoodSevising : [];

  useEffect(() => {
    if (foodSetvising !== undefined) {
      let result = { ...initialMeals };
      foodSetvising.forEach((obj) => {
        let mealType = Object.keys(initialMeals).find(
          (key) => initialMeals[key].type === obj.mealType
        );
        if (mealType) {
          result[mealType].carbohydrates += Number(obj.carbonohidrates);
          result[mealType].protein += Number(obj.protein);
          result[mealType].fat += Number(obj.fat);
        }
      });

      let meals = Object.keys(result).map((mealType) => {
        return {
          title: mealType,
          nutrients: {
            carbohydrates: result[mealType].carbohydrates,
            protein: result[mealType].protein,
            fat: result[mealType].fat,
          },
          image: result[mealType].image,
          type: result[mealType].type,
        };
      });

      setFoodSetvisingForMealType(meals);
    }
  }, [foodSetvising]);

  const handleDeleteMeal = (type) => {
    dispatch(delFood(type));
    dispatch(fetchUserStatsDay());
    dispatch(fetchCurentUser());
  }

  return (
    <>
      <DiaryBlockContainer>
        <DiaryBlockTitleWrapper>
          <DiaryBlockTitle>Diary</DiaryBlockTitle>
          <SeeMoreButton to="/diary">See more</SeeMoreButton>
        </DiaryBlockTitleWrapper>

        <DiaryBlockList>
          {foodSetvisingForMealType &&
            foodSetvisingForMealType.map((meal, index) => (
              <DiaryBlockItem key={index}>
                <MealTitleWrapper>
                  {meal.image}
                  <MealTitle>{meal.title}</MealTitle>
                </MealTitleWrapper>
                {meal.nutrients.carbohydrates !== null ||
                meal.nutrients.protein !== null ||
                meal.nutrients.fat !== null ? (
                  <NutrientList>
                    {meal.nutrients.carbohydrates !== null && (
                      <NutrientItem>
                        <NutrientName>Carbohydrates:</NutrientName>
                        <NutrientValue>
                          {meal.nutrients.carbohydrates}
                        </NutrientValue>
                      </NutrientItem>
                    )}
                    {meal.nutrients.protein !== null && (
                      <NutrientItem>
                        <NutrientName>Protein:</NutrientName>
                        <NutrientValue>{meal.nutrients.protein}</NutrientValue>
                      </NutrientItem>
                    )}
                    {meal.nutrients.fat !== null && (
                      <NutrientItem>
                        <NutrientName>Fat:</NutrientName>
                        <NutrientValue>{meal.nutrients.fat}</NutrientValue>
                      </NutrientItem>
                    )}
                    <DeleteButton onClick={() => handleDeleteMeal(meal.type)}>
                      <BasketIcon />
                    </DeleteButton>
                  </NutrientList>
                ) : (
                  <AddMealButton onClick={() => openModal(meal.title)}>
                    <PlusIcon />
                    Record your meal
                  </AddMealButton>
                )}
              </DiaryBlockItem>
            ))}
        </DiaryBlockList>
        {isModalOpen && (
          <RecordDiaryModal onClose={closeModal} selectedMeal={selectedMeal} />
        )}
      </DiaryBlockContainer>
    </>
  );
};

export default DiaryBlock;

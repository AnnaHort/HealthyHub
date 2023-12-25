import React, { useState } from 'react';
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

const DiaryBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
   const [selectedMeal, setSelectedMeal] = useState({});


  const openModal = (mealTitle, mealImage) => {
    setIsModalOpen(true);
    setSelectedMeal({ title: mealTitle, image: mealImage });
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  // Ваш код компонента DiaryBlock

  const meals = [
    {
      title: 'Breakfast',
      nutrients: {
        carbohydrates: 20,
        protein: 10,
        fat: 5,
      },
      image: <BreakfastImg />,
    },
    {
      title: 'Lunch',
      nutrients: {
        carbohydrates: 30,
        protein: 15,
        fat: 8,
      },
      image: <LunchImg />,
    },
    {
      title: 'Dinner',
      nutrients: {
        carbohydrates: '',
        protein: '',
        fat: '',
      },
      image: <DinnerImg />,
    },
    {
      title: 'Snack',
      nutrients: {
        carbohydrates: '',
        protein: '',
        fat: '',
      },
      image: <SnackImg />,
    },
  ];

  return (
    <DiaryBlockContainer>
      <DiaryBlockTitleWrapper>
        <DiaryBlockTitle>Diary</DiaryBlockTitle>
        <SeeMoreButton to="/diary">See more</SeeMoreButton>
      </DiaryBlockTitleWrapper>

      <DiaryBlockList>
        {meals.map((meal, index) => (
          <DiaryBlockItem key={index}>
            <MealTitleWrapper>
              {meal.image}
              <MealTitle>{meal.title}</MealTitle>
            </MealTitleWrapper>
            {meal.nutrients.carbohydrates !== '' ||
            meal.nutrients.protein !== '' ||
            meal.nutrients.fat !== '' ? (
              <NutrientList>
                {meal.nutrients.carbohydrates !== '' && (
                  <NutrientItem>
                    <NutrientName>Carbohydrates:</NutrientName>
                    <NutrientValue>
                      {meal.nutrients.carbohydrates}
                    </NutrientValue>
                  </NutrientItem>
                )}
                {meal.nutrients.protein !== '' && (
                  <NutrientItem>
                    <NutrientName>Protein:</NutrientName>
                    <NutrientValue>{meal.nutrients.protein}</NutrientValue>
                  </NutrientItem>
                )}
                {meal.nutrients.fat !== '' && (
                  <NutrientItem>
                    <NutrientName>Fat:</NutrientName>
                    <NutrientValue>{meal.nutrients.fat}</NutrientValue>
                  </NutrientItem>
                )}
                <DeleteButton>
                  <BasketIcon />
                </DeleteButton>
              </NutrientList>
            ) : (
              <AddMealButton onClick={() => openModal(meal.title, meal.image)}>
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
  );
};

export default DiaryBlock;

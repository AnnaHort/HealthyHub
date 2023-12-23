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
} from './DiaryBlock.styled';

import { ReactComponent as BreakfastImg } from '../../../img/Diary/breakfast.svg';
import { ReactComponent as LunchImg } from '../../../img/Diary/lunch.svg';
import { ReactComponent as DinnerImg } from '../../../img/Diary/dinner.svg';
import { ReactComponent as SnackImg } from '../../../img/Diary/snack.svg';
import { ReactComponent as PlusIcon } from '../../../img/Diary/plus.svg';

const DiaryBlock = () => {
  const meals = [
    {
      title: 'Breakfast',
      nutrients: {
        carbohydrates: 20,
        protein: 10,
        fat: 5,
      },
    },
    {
      title: 'Lunch',
      nutrients: {
        carbohydrates: 30,
        protein: 15,
        fat: 8,
      },
    },
    {
      title: 'Dinner',
      nutrients: {
        carbohydrates: 25,
        protein: 12,
        fat: 6,
      },
    },
    {
      title: 'Snack',
      nutrients: {
        carbohydrates: 10,
        protein: 5,
        fat: 2,
      },
    },
  ];

  return (
    <DiaryBlockContainer>
      <DiaryBlockTitleWrapper>
        <DiaryBlockTitle>Diary</DiaryBlockTitle>
        <SeeMoreButton to="/main/diary">See more</SeeMoreButton>
      </DiaryBlockTitleWrapper>

      <DiaryBlockList>
        {meals.map((meal, index) => (
          <DiaryBlockItem key={index}>
            <MealTitleWrapper>
              {(() => {
                switch (meal.title) {
                  case 'Breakfast':
                    return <BreakfastImg />;
                  case 'Lunch':
                    return <LunchImg />;
                  case 'Dinner':
                    return <DinnerImg />;
                  case 'Snack':
                    return <SnackImg />;
                  default:
                    return null;
                }
              })()}
              <MealTitle>{meal.title}</MealTitle>
            </MealTitleWrapper>
            <NutrientList>
              <NutrientItem>
                <NutrientName>Carbohydrates:</NutrientName>
                <NutrientValue>{meal.nutrients.carbohydrates}</NutrientValue>
              </NutrientItem>
              <NutrientItem>
                <NutrientName>Protein:</NutrientName>
                <NutrientValue>{meal.nutrients.protein}</NutrientValue>
              </NutrientItem>
              <NutrientItem>
                <NutrientName>Fat:</NutrientName>
                <NutrientValue>{meal.nutrients.fat}</NutrientValue>
              </NutrientItem>
            </NutrientList>
            <AddMealButton>
              <PlusIcon />
              Record your meal
            </AddMealButton>
          </DiaryBlockItem>
        ))}
      </DiaryBlockList>
    </DiaryBlockContainer>
  );
};

export default DiaryBlock;

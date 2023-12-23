import {
  DiaryBlockContainer,
  TitleWrapper,
  DiaryBlockTitle,
  SeeMoreButton,
  DiaryBlockList,
  DiaryBlockItem,
  MealTitle,
  NutrientList,
  NutrientItem,
  AddMealButton,
} from './DiaryBlock.styled';

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
      <TitleWrapper>
        <DiaryBlockTitle>Diary</DiaryBlockTitle>
      <SeeMoreButton to="/main/diary">See more</SeeMoreButton>
      </TitleWrapper>
      
       <DiaryBlockList>
        {meals.map((meal, index) => (
          <DiaryBlockItem key={index}>
            <MealTitle>{meal.title}</MealTitle>
            <img src={`path/to/${meal.title.toLowerCase()}.svg`} alt={meal.title} />
            <NutrientList>
              <NutrientItem>Carbohydrates: + {meal.nutrients.carbohydrates}</NutrientItem>
              <NutrientItem>Protein: + {meal.nutrients.protein}</NutrientItem>
              <NutrientItem>Fat: + {meal.nutrients.fat}</NutrientItem>
            </NutrientList>
            <AddMealButton>Record your meal</AddMealButton>
          </DiaryBlockItem>
        ))}
      </DiaryBlockList>
    </DiaryBlockContainer>
  );
};
  

export default DiaryBlock;

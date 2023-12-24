import { useDispatch, useSelector } from 'react-redux';
import {
    StyledListFood,
StyledList,
    TitleListRecommendedFood,
  WrappContainer,
  NameDesc,
  GramsDesc,
  CaloriesDesc,
} from './listRecommendedFoodPage.styled';
import { listRecommendedFoodPage } from '../../../redux/recommendedFood/operation';
import { useEffect } from 'react';
import {
  getRecommendedFood,
  getErrorRecommendedFood,
  getIsLoadingRecommendedFood,
} from '../../../redux/recommendedFood/selector';
import { nanoid } from '@reduxjs/toolkit';

const ListRecommendedFoodPage = () => {
  const dispatch = useDispatch();
  const recommendedFood = useSelector(getRecommendedFood);
  const error = useSelector(getErrorRecommendedFood);
  const isLoading = useSelector(getIsLoadingRecommendedFood);

  useEffect(() => {
    dispatch(listRecommendedFoodPage());
  }, [dispatch]);

  const selectListRecommendedFood = () => {
    console.log('recommendedFood:', recommendedFood);
    if (recommendedFood === undefined) {
      return null;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error.errorMessage}</p>;
    }

    // Проверяем есть ли recommendedFood не пустим массивом
    if (!Array.isArray(recommendedFood) || recommendedFood.length === 0) {
      return <p>No data available.</p>;
    }

    return recommendedFood.map((foodItem) => (
      <StyledList key={nanoid()}>
        <img
          src={foodItem.img}
          alt={foodItem.name}
          width="46px"
          height="46px"
        />
        <WrappContainer>
          <NameDesc>{foodItem.name}</NameDesc>
          <GramsDesc>{foodItem.amount}</GramsDesc>
          <CaloriesDesc>{foodItem.calories} calories</CaloriesDesc>
        </WrappContainer>
      </StyledList>
    ));
  };

  return (
    <div>
      <TitleListRecommendedFood>List RecommendedFood</TitleListRecommendedFood>
      <div>
        <StyledListFood>{selectListRecommendedFood()}</StyledListFood>
      </div>
    </div>
  );
};

export default ListRecommendedFoodPage;

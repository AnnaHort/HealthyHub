import ListRecommendedFoodPage from "./ListRecommendedFoodPage/listRecommendedFoodPage";
import PhotoRecommendedFoodPage from "./photoRecommendedFoodPage";
import styled from "styled-components";

const RecommendedFoodContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    gap: 44px;
    flex-direction: row;
  }
`;

const TitleRecommendedFood = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-primary-white);
  margin: 16px 0;

  @media (min-width: 834px){
    margin: 24px 0 20px 0;
  }
`;
const RecommendedFoodPage = () => {
  return (
    <div>
      <TitleRecommendedFood>Recommented food</TitleRecommendedFood>
      <RecommendedFoodContainer>
        <PhotoRecommendedFoodPage />
        <ListRecommendedFoodPage />
      </RecommendedFoodContainer>
    </div>
  );
}

export default RecommendedFoodPage;